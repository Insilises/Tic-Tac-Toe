/**Returns the vertices for drawing a tic tac toe board with points
 * 
 * @param {*} minX Minimum X value of the board
 * @param {*} minY Minimum Y value of the board
 * @param {*} maxX Maximum X value of the board
 * @param {*} maxY Maximum Y value of the baord
 * @returns gameBoardVertices Vertices that draw a tic tac toe board
 * using points
 */
function returnGameBoardVertices(minX, minY, maxX, maxY) {
    //The board is split into three sections
    var xSectionSize = (maxX - minX)/3;
    var ySectionSize = (maxY - minY)/3;

    var gameBoardVertices = returnVerticalLineVertices(minX + xSectionSize, 
        minY, maxY); 
    gameBoardVertices = gameBoardVertices.concat(returnVerticalLineVertices(minX + 2 * xSectionSize,
        minY, maxY));
    gameBoardVertices = gameBoardVertices.concat(returnHorizontalVertices(minY + ySectionSize,
        minX, maxX));
    gameBoardVertices = gameBoardVertices.concat(returnHorizontalVertices(minY + 2 * ySectionSize,
        minX, maxX));

    return gameBoardVertices;
}

/**Returns the vertices for drawing a vertical line with points
 * 
 * @param {*} xValue X value of the entire line
 * @param {*} minY Mininum Y value or start of the line
 * @param {*} maxY Maximum X value or end of the line
 * @returns lineVerticesPoints The vertices for drawing a 
 * vertical line with points
 */
function returnVerticalLineVertices(xValue, minY, maxY) {
    var height = maxY - minY;
    var lineVerticesPoints = [xValue, minY];
    for (i=1; i < height; i++)
        lineVerticesPoints.push(xValue, minY + i,   xValue + 1, minY + i);
    return lineVerticesPoints;
}

/**Returns the vertices for drawing a horizontal line with points
 * 
 * @param {*} yValue Y value of the entire line
 * @param {*} minX Minimum X value or start of the line
 * @param {*} maxX Maximum X value or end of the line
 * @returns lineVerticesPoints The vertices for drawing a 
 * horizontal line with points
 */
function returnHorizontalVertices(yValue, minX, maxX) {
    var width = maxX - minX;
    var lineVerticesPoints = [minX, yValue];
    for (i=1; i < width; i++)
        lineVerticesPoints.push(minX + i, yValue,   minX + i, yValue + 1);
    return lineVerticesPoints;
}