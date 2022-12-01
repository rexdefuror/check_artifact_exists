import { getInput, exportVariable } from '@actions/core';
import { getOctokit } from '@actions/github';

const main = async () => {
    const input = getInput('name');
    const owner = getInput('owner');
    const repo = getInput('repo');
    const token = getInput('token');

    const octokit = getOctokit(token);

    const name = `${input}.zip`;

    const artifact = await octokit.rest.actions.listArtifactsForRepo({
        owner: owner,
        repo: repo,
    });

    const artifactExists = artifact.data.artifacts.some((artifact) => artifact.name === name);
    exportVariable('artifact_exists', artifactExists);
};

main();