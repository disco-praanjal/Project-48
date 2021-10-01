  function showMoneyBar() {
    //to show a bar that displays amount of money you have in the game
    push();
    image(moneyImg, width/12-100, height/4-200, 80, 80);
    fill("white");
    rect(width/12-20, height/4-180, 180, 20);
    fill("yellow");
    rect(width/12-20, height/4-180, moneyEarned, 20);
    noStroke();
    pop();
  }
  
  function showSeedBagBar() {
    //to show a bar that displays amount of seeds/seed bags you have in the game
    push();
    image(seedsImg, width/12-100, height/4-120, 70, 70);
    fill("white");
    rect(width/12-20, height/4-100, 180, 20);
    fill("lightgreen");
    rect(width/12-20, height/4-100, seedBought, 20);
    noStroke();
    pop();
  }

  function showSwalBuy() {
    swal({
      text: "You are going to spend 30. Are you sure you want to buy a seed ?",
      imageUrl:
        "images/seed.png",
      imageSize: "100x100",
      confirmButtonText: "Yes"
    });
  }

  



 