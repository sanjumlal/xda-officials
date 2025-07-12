import React from 'react';
import Navbar from '../components/Navbar';
import hoodie from '../assets/xda-hoodie.png';
import tshirt from '../assets/xda-tshirt.png';
import tridentImage from '../assets/trident.png';
import { Fade } from 'react-awesome-reveal';
import { Helmet } from 'react-helmet';
import GlareHover from '../components/GlareHover'; // CSS-based version

const SectionDivider = () => (
  <hr className="border-gray-700 my-16 opacity-20" />
);

function AssetShowcase({ title, description, image, video, themeColor, imagePosition = 'right' }) {
  const isVideo = Boolean(video);
  const textColorClass = `text-${themeColor}-400`;
  const containerFlexDirection = imagePosition === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <Fade triggerOnce direction="up">
      <div className={`flex flex-col items-center gap-12 ${containerFlexDirection}`}>
        <div className="lg:w-1/2">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={250}
            transitionDuration={800}
            playOnce={false}
            className="w-full"
            style={{ height: 'auto' }}
          >
            {isVideo ? (
              <video
                src={video}
                autoPlay
                muted
                loop
                className="rounded-lg shadow-xl w-full object-cover hover:scale-105 transition-transform duration-300"
                preload="metadata"
              />
            ) : (
              <img
                src={image}
                alt={title}
                className="rounded-lg shadow-xl w-full object-cover transition duration-300 transform hover:scale-105 hover:grayscale"
                loading="lazy"
              />
            )}
          </GlareHover>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300 uppercase tracking-widest font-antipasto">
            XDA Signature
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-wider ${textColorClass} font-antipasto uppercase`}>
            {title}
          </h2>
          <p className="text-gray-200 leading-relaxed text-base sm:text-lg font-antipasto tracking-wide">
            {description}
          </p>
        </div>
      </div>
    </Fade>
  );
}

export default function Assets() {
  return (
    <>
      <Helmet>
        <title>XDA | Assets</title>
        <meta name="description" content="Explore XDA's Trident car, Hoodie, T-Shirt and more." />
      </Helmet>
      <Navbar />
      <div className="min-h-screen pt-28 bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white font-antipasto">
        <section className="max-w-screen-xl mx-auto px-4 space-y-32">

          {/* HEADER */}
          <Fade triggerOnce direction="down">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-antipasto tracking-[0.3em] uppercase text-white">
                X T R E M E &nbsp; D A N G E R O U S &nbsp; A S S E T S
              </h1>
              <p className="mt-4 text-gray-400 text-sm tracking-wide font-antipasto">
                Showcase of what we ride, wear, and represent.
              </p>
            </div>
          </Fade>

          {/* Trident */}
          <AssetShowcase
            title="Trident"
            description="The signature XDA beast on wheels. The Trident is built for domination with unmatched custom styling and presence."
            image={tridentImage}
            themeColor="blue"
            imagePosition="right"
          />

          <SectionDivider />

          {/* Hoodie */}
          <AssetShowcase
            title="XDA Hoodie"
            description="A symbol of loyalty and darkness. The official XDA hoodie blends rebellion with iconic black and bold trims."
            image={hoodie}
            themeColor="pink"
            imagePosition="left"
          />

          <SectionDivider />

          {/* T-Shirt */}
          <AssetShowcase
            title="XDA T-Shirt"
            description="Ride casual, ride bold. The XDA tee is made for those who carry the gang spirit on and off the game."
            image={tshirt}
            themeColor="yellow"
            imagePosition="right"
          />

          <SectionDivider />

          {/* Cinematic Section */}
          <Fade triggerOnce direction="up">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 font-antipasto uppercase tracking-wider">
                Cinematic Showcase
              </h2>
              <p className="text-gray-300 text-sm font-antipasto tracking-wide">
                Visuals that capture the soul of XDA’s assets in motion.
              </p>

              {/* Cinematic Video 1 */}
              <div className="w-full relative pb-[56.25%] max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://player.cloudinary.com/embed/?cloud_name=dciwgjqae&public_id=Showcase-Video-Zodiac_hmvsjb&profile=cld-looping"
                  title="XDA Cinematic Zodiac Showcase"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Cinematic Video 2 */}
              <div className="w-full relative pb-[56.25%] max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl mt-8">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://player.cloudinary.com/embed/?cloud_name=dciwgjqae&public_id=Showcase_Video_h1hfjv&profile=cld-looping"
                  title="XDA Cinematic Showcase 2"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Fade>
        </section>

        {/* Footer */}
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
