import  { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ParticleBackgroundProps {
  color?: string;
  density?: number;
  speed?: number;
  opacity?: number;
}

const ParticleBackground = ({ 
  color = '#3b82f6', 
  density = 100, 
  speed = 0.1,
  opacity = 0.5
}: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Clear any previous content
    while (canvasRef.current.firstChild) {
      canvasRef.current.removeChild(canvasRef.current.firstChild);
    }
    
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    canvasRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particleCount = Math.min(Math.floor(window.innerWidth * window.innerHeight / 8000) * density, 1500);
    const particles = new THREE.BufferGeometry();
    
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    
    // Setup particles
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;
      
      scales[i] = Math.random();
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
    
    // Create particle material
    const particleMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(color) },
        opacity: { value: opacity }
      },
      vertexShader: `
        attribute float scale;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = scale * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        uniform float opacity;
        void main() {
          float distanceFromCenter = length(gl_PointCoord - vec2(0.5, 0.5));
          if (distanceFromCenter > 0.5) discard;
          
          float alpha = 1.0 - (distanceFromCenter * 2.0);
          gl_FragColor = vec4(color, alpha * opacity);
        }
      `,
      transparent: true,
      depthTest: false
    });
    
    // Create particle system
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // Position camera
    camera.position.z = 5;
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / windowHalfX;
      mouseY = (event.clientY - windowHalfY) / windowHalfY;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth camera movement
      targetX = mouseX * 0.1;
      targetY = mouseY * 0.1;
      
      particleSystem.rotation.x += 0.0005;
      particleSystem.rotation.y += 0.0005;
      
      // Move camera in response to mouse
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (-targetY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      
      // Update particles positions
      const time = Date.now() * 0.001;
      const positions = (particles.attributes.position as THREE.BufferAttribute).array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        // Apply wave-like motion to particles
        const scale = (particles.attributes.scale as THREE.BufferAttribute).array[i];
        positions[i3 + 1] += Math.sin(time + positions[i3] / 2) * speed * scale;
        positions[i3] += Math.cos(time + positions[i3 + 1] / 2) * speed * scale;
      }
      
      (particles.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      
      scene.remove(particleSystem);
      particles.dispose();
      (particleMaterial as THREE.Material).dispose();
      
      renderer.dispose();
    };
  }, [color, density, speed, opacity]);
  
  return <div ref={canvasRef} className="absolute inset-0 -z-10" />;
};

export default ParticleBackground;
  