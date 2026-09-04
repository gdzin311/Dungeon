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
        let maiores = [];
        for(let i = 0; i < this.rooms.length; i++)
        {
            if(maiores.length < 10)
            {
                maiores.push(this.rooms[i]);
            }
            else
            {
                let menor = 0;
                for(let j = 1; j < maiores.length; j++)
                {
                    if(maiores[j].area < maiores[menor].area)
                    {
                        menor = j;
                    }
                }
                if(this.rooms[i].area > maiores[menor].area)
                {
                    maiores[menor] = this.rooms[i];
                }
            }
        }
        return maiores;
    }

    makeSecundaries()
    {
        return(this.rooms.filter(room => !this.principals.includes(room)));
    }
    
    makeConnections()
    {
        let connections= [];
        for(let i= 0; i < this.principals.length; i++)
        {
            let menor = Infinity;
            let atual= 0
            let connection = [];

            for(let j= 0; j < this.principals.length; j++)
            {
                if(i === j) continue;

                atual = Math.sqrt(((Math.abs(this.principals[i].center.x - this.principals[j].center.x))**2) + ((Math.abs(this.principals[i].center.y - this.principals[j].center.y))**2));
                if(atual < menor)
                {
                    menor = atual;
                    connection = [{x: this.principals[i].center.x, y: this.principals[i].center.y}, {x: this.principals[j].center.x, y: this.principals[j].center.y}];
                }
            }

            connections.push(connection);

        }
        return(connections);
    }
}