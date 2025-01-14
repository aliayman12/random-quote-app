const randomQuote = document.getElementById("quote");
const authorName = document.getElementById("author");

const api_url = "https://dummyjson.com/quotes/random";

async function getQuote(url) {
  try {
    const res = await fetch(url);
    let data = await res.json();
    randomQuote.innerHTML = data.quote;
    authorName.innerHTML = data.author;
  } catch (error) {
    randomQuote.innerHTML = "Failed to load quote.";
  }
}

function tweet() {
  const quote = randomQuote.innerHTML;
  const author = authorName.innerHTML;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${quote} --- by ${author}`;

  window.open(tweetUrl, "Tweet Window", "width=800,height=600");
}
