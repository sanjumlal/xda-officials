import React, { useRef, useEffect, useState } from 'react';

export default function GlareHover({
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
}) {
  const containerRef = useRef(null);
  const glareRef = useRef(null);
  const [playedOnce, setPlayedOnce] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const glare = glareRef.current;

    if (!container || !glare) return;

    const handleMouseMove = (e) => {
      if (playOnce && playedOnce) return;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = x - centerX;
      const deltaY = y - centerY;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + glareAngle;

      glare.style.background = `linear-gradient(${angle}deg, rgba(255,255,255,${glareOpacity}) 0%, transparent 80%)`;
      glare.style.width = `${glareSize}px`;
      glare.style.height = `${glareSize}px`;
      glare.style.opacity = 1;

      if (playOnce) setPlayedOnce(true);
    };

    const handleMouseLeave = () => {
      glare.style.opacity = 0;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [glareOpacity, glareAngle, glareSize, transitionDuration, playOnce, playedOnce]);

  return (
    <div
      ref={containerRef}
      className="relative group"
      style={{ perspective: '1000px', transition: `${transitionDuration}ms` }}
    >
      <div
        ref={glareRef}
        className="absolute top-0 left-0 pointer-events-none rounded-lg transition-opacity duration-500"
        style={{ opacity: 0 }}
      />
      {children}
    </div>
  );
}
