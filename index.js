/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer() {
  const freelancer = {};
  const randomIndex = Math.floor(Math.random() * NAMES.length);
  freelancer.name = NAMES[randomIndex];
  freelancer.occupation = OCCUPATIONS[randomIndex];
  freelancer.rate = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + PRICE_RANGE.min,
  );
  return freelancer;
}

const freelancerList = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

function avg(array) {
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    avg = avg + array[i].rate;
  }
  avg = avg / array.length;
  return avg;
}

//console.log(avg(freelancerList))
let avgVar = avg(freelancerList);

// * A single card with a quote and its author
// * @param {Quote} quote
// */
// function QuoteCard(quote) {
// const figure = document.createElement("figure");
// figure.className = "quote";
// const blockQuote = document.createElement("blockquote");
// const figCaption = document.createElement("figcaption");
// blockQuote.textContent = quote.sentence;
// figCaption.textContent = quote.author;

function singleFreelancer(freelancer) {
  const figure = document.createElement("figure");
  figure.className = "freelancer";
  const idk = document.createElement("idk");
  const what = document.createElement("what");
  const uh = document.createElement("uh");

  idk.textContent = freelancer.name + " | ";
  what.textContent = freelancer.occupation + " | ";
  uh.textContent = "$" + freelancer.rate + " ";

  figure.append(idk, what, uh);
  return figure;
}

// function QuoteCards(quotes) {
// // TODO
// const article = document.createElement("article");
// article.className = "quotes";
// for (let i = 0; i < quotes.length; i++) {
// article.append(QuoteCard(quotes[i]));
// }
// return article;
// }

function freelancerCards(freelancerList) {
  const article = document.createElement("article");
  article.className = "freelancers";
  for (let i = 0; i < freelancerList.length; i++) {
    article.append(singleFreelancer(freelancerList[i]));
  }
  return article;
}

// // === Render ===
// /*
// * **Rendering** is when we _call_ the component functions. Even though we
// * are building and creating elements in JS, users will not see them until
// * the components are **mounted** onto an existing element in the document.
// */

// function render() {
// const $app = document.querySelector("#app");
// $app.innerHTML = `
// <h1>Inspirational Quotes</h1>
// <QuoteCards></QuoteCards>
// `;
// $app.querySelector("QuoteCards").replaceWith(QuoteCards(quotes));
// }
// render();

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <h2> The average rate is ${avgVar}</h2>
    <freelancerCards></freelancerCards>
    `;
  $app
    .querySelector("freelancerCards")
    .replaceWith(freelancerCards(freelancerList));
}
render();

// Example from guided practice

// /** @returns {Quote} a quote with a random sentence and random author */
// function makeQuote() {
// const rand_num = Math.floor(Math.random() * SENTENCES.length);
// const quote = {};
// quote.sentence = SENTENCES[rand_num];
// quote.author = AUTHORS[rand_num];
// return quote;
// }

// const quotes = Array.from({ length: NUM_QUOTES }, makeQuote); // TODO

// // === Components ===
// /*
// * **Components** are functions that return HTML elements, often based on state.
// * They are the main building blocks of a web application.
// */

// /**
// * A single card with a quote and its author
// * @param {Quote} quote
// */
// function QuoteCard(quote) {
// const figure = document.createElement("figure");
// figure.className = "quote";
// const blockQuote = document.createElement("blockquote");
// const figCaption = document.createElement("figcaption");
// blockQuote.textContent = quote.sentence;
// figCaption.textContent = quote.author;

// figure.append(blockQuote, figCaption);
// return figure;
// }

// /** An article of many QuoteCards
// * @param {Quote[]} quotes
// */
// function QuoteCards(quotes) {
// // TODO
// const article = document.createElement("article");
// article.className = "quotes";
// for (let i = 0; i < quotes.length; i++) {
// article.append(QuoteCard(quotes[i]));
// }
// return article;
// }

// // === Render ===
// /*
// * **Rendering** is when we _call_ the component functions. Even though we
// * are building and creating elements in JS, users will not see them until
// * the components are **mounted** onto an existing element in the document.
// */

// function render() {
// const $app = document.querySelector("#app");
// $app.innerHTML = `
// <h1>Inspirational Quotes</h1>
// <QuoteCards></QuoteCards>
// `;
// $app.querySelector("QuoteCards").replaceWith(QuoteCards(quotes));
// }
// render();
