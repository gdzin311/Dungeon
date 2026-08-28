export class Draw
{
    constructor(ctx)
    {
        this.ctx = ctx;
    }

    drawRooms(a, color)
    {
        for(let i of a)
        {
            this.drawbox(i, color);
        }
    }

    drawConnections(a)
    {
        
    }

    drawbox(object, color = "yellow")
    {
        this.ctx.fillStyle= color;
        this.ctx.fillRect(object.x, object.y, object.width, object.height);
    }
}