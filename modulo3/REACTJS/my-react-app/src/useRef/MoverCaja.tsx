import { useRef, useEffect } from 'react';
export default function MoverCaja() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mover = (e: KeyboardEvent) => {
      const box = boxRef.current;
      if (!box) {
        return; 
      }
      
      const paso = 10;
      let moved = false; 
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault(); 
          position.current.y -= paso;
          moved = true;
          break;
        case 'ArrowDown':
          e.preventDefault();
          position.current.y += paso;
          moved = true;
          break;
        case 'ArrowLeft':
          e.preventDefault();
          position.current.x -= paso;
          moved = true;
          break;
        case 'ArrowRight':
          e.preventDefault();
          position.current.x += paso;
          moved = true;
          break;
        default:
          return;
      }
      if (moved) {
        box.style.transform = `translate(${position.current.x}px, ${position.current.y}px)`;
      }
    };
    window.addEventListener('keydown', mover);
    return () => window.removeEventListener('keydown', mover);
  }, []); 

  return (
    <div
      ref={boxRef}
      style={{
        width: '60px',
        height: '60px',
        backgroundColor: 'deepskyblue',
        borderRadius: '50%',
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', 
        transition: 'transform 0.1s ease',
        cursor: 'move',
      }}
    />
  );
}