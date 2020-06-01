const sentence = prompt("Write a sentence (NO PUNCTUATION!):");

console.log(sentence);

const cap = function() {
  return sentence.charAt(0).toUpperCase() + sentence.slice(-1).toUpperCase();
}

const jumble = function() {
  return capped.slice(1) + capped.slice(0,1);
}

const combine = function() {
  return sentence + jumbled;
}

const capped = cap(sentence);

const jumbled = jumble(capped);

const output = combine(jumbled);

alert(output);