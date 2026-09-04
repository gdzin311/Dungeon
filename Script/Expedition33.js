export class Expedition33
{
    constructor(conf = {}, rooms)
    {
        this.repul= conf.repul;
        this.bounds= conf.bounds;
        this.rooms= rooms;
    }

    #colision(obj1, obj2, action = 1)
    {
        let overlapX = Math.min(obj1.x + obj1.width, obj2.x + obj2.width) - Math.max(obj1.x, obj2.x);
        let overlapY = Math.min(obj1.y + obj1.height, obj2.y + obj2.height) - Math.max(obj1.y, obj2.y);
        if(action)
        {
            if (overlapX > 0 && overlapY > 0)
            {
                if (overlapX < overlapY)
                {
                    // separa pelo eixo X (menor overlap)
                    let dir = obj1.x < obj2.x ? -1 : 1;
                    obj1.xSpeed += dir * this.repul;
                    obj2.xSpeed += -dir * this.repul;
                }
                else
                {
                    // separa pelo eixo Y (menor overlap)
                    let dir = obj1.y < obj2.y ? -1 : 1;
                    obj1.ySpeed += dir * this.repul;
                    obj2.ySpeed += -dir * this.repul;
                }
                return true;
            }
            return false;
        }
        else
        {
             if (overlapX > 0 && overlapY > 0)
             {
    
                if (overlapX < overlapY)
                {
                    let dir = obj1.x < obj2.x ? -1 : 1;
                    let push = overlapX / 2 + 10;
                    obj1.x += dir * push;
                    obj2.x += -dir * push;
                }
                else
                {
                    let dir = obj1.y < obj2.y ? -1 : 1;
                    let push = overlapY / 2 + 10;
                    obj1.y += dir * push;
                    obj2.y += -dir * push;
                }
            }
        }
    }

    organize()
    {
        let dis= true;
        while(dis)
        {
            dis= false;
            for(let i = 0; i < this.rooms.length; i++)
            {
                for(let j= i+1; j < this.rooms.length; j++)
                {
                    let collide = this.#colision(this.rooms[i], this.rooms[j])
                    if(collide)
                    {
                        dis= true;
                    }
                }
            }
            this.updateRooms();
        }

        for(let x=0; x < 50; x++)
            for(let i = 0; i < this.rooms.length; i++)
            {
                for(let j= i+1; j < this.rooms.length; j++)
                {
                    this.#colision(this.rooms[i], this.rooms[j], 0)
                }
            }
    }

    updateRooms()
    {
        for(let i of this.rooms)
        {
            i.x += i.xSpeed;
            i.y += i.ySpeed;

            i.xSpeed *= 0.8;
            i.ySpeed *= 0.8;

            if(i.x < -this.bounds.w)
            {
                i.x = -this.bounds.w;
                i.xSpeed = 0;
            }

            if(i.x + i.width > this.bounds.w)
            {
                i.x = this.bounds.w - i.width;
                i.xSpeed = 0;
            }

            if(i.y < -this.bounds.h)
            {
                i.y = -this.bounds.h;
                i.ySpeed = 0;
            }

            if(i.y + i.height > this.bounds.h)
            {
                i.y = this.bounds.h - i.height;
                i.ySpeed = 0;
            }
        }
    }
}