frameRate(100);
size(1000,1000);
background(255,255,255);


fill(0,0,0);

const numOfRows = 50;
const numOfColumns = numOfRows;
const cellWidth = width/numOfColumns;
const cellHeight = height/numOfRows;

var cell = [];

function Cell(x,y) {
    this.xPos = x*cellWidth;
    this.yPos = y*cellHeight;
    this.alive = false;
    this.survive = false;
    this.deadNeighbours = [ [x-1,y-1], [x-1,y], [x-1,y+1], [x,y-1], [x,y+1], [x+1,y-1], [x+1,y], [x+1,y+1]];
    this.liveNeighbours = [];
    
    this.update = function() {
        //Check if any of the 'dead neighbours' are actually alive
        var i = 0;
        while (i < this.deadNeighbours.length) {
            if (this.deadNeighbours[i][0] > -1 &&
                this.deadNeighbours[i][0] < numOfColumns &&
                this.deadNeighbours[i][1] > -1 &&
                this.deadNeighbours[i][1] < numOfRows) {  //Only check a reference if it makes sense. This means border cells are checking < 8 cells because they have < 8 neighbours. This is an unfornate workaround to not having an infinite plane. I think this will change the behaviour at the edges, perhaps drastically
                if (cell[this.deadNeighbours[i][0]][this.deadNeighbours[i][1]].alive) {
                    this.liveNeighbours.push(this.deadNeighbours.splice(i,1)[0]); //This action reduces the number of elements in this.deadNeighbours, so no need to i++ as the current value of i will be the index of the next element to be checked.
                } else {
                    i++; //If you haven't found an alive cell, go on to the next
                }
            } else {
                i++; //If you've found a cell that doesn't exist, go on to the next
            }
        }
       
        //Check if any of the 'live neighbours' are actually dead
        i = 0;
        while (i < this.liveNeighbours.length) {
            if (this.liveNeighbours[i][0] > -1 &&
                this.liveNeighbours[i][0] < numOfColumns &&
                this.liveNeighbours[i][1] > -1 &&
                this.liveNeighbours[i][1] < numOfRows) {
                if (cell[this.liveNeighbours[i][0]][this.liveNeighbours[i][1]].alive === false) {
                    this.deadNeighbours.push(this.liveNeighbours.splice(i,1)[0]);
                } else {
                    i++;
                }
            } else {
                i++;
            }
        }

        //Decide if this cell will survive to the next generation
    
        if (this.alive && (this.liveNeighbours.length < 2 || this.liveNeighbours.length > 3)) {
            this.survive = false;
        } else if (this.alive) {
            this.survive = true;
        } else if (this.alive === false && this.liveNeighbours.length === 3) {
            this.survive = true;
        } else {
            this.survive = false;
        }
        
    };
    //Draw the cell
    this.display = function() {
        if (this.alive) {
            fill(0,0,0);
        } else {
            fill(255,255,255);
        }
        rect(this.xPos, this.yPos, cellWidth, cellHeight);
    }
    
};

//create an empty array for each column
let n = 0;
while (n < numOfColumns) {
    cell.push([])
    n ++;
}
//create all cells in each column
let i = 0;
let j = 0;
while (i < numOfColumns) {
    while (j < numOfRows) {
        cell[i].push(new Cell(i,j));
        j ++;
    }
j = 0;
i++;
}

//Initial conditions. Currectly set to stick man
var centerX = Math.floor(numOfColumns/2);
var centerY = Math.floor(numOfRows/2);
cell[centerX][centerY].alive = true;
cell[centerX][centerY-1].alive = true;
cell[centerX][centerY-2].alive = true;
cell[centerX][centerY-3].alive = true;
cell[centerX-1][centerY-4].alive = true;
cell[centerX-1][centerY-5].alive = true;
cell[centerX-1][centerY-6].alive = true;
cell[centerX][centerY-6].alive = true;
cell[centerX+1][centerY-6].alive = true;
cell[centerX+1][centerY-5].alive = true;
cell[centerX+1][centerY-4].alive = true;
cell[centerX+1][centerY-2].alive = true;
cell[centerX+1][centerY+1].alive = true;
cell[centerX+1][centerY+2].alive = true;
cell[centerX+2][centerY-1].alive = true;
cell[centerX+3][centerY].alive = true;
cell[centerX-1][centerY-2].alive = true;
cell[centerX-1][centerY+1].alive = true;
cell[centerX-1][centerY+2].alive = true;
cell[centerX-2][centerY-1].alive = true;
cell[centerX-3][centerY-2].alive = true;

//display all cells
i = 0;
j = 0;
while (i < numOfColumns) {
    while (j < numOfRows) {
        cell[i][j].display();
        j++;
    }
j=0;
i++;
}

var create = true;

void draw() {
    //Allow user to change status of cell on mousePressed
    var cellColumn = Math.floor(mouseX/cellWidth);
    var cellRow = Math.floor(mouseY/cellHeight);
    if (mousePressed == false) {
        create = !cell[cellColumn][cellRow].alive;
    } else {
        cell[cellColumn][cellRow].alive = create;
        cell[cellColumn][cellRow].display();
    }
    
    //Game animation once started
    if (start === true) {
        //Update all cells, deciding whether they should survive or not.
        for (var i = 0; i < cell.length; i++) {
            for (var j = 0; j < cell[i].length; j++) {
                cell[i][j].update();
            }
        }
        //Kill cells which should be dead, resurrect cells which should be alive.
        for (var i = 0; i < cell.length; i++) {
            for (var j = 0; j < cell[i].length; j++) {
                cell[i][j].alive = cell[i][j].survive;
                cell[i][j].display(); 
            }
        }
    }

    //To kill all cells
    if (clear === true) {
        console.log(1);
        for (var i = 0; i < cell.length; i++) {
            for (var j = 0; j < cell[i].length; j++) {
                cell[i][j].alive = false;
                cell[i][j].survive = false;
                cell[i][j].display();
            }
        }
        clear = false;
    }
}
