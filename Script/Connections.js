export class Connections
{
    constructor(rooms)
    {
        this.rooms = rooms;
        this.principals= this.makePrincipals();
        this.secundaries= this.makeSecundaries();
        this.connections= this.makeConnections();
    }

    makePrincipals()
    {
        maiores = []
        for(let i of this.rooms)
        {
            for(let j in maiores)
            {
                if(i.area >= j.area && maiores.length >= 10)
                {
                    maiores.push(i)
                    break;
                }
            }
        }
        return(maiores);
    }

    makeSecundaries()
    {
        return(this.rooms.filter(room => !this.principals.includes(room)));
    }
    
    makeConnections()
    {
        let connections= []
        for(let i= 0; i < this.principals.length; i++)
        {
            let menor = 0;
            let atual= 0
            let connection = [];

            for(let j= 0; j < this.principals.length; j++)
            {
                atual = Math.sqrt(((Math.abs(i.center.x - j.center.x))**2) + ((Math.abs(i.center.y - j.center.y))**2));
                if(atual < menor)
                {
                    menor = atual;
                    connection = [{x: i.center.x, y: i.center.y}, {x: j.center.x, y: j.center.y}];
                }
            }
        }
        return(connections);
    }
}