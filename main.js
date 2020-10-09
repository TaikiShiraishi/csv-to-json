const fs = require('fs');
const parseSync = require('csv-parse/lib/sync');

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
  const csv = fs.readFileSync('./item.csv', 'utf-8');
  return parseSync(csv, parseOptions);
}

fs.writeFileSync('preferences.json', JSON.stringify(preferences()));
