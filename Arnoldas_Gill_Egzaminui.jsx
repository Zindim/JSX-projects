// Close current project and create a new one
app.project.close(CloseOptions.DO_NOT_SAVE_CHANGES);
app.newProject();

// Composition parameters
var compW = null;
var compH = null;
var compA = 1;
var compD = null;
var compFPS = 25;
var divX = null;
var divY = null;
// Composition width input
while ((compW == null) || isNaN(compW) || (compW % 1 !== 0) || (compW < 4) || (compW > 30000)) {
    compW = prompt("Enter composition width", 1920);
    if ((compW == null) || isNaN(compW) || (compW % 1 !== 0) || (compW < 4) || (compW > 30000)) {
        alert("Please enter an INTEGER in range 4...30000");
    }
}

// Composition height input
while ((compH == null) || isNaN(compH) || (compH % 1 !== 0) || (compH < 4) || (compH > 30000)) {
    compH = prompt("Enter composition height", 1080);
    if ((compH == null) || isNaN(compH) || (compH % 1 !== 0) || (compH < 4) || (compH > 30000)) {
        alert("Please enter an INTEGER in range 4...30000");
    }
}

// Composition duration input
while ((compD == null) || isNaN(compD) || (compD < 0.1) || (compD > 10800.0)) {
    compD = prompt("Enter composition duration", 30);
    if ((compD == null) || isNaN(compD) || (compD < 0.1) || (compD > 10800.0)) {
        alert("Please enter a number in range 0.1...10800.0");
    }
}

while ((divX == null) || isNaN(divX) || (divX % 1 !== 0)|| (compW/divX % 1 !==0 ) || (divX < 1) || (divX > 500)) {
    divX = prompt("How many rectangles on X (width)?", 5);
    if ((divX == null) || isNaN(divX) || (divX % 1 !== 0) || (divX < 1) || (divX > 500) || (compW/divX % 1 !==0 )) {
        alert("Please enter an INTEGER in range 1...500");
    }
}


while ((divY == null) || isNaN(divY) || (divY % 1 !== 0) || (compH/divY %1 !==0) || (divY < 1) || (divY > 500)) {
    divY = prompt("How many rectangles on Y (height)?", 5);
    if ((divY == null) || isNaN(divY) || (divY % 1 !== 0) || (divY < 1) || (divY > 500) || (compH/divY %1 !==0)) {
        alert("Please enter an INTEGER in range 1...500");
    }
}


// Parse dimensions
var w = parseInt(compW);
var h = parseInt(compH);
var cD = parseFloat(compD);
var dX = parseInt(divX);
var dY = parseInt(divY);
// Ask for divider counts



var rectW = w / dX;
var rectH = h / dY;

var mainComp = app.project.items.addComp("Main Comp", w, h, compA, cD, compFPS);

// Create grid of rectangles
for (var i = 0; i < dX; i++) {
    for (var j = 0; j < dY; j++) {

        var xPos = i * rectW + rectW / 2;
        var yPos = j * rectH + rectH / 2;


        var myShape = mainComp.layers.addShape();
        myShape.name = (i + 1) + "-" + (j + 1) + "-RECT";
        var myShapeGroup = myShape.property("Contents").addProperty("ADBE Vector Group");
        var myShapeRectangle = myShapeGroup.property("Contents").addProperty("ADBE Vector Shape - Rect");
        myShapeRectangle.property("Size").setValue([rectW, rectH]);
        var myShapeFill = myShapeGroup.property("Contents").addProperty("ADBE Vector Graphic - Fill");
        myShapeFill.property("Color").setValue([Math.random(),Math.random(),Math.random()]);
        RandomEndTime=Math.random()*cD;
        myShapeFill.property("Opacity").expression = '''var t=time; var tMin=0; easeIn(t,tMin,'''+RandomEndTime+''',0,100)'''

        // var myShapeStroke = myShapeGroup.property("Contents").addProperty("ADBE Vector Graphic - Stroke");
        // myShapeStroke.property("Color").setValue([0, 0, 0]);
        // myShapeStroke.property("Stroke Width").setValue(2); // Optional: adjust stroke

        myShape.property("Position").setValue([xPos, yPos]);
    }
}

mainComp.openInViewer();
