class portal{
  constructor(){
    this.portal = createSprite(2500, 500, 30, 30);
    this.portal.addImage(finishImg);
    this.portal.scale = 0.5;
  };
  move(){
    var i;
    this.portal.velocityX = -1;
    i = 0 - keyDown(RIGHT_ARROW);
    this.portal.position.x += i*10;
    this.edges = createEdgeSprites();
    this.portal.collide(this.edges[3]);
    this.portal.velocityY = 10;
  }
  checkFinish(){
    if (this.portal.isTouching(cat)){

    }
  }
}