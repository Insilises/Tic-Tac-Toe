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
    //TODO: Symmetry

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

    console.log(oVertices);
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

    //Quadrant 1
    var symmetricVertices = [pointX, pointY]; //Quad one top left
    symmetricVertices.push(pointY, pointX); //Quad one bottom right

    //Quad 4
    symmetricVertices.push(pointY, -pointX); //Quad 4 top right
    symmetricVertices.push(pointX, -pointY); //Quad 4 bottom left

    //Quad 3
    symmetricVertices.push(-pointX, -pointY); //Quad 3 bottom right
    symmetricVertices.push(-pointY, -pointX); //Quad 3 top left

    //Quad 2
    symmetricVertices.push(-pointY, pointX); //Quad 2 bottom left
    symmetricVertices.push(-pointX, pointY); //Quad 2 top right
    console.log(symmetricVertices);
    return symmetricVertices;
}