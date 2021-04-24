const grid=Array(3).fill(null).map(()=>Array(3));
let startValue=0;
let p;
let idk="O";
let win=false;

function setup(){
    createCanvas(windowWidth,windowHeight);
    p=createP("Now it's O's turn!");
    p.position(0,0);
    p.style('color', 'white');
    p.style('font-size',`30px`);
    p.style('padding','0');
    p.style('margin','20');
    p.center('horizontal');
    tableGenerator();
    drawTable();
}   

function draw(){
    background(0);
    drawTable();
    mouseClicked();
}

function tableGenerator(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            grid[i][j]=new Table(i,j,windowHeight/4);
        }
    }
}

function drawTable(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            grid[i][j].show(windowHeight/4);
            
        }
    }  
}

function mouseClicked(e){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(((e.x>grid[i][j].x)&&(e.x<grid[i][j].rangeX)) && ((e.y>grid[i][j].y)&&(e.y<grid[i][j].rangeY))) //checking in which square the mouse is
                {
                    if(!grid[i][j].value&&!win){
                        if(startValue%2==0){
                            idk="X";
                            grid[i][j].drawO();
                            p.html(`Now it's ${idk}'s turn!`);
                            checkForWin(i,j);
                        }else{
                            idk="O";
                            grid[i][j].drawX();
                            p.html(`Now it's ${idk}'s turn!`);
                            checkForWin(i,j);
                        }
                        startValue++;
                    }
                }
        }
    }
}

function checkForWin(i,j){
    let w=windowHeight/4;
    if(grid[0][j].value==grid[1][j].value&&grid[1][j].value==grid[2][j].value) {
        stroke('rgb(166, 9, 24)');
        line(grid[0][j].x,grid[0][j].y+w/2,grid[2][j].x+w,grid[2][j].y+w/2);
        winWin(grid[i][j]);
    }
    if(grid[i][0].value==grid[i][1].value&&grid[i][1].value==grid[i][2].value){
        stroke('rgb(166, 9, 24)');
        line(grid[i][0].x+w/2,grid[i][0].y,grid[i][2].x+w/2,grid[i][2].y+w);
        winWin(grid[i][j]);
    }
    if(grid[1][1].value!==null){
        if(grid[0][0].value==grid[1][1].value&&grid[1][1].value==grid[2][2].value) {
            strokeWeight(4)
            stroke('rgb(166, 9, 24)');
            line(grid[0][0].x,grid[0][0].y,grid[2][2].x+w,grid[2][2].y+w);
            winWin(grid[i][j]);
        }
        if(grid[0][2].value==grid[1][1].value&&grid[1][1].value==grid[2][0].value) {
            strokeWeight(4)
            stroke('rgb(166, 9, 24)');
            line(grid[0][2].x,grid[0][2].y+w,grid[2][0].x+w,grid[2][0].y);
            winWin(grid[i][j]);
        }
    }
}

function winWin(d){
    win=true;
    p.html(`${d.value} won!`);
}