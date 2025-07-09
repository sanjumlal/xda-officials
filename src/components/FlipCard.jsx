import React, { useState } from 'react';

export default function FlipCard({ image, title, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-[280px] rounded-xl transition-transform duration-700 transform-style preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md shadow-xl overflow-hidden backface-hidden">
          <div className="relative w-full h-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-xl"
            />

            {/* Bubble Shine Overlay */}
            <div className="absolute inset-0 rounded-xl bg-white/10 pointer-events-none" />

            {/* Shiny Gradient Effect */}
            <div className="absolute top-0 left-0 w-full h-full rounded-xl pointer-events-none overflow-hidden">
              <div className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 bg-white opacity-10 rounded-full filter blur-2xl rotate-45"></div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-white opacity-5 rounded-full filter blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl backdrop-blur-lg shadow-lg p-4 text-white flex flex-col justify-center items-center rotate-y-180 backface-hidden">
          <h3 className="text-lg font-bold mb-2 font-antipasto uppercase tracking-wide">
            {title}
          </h3>
          <p className="text-sm text-center text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}
