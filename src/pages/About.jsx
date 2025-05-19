import React from 'react';

function About() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#E3FDFD] mb-6">
        About Me
      </h1>
      <p className="text-[#F0EDE3] max-w-2xl leading-relaxed">
        I’m a full stack web developer with a background in office management, outreach, and a
        drive to build meaningful tools that support second chances. This is my space to share my
        work, story, and the skills I’m growing.
      </p>
    </section>
  );
}

export default About;
