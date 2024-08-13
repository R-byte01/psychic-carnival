function renderLicenseBadge(license) {
  if (license !== "none") {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  else {
    return '';
  }
}
function renderLicenseLink(license) {
  if (license !== "none") {
    return '- [License](#License)'
  }
  else {
    return '';
  }
}
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    
   This content is licensed under the ${license} license.`;
  } else {
    return '';
  }
}
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  
  ## Installation
  
  Use the following steps to install:
  \n${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contribution
  
  ${data.contribution}
  
  ## Tests
  ${data.testInfo}
  
  ## Questions
  
  For additional information please contact at:
  \nGitHub: [${data.gitHub}](https://github.com/${data.gitHub})\n
  email: ${data.email}
  `;
}

export default generateMarkdown;
