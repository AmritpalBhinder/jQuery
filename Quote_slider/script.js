const quotes = [
    {
      text: "Give me blood and I will give you freedom.",
      author: " Subhas Chandra Boser",
      color: "#FF6F61"
    },
    {
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
      color: "#6B5B95"
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
      color: "#88B04B"
    },
    {
      text: "It is better to live like a lion for one day than to live like a jackal for a hundred years.",
      author: "Tipu Sultan",
      color: "#009B77"
    },
    {
        text: "Arise, awake and stop not until the goal is reached.",
        author: "Swami Vivekananda",
        color: "#FF6F61"
      }
  ];

  let index = 0;

  function showQuote() {
    const quote = quotes[index];

    $(".quote-text").fadeOut(function () {
      $(this).text(`"${quote.text}"`).fadeIn();
    });

    $(".quote-author").fadeOut(function () {
      $(this).text(`- ${quote.author}`).fadeIn();
    });

    $(".quote-box").css("background", quote.color);

    // Move to next index
    index = (index + 1) % quotes.length;

    // Recursive setTimeout
    setTimeout(showQuote, 3000);
  }

  // Show the first quote
  showQuote();