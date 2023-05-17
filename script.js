//lorem ipsum
//how to write a code editor

const words = [
  "a",
  "about",
  "all",
  "also",
  "and",
  "as",
  "at",
  "be",
  "because",
  "but",
  "by",
  "can",
  "come",
  "could",
  "day",
  "do",
  "even",
  "find",
  "first",
  "for",
  "from",
  "get",
  "give",
  "go",
  "have",
  "he",
  "her",
  "here",
  "him",
  "his",
  "how",
  "I",
  "if",
  "in",
  "into",
  "it",
  "its",
  "just",
  "know",
  "like",
  "look",
  "make",
  "man",
  "many",
  "me",
  "more",
  "my",
  "new",
  "no",
  "not",
  "now",
  "of",
  "on",
  "one",
  "only",
  "or",
  "other",
  "our",
  "out",
  "people",
  "say",
  "see",
  "she",
  "so",
  "some",
  "take",
  "tell",
  "than",
  "that",
  "the",
  "their",
  "them",
  "then",
  "there",
  "these",
  "they",
  "thing",
  "think",
  "this",
  "those",
  "time",
  "to",
  "two",
  "up",
  "use",
  "very",
  "want",
  "way",
  "we",
  "well",
  "what",
  "when",
  "which",
  "who",
  "will",
  "with",
  "would",
  "year",
  "you",
  "your",
];

const randomText = document.querySelector(".randomText");
const btn = document.querySelector(".loremBtn");
const input = document.querySelector(".text");
// console.log(input.value);

// btn.addEventListener("click", (num) => {
//   num = input.value;
//   lorem(num);
// });

let randomWord = words[Math.floor(Math.random() * 100)]; //words.length = 100

const lorem = (length) => {
  let paragraph = [];
  for (let i = length; i > 0; i--) {
    paragraph.push(randomWord);
    randomWord = words[Math.floor(Math.random() * 100)];
  }
  randomText.textContent = paragraph.join(" ");
};

btn.addEventListener("click", (num) => {
  num = input.value;
  lorem(num);
});
