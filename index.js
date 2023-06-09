/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { writeFile } from "node:fs";
import inquirer from "inquirer";

inquirer
  .prompt([{ message: "type url", name: "URL" }])
  .then((answers) => {
    const aURL = answers.URL;
    writeFile("message.txt", aURL, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
