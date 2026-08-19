import { Room } from './Room.js';

export class SpawnArea
{
    constructor(raio, n)
    {
        this.raio= raio;
        this.rooms= this.#createRooms(n);
    }

    #createRooms(n)
    {   
        let rooms= [];
        let cord;
        for(let i= 0; i < n; i++)
        {
            cord= this.#getRandomPoint();
            rooms.push(new Room(cord.x, cord.y))
        }
        return rooms;
    }

    #getRandomPoint()
    {
        let angle= 2*Math.PI*Math.random()
        let d= Math.random() + Math.random()
        let r= d > 1 ? 2-d : d;
        return {x: this.raio*r*Math.cos(angle), y: this.raio*r*Math.sin(angle)}
    }
}