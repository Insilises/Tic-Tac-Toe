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

    //Plot first point

    //Calculate constants that we'll need for future calculations
    //Slope = rise/run

    /*I really contemplated separating these into diff functions, but I don't want 
    to write all that. Sorry, there's not an easier way to do this T_T*/
    if (lineSlope > -1 && lineSlope < 0) { //Slope is negative but X grows slower; increment x by one
        return returnVerticesLineNegSmallSlope;
    }
    else {
        console.log("This part of the code hasn't been written yet!");
        return lineVertices;
    }

}

function returnVerticesLineNegSmallSlope(x0, xEnd, y0, yEnd) {
    var lineVertices = [x0, y0];

    //I don't need these variables, but they're helpful when looking at slides/notes
    var deltaY = yEnd - y0;
    var deltaX = xEnd - x0;
    var lineSlope = deltaY/deltaX;
    var twoDeltaY = 2 * deltaY;
    var twoDeltaSubtraction = 2 * deltaY - 2 * deltaX;

    //TODO: It is making from x0 to xEnd. Hurray. We are making multiple lines though.
    for (i = 0; i < deltaX; i++) {
        var pk = twoDeltaY - deltaX; //p0
        if (pk < 0) {
            lineVertices.push(x0 + i + 1, lineVertices[i]); //Plot lower point
            pk = pk + twoDeltaY;
        }
        else {
            lineVertices.push(x0 + i + 1, lineVertices[i] + 1); //Plot upper point
            pk = pk + twoDeltaSubtraction;
        }
    }
    return lineVertices;
}