function returnGameBoardVertices(minX, minY, maxX, maxY) {
    var gameBoardVertices = returnVerticalLineVertices(minX, minY, maxY);
    gameBoardVertices = gameBoardVertices.concat(returnHorizontalVertices(minY, minX, maxX));
    return gameBoardVertices;
}
//TODO: The two line vertices functions are untested.
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