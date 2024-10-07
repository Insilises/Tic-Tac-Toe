/**Returns the vertices for drawing an X Piece for the tic tac toe X player
 * using points
 * 
 * @param {*} minX Minimum X value of the square the piece will fit in
 * @param {*} minY Minimum Y value of the square the piece will fit in
 * @param {*} maxX Maximum X value of the square the piece will fit in
 * @param {*} maxY Maximum Y value of the square the piece will fit in
 * @returns XPieceVertices The vertices for drawing an X Piece
 */
function returnXPieceVertices(minX, minY, maxX, maxY) {    
    var XPieceVertices = returnDiagLine(minX, minY, maxX, maxY); //Bottom left to top right
    XPieceVertices = XPieceVertices.concat(returnDiagLine(minX, maxY, maxX, minY)); //Top left to bottom right

    return XPieceVertices;
}

/**Returns the vertices for a diagonal line of any slope using points
 * 
 * @param {*} x0 Beginning x value of the line
 * @param {*} y0 Beginning y value of the line
 * @param {*} xEnd Final x value of the line
 * @param {*} yEnd Final y value of the line
 * @returns lineVertices The vertices for a diagonal line of any slope 
 * using points
 */
function returnDiagLine(x0, y0, xEnd, yEnd) {
    
    var lineSlope = (yEnd - y0)/(xEnd - x0);

    if (lineSlope > 0)
        var positiveSlope = true;
    else
        var positiveSlope = false;

    if (lineSlope > 1 || lineSlope < -1)
        return returnLineLargeSlope(x0, y0, xEnd, yEnd, positiveSlope);
    else
        return returnLineSmallSlope(x0, y0, xEnd, yEnd, positiveSlope);
}

/**Returns the vertices to draw a line with a slope less than one with
 * points
 * 
 * @param {*} x0 Beginning x value of the line
 * @param {*} y0 Beginning y value of the line
 * @param {*} xEnd Final x value of the line
 * @param {*} yEnd Final y value of the line
 * @param {*} positiveSlope Boolean value; true when the slope is positive
 * @returns lineVertices The vertices to draw a line with a slope less than one
 */
function returnLineSmallSlope(x0, y0, xEnd, yEnd, positiveSlope) {
    var lineVertices = [x0, y0];

    var deltaY = Math.abs(yEnd - y0);
    var deltaX = Math.abs(xEnd - x0);
    var twoDeltaY = 2 * deltaY;
    var twoDeltaSubtraction = 2 * deltaY - 2 * deltaX;
    
    pk = twoDeltaY - deltaX; //p0
    for (i = 0; i < deltaX; i++) {
        console.log(pk); //Test
        if (pk < 0) {   //Stay
            lineVertices.push(x0 + i + 1, lineVertices[2*i + 1]);
            pk = pk + twoDeltaY;
        }
        else {  //Plot up or down
            if (positiveSlope == true)
                lineVertices.push(x0 + i + 1, lineVertices[2*i + 1] + 1);
            else
                lineVertices.push(x0 + i + 1, lineVertices[2*i + 1] - 1);
            pk = pk + twoDeltaSubtraction;
        }
    }
    return lineVertices;
}

/**Returns the vertices to draw a line with a slope greater than one with
 * points
 * 
 * @param {*} x0 Beginning x value of the line
 * @param {*} y0 Beginning y value of the line
 * @param {*} xEnd Final x value of the line
 * @param {*} yEnd Final y value of the line
 * @param {*} positiveSlope Boolean value; true when the slope is positive
 * @returns lineVertices The vertices to draw a line with a slope greater than one
 */
function returnLineLargeSlope(x0, y0, xEnd, yEnd, positiveSlope) {
    var lineVertices = [x0, y0];

    var deltaY = Math.abs(yEnd - y0);
    var deltaX = Math.abs(xEnd - x0);
    var twoDeltaX = 2 * deltaX;
    var twoDeltaSubtraction = 2 * deltaX - 2 * deltaY;

    var pk = twoDeltaX - deltaY; //p0

    for (i = 0; i < deltaY; i++) {
        if (pk < 0) {   //Stay
            lineVertices.push(lineVertices[2*i], y0 + i + 1);
            pk = pk + twoDeltaY;
        }
        else {  //Plot upper point
            if (positiveSlope == true)
                lineVertices.push(lineVertices[2*i] + 1, y0 + i + 1);
            else
                lineVertices.push(lineVertices[2*i] - 1, y0 + i + 1);
            pk = pk + twoDeltaSubtraction;
        }
    }
    return lineVertices;
}