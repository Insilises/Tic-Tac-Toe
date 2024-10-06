function returnXPieceVertices(Minx, maxX, minY, maxY) {

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
    if (lineSlope > -1 && lineSlope < 0) { //Slope is negative but X grows slower; increment X by one
        return returnVerticesLineNegSmallSlope(x0, xEnd, y0, yEnd);
    }
    else if (lineSlope < -1 && lineSlop < 0) { //Slope is negative but Y grows slower; increment Y by one
        //return returnVerticesLineNegLargeSlope(x0, xEnd, y0, yEnd);
    }
    else {
        console.log("This part of the code hasn't been written yet!");
        return lineVertices;
    }

}

function returnVerticesLineNegSmallSlope(x0, xEnd, y0, yEnd) {
    var lineVertices = [x0, y0];

    var deltaY = yEnd - y0;
    var deltaX = xEnd - x0;
    var lineSlope = deltaY/deltaX;
    var twoDeltaY = 2 * deltaY;
    var twoDeltaSubtraction = 2 * deltaY - 2 * deltaX;

    for (i = 0; i < deltaX; i++) {
        var pk = twoDeltaY - deltaX; //p0
        if (pk < 0) {
            lineVertices.push(x0 + i + 1, lineVertices[2*i + 1]); //Plot lower point
            pk = pk + twoDeltaY;
        }
        else {
            lineVertices.push(x0 + i + 1, lineVertices[2*i + 1] + 1); //Plot upper point
            pk = pk + twoDeltaSubtraction;
        }
    }
    return lineVertices;
}