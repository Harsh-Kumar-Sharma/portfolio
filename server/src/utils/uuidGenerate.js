const { v4: uuidv4 } = require('uuid');

function generateComplexId() {
    const baseId = uuidv4();
    // const timestamp = Date.now().toString(36);
    return `${baseId}`;
}

module.exports = {
    generateComplexId
}

