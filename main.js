const fs = require('fs');
const parseSync = require('csv-parse/lib/sync');
const path = require('path');

const parseOptions = {
  bom: true,
  columns: true,
  cast(value, context) {
    if (/\(s\)/.test(context.column)) {
      return String(value);
    }
    if (/^[-0-9.]+$/.test(value)) {
      return Number(value);
    }
    return value;
  },
};

function preferences() {
  const sizesCsv = fs.readFileSync('./item.csv', 'utf-8');
  return parseSync(sizesCsv, parseOptions);
}

fs.writeFileSync('preferences.json', JSON.stringify(preferences()));
