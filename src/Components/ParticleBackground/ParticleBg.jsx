import { useEffect, useRef } from "react";

export default function ParticleBg() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];

    const icons = [
      "/icons/An.svg",
      "/icons/AWS.svg",
      "/icons/Bootstrap.svg",
      "/icons/C.svg",
      "/icons/Canva.svg",
      "/icons/CSS3.svg",
      "/icons/Django.svg",
      "/icons/Docker.svg",
      "/icons/Express.svg",
      "/icons/Flutter.svg",
      "/icons/Git.svg",
      "/icons/GitHub.svg",
      "/icons/Gradle.svg",
      "/icons/Heroku.svg",
      "/icons/Hibernate.svg",
      "/icons/Java.svg",
      "/icons/JavaScript.svg",
      "/icons/Kaggle.svg",
      "/icons/Linux.svg",
      "/icons/MongoDB.svg",
      "/icons/MySQL.svg",
      "/icons/NET.svg",
      "/icons/React.svg",
      "/icons/Redis.svg",
      "/icons/Tailwind.svg",
    ];

    const images = [];

    const particleCount =
      window.innerWidth < 768 ? 12 : 22;

    class Particle {

      constructor(img) {

        this.img = img;

        // position
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * -1;

        // depth effect
        this.depth = Math.random();

        // size
        this.size = 10 + this.depth * 22;

        // speed
        this.speed = 0.2 + this.depth * 1;

        // rotation
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed =
          (Math.random() - 0.5) * 0.003;

        // floating effect
        this.swing = Math.random() * 2;

        // opacity animation
        this.opacity =
          Math.random() * 0.5 + 0.3;

        this.opacityDirection = 0.003;
      }

      draw() {

        ctx.save();

        ctx.translate(this.x, this.y);

        ctx.rotate(this.rotation);

        ctx.globalAlpha = this.opacity;

        // glow
        ctx.shadowColor = "#22d3ee";
        ctx.shadowBlur = 10;

        ctx.drawImage(
          this.img,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        );

        ctx.restore();
      }

      update() {

        // vertical movement
        this.y += this.speed;

        // floating sideways effect
        this.x +=
          Math.sin(this.y * 0.01) * this.swing;

        // rotation
        this.rotation += this.rotationSpeed;

        // opacity pulse
        this.opacity += this.opacityDirection;

        if (
          this.opacity >= 0.8 ||
          this.opacity <= 0.3
        ) {
          this.opacityDirection *= -1;
        }

        // reset particle
        if (this.y > canvas.height + 50) {

          this.y = -50;

          this.x =
            Math.random() * canvas.width;
        }

        this.draw();
      }
    }

    function initParticles() {

      particles = [];

      for (let i = 0; i < particleCount; i++) {

        const img =
          images[
            Math.floor(
              Math.random() * images.length
            )
          ];

        particles.push(new Particle(img));
      }
    }

    function loadImages() {

      let loaded = 0;

      return new Promise((resolve) => {

        icons.forEach((src) => {

          const img = new Image();

          img.src = src;

          img.onload = () => {

            images.push(img);

            loaded++;

            if (loaded === icons.length) {
              resolve();
            }
          };

          img.onerror = () => {
            console.log("Failed loading:", src);
          };

        });

      });
    }

    function resize() {

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    let animationId;

    function animate() {

      // clear canvas
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((p) => p.update());

      animationId =
        requestAnimationFrame(animate);
    }

    resize();

    window.addEventListener(
      "resize",
      resize
    );

    loadImages().then(() => {

      initParticles();

      animate();
    });

    return () => {

      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        resize
      );
    };

  }, []);

  return (

    <canvas
      ref={canvasRef}
      className="
        fixed
        top-0
        left-0
        w-full
        h-full
        pointer-events-none
        z-0
        opacity-70
      "
    />

  );
}