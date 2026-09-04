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
            this.drawBox(i, color);
        }
    }

    drawConnections(a)
    {
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 2;
        for(let conn of a)
        {
            this.ctx.beginPath();
            this.ctx.moveTo(conn[0].x, conn[0].y);
            this.ctx.lineTo(conn[1].x, conn[1].y);
            this.ctx.stroke();
        }
    }

    drawBox(object, color = "yellow")
    {
        this.ctx.fillStyle= color;
        this.ctx.fillRect(object.x, object.y, object.width, object.height);
    }
}