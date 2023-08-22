import PackageJson from '@npmcli/package-json';

const excludeWorkspaces = [''];

async function getWorkspaces() {
  const rootPackageJson = await PackageJson.load('./');
  const workspaces = [];

  for (const workspace of rootPackageJson.content.workspaces) {
    if (excludeWorkspaces.includes(workspace)) continue;
    workspaces.push(workspace);
  }

  return workspaces;
}

async function getPackageVersions(paths) {
  const versions = {};

  for (const path of paths) {
    const packageJson = await PackageJson.load(path);
    const packageName = packageJson.content.name;
    const version = packageJson.content.version;
    versions[packageName] = version;
  }

  return versions;
}

async function updateDependencies(workspaces, packageVersions) {
  for (const workspace of workspaces) {
    const packageJson = await PackageJson.load(workspace);

    const dependencies = packageJson.content.dependencies;

    for (const packageName in packageVersions) {
    // If the package is a dependency, update to the latest version.
      if (packageName in dependencies) {
        dependencies[packageName] = packageVersions[packageName];
      }
    }

    packageJson.update({ dependencies });
    await packageJson.save();
  }
}

const workspaces = await getWorkspaces();
const packageVersions = await getPackageVersions(workspaces);
await updateDependencies(workspaces, packageVersions);