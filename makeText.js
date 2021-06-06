/** Command-line tool to generate Markov text. */
const markov = require('./markov');
const fs = require('fs');
const axios = require('axios');
const process = require('process');
const type = process.argv[2];
const content = process.argv[3];

const markovGenerator = (text) => {
  let mm = new markov.MarkovMachine(text);
  console.log(mm.makeText());
};

const makeText = (content) => {
  fs.readFile(content, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      markovGenerator(data);
    }
  });
};

const urlGenerator = async (content) => {
  let res;

  try {
    res = await axios.get(content);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  markovGenerator(res.data);
};

if (type == 'file') {
  console.log('Yes');
  makeText(content);
} else if (type == 'url') {
  urlGenerator(content);
} else {
  console.process.exit(1);
}
