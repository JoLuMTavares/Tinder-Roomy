$(document).ready(function() {
  console.log("ready");
});

let cardIndex = 0;
let cards = [
  {
    name: "Peter",
    description:
      "I amm a total mess person 24/7 party. Cleaning isnt my thing but always up for a good drink!",
    img: "peter_messyguy.jpg"
  },
  { name: "Susi", description: "some messy girl", img: "susi_party.jpg" },
  { name: "Max", description: "some nerdy guy", img: "max_streber.jpg" }
];

$(".cards").on("click", ".btn-nope", function() {
  $(".matching-card").animate(
    {
      marginLeft: "-=300px",
      opacity: "0.0",
      height: "0px",
      width: "0px"
    },
    400,
    function() {
      loadCard(nextCard());
    }
  );
});

$(".cards").on("click", ".btn-yep", function() {
  $(".matching-card").animate(
    {
      marginLeft: "+=500px",
      opacity: "0.0",
      height: "0px",
      width: "0px"
    },
    400,
    function() {
      loadCard(nextCard());
    }
  );
});

function nextCard() {
  if (cardIndex === cards.length - 1) {
    cardIndex = 0;
    return 0;
  }
  cardIndex++;
  return cardIndex;
}

function loadCard(index) {
  $(".cards").empty();
  $(".cards").append(`
        <div class="matching-card">
        <div class="matching-image">
            <img src="images/${
              cards[index].img
            }" alt="peter_messyguy" width="100%" height="auto">
        </div>
    
        <div class="matching-description">
            <h3>${cards[index].name}</h3>
            <p>${cards[index].description}
            </p>  
            <div class="accept-deny">
                <a class="deny-button btn-nope" href="#"><i class="fa fa-times-circle"></i></a>
                <a class="accept-button btn-yep" href="#" ><i class="fa fa-check-circle"></i></a>
            </div>
        </div>
        </div>
    `);
}

loadCard(0);
