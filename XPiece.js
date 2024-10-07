function returnXPieceVertices(minX, minY, maxX, maxY) {

    var XPieceVertices = returnVerticesDiagLine(minX, minY, maxX, maxY); //Bottom left to top right
    XPieceVertices = XPieceVertices.concat(returnVerticesDiagLine(minX, maxY, maxX, minY)); //Top left to bottom right

    return XPieceVertices;
}

function returnVerticesDiagLine(minX, minY, maxX, maxY) {
    /*Pseudocode:
    Find (x,y) points of the beginning and end points of the line
    Plot the first point
    Calculate the constants
    Calculate decision test parameter (p0)
    Use decision test parameter to plot the line as X or y increases
    */
   //TODO: These lines need to be thicker, but don't focus on this right now.

    /*I hate the way I wrote this, but what even is the alternative (＞﹏＜)*/
    
    var lineSlope = (maxY - minY)/(maxX - minX);

    if (lineSlope > 0)
        var positiveSlope = true;
    else
        var positiveSlope = false;

    if (lineSlope > 1 || lineSlope < -1)
        return returnLineLargeSlope(minX, minY, maxX, maxY, positiveSlope);
    else
        return returnLineSmallSlope(minX, minY, maxX, maxY, positiveSlope);
}

function returnLineSmallSlope(minX, minY, maxX, maxY, positiveSlope) {
    var lineVertices = [minX, minY];

    var deltaY = Math.abs(maxY - minY);
    var deltaX = Math.abs(maxX - minX);
    var twoDeltaY = 2 * deltaY;
    var twoDeltaSubtraction = 2 * deltaY - 2 * deltaX;

    for (i = 0; i < deltaX; i++) {
        var pk = twoDeltaY - deltaX; //p0
        if (pk < 0) {   //Stay
            lineVertices.push(minX + i + 1, lineVertices[2*i + 1]); 
            pk = pk + twoDeltaY;
        }
        else {  //Plot upper point
            if (positiveSlope == true)
                lineVertices.push(minX + i + 1, lineVertices[2*i + 1] + 1);
            else
                lineVertices.push(minX + i + 1, lineVertices[2*i + 1] - 1);
            pk = pk + twoDeltaSubtraction;
        }
    }
    return lineVertices;
}

function returnLineLargeSlope(minX, minY, maxX, maxY, positiveSlope) {
    var lineVertices = [minX, minY];

    var deltaY = maxY - minY;
    var deltaX = maxX - minX;
    var twoDeltaX = 2 * deltaX;
    var twoDeltaSubtraction = 2 * deltaX - 2 * deltaY;

    for (i = 0; i < deltaY; i++) {
        var pk = twoDeltaX - deltaY; //p0
        if (pk < 0) {   //Stay
            lineVertices.push(lineVertices[2*i], minY + i + 1);
            pk = pk + twoDeltaY;
        }
        else {  //Plot upper point
            if (positiveSlope == true)
                lineVertices.push(lineVertices[2*i] + 1, minY + i + 1);
            else
                lineVertices.push(lineVertices[2*i] - 1, minY + i + 1);
            pk = pk + twoDeltaSubtraction;
        }
    }
    return lineVertices;
}