class spike{
  constructor(x){
    this.spike = createSprite(x, 500, 30, 30);
    this.spike.addImage(spikeImg);
    this.spike.scale = 0.5;
  };
  move(){
    var i;
    this.spike.velocityX = -1;
    i = 0 - keyDown(RIGHT_ARROW);
    this.spike.position.x += i*10;
    this.edges = createEdgeSprites();
    this.spike.collide(this.edges[3]);
    this.spike.velocityY = 10;
  }
  checkDeath(){
    if (this.spike.isTouching(cat)){
      ded.play()
      cat.image(dedImg);//this is an error, causing the game to stop.
    }
  }
  
}