import { appendFileSync } from 'node:fs';

const projectName = process.env.CLOUDFLARE_PROJECT_NAME || 'kashiteluguguide';
const repository = process.env.GITHUB_REPOSITORY;
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID?.trim();
const token = process.env.CLOUDFLARE_API_TOKEN?.trim();
const marker = 'DEPLOY_SOURCE_REPOSITORY';

async function main() {
  if (!accountId || !token) {
    throw new Error('Add both CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN in GitHub Settings → Secrets and variables → Actions → Repository secrets.');
  }
  if (!/^[a-f0-9]{32}$/i.test(accountId)) {
    throw new Error('CLOUDFLARE_ACCOUNT_ID must contain the 32-character Account ID from Cloudflare, not the account name or email.');
  }
  if (!/^[a-z0-9](?:[a-z0-9-]{0,56}[a-z0-9])?$/.test(projectName)) {
    throw new Error('CLOUDFLARE_PROJECT_NAME must be a valid lowercase Pages project name.');
  }
  if (!repository || !process.env.GITHUB_OUTPUT) {
    throw new Error('Run this script in the GitHub Actions deployment workflow.');
  }

  const base = `https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects`;
  async function request(url, method = 'GET', body) {
    let response;
    try {
      response = await fetch(url, {
        method,
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : undefined,
        redirect: 'error',
        signal: AbortSignal.timeout(45000),
      });
    } catch {
      throw new Error('Cloudflare could not be reached. Retry the deployment.');
    }
    const data = await response.json().catch(() => null);
    if (!response.ok || data?.success !== true) {
      if (method === 'GET' && (response.status === 404 || data?.errors?.some(error => Number(error.code) === 8000007))) return null;
      const codes = (data?.errors || []).map(error => Number(error.code)).filter(Number.isFinite).join(', ');
      throw new Error(`Cloudflare returned HTTP ${response.status}${codes ? ` (error codes: ${codes})` : ''}. Check that the token has Account → Cloudflare Pages → Edit permission for the configured account.`);
    }
    return data.result;
  }

  let project = await request(`${base}/${projectName}`);
  if (!project) {
    const environment = { env_vars: { [marker]: { type: 'plain_text', value: repository } } };
    project = await request(base, 'POST', {
      name: projectName,
      production_branch: 'main',
      deployment_configs: { production: environment, preview: environment },
    });
    console.log('Created Cloudflare Pages project.');
  }

  if (project.deployment_configs?.production?.env_vars?.[marker]?.value !== repository) {
    throw new Error('A Pages project with this name already exists and is not marked as managed by this repository. Choose a different CLOUDFLARE_PROJECT_NAME; it has not been modified.');
  }
  if (project.source || project.production_branch !== 'main') {
    throw new Error('The Pages project must use Direct Upload with main as its production branch. No deployment was made.');
  }
  if (!/^[a-z0-9][a-z0-9.-]*\.pages\.dev$/.test(project.subdomain)) {
    throw new Error('Cloudflare did not return a valid Pages production hostname.');
  }

  const pagesUrl = `https://${project.subdomain}`;
  appendFileSync(process.env.GITHUB_OUTPUT, `project_name=${projectName}\npages_url=${pagesUrl}\n`);
  console.log(`Cloudflare Pages project ready. Production URL: ${pagesUrl}`);
}

main().catch(error => {
  console.error(error.message);
  process.exitCode = 1;
});
