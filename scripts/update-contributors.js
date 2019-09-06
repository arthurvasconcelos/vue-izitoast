const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const { execSync } = require('child_process');

const readmePath = resolve(__dirname, '../README.md');
const readme = readFileSync(readmePath);
const regex = new RegExp(/(?<=<!-- Contributors start -->)(.*)(?=<!-- Contributors end -->)/, 'gms');
const command = 'npx githubcontrib --owner arthurvasconcelos --repo vue-izitoast --sha master --cols 6 --sortOrder desc --format md --showlogin true';
const stdout = execSync(command);

writeFileSync(readmePath, readme.toString().replace(regex, `\n${ stdout.toString().trim() }\n`));
