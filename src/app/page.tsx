import Hero from '@/components/hero';
import Resume from '@/components/resume';
import React from 'react';

export default function Home () {
  return (
    <>
      {/* Hello Section */}
      <section id="hello" className="container section">
        <Hero />
      </section>

      {/* Resume Section */}
      <section id="resume" className="container section -mt-20 md:mt-0">
        <Resume />
      </section>
    </>
  );
};


