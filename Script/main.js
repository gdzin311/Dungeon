import { Expedition33 } from './Expedition33.js';
import { Draw } from './Draw.js';
import { SpawnArea } from './SpawnArea.js';
import { Connections } from './Connections.js';

// Aguarda o HTML carregar antes de pegar o Canvas
window.addEventListener('DOMContentLoaded', () => {
    const h = 800;
    const w = 800;
    const conf = { repul: 25, bounds: { h: h/2, w: w/2 } };

    const canvas = document.getElementById("Canvas");
    canvas.height = h;
    canvas.width = w;

    const ctx = canvas.getContext("2d");
    
    // Instancia o desenhista passando o contexto
    const draw = new Draw(ctx);

    // Ajusta o ponto de origem (0,0) para o centro do canvas
    ctx.save();
    ctx.translate(w / 2, h / 2);

    // Cria a área de spawn e gera as salas
    const spawn = new SpawnArea(h * 0.3, 50);

    // Instancia o controlador de física/organização
    const expedition = new Expedition33(conf, spawn.rooms);
    expedition.organize();

    let connections = new Connections(spawn.rooms);

    draw.drawRooms(connections.rooms, "red");

    ctx.clearRect(-w/2, -h/2, w/2, h/2)
    draw.drawRooms(connections.principals, "red")
    draw.drawRooms(connections.secundaries, "blue")
    // Restaura o estado original do contexto (opcional)
    ctx.restore(); 
});