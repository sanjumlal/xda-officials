import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Assets from './Pages/Assets.jsx';

import Socials from './Pages/Socials.jsx';



import FlipCard from './components/FlipCard.jsx';
import Founder from './assets/members/Leo.png';
import Leader1 from './assets/members/Sonny.png';
import Leader2 from './assets/members/Zaicaz.png';
import Coleader1 from './assets/members/Bosskalan.png';
import Coleader2 from './assets/members/Chakko.png';
import Coleader3 from './assets/members/Willy.png';
import Guardian from './assets/members/Pulickal.png';
import Members1 from './assets/members/akku.png';
import Members2 from './assets/members/Coleman.png';
import Members3 from './assets/members/David.png';
import Members4 from './assets/members/Godzin.png';
import Members5 from './assets/members/Josutty.png';
import Members6 from './assets/members/Nozy.png';
import Members7 from './assets/members/Peter.png';
import Members8 from './assets/members/Riyan.png';
import Members9 from './assets/members/Sneaky.png';
import Members10 from './assets/members/Tom.png';
import Members11 from './assets/members/Valrick.png';
import Members12 from './assets/members/Vijay.png';
import Members13 from './assets/members/Jonsnow.png';
import Members14 from './assets/members/Vincent.png';
import Navbar from './components/Navbar';

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white px-4">
        <section className="max-w-screen-lg mx-auto text-center">
          <h6 className="font-antipasto text-white text-sm tracking-[0.3em] uppercase text-center">
            X T R E M E&nbsp;&nbsp;D A N G E R O U S&nbsp;&nbsp;A D O L O K A M
          </h6>

          <p className="font-antipasto text-sm text-gray-300 mb-12 tracking-wide">
            Hail the darkness of XDA
          </p>

          {/* About Section */}
          <div className="mb-16 text-center">
            <h2 className="font-antipasto text-gray-400 text-3xl uppercase mb-6">About</h2>
            <p className="font-antipasto text-lg text-gray-400 mb-3">
              XDA is a gang formed by <span className="text-white font-bold">Zodiac Leo</span> in 2021 inside a roleplay game.
            </p>
          </div>

          {/* Founder */}
          <div className="mb-16">
            <h3 className="font-antipasto text-xl text-gray-200 uppercase mb-4">Founder</h3>
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <FlipCard image={Founder} title="Zodiac Leo" description="Founder of XDA" />
              </div>
            </div>
          </div>

          {/* Leaders */}
          <div className="mb-16">
            <h3 className="font-antipasto text-xl text-gray-200 uppercase mb-4">Leaders</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="w-full max-w-xs"><FlipCard image={Leader1} title="Sonny" description="Leader" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Leader2} title="Zaicaz" description="Leader" /></div>
            </div>
          </div>

          {/* Co-Leaders */}
          <div className="mb-16">
            <h3 className="font-antipasto text-xl text-gray-200 uppercase mb-4">Co-Leaders</h3>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="w-full max-w-xs"><FlipCard image={Coleader3} title="Willy" description="Co-Leader" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Coleader1} title="Bosskalan" description="Co-Leader" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Coleader2} title="Chakko" description="Co-Leader" /></div>
            </div>
          </div>

          {/* Guardian */}
          <div className="mb-16">
            <h3 className="font-antipasto text-xl text-gray-200 uppercase mb-4">Guardian</h3>
            <div className="flex justify-center">
              <div className="w-full max-w-xs">
                <FlipCard image={Guardian} title="Pulickal" description="Guardian of XDA" />
              </div>
            </div>
          </div>

          {/* Members */}
          <div className="mb-16">
            <h3 className="font-antipasto text-xl text-gray-200 uppercase mb-4">Members</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full max-w-xs"><FlipCard image={Members1} title="Akku" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members2} title="Coleman" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members3} title="David" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members4} title="Godzin" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members5} title="Josutty" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members6} title="Nozy" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members7} title="Peter" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members8} title="Riyan" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members9} title="Sneaky" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members10} title="Tom" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members11} title="Valrick" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members12} title="Vijay" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members13} title="Jonsnow" description="Member" /></div>
              <div className="w-full max-w-xs"><FlipCard image={Members14} title="Vincent" description="Member" /></div>
            </div>
          </div>
        </section>

       <footer className="border-t border-white/10 mt-16">
  <div className="max-w-screen-lg mx-auto px-4 py-6 text-center text-gray-400">
    <p className="text-sm font-antipasto tracking-wider">
      © {new Date().getFullYear()} XDA - Xtreme Dangerous Adolokam. All rights reserved.
    </p>
 
  </div>
</footer>

      </div>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/socials" element={<Socials />} />
      <Route path="/assets" element={<Assets />} />

      
    </Routes>
  );
}

export default App;
