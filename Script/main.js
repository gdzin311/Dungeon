import { Expedition33 } from './Expedition33.js';
import { Draw } from './Draw.js';
import { SpawnArea } from './SpawnArea.js';

// Aguarda o HTML carregar antes de pegar o Canvas
window.addEventListener('DOMContentLoaded', () => {
    const h = 800;
    const w = 800;
    const conf = { repul: 25, bounds: { h: h/2, w: w/2 } };

    const canva = document.getElementById("Canvas");
    canva.height = h;
    canva.width = w;

    const ctx = canva.getContext("2d");
    
    // Instancia o desenhista passando o contexto
    const draw = new Draw(ctx);

    // Ajusta o ponto de origem (0,0) para o centro do canvas
    ctx.save();
    ctx.translate(w / 2, h / 2);

    // Cria a área de spawn e gera as salas
    const spawn = new SpawnArea(h * 0.3, 30);

    // Instancia o controlador de física/organização
    const expedition = new Expedition33(conf, spawn.rooms);
    expedition.organize();

    // Desenha as salas organizadas
    draw.drawRooms(spawn.rooms);
    
    // Restaura o estado original do contexto (opcional)
    ctx.restore(); 
});