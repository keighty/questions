// js codes here
const endpoint = "https://rawgit.com/keighty/2ae5c9e5c325d7f9b8d80425e59520b7/raw/98c0ad24851c64c19280b0f38b47339a999344d9/noun-verbs.json"

const words = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => words.push(...data));

// 1. grab all the data from the page http://www.enchantedlearning.com/wordlist/nounandverb.shtml
// Array.from(document.querySelectorAll('table tr td font')).forEach(function (node) { console.log(node.innerText) })
// 2. save as a text file
// 3. remove all the cruft and spaces
// 4. create a gist on github
// 5. use http://rawgit.com/ to convert your github gist into a json endpoint
// 6. fetch and manipulate at will
