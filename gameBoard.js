function returnGameBoardVertices(minX, minY, maxX, maxY) {
    //The board is split into three sections
    var xSectionSize = (maxX - minX)/3;
    var ySectionSize = (maxY - minY)/3;

    //TODO: Actually use these functions to create the tic tac toe board
    var gameBoardVertices = returnVerticalLineVertices(minX + xSectionSize, 
        minY, maxY);
    gameBoardVertices = gameBoardVertices.concat(returnHorizontalVertices(minY + ySectionSize,
        minX, maxX));
    return gameBoardVertices;
}

function returnVerticalLineVertices(xValue, minY, maxY) {
    var height = maxY - minY;
    var lineVerticesPoints = [xValue, minY];
    for (i=0; i < height; i++)
        lineVerticesPoints.push(xValue, minY + i);
    return lineVerticesPoints;
}

function returnHorizontalVertices(yValue, minX, maxX) {
    var width = maxX - minX;
    var lineVerticesPoints = [yValue, minX];
    for (i=0; i < width; i++)
        lineVerticesPoints.push(minX + i, yValue);
    console.log(lineVerticesPoints); //Testing
    return lineVerticesPoints;
}