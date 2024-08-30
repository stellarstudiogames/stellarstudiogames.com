/* console.log("asdasd");

const canvas = document.getElementById("cloud-canvas");
const ctx = canvas.getContext("2d");

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = 200;

// Crear un degradado para el fondo
const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
skyGradient.addColorStop(0, "#87CEEB");
skyGradient.addColorStop(1, "#E0F6FF");

// Clase Nube
class Cloud {
   constructor() {
      this.x = Math.random() * canvas.width;
      this.y = (Math.random() * canvas.height) / 2;
      this.size = Math.random() * 60 + 40;
      this.speed = Math.random() * 0.5 + 0.1;
   }

   draw() {
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
      ctx.arc(
         this.x - this.size / 4,
         this.y + this.size / 4,
         this.size / 3,
         0,
         Math.PI * 2
      );
      ctx.arc(
         this.x + this.size / 4,
         this.y + this.size / 4,
         this.size / 3,
         0,
         Math.PI * 2
      );
      ctx.closePath();
      ctx.fill();

      // Agregar sombreado
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.beginPath();
      ctx.arc(this.x, this.y + this.size / 4, this.size / 2, 0, Math.PI);
      ctx.closePath();
      ctx.fill();
   }

   update() {
      this.x += this.speed;
      if (this.x > canvas.width + this.size) {
         this.x = -this.size;
      }
   }
}

// Crear nubes
const clouds = Array(5)
   .fill()
   .map(() => new Cloud());

// Función de animación
function animate() {
   ctx.fillStyle = skyGradient;
   ctx.fillRect(0, 0, canvas.width, canvas.height);

   clouds.forEach((cloud) => {
      cloud.update();
      cloud.draw();
   });

   requestAnimationFrame(animate);
}

animate();

// Ajustar el tamaño del canvas cuando se redimensiona la ventana
window.addEventListener("resize", () => {
   canvas.width = window.innerWidth;
   canvas.height = 200;
});
 */
