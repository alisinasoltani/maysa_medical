import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';
import Footer from './Footer';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Ensure refs are available
    if (!sectionRef.current || !containerRef.current) {
      console.error('Refs are not assigned properly');
      return;
    }

    // Set initial position
    gsap.set(sectionRef.current, { x: 0 });

    // Create ScrollTrigger animation
    const animation = gsap.to(sectionRef.current, {
      x: () => -(sectionRef.current.offsetWidth - window.innerWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => `+=${sectionRef.current.offsetWidth - window.innerWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, // Refresh on window resize
        markers: false, // Set to true for debugging
      },
    });

    // Debug ScrollTrigger
    console.log('ScrollTrigger created:', animation.scrollTrigger);

    // Cleanup on unmount
    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen overflow-x-hidden">
      <section ref={sectionRef}
      className="h-screen w-[700vw] bg-gradient-to-l from-[#783198] from-10% via-[#9568E2] via-35% via-[#819CFF] via-46% via-[#EEBA38] via-77% to-[#F68C1F] to-100%
      flex flex-row gap-0 justify-start items-center">
        <Hero />
        {/* <div className='w-[500vw] h-screen flex justify-center items-center'>PLACEHOLDER</div> */}
        <Footer />
      </section>
    </div>
  );
};

export default ScrollSection;