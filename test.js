const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
try {
// Set the input variables (if any)
core.getInput('myInputVariable');

// Execute the steps of our workflow
await exec.exec('echo', ['Hello, World!']);
// Add more steps as necessary

// Set the output variables (if any)
// Set the output variables (if any)
core.setOutput('myOutputVariable', 'Hello from local testing!');
} catch (error) {
core.setFailed(error.message);
}
}

run();