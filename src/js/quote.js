$(document).ready(function() {

    function getQuote() {
      var quotes=[{
      quote: "It’s easier to fool people...than to convince them they have been fooled.",
        name: "Mark Twain"
      }, {
        quote: "There are two ways to be fooled. One is to believe what isn’t true; the other is to refuse to believe what is true.",
        name: "Soren Kierkegaard"
      }, {
        quote: "It is dangerous to let the public behind the scenes. They are easily disillusioned and then they are angry with you, for it was the illusion they loved.",
        name: "W. Somerset Maugham"
      }, {
        quote: "I believe that if life gives you lemons, you should make lemonade...And try to find somebody whose life has given them vodka, and have a party.",
        name: "Ron White"
      }, {
        quote: "If you wish for you and your family to have a happy, healthy, long life, then ignore conventional wisdom.",
        name: "Anonymous"
      }, {
        quote: "I have nightmares that I'm going to wake up, and everyone's driving a Prius and living in a condo, and we're all getting health insurance.",
        name: "Kid Rock"
      }, {
        quote: "Straight men just can't imagine the bliss of being in a relationship with someone who finds farting as funny as they do.",
        name: "Graham Norton"
      }, {
        quote: "Don't have a cow, man.",
        name: "Bart Simpson"
      }, {
        quote: "He or she who gets hired is not necessarily the one who can do that job best; but, the one who knows the most about how to get hired.",
        name: "Richard Lathrop"
      }, {
        quote: "Did you know babies are nauseated by the smell of a clean shirt?",
        name: "Jeff Foxworthy"
      }, {
        quote: "If your working television sits on top of your non-working television, you might be a redneck.",
        name: "Jeff Foxworthy"
      }, {
        quote: "The past is a great place and I don't want to erase it or to regret it, but I don't want to be its prisoner either.",
        name: "Mick Jagger"
      }, {
        quote: "What we achieve inwardly will change outer reality.",
        name: "Plutarch"
      }, {
        quote: "The best remedy for those who are afraid, lonely or unhappy is to go outside, somewhere where they can be quiet, alone with the heavens, nature and God. Because only then does one feel that all is as it should be.",
        name: "Anne Frank"
      }, {
        quote: "Logic will get you from A to B. Imagination will take you everywhere.",
        name: "Albert Einstein"
      }, {
        quote: "You teach, you teach, you teach.",
        name: "Weston A. Price"
      }, {
        quote: "No one wants to quit when he's losing and no one wants to quit when he's winning.",
        name: "Richard Petty"
      }, {
        quote: "Get your facts first, then you can distort them as you please.",
        name: "Mark Twain"
      }, {
        quote: "Governing a great nation is like cooking a small fish - too much handling will spoil it.",
        name: "Lao Tzu"
      }, {
        quote: "Don't sweat the petty things and don't pet the sweaty things.",
        name: "George Carlin"
      }, {
        quote: "If people let government decide what foods they eat and what medicines they take, their bodies will soon be in as sorry a state as are the souls of those who live under tyranny.",
        name: "Thomas Jefferson"
      }, ];
        
        var sourceLength = quotes.length;
        var randomNumber = Math.floor(Math.random() * sourceLength);
    
        for (var i=0; i<=sourceLength; i++) {
          var newQuoteText = quotes[randomNumber].quote;
          var newQuoteName = quotes[randomNumber].name;
        }
        
        var timeAnimation = 500;
        var quoteContainer = $("#quoteContainer");
          quoteContainer.fadeOut(timeAnimation, function() {
            quoteContainer.html('');
            quoteContainer.append('<p>' + newQuoteText + '</p>' + '<p id="quoteName">' + '-	' + newQuoteName + '</p>');
            quoteContainer.fadeIn(timeAnimation);
          }); //end of fadeOut
        } //end of getQuote
    getQuote();
      
    $("#quoteButton").click(getQuote);
    
    }); //end of document.ready