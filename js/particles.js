/**
 * DEVUP MULTIVERSE — EMBER PARTICLE CANVAS
 * High performance floating cosmic ember sparks simulating the fiery Stargate rift.
 */

class EmberParticleSystem {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = window.innerWidth < 768 ? 35 : 70;
        this.width = 0;
        this.height = 0;
        this.mouse = { x: null, y: null };

        this.init();
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        // Initialize particles
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push(this.createParticle());
        }

        this.animate();
    }

    resize() {
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
    }

    createParticle() {
        const colors = [
            'rgba(255, 90, 0, ',    // Fiery Orange
            'rgba(255, 168, 0, ',   // Ember Gold
            'rgba(255, 220, 100, ', // Plasma White-Gold
            'rgba(239, 68, 68, '    // Crimson Red
        ];
        return {
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            size: Math.random() * 2.8 + 1,
            speedY: -(Math.random() * 0.9 + 0.3),
            speedX: (Math.random() - 0.5) * 0.5,
            colorPrefix: colors[Math.floor(Math.random() * colors.length)],
            opacity: Math.random() * 0.8 + 0.2,
            opacitySpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
            pulse: 0
        };
    }

    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            // Update position
            p.y += p.speedY;
            p.x += p.speedX;
            p.opacity += p.opacitySpeed;

            // Bounce opacity
            if (p.opacity > 0.95 || p.opacity < 0.15) {
                p.opacitySpeed = -p.opacitySpeed;
            }

            // Mouse repulsion slight breeze
            if (this.mouse.x !== null) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    p.x += (dx / dist) * 1.2;
                    p.y += (dy / dist) * 1.2;
                }
            }

            // Respawn when off screen
            if (p.y < -10 || p.x < -10 || p.x > this.width + 10) {
                this.particles[i] = this.createParticle();
                this.particles[i].y = this.height + 10;
            }

            // Render glowing ember
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = p.colorPrefix + Math.max(0.1, Math.min(1, p.opacity)) + ')';
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = '#FF6A00';
            this.ctx.fill();
        }

        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.emberSystem = new EmberParticleSystem('particleCanvas');
});
