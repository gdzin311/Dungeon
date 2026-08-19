export class Expedition33
{
    constructor(conf = {}, rooms)
    {
        this.repul= conf.repul;
        this.bounds= conf.bounds;
        this.rooms= rooms;
    }

    #colision(obj1, obj2)
    {
        if (obj1.x <= obj2.x + obj2.width &&
        obj2.x <= obj1.x + obj1.width &&
        obj1.y <= obj2.y + obj2.height &&
        obj2.y <= obj1.y + obj1.height)
        {
            let dx = obj1.x < obj2.x;
            let dy = obj1.y < obj2.y;

            obj1.xSpeed += -(dx)*this.repul + (!dx)*this.repul;
            obj2.xSpeed += -(!dx)*this.repul + (dx)*this.repul;

            obj1.ySpeed += -(dy)*this.repul + (!dy)*this.repul;
            obj2.ySpeed += -(!dy)*this.repul + (dy)*this.repul;
            return true
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
    }

    updateRooms()
    {
        for(let i of this.rooms)
        {
            i.x += i.xSpeed;
            i.y += i.ySpeed;

            i.xSpeed+= -(0 < i.xSpeed) + (0 > i.xSpeed);
            i.ySpeed+= -(0 < i.ySpeed) + (0 > i.ySpeed);

            if(i.x < -this.bounds.w)
            {
                i.x = -this.bounds.w;
                i.xSpeed = 0;
            }

            if(i.x > this.bounds.w)
            {
                i.x = this.bounds.w + i.width;
                i.xSpeed = 0;
            }

            if(i.y < -this.bounds.h)
            {
                i.y = -this.bounds.h;
                i.ySpeed = 0;
            }

            if(i.y > this.bounds.h)
            {
                i.y = this.bounds.h + i.height;
                i.ySpeed = 0;
            }
        }
    }
}

