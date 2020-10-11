const generateTable = templateData => {
    const { username, email, pName, desc, license, install, test, usage, contribution } = templateData;

    if ( install || usage || (license !== 'None') || contribution || test ){
        const contents = [`## Table of Contents<br>`];

        if(install){
            const inst = [`[Installation](#installation)<br>`];
            contents.push(inst);
        }
        if(usage){
            const use = [`[Usage](#usage)<br>`];
            contents.push(use);
        }
        if(license !== 'None'){
            const lic = [`[License](#license)<br>`];
            contents.push(lic);
        }
        if(contribution){
            const con = [`[Contributing](#contributing)<br>`];
            contents.push(con);
        }
        if(test){
            const tes = [`[Tests](#tests)<br>`];
            contents.push(tes);
        }
        const que = [`[Questions](#questions)<br><br>`];
        contents.push(que);

        return contents;
    }
    return [``];
}

const mdContent = templateData => {
    const { username, email, pName, desc, license, install, test, usage, contribution } = templateData;

    if ( install || usage || (license !== 'None') || contribution || test ){
        const contents = [``];

        if(install){
            const inst = [`## Installation:

To install necessary depenecies, run the following command:
            
\`\`\`
${install}
\`\`\`
<br>

`];
            contents.push(inst);
        }
        if(usage){
            const use = [`## Usage:

${usage}
<br><br>
`];
            contents.push(use);
        }
        if(license !== 'None'){
            const lic = [`## License:

This project is licensed under the ${license} license.
<br><br>
`];
            contents.push(lic);
        }
        if(contribution){
            const con = [`## Contributing:

${contribution}
<br><br>
`];
            contents.push(con);
        }
        if(test){
            const tes = [`## Tests:

To run tests, run the following command:
            
\`\`\`
${test}
\`\`\`
<br>
`];
            contents.push(tes);
        }

        return contents;
    }
    return [``];
}

const generateBadge = templateData => {
    const lic = templateData.license
    if(lic !== 'None'){
        return `![GitHub License](https://img.shields.io/badge/license-${lic}-blue.svg)`;
    }
    return ``;
}


module.exports = templateData => {

    const { username, email, pName, desc, } = templateData;
    
    return `
# ${pName}

${generateBadge(templateData)}<br>
## Description:<br>
${desc}<br><br>
${generateTable(templateData).join(``)}
${mdContent(templateData).join(``)}
## Questions:

If you have any questions about the repo, open an issue or contact me directly at ${email}. you can find more of my work at [${username}](https://github.com/${username})
`
}