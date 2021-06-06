/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== '');
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let markovChain = {};

    this.words.forEach((word, index) => {
      if (!markovChain[word]) {
        markovChain[word] = [];
      }
      markovChain[word].push(
        word in markovChain ? this.words[index + 1] || null : null
      );
    });

    this.chains = markovChain;
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Object.keys(this.chains);
    let key = keys[Math.floor(Math.random() * keys.length)];
    let output = [];

    while (output.length < numWords && key !== null) {
      output.push(key);
      key =
        this.chains[key][Math.floor(Math.random() * this.chains[key].length)];
    }
    return output.join(' ');
  }
}



module.exports = {
  MarkovMachine,
};
