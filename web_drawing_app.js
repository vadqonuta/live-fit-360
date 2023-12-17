Here is a code example in JavaScript that creates a web-based drawing application, allowing users to draw, erase, change colors, and save their drawings:

```javascript
/*
   Filename: web_drawing_app.js
   Description: Web-based drawing application
   
   Note: This example uses only vanilla JavaScript and HTML5 Canvas API.
*/

// Global variables
let canvas;
let ctx;
let isDrawing = false;
let color = '#000000';

// Initialize the canvas and context
function initCanvas() {
  canvas = document.getElementById('drawing-canvas');
  ctx = canvas.getContext('2d');
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = color;
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);
}

// Start drawing
function startDrawing(event) {
  isDrawing = true;
  const { offsetX, offsetY } = event;
  ctx.beginPath();
  ctx.moveTo(offsetX, offsetY);
}

// Draw on the canvas
function draw(event) {
  if (!isDrawing) return;
  const { offsetX, offsetY } = event;
  ctx.lineTo(offsetX, offsetY);
  ctx.stroke();
}

// Stop drawing
function stopDrawing() {
  isDrawing = false;
}

// Clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Change drawing color
function changeColor(newColor) {
  color = newColor;
  ctx.strokeStyle = color;
}

// Save the drawing as a PNG image
function saveDrawing() {
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'my_drawing.png';
  link.click();
}

// HTML structure for the drawing app
document.body.innerHTML = `
  <div>
    <canvas id="drawing-canvas" width="800" height="600"></canvas>
  </div>
  <div>
    <button onclick="clearCanvas()">Clear</button>
    <input type="color" onchange="changeColor(this.value)">
    <button onclick="saveDrawing()">Save</button>
  </div>
`;

// Initialize the canvas and context once the DOM is ready
document.addEventListener('DOMContentLoaded', initCanvas);
```

To execute this code, you can save it in a file named `web_drawing_app.js` and include it in an HTML file using a `<script>` tag. The drawing application will be displayed on the web page, allowing users to create drawings and save them as PNG images.
Note that this example code is approximately around 100 lines long. If you need a longer code, you can add additional features to the drawing application, such as shapes, fill functionality, a color picker, layers, etc.