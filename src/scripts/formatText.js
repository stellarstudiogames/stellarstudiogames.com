"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function formatTextToHTML(text) {
    const lines = text.split("\n");
    let htmlContent = "";
    let isFirstParagraph = true;
    lines.forEach((line) => {
        line = line.trim();
        if (line.length > 0) {
            if (isFirstParagraph) {
                htmlContent += `<h1>${line}</h1>\n`;
                isFirstParagraph = false;
            }
            else if (/^\d+\./.test(line)) {
                htmlContent += `<h2>${line}</h2>\n`;
            }
            else if (/\./.test(line)) {
                // Si el párrafo contiene un punto y tiene texto antes del punto
                const indexOfPeriod = line.indexOf(".");
                if (indexOfPeriod !== -1) {
                    const beforePeriod = line.substring(0, indexOfPeriod + 1).trim();
                    const afterPeriod = line.substring(indexOfPeriod + 1).trim();
                    htmlContent += `<p><span class="h3-text">${beforePeriod}</span> ${afterPeriod}</p>\n`;
                }
                else {
                    htmlContent += `<p>${line}</p>\n`;
                }
            }
            else {
                htmlContent += `<p>${line}</p>\n`;
            }
        }
    });
    return htmlContent;
}
function convertFiles(inputDir, outputDir) {
    fs_1.default.readdir(inputDir, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${inputDir}:`, err);
            return;
        }
        files.forEach((file) => {
            const inputFile = path_1.default.join(inputDir, file);
            const outputFile = path_1.default.join(outputDir, file.replace(".txt", ".html"));
            fs_1.default.readFile(inputFile, "utf8", (err, data) => {
                if (err) {
                    console.error(`Error reading file ${inputFile}:`, err);
                    return;
                }
                const htmlContent = formatTextToHTML(data);
                fs_1.default.writeFile(outputFile, htmlContent, (err) => {
                    if (err) {
                        console.error(`Error writing file ${outputFile}:`, err);
                    }
                    else {
                        console.log(`File ${outputFile} created successfully.`);
                    }
                });
            });
        });
    });
}
const pathRoot = process.cwd();
const privacyPolicyInputDir = path_1.default.join(pathRoot, "/private/policy/privacyPolicy/");
const termsOfServicesInputDir = path_1.default.join(pathRoot, "/private/policy/termsOfServices/");
const privacyPolicyOutputDir = path_1.default.join(pathRoot, "/policy/privacyPolicy/");
const termsOfServicesOutputDir = path_1.default.join(pathRoot, "/policy/termsOfServices/");
fs_1.default.mkdirSync(privacyPolicyOutputDir, { recursive: true });
fs_1.default.mkdirSync(termsOfServicesOutputDir, { recursive: true });
convertFiles(privacyPolicyInputDir, privacyPolicyOutputDir);
convertFiles(termsOfServicesInputDir, termsOfServicesOutputDir);
