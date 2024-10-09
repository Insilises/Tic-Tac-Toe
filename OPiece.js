function returnOPieceVertices(midPointX, midPointY, radius) {
    /*Pseudocode: 
    Find first point and other points using symmetry
    Compute initial decision parameter (p0)
    Loop similarly to Bresenham:
        if pk < 0 stay on the same row
        else move to the next row
        Find the other points using symmetry and already found point
    */
    
    var oVertices = [midPointX, midPointY + radius]; //First point

    //This loop works.
    var pk = 5/4 - radius;
    for (i=0; oVertices[2*i] < oVertices[2*i + 1]; i++) {
        if (pk < 0) {   //Stay on the same row 
            oVertices.push(oVertices[2*i] + 1, oVertices[2*i + 1]);
            pk = pk + 2 * oVertices[2*i] + 2;
        }
        else { //Move to the next row (Whether that's up or down)
            oVertices.push(oVertices[2*i] + 1, oVertices[2*i + 1] - 1);
            pk = pk + (2 * oVertices[2*i] + 2) - 2 * (oVertices[2*i + 1] +1);
        }
    }

    var symmetricPoints = returnSymmetricPointsOnCircle(oVertices[0], oVertices[1], midPointX, midPointY);
    for (i=0; i < oVertices.length; i++)
        symmetricPoints = symmetricPoints.concat(returnSymmetricPointsOnCircle(oVertices[2*i], oVertices[2*i + 1], midPointX, midPointY));
    
    console.log("Symmetric = " + symmetricPoints);
    console.log("oVert = " + oVertices);
    
    oVertices = oVertices.concat(symmetricPoints);
    return oVertices;
}

/**Given one point and the midpoint of a circle, return eight points, all calculated
 * based on the fact that circles are symmetrical.
 * 
 * @param {*} pointX 
 * @param {*} pointY 
 * @param {*} midPointX 
 * @param {*} midPointY 
 * @returns 
 */
function returnSymmetricPointsOnCircle(pointX, pointY, midPointX, midPointY) {
    /*TODO: I'll have to change some things to make it so the answer depends on midpoint
    You know, so we can make circles that aren't dead center in the screen. I need the
    symmetry to work first before I can do that. */

    //Quadrant 1
    //Quad one top left is already pointX, pointY; Don't plot it again
    var symmetricVertices = [pointY, pointX]; //Quad one bottom right

    /*
    //Quad 4
    symmetricVertices.push(pointY, -pointX); //Quad 4 top right
    symmetricVertices.push(pointX, -pointY); //Quad 4 bottom left

    //Quad 3
    symmetricVertices.push(-pointX, -pointY); //Quad 3 bottom right
    symmetricVertices.push(-pointY, -pointX); //Quad 3 top left

    //Quad 2
    symmetricVertices.push(-pointY, pointX); //Quad 2 bottom left
    symmetricVertices.push(-pointX, pointY); //Quad 2 top right
    */


    //console.log("SymVert = " + symmetricVertices);
    return symmetricVertices;
}