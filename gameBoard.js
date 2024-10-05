function returnGameBoardVertices(minX, minY, maxX, maxY) {
    //TODO: Actually use these functions to create the tic tac toe board
    var gameBoardVertices = returnVerticalLineVertices(minX, minY, maxY);
    gameBoardVertices = gameBoardVertices.concat(returnHorizontalVertices(minY, minX, maxX));
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
    var lineVerticesPoints = [yValue, minX];
    for (i=0; i < maxX; i++)
        lineVerticesPoints.push(minX + i, yValue);
    return lineVerticesPoints;
}