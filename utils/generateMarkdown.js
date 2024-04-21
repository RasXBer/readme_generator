// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === "none") {
    return ""; // Return empty string if no license or 'none' is specified
  } else if (license === "MIT") {
    // Return the badge URL for the MIT license from GitHub
    return "[![License: MIT](https://img.shields.io/github/license/microsoft/vscode)](https://opensource.org/licenses/MIT)";
  } else if (license === "github") {
    // Return the badge URL for the GitHub repository license
    return "[![License](https://img.shields.io/github/license/RaxBer/readme_generator)](LICENSE)";
    // Replace 'username' and 'repository' with your GitHub username and repository name respectively
  }
  
}

// Example usage:
const licenseType = "MIT"; 
const badge = renderLicenseBadge(licenseType);
console.log(badge); 

  // if (license === "none") {
  
  //   return " ";
  // }
  
// }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   // Define license links for different license types
   const licenseLinks = {
    "MIT": "https://opensource.org/license/MIT",

    "github": "https://img.shields.io/github/license/RaxBer/readme_generator)](LICENSE)",
   
    };

  // If no license or 'none' is specified, return an empty string
  if (!license || license === "none") {
    return "";
  }

  // If the license type is recognized, return the corresponding license link
  return licenseLinks[license] || ""; // Return empty string if license type is not recognized
}

// Example usage:
// const licenseType = "MIT"; // Change this to the desired license type
// const licenseLink = renderLicenseLink(licenseType);
// console.log(licenseLink); // Output: "https://opensource.org/licenses/MIT"


//   if (license !== "none") {
//     return '\n'
//   }
//   return "";
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  
   const licenseSections = {
    "MIT": `
## License

This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) page for details.
`,

"github": `
## License

This project is licensed under the github - see the [LICENSE](https://img.shields.io/github/license/RaxBer/readme_generator)](LICENSE)) page for details.
`,
   
  };

  // If no license or 'none' is specified, return an empty string
  if (!license || license === "none") {
    return "";
  }

  // If the license type is recognized, return the corresponding license section
  return licenseSections[license] || ""; // Return empty string if license type is not recognized
}

// Example usage:
// const licenseType = "MIT"; // Change this to the desired license type
// const licenseSection = renderLicenseSection(licenseType);
// console.log(licenseSection); // Output: License section content for the MIT license



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;

// Render the license badge
const licenseBadge = renderLicenseBadge(license);
  
// Render the license link
const licenseLink = renderLicenseLink(license);


  return `# ${data.title}
by ${data.name}


# Description
## ${data.description}

# Code
\`\`\`
${data.code}
\`\`\

## License

This project is licensed under the [MIT License](LICENSE).

${licenseBadge} // Render the license badge

${licenseLink} // Render the license link

`;
}

module.exports = generateMarkdown;
