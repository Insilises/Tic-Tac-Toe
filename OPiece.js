/**The vertices to draw a circle using only points on anywhere
 * on the canvas
 * 
 * @param {*} midPointX The X value in the middle of the circle
 * @param {*} midPointY The Y value in the middle of the circle
 * @param {*} radius The radius of the circle
 * @returns adjustedOVertices
 */
function returnOPieceVertices(midPointX, midPointY, radius) {
    /*Pseudocode: 
    Find first point and other points using symmetry
    Compute initial decision parameter (p0)
    Loop similarly to Bresenham:
        if pk < 0 stay on the same row
        else move to the next row
        Find the other points using symmetry and already found point
    */
    
    var oVertices = [0, radius]; //First point
    
    //Main loop to create the circle at a midpoint of (0,0)
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
    
    //Add symmetrical points around the circle
    var symmetricPoints = returnSymmetricPointsOnCircle(oVertices[0], oVertices[1], midPointX, midPointY);
    for (i=0; i < oVertices.length; i++)
        symmetricPoints = symmetricPoints.concat(returnSymmetricPointsOnCircle(oVertices[2*i], oVertices[2*i + 1], midPointX, midPointY));
    oVertices = oVertices.concat(symmetricPoints);

    //Adjust the vertices so they are somewhere around the canvas
    var adjustedOVertices = [oVertices[0] + midPointX, oVertices[1] + midPointY];
    for (i=1; i < oVertices.length; i++)
        adjustedOVertices.push(oVertices[2*i] + midPointX, oVertices[2*i + 1] + midPointY);
    return adjustedOVertices;
}

/**Given one point in the top left of quadrant 1 and the midpoint of a circle, return seven more
 * points, all calculated based on the fact that circles are symmetrical.
 * 
 * @param {*} pointX X value of the point that needs symmetrical points
 * @param {*} pointY Y value of the point that needs symmetrical points
 * @param {*} midPointX The X value in the middle of the circle
 * @param {*} midPointY The Y value in the middle of the circle
 * @param {*} radius The radius of the circle
 * @returns symmetricVertices Seven points around a circle, symmetrical to the given point
 */
function returnSymmetricPointsOnCircle(pointX, pointY, midPointX, midPointY) {


    //Quadrant 1
    //Quad one top left is already pointX, pointY; Don't plot it again
    var symmetricVertices = [pointY, pointX]; //Quad one bottom right


    //Quad 4
    symmetricVertices.push(pointY, -pointX); //Quad 4 top right
    symmetricVertices.push(pointX, -pointY); //Quad 4 bottom left
    
    
    //Quad 3
    symmetricVertices.push(-pointX, -pointY); //Quad 3 bottom right
    symmetricVertices.push(-pointY, -pointX); //Quad 3 top left

    
    //Quad 2
    symmetricVertices.push(-pointY, pointX); //Quad 2 bottom left
    symmetricVertices.push(-pointX, pointY); //Quad 2 top right
    //TODO: Lots to do; maybe generate around 0,0, but we then use midpoints

    return symmetricVertices;
}