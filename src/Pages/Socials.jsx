import React from 'react';
import { LuInstagram, LuYoutube, LuBan } from 'react-icons/lu';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const people = {
  founder: [{ name: 'Zodiac Leo' }],
  leaders: [
    { name: 'Sonny', instagram: '_sinsaog', youtube: 'https://www.youtube.com/@sonnyespado' },
    { name: 'Zaicaz', instagram: 'leozaicaz' },
  ],
  coLeaders: [
    { name: 'Willy', instagram: 'not.wayne7', youtube: 'https://www.youtube.com/@flux6byte' },
    { name: 'Chakko', instagram: 'sath_a_n' },
    { name: 'Bosskalan', instagram: '4fzal_____' },
  ],
  guardian: [
    { name: 'Pulickal', instagram: 'xda_pulickal_raman1', youtube: 'https://www.youtube.com/@PULICKALGAMING' },
  ],
  membersTop: [
    { name: 'Valrick', youtube: 'https://www.youtube.com/@valrickshorts33' },
    { name: 'Vijay', instagram: 'rono_x_o_' },
    { name: 'Vincent', instagram: '__rosh._' },
    { name: 'Godzin', instagram: 'godzin.gfx', youtube: 'https://www.youtube.com/@Im.godzin' },
    { name: 'Nozy', youtube: 'https://www.youtube.com/@darwiney' }
  ],
  membersMid: [
    { name: 'Tommy' },
    { name: 'Akku' , youtube: 'https://www.youtube.com/@papagaming9052' },
    { name: 'Coleman' , youtube: 'ecl_ipso' },
    { name: 'David' , youtube: 'https://www.youtube.com/@beast_inten' },
    { name: 'Josutty' , instagram :'_.nithin._11' }
  ],
  membersBottom: [
    { name: 'Peter' },
    { name: 'Riyan' },
    { name: 'Sneaky' , youtube:'https://www.youtube.com/@WatAshi-d6r', instagram:'igl_watashi' },
    { name: 'Tom', youtube:'https://www.youtube.com/@14k_Triad' },
    { name: 'JonSnow' , instagram:'_dark__professor' }
  ]
};

const SocialRow = ({ label, icon, url }) => (
  <div className="flex items-center justify-between text-sm text-gray-300">
    <div className="flex items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
    {url ? (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:underline"
      >
        Visit
      </a>
    ) : (
      <span className="text-gray-500 flex items-center gap-1"><LuBan className="inline" /> Unavailable</span>
    )}
  </div>
);

const renderPerson = ({ name, instagram, youtube }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-4 rounded-lg border border-white/10 hover:border-white/20 hover:shadow-lg bg-white/5 backdrop-blur-sm text-left space-y-2"
  >
    <h3 className="text-white text-md font-antipasto tracking-wide text-center">{name}</h3>
    <div className="mt-3 space-y-2">
      <SocialRow
        label="Instagram"
        icon={<LuInstagram className="text-pink-500" />}
        url={instagram ? `https://instagram.com/${instagram}` : null}
      />
      <SocialRow
        label="YouTube"
        icon={<LuYoutube className="text-red-500" />}
        url={youtube}
      />
    </div>
  </motion.div>
);

const Section = ({ title, color = 'text-white', peopleArray = [], cols = 1, dividerAfter = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-14"
  >
    {title && <h2 className={`text-xl uppercase font-antipasto mb-6 ${color}`}>{title}</h2>}
    <div className={`grid grid-cols-1 sm:grid-cols-${cols} gap-6`}>{peopleArray.map(renderPerson)}</div>
    {dividerAfter && <hr className="border-white/10 my-8 w-3/4 mx-auto" />}
  </motion.div>
);

export default function Socials() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 px-4 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white font-antipasto overflow-hidden">
        <section className="max-w-screen-lg mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl tracking-[0.3em] uppercase mb-14 whitespace-nowrap font-antipasto"
          >
            <span className="text-white">X T R E M E&nbsp;</span>
            <span className="text-gray-400">D A N G E R O U S&nbsp;</span>
            <span className="text-white">A D O L O K A M</span>
          </motion.h1>

          <Section title="Founder" color="text-gray-300" peopleArray={people.founder} cols={1} dividerAfter />
          <Section title="Leaders" color="text-blue-400" peopleArray={people.leaders} cols={1} dividerAfter />
          <Section title="Co-Leaders" color="text-purple-400" peopleArray={people.coLeaders} cols={1} dividerAfter />
          <Section title="Guardian" color="text-green-400" peopleArray={people.guardian} cols={1} dividerAfter />
          <Section title="Members" color="text-yellow-400" peopleArray={people.membersTop} cols={3} dividerAfter />
          <Section title="" peopleArray={people.membersBottom} cols={3} dividerAfter />
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
