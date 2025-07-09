import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function SocialCard({ name, instagram, youtube }) {
  return (
    <div className="text-center my-4">
      <h6 className="font-antipasto text-white text-sm tracking-[0.3em] uppercase">
        {name}
      </h6>

      <div className="mt-2 flex justify-center space-x-4 text-lg">
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-500"
            title="Instagram"
          >
            <FaInstagram />
          </a>
        )}
        {youtube && (
          <a
            href={youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600"
            title="YouTube"
          >
            <FaYoutube />
          </a>
        )}
      </div>
    </div>
  );
}
