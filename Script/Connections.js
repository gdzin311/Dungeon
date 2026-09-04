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

    #distancia(a, b)
    {
        let dx = a.center.x - b.center.x;
        let dy = a.center.y - b.center.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
    
    makeConnections()
    {
        let n = this.principals.length;
        let connections = [];
        if(n < 2) return connections;
 
        let naArvore = new Array(n).fill(false);
        naArvore[0] = true;
        let totalNaArvore = 1;
 
        while(totalNaArvore < n)
        {
            let menorDist = Infinity;
            let melhorU = -1;
            let melhorV = -1;
 
            for(let u = 0; u < n; u++)
            {
                if(!naArvore[u]) continue;
 
                for(let v = 0; v < n; v++)
                {
                    if(naArvore[v]) continue;
 
                    let dist = this.#distancia(this.principals[u], this.principals[v]);
                    if(dist < menorDist)
                    {
                        menorDist = dist;
                        melhorU = u;
                        melhorV = v;
                    }
                }
            }
 
            connections.push([
                {x: this.principals[melhorU].center.x, y: this.principals[melhorU].center.y},
                {x: this.principals[melhorV].center.x, y: this.principals[melhorV].center.y}
            ]);
 
            naArvore[melhorV] = true;
            totalNaArvore++;
        }
 
        return connections;
    }
}