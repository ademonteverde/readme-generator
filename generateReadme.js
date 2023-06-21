function generateReadme(data) {
    return `

# ${data.title}
${data.getLicense}

${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contribution}
## Tests
${data.instructions}
## License
${data.license}
## Questions
* GitHub: https://github.com/${data.username}
* Contact email: ${data.email}
`
}

module.exports = generateReadme