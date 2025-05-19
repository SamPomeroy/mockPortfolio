import React from 'react';

function Contact() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#E3FDFD] mb-6">
        Contact
      </h1>
      <p className="text-lg text-[#F0EDE3] max-w-xl">
        Feel free to reach out via email at{' '}
        <a
          href="mailto:your.email@example.com"
          className="text-lime-400 hover:text-lime-300 underline"
        >
          samanthapomeroy38@gmail.com
        </a>{' '}
        or connect with me on{' '}
        <a
          href="https://www.linkedin.com/in/samantha-pomeroy-42a36a319/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lime-400 hover:text-lime-300 underline"
        >
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
}

export default Contact;
