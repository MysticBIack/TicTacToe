function Table(x,y,w){
    let offsetY=(windowHeight-w*3)/2;
    let offsetX=(windowWidth-w*3)/2;

    this.x=x*w+offsetX;
    this.y=y*w+offsetY;
    this.rangeX=this.x+w;
    this.rangeY=this.y+w;
    this.color=255;
    this.value=null;


    this.show=function(w){

        fill('rgb(172, 154, 135)');
        strokeWeight(2);
        square(this.x,this.y,w);
    }

    this.drawX=function(){
        strokeWeight(10);
        stroke(0);
        line(this.x+w/9, this.y+w/9, this.rangeX-w/9,this.rangeY-w/9);
        line(this.rangeX-w/9, this.y+w/9, this.x+w/9, this.rangeY-w/9);
        this.value="X";
    }

    this.drawO=function(){
        noFill();
        strokeWeight(10);
        stroke(0);
        circle(this.x+w/2,this.y+w/2, w-w/9);
        this.value="O";
    }
}