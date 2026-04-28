// Confetti celebration effect
class ConfettiEffect {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.animation = null;
    this.active = false;
    
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createParticle() {
    return {
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height - this.canvas.height,
      size: Math.random() * 6 + 2,
      speedX: (Math.random() - 0.5) * 3,
      speedY: Math.random() * 5 + 3,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    };
  }
  
  start(duration = 3000) {
    if (this.active) this.stop();
    
    this.active = true;
    this.particles = [];
    
    // Create 150 particles
    for (let i = 0; i < 150; i++) {
      this.particles.push(this.createParticle());
    }
    
    this.animate();
    
    // Stop after duration
    setTimeout(() => this.stop(), duration);
  }
  
  animate() {
    if (!this.active) return;
    
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    let allDead = true;
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      
      p.x += p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotationSpeed;
      
      if (p.y < this.canvas.height + 50 && p.x > -50 && p.x < this.canvas.width + 50) {
        allDead = false;
      }
      
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate(p.rotation * Math.PI / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
      this.ctx.restore();
    }
    
    if (allDead) {
      this.stop();
    } else {
      this.animation = requestAnimationFrame(() => this.animate());
    }
  }
  
  stop() {
    this.active = false;
    if (this.animation) {
      cancelAnimationFrame(this.animation);
      this.animation = null;
    }
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

// Initialize confetti
let confetti = null;
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('confettiCanvas');
  if (canvas) {
    confetti = new ConfettiEffect(canvas);
  }
});

function triggerConfetti() {
  if (confetti) {
    confetti.start();
  }
}