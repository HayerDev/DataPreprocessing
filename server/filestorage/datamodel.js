const fs = require('fs').promises;
const path = require('path');

const Data = {
    async saveFile(file, filename) {
        try {
            const filePath = path.join(__dirname, `../data/${filename}`);
            await fs.writeFile(filePath, file.buffer);
            return true;
        } catch (error) {
            console.error("Error saving file:", error);
            return false;
        }
    },
};

module.exports = Data;
