import "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";

$(document).ready(function(){ //aanmaken functie, animeren van div element
    

    $(".start").click(function(){ //start button
      herhaal();
      herhaal2();
    });
  
    $(".stop").click(eind) //stop button werkt niet altijd met 2de rij
    
  });
  
  //ANIMATIE VOOR ITEM (1)
  const herhaal = () => {
      var div = $(".item"); // div element aanmaken om te animeren
      div.animate({height: '300px', opacity: '0.5'}, "normal");  // animaties
      div.animate({width: '300px', opacity: '1.0'}, "normal");
      div.animate({height: '200px', opacity: '0.2'}, "normal");
      div.animate({width: '200px', opacity: '0.9'}, "normal");
      div.animate({height: '40px', opacity: '0.2'}, "normal");
      div.animate({width: '200px', opacity: '0.9'}, "normal");
      div.animate({height: '40px'}, "slow", "swing", () =>{
          setTimeout(herhaal, 2000); // wacht 2 sec voordat de functie zich herhaalt
      });
  }
  
    // ANIMATIE VOOR ITEM 2 (2)
    const herhaal2 = () => {
      var item = $(".a2"); // div element aanmaken om te animeren
      item.animate({height: '300px', opacity: '0.5'}, "slow");  // animaties
      item.animate({height: '200px', opacity: '0.2'}, "slow");
      item.animate({height: '30px', opacity: '0.2'}, " slow");
      item.animate({height: '200px', opacity: '0.5'}, "slow");  // animaties
      item.animate({height: '40px', opacity: '0.2'}, "slow");
      item.animate({height: '200px', opacity: '0.2'}, " slow");
      item.animate({height: '40px'}, "slow", "swing", () =>{
          setTimeout(herhaal2, 3000); // wacht 2 sec voordat de functie zich herhaalt
      });
  }
  
  
  
  
  const eind = () => { // stop functie aanmaken
      
      $("div").stop(true);
  }
  