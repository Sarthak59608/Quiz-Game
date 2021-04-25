class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.opinput=createInput('Answer');
    this.submit=createButton('SUBMIT');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Quiz Game");
    title.position(130, 0);

    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });
      if(gameState==1){
       
        this.opinput.position(200,250);
        this.submit.position(200,300);
       this.submit.mousePressed(()=>{
          player.option=this.opinput.value();
          console.log(player.option);
          player.update();
        })
        
      }
   

  }
}
