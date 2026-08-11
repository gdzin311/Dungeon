export class Room
{
    constructor(x, y)
    {
        this.x= x;
        this.y= y;
        this.xSpeed= 0;
        this.ySpeed= 0; 
        this.width= Math.trunc(Math.random()*50);
        this.height= Math.trunc(Math.random()*50);
    }
}