"use client";

import { useRef, useEffect } from 'react';
import { Orbitron } from 'next/font/google';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

const orbitron = Orbitron({ subsets: ['latin'] });

// -----------------
// ANIMATION VARIANTS
// -----------------

const slideUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.5, x: -50 },
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.6, type: "spring", bounce: 0.4 } }
};

export default function Home() {
  // --------- SECTION 1 OBSERVERS ---------
  const section1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force scroll to the absolute top on page load.
    // This prevents browser scroll-restoration from starting the user halfway down the page
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress: scroll1 } = useScroll({
    target: section1Ref,
    offset: ["start start", "end start"]
  });
  const scale1 = useTransform(scroll1, [0, 1], [1, 6]);
  const opacity1 = useTransform(scroll1, [0.5, 1], [1, 0]);


  // --------- SECTION 2 OBSERVERS ---------
  const section2Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scroll2 } = useScroll({
    target: section2Ref,
    offset: ["start start", "end start"]
  });
  const x2 = useTransform(scroll2, [0.4, 1], ["0vw", "150vw"]);
  const opacity2 = useTransform(scroll2, [0.7, 1], [1, 0]);

  return (
    <div className="bg-black text-white">

      {/* 1. Intro Section */}
      <div ref={section1Ref} className="h-[200vh] w-full relative z-30">
        <motion.section
          className="sticky top-0 h-screen w-full flex items-center justify-center bg-fixed bg-center bg-cover overflow-hidden"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2000&auto=format&fit=crop')",
            scale: scale1,
            opacity: opacity1,
            transformOrigin: "center center"
          }}
        >
          <div className="text-center z-10 px-6 mt-16">
            <h1 className={`${orbitron.className} text-6xl md:text-8xl font-bold text-green-400 mb-6 drop-shadow-[0_0_15px_rgba(74,222,128,0.8)]`}>
              CYBER_NET
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto border-l-4 border-green-400 pl-4 text-left">
              Welcome to the digital frontier. Initializing sequences... Data collection in progress...
            </p>
          </div>
        </motion.section>
      </div>


      {/* 2. Projects Section */}
      <div ref={section2Ref} className="h-[300vh] w-full relative z-20">
        <motion.section
          className="sticky top-0 h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
          style={{ x: x2, opacity: opacity2 }}
        >
          {/* Green Shadow Glow behind everything */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/30 blur-[150px] rounded-full pointer-events-none z-0"></div>

          <h2 className={`${orbitron.className} text-4xl md:text-5xl text-white mb-16 z-10 text-center tracking-widest drop-shadow-md`}>
            // OVERRIDE_PROJECTS
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-12 md:gap-24 relative z-10 px-6">

            {/* LEFT COLUMN: East-Facing Triangle of Overlapping Bubbles */}
            <motion.div
              className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] shrink-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={staggerContainer}
            >
              {/* Bubble 1: Top Left */}
              <motion.div
                variants={popIn}
                className="absolute top-0 left-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-white flex flex-col items-center justify-center text-black border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 hover:z-30 transition-transform z-10"
              >
                <span className={`${orbitron.className} font-bold text-lg md:text-xl mb-1`}>PROTOCOL_01</span>
                <span className="text-xs md:text-sm text-gray-500 font-sans uppercase">Image Slot</span>
              </motion.div>

              {/* Bubble 2: Bottom Left */}
              <motion.div
                variants={popIn}
                className="absolute bottom-0 left-0 w-48 h-48 md:w-56 md:h-56 rounded-full bg-white flex flex-col items-center justify-center text-black border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 hover:z-30 transition-transform z-10"
              >
                <span className={`${orbitron.className} font-bold text-lg md:text-xl mb-1`}>PROTOCOL_02</span>
                <span className="text-xs md:text-sm text-gray-500 font-sans uppercase">Image Slot</span>
              </motion.div>

              {/* Bubble 3: Middle Right (Apex of Triangle) */}
              <motion.div
                variants={popIn}
                className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 rounded-full bg-white flex flex-col items-center justify-center text-black border-4 border-white shadow-[0_0_30px_rgba(74,222,128,0.4)] hover:scale-105 hover:z-30 transition-transform z-20"
              >
                <span className={`${orbitron.className} font-bold text-lg md:text-xl mb-1`}>PROTOCOL_03</span>
                <span className="text-xs md:text-sm text-gray-500 font-sans uppercase">Image Slot</span>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Text and Button */}
            <motion.div
              className="text-left max-w-lg z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={slideLeft}
            >
              <p className="text-gray-300 mb-10 text-lg md:text-xl leading-relaxed border-l-4 border-green-500 pl-6">
                System logs indicate multiple successful deployments across varying operational vectors. View the full terminal output to access the detailed logs and architecture diagrams of these modules.
              </p>
              <Link href="/projects">
                <button className={`${orbitron.className} uppercase tracking-wider border-2 border-green-400 text-green-400 px-8 py-3 rounded hover:bg-green-400 hover:text-black transition-all shadow-[0_0_15px_rgba(74,222,128,0.5)]`}>
                  Access Project Directory
                </button>
              </Link>
            </motion.div>

          </div>
        </motion.section>
      </div>


      {/* 3. Me & Contact Section */}
      <motion.section
        className="min-h-screen relative flex flex-col items-center justify-center bg-fixed bg-center bg-cover py-20 px-6 z-10 w-full"
        style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,1)), url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop')" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="z-10 bg-black/60 backdrop-blur-md p-8 md:p-12 rounded-xl border border-green-500/30 flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full shadow-2xl"
          variants={slideUp}
        >
          {/* Profile White Circle */}
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white flex flex-col items-center justify-center text-black border-4 border-white shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform duration-500">
            <span className={`${orbitron.className} font-bold text-xl mb-2`}>SYS_ADMIN</span>
            <span className="text-sm text-gray-500 uppercase font-sans">Profile Slot</span>
          </div>

          <div className="text-left flex-1">
            <h2 className={`${orbitron.className} text-4xl text-green-400 mb-6 drop-shadow-md`}>COMMS_LINK_</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Ready to initialize a connection protocol? Transmit your data packets directly to my inbox or establish a node-to-node link for potential collaboration sequences. The channel is open.
            </p>
            <Link href="/contact">
              <button className={`${orbitron.className} uppercase tracking-wider border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(255,255,255,0.5)]`}>
                Initiate Ping
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.section>

    </div>
  );
}
