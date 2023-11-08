const fs = require('fs');
const path = require('path');

if (process.argv.length !== 4) {
  console.error('Cannot read directory');
  process.exit();
}

const sourcePath = process.argv[2];
const destPath = process.argv[3];
const regex = /\.pdf$/i; // Regular expression to match PDF files

fs.readdir(sourcePath, (err, files) => {
  if (err) {
    console.error("Could not open directory: ", err);
    process.exit();
  }

  const filteredFiles = files.filter((file) => regex.test(file));

  filteredFiles.forEach((file) => {
    const sourceFilePath = path.join(sourcePath, file);
    const destFilePath = path.join(destPath, file);

    fs.copyFile(sourceFilePath, destFilePath, (err) => {
      if (err) {
        console.error('Error copying file: ', err);
      } else {
        console.log(`Copied file: ${file}`);
      }
    });
  });
});