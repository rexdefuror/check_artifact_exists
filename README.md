[![Build](https://github.com/rexdefuror/check_artifact_exists/actions/workflows/pipeline.yml/badge.svg)](https://github.com/rexdefuror/check_artifact_exists/actions/workflows/pipeline.yml/badge.svg)

## Description

This is a simple Github action that checks if an artifact exists in a repository. It sets an environment variable `ARTIFACT_EXISTS` to `true` or `false` depending on the result.


## Example Usage

```yaml
- name: Package.json info
  uses: rexdefuror/check_artifact_exists@v1.0.1
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    owner: 'repository_owner_username'
    repo: 'repository_name'
    name: 'artifact_name' ## without extension

- run: echo "exists - ${{ env.ARTIFACT_EXISTS }}"
```

## Inputs

### `file`

**Optional** The name of the file to read. Default `"package.json"`.

### `path`

**Optional** The path to the file. Default `"./"`.