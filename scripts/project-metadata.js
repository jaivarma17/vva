const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const vm = require("node:vm");

const projectSource = fs.readFileSync("scripts/projects.js", "utf8")
  .split("if (window.pptProjectData) {")[0];
const projectContext = {};
vm.runInNewContext(projectSource + ";globalThis.__projects = projects;", projectContext);

function readProjectData(source) {
  const context = { window: {} };
  vm.runInNewContext(source.replace(/^\uFEFF/, ""), context);
  return context.window.pptProjectData;
}

let data;
try {
  data = readProjectData(fs.readFileSync("scripts/ppt-project-data.js", "utf8"));
  if (!Array.isArray(data.order) || !data.order.every((id) => typeof id === "string")) {
    throw new Error("Project order is incomplete");
  }
} catch {
  const committedData = execFileSync(
    "git",
    ["show", "HEAD:scripts/ppt-project-data.js"],
    { encoding: "utf8" },
  );
  data = readProjectData(committedData);
}

process.stdout.write(JSON.stringify({
  projects: projectContext.__projects.map(({ id, title, location, category, status, services }) =>
    ({ id, title, location, category, status, services })),
  data,
}));
