// LLULL's Divinities

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.width = window.screen.width;
canvas.height = window.screen.height;
ctx.font = '18px sans-serif';
let symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
              'K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
              'I', 'K', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
              'H', 'I', 'K', 'A', 'B', 'C', 'D', 'E', 'F',
              'G', 'H', 'I', 'K', 'A', 'B', 'C', 'D', 'E',
              'F', 'G', 'H', 'I', 'K', 'A', 'B', 'C', 'D',
              'E', 'F', 'G', 'H', 'I', 'K', 'A', 'B', 'C'];
let symbolPositions = [];
let secondGeneration = false;

// Upate values
function update() {
  ctx.fillStyle = 'rgba(0,0,0,.08)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  symbols.map(function(value, index){
      ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(22);
            
      if (!secondGeneration){
        symbolPositions[index] = Math.floor(Math.random() * window.screen.height);
      } else {
        symbolPositions[index] += 20;
      }
        symbolPositions[index] = (symbolPositions[index] > window.screen.height) ? Math.floor(Math.random() * window.screen.height) : symbolPositions[index];
        ctx.fillText(symbols[Math.floor(Math.random() * (symbols.length))], 25 * index, symbolPositions[index]);
      });
      secondGeneration = true;
    }

// Animation
function animate() {
  requestAnimationFrame(animate);
  update()
}

animate()

