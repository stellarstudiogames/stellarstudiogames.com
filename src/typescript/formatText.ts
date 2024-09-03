import path from "path";
import fs from "fs";

function formatTextToHTML(text: string) {
   const lines = text.split("\n");
   let htmlContent = "";
   let isFirstParagraph = true;

   lines.forEach((line: string) => {
      line = line.trim();
      if (line.length > 0) {
         if (isFirstParagraph) {
            htmlContent += `<h1>${line}</h1>\n`;
            isFirstParagraph = false;
         } else if (/^\d+\./.test(line)) {
            htmlContent += `<h2>${line}</h2>\n`;
         } else if (/\./.test(line)) {
            // Si el párrafo contiene un punto y tiene texto antes del punto
            const indexOfPeriod = line.indexOf(".");
            if (indexOfPeriod !== -1) {
               const beforePeriod = line.substring(0, indexOfPeriod + 1).trim();
               const afterPeriod = line.substring(indexOfPeriod + 1).trim();

               htmlContent += `<p><span class="h3-text">${beforePeriod}</span> ${afterPeriod}</p>\n`;
            } else {
               htmlContent += `<p>${line}</p>\n`;
            }
         } else {
            htmlContent += `<p>${line}</p>\n`;
         }
      }
   });

   return htmlContent;
}

function convertFiles(inputDir: string, outputDir: string) {
   fs.readdir(inputDir, (err, files) => {
      if (err) {
         console.error(`Error reading directory ${inputDir}:`, err);
         return;
      }

      files.forEach((file) => {
         const inputFile = path.join(inputDir, file);
         const outputFile = path.join(outputDir, file.replace(".txt", ".html"));

         fs.readFile(inputFile, "utf8", (err, data) => {
            if (err) {
               console.error(`Error reading file ${inputFile}:`, err);
               return;
            }

            const htmlContent = formatTextToHTML(data);

            fs.writeFile(outputFile, htmlContent, (err) => {
               if (err) {
                  console.error(`Error writing file ${outputFile}:`, err);
               } else {
                  console.log(`File ${outputFile} created successfully.`);
               }
            });
         });
      });
   });
}

const pathRoot = process.cwd();

const privacyPolicyInputDir = path.join(
   pathRoot,
   "/private/policy/privacy-policy/"
);
const termsOfServicesInputDir = path.join(
   pathRoot,
   "/private/policy/terms-of-services/"
);
const privacyPolicyOutputDir = path.join(pathRoot, "/policy/privacy-policy/");
const termsOfServicesOutputDir = path.join(
   pathRoot,
   "/policy/terms-of-services/"
);

fs.mkdirSync(privacyPolicyOutputDir, { recursive: true });
fs.mkdirSync(termsOfServicesOutputDir, { recursive: true });

convertFiles(privacyPolicyInputDir, privacyPolicyOutputDir);
convertFiles(termsOfServicesInputDir, termsOfServicesOutputDir);
