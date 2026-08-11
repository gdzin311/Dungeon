export class Draw
{
    constructor(ctx)
    {
        this.ctx = ctx;
    }

    drawRooms(a)
    {
        for(let i of a)
        {
            this.drawbox(i);
        }
    }

    drawbox(object)
    {
        this.ctx.fillStyle= "yellow";
        this.ctx.fillRect(object.x, object.y, object.width, object.height);
    }
}