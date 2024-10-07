function returnXPieceVertices(x0, xEnd, y0, yEnd) {
    var XPieceVertices = returnVerticesDiagLine(x0, xEnd, y0, yEnd);
    XPieceVertices = XPieceVertices.concat(returnVerticesDiagLine())
}

function returnVerticesDiagLine(x0, xEnd, y0, yEnd) {
    /*Pseudocode:
    Find (x,y) points of the beginning and end points of the line
    Plot the first point
    Calculate the constants
    Calculate decision test parameter (p0)
    Use decision test parameter to plot the line as X or y increases
    */
   //TODO: These lines need to be thicker, but don't focus on this right now.

    /*I hate the way I wrote this, but what even is the alternative (＞﹏＜)*/
    
    var lineSlope = (yEnd-y0)/(xEnd-x0);

    if (lineSlope > -1 && lineSlope < 0) {
        return returnVerticesLineNegSmallSlope(x0, xEnd, y0, yEnd);
    }
    else if (lineSlope > -1 && lineSlope < 0) {
        console.log("This part of the code hasn't been written yet!");
    }
    else if (lineSlop < 1 && lineSlope > 0) {
        return returnVerticesLinePosSmallSlope(x0, xEnd, y0, yEnd);
    }
    else {
        return returnVerticesLinePosLargeSlope(x0, xEnd, y0, yEnd);
    }

}

function returnVerticesLinePosSmallSlope(x0, xEnd, y0, yEnd) {
    var lineVertices = [x0, y0];

    var deltaY = Math.abs(yEnd - y0);
    var deltaX = Math.abs(xEnd - x0);
    var twoDeltaY = 2 * deltaY;
    var twoDeltaSubtraction = 2 * deltaY - 2 * deltaX;

    for (i = 0; i < deltaX; i++) {
        var pk = twoDeltaY - deltaX; //p0
        if (pk < 0) {
            lineVertices.push(x0 + i + 1, lineVertices[2*i + 1]); //Stay
            pk = pk + twoDeltaY;
        }
        else {
            lineVertices.push(x0 + i + 1, lineVertices[2*i + 1] + 1); //Plot upper point
            pk = pk + twoDeltaSubtraction;
        }
    }
    return lineVertices;
}

function returnVerticesLinePosLargeSlope(x0, xEnd, y0, yEnd) {
    var lineVertices = [x0, y0];

    var deltaY = yEnd - y0;
    var deltaX = xEnd - x0;
    var twoDeltaX = 2 * deltaX;
    var twoDeltaSubtraction = 2 * deltaX - 2 * deltaY;

    for (i = 0; i < deltaY; i++) {
        var pk = twoDeltaX - deltaY; //p0
        if (pk < 0) {
            lineVertices.push(lineVertices[2*i], y0 + i + 1); //Stay
            pk = pk + twoDeltaY;
        }
        else {
            lineVertices.push(lineVertices[2*i] + 1, y0 + i + 1); //Plot upper point
            pk = pk + twoDeltaSubtraction;
        }
    }
    return lineVertices;
}

function returnVerticesLineNegSmallSlope(x0, xEnd, y0, yEnd) {
    var lineVertices = [x0, y0];

    var deltaY = Math.abs(yEnd - y0);
    var deltaX = Math.abs(xEnd - x0);
    var twoDeltaY = 2 * deltaY;
    var twoDeltaSubtraction = 2 * deltaY - 2 * deltaX;

    for (i = 0; i < deltaX; i++) {
        var pk = twoDeltaY - deltaX; //p0
        if (pk < 0) {
            lineVertices.push(x0 + i + 1, lineVertices[2*i + 1]); //Stay
            pk = pk + twoDeltaY;
        }
        else {
            lineVertices.push(x0 + i + 1, lineVertices[2*i + 1] - 1); //Plot lower point
            pk = pk + twoDeltaSubtraction;
        }
    }
    return lineVertices;
}