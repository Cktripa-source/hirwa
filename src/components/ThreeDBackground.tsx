import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeDBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear any previous content
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x050510, 0.1); // Very dark blue, almost black with transparency
    containerRef.current.appendChild(renderer.domElement);
    
    // Camera position
    camera.position.z = 25;
    
    // Create stars
    const createStars = () => {
      const starGeometry = new THREE.BufferGeometry();
      const starCount = 1000;
      
      const positions = new Float32Array(starCount * 3);
      const sizes = new Float32Array(starCount);
      const colors = new Float32Array(starCount * 3);
      
      for (let i = 0; i < starCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
        positions[i * 3 + 2] = -Math.random() * 100;
        
        // Some stars will twinkle - vary their sizes
        sizes[i] = Math.random() * 1.5;
        
        // Add color variation - blues and purples
        const colorChoice = Math.random();
        if (colorChoice > 0.8) {
          // Blue-ish stars
          colors[i * 3] = 0.7 + Math.random() * 0.3; // R
          colors[i * 3 + 1] = 0.7 + Math.random() * 0.3; // G
          colors[i * 3 + 2] = 1.0; // B
        } else if (colorChoice > 0.6) {
          // Purple-ish stars
          colors[i * 3] = 0.6 + Math.random() * 0.4; // R
          colors[i * 3 + 1] = 0.4 * Math.random(); // G
          colors[i * 3 + 2] = 0.8 + Math.random() * 0.2; // B
        } else {
          // White/blue-ish stars
          const intensity = 0.7 + Math.random() * 0.3;
          colors[i * 3] = intensity; // R
          colors[i * 3 + 1] = intensity; // G
          colors[i * 3 + 2] = intensity + (Math.random() * 0.2); // B
        }
      }
      
      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      starGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const starMaterial = new THREE.PointsMaterial({
        size: 0.2,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        sizeAttenuation: true
      });
      
      const stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);
      
      return { stars, originalSizes: [...sizes] };
    };
    
    const { stars, originalSizes } = createStars();
    
    // Create digital rain
    const createDigitalRain = () => {
      const dropCount = 150;
      
      // Create rain drops using particles
      const dropGeometry = new THREE.BufferGeometry();
      const dropPositions = new Float32Array(dropCount * 3);
      const dropSizes = new Float32Array(dropCount);
      const dropColors = new Float32Array(dropCount * 3);
      
      for (let i = 0; i < dropCount; i++) {
        // Initial positions
        dropPositions[i * 3] = (Math.random() - 0.5) * 80;     // x
        dropPositions[i * 3 + 1] = Math.random() * 100 + 20;  // y - start above screen
        dropPositions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z
        
        // Sizes vary slightly
        dropSizes[i] = Math.random() * 0.6 + 0.3;
        
        // Colors - varying shades of blue to purple
        const blueOrPurple = Math.random();
        if (blueOrPurple > 0.5) {
          // Blue
          dropColors[i * 3] = 0.2 * Math.random(); // R
          dropColors[i * 3 + 1] = 0.4 + 0.4 * Math.random(); // G
          dropColors[i * 3 + 2] = 0.7 + 0.3 * Math.random(); // B
        } else {
          // Purple
          dropColors[i * 3] = 0.4 + 0.3 * Math.random(); // R
          dropColors[i * 3 + 1] = 0.1 * Math.random(); // G
          dropColors[i * 3 + 2] = 0.7 + 0.3 * Math.random(); // B
        }
      }
      
      dropGeometry.setAttribute('position', new THREE.BufferAttribute(dropPositions, 3));
      dropGeometry.setAttribute('size', new THREE.BufferAttribute(dropSizes, 1));
      dropGeometry.setAttribute('color', new THREE.BufferAttribute(dropColors, 3));
      
      const dropMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.6
      });
      
      const rainDrops = new THREE.Points(dropGeometry, dropMaterial);
      scene.add(rainDrops);
      
      // Store additional properties for animation
      const drops = Array.from({ length: dropCount }, (_, i) => ({
        speed: Math.random() * 0.3 + 0.1,
        index: i
      }));
      
      return { rainDrops, drops, positions: dropPositions };
    };
    
    const { rainDrops, drops, positions } = createDigitalRain();
    
    // Create code elements
    const createCodeElements = () => {
      const codeGroup = new THREE.Group();
      
      // Create planes with code-like textures
      for (let i = 0; i < 8; i++) {
        const width = Math.random() * 8 + 5;
        const height = Math.random() * 6 + 3;
        
        // Create code texture
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const context = canvas.getContext('2d');
        
        if (context) {
          // Fill background
          context.fillStyle = 'rgba(10, 10, 20, 0.6)';
          context.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw code-like lines
          context.font = '14px monospace';
          const lines = Math.floor(canvas.height / 18);
          
          for (let line = 0; line < lines; line++) {
            const lineLength = Math.random() * 80 + 20;
            let codeLine = '';
            
            // Generate random code
            const codeSnippets = [
              'function', 'const', 'let', 'return', 'if', 'else', 
              'for', 'while', '()', '{}', '[]', '=>', '===', 
              '.map', '.filter', 'import', 'export', 'class'
            ];
            
            for (let c = 0; c < lineLength; c++) {
              if (Math.random() > 0.7 && codeLine.length > 0) {
                codeLine += ' ';
              }
              if (Math.random() > 0.8) {
                codeLine += codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
              } else {
                codeLine += String.fromCharCode(97 + Math.floor(Math.random() * 26));
              }
            }
            
            // Randomize color - mostly blues, purples, and whites
            const colors = ['#66CCFF', '#AAFFAA', '#FFFFFF', '#BB88FF'];
            context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            context.fillText(codeLine, 10, 20 + line * 18);
          }
        }
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.MeshBasicMaterial({ 
          map: texture, 
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide
        });
        
        const geometry = new THREE.PlaneGeometry(width, height);
        const codePlane = new THREE.Mesh(geometry, material);
        
        // Position randomly in the background
        codePlane.position.x = (Math.random() - 0.5) * 60;
        codePlane.position.y = (Math.random() - 0.5) * 40;
        codePlane.position.z = -Math.random() * 20 - 10;
        
        // Rotate slightly
        codePlane.rotation.x = (Math.random() - 0.5) * 0.2;
        codePlane.rotation.y = (Math.random() - 0.5) * 0.2;
        
        codeGroup.add(codePlane);
      }
      
      scene.add(codeGroup);
      return codeGroup;
    };
    
    const codeElements = createCodeElements();
    
    // Create floating shapes
    const createFloatingShapes = () => {
      const shapesGroup = new THREE.Group();
      
      // Material for shapes
      const wireframeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        wireframe: true,
        transparent: true,
        opacity: 0.3
      });
      
      // Create different geometric shapes
      const geometries = [
        new THREE.IcosahedronGeometry(2, 0),
        new THREE.TetrahedronGeometry(2.5, 0),
        new THREE.OctahedronGeometry(2, 0),
        new THREE.DodecahedronGeometry(2, 0)
      ];
      
      const shapes = [];
      
      for (let i = 0; i < 6; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const shape = new THREE.Mesh(geometry, wireframeMaterial.clone());
        
        // Position randomly in the scene
        shape.position.x = (Math.random() - 0.5) * 60;
        shape.position.y = (Math.random() - 0.5) * 40;
        shape.position.z = Math.random() * -30 - 5;
        
        // Store animation properties
        shapes.push({
          mesh: shape,
          rotateX: Math.random() * 0.005,
          rotateY: Math.random() * 0.005,
          floatSpeed: Math.random() * 0.01,
          floatOffset: Math.random() * Math.PI * 2
        });
        
        shapesGroup.add(shape);
      }
      
      scene.add(shapesGroup);
      return { shapesGroup, shapes };
    };
    
    const { shapesGroup, shapes } = createFloatingShapes();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Mouse movement tracking for parallax effect
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
    
    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      // Animate stars (twinkling)
      const starSizes = stars.geometry.attributes.size.array as number[];
      for (let i = 0; i < starSizes.length; i++) {
        // Make some stars twinkle
        if (Math.random() > 0.99) {
          starSizes[i] = originalSizes[i] * (Math.random() * 1.5 + 0.5);
        }
      }
      stars.geometry.attributes.size.needsUpdate = true;
      
      // Rotate stars very slowly
      stars.rotation.y += 0.0001;
      
      // Animate digital rain drops
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const idx = drop.index * 3;
        
        // Move drop down
        positions[idx + 1] -= drop.speed;
        
        // Reset drop when it goes off screen
        if (positions[idx + 1] < -50) {
          positions[idx + 1] = Math.random() * 20 + 50;
          positions[idx] = (Math.random() - 0.5) * 80;
        }
      }
      rainDrops.geometry.attributes.position.needsUpdate = true;
      
      // Animate floating shapes
      shapes.forEach((shape: any, index: number) => {
        // Rotate each shape
        shape.mesh.rotation.x += shape.rotateX;
        shape.mesh.rotation.y += shape.rotateY;
        
        // Add floating motion
        const time = Date.now() * 0.001;
        shape.mesh.position.y += Math.sin(time * shape.floatSpeed + shape.floatOffset) * 0.01;
      });
      
      // Animate code elements
      codeElements.children.forEach((child, index) => {
        child.rotation.z += 0.0005 * (index % 2 === 0 ? 1 : -1);
      });
      
      // Very subtle camera movement based on mouse position
      targetX = mouseX * 2;
      targetY = mouseY * 2;
      
      camera.position.x += (targetX - camera.position.x) * 0.01;
      camera.position.y += (-targetY - camera.position.y) * 0.01;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };
    
    // Start animation
    const animationId = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      
      // Dispose resources
      stars.geometry.dispose();
      (stars.material as THREE.Material).dispose();
      
      rainDrops.geometry.dispose();
      (rainDrops.material as THREE.Material).dispose();
      
      // Clean up code elements
      codeElements.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      
      // Clean up shapes
      shapesGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      
      // Remove the canvas
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Clear memory
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-50 pointer-events-none select-none" style={{width: '100vw', height: '100vh'}} />;
};

export default ThreeDBackground;
