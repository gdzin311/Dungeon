export class Room
{
    constructor(x, y)
    {
        this.x= x;
        this.y= y;
        this.xSpeed= 0;
        this.ySpeed= 0; 
        this.width= 10 + (Math.random() * 25);
        this.height= 10 + (Math.random() * 25);
        this.area = this.width * this.height;
        this.center = {x: this.width/2, y: this.height/2};
    }
}