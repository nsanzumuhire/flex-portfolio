'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="row">
      <div className="col-md-10">
        <h2 id="hello_header" className="section__title">About_</h2>
        <p className="section__description text-base">
          I am a Fullstack Software Engineer currently based in Kigali, Rwanda, with
          a proven track record of success in the information technology and
          services industry. I bring to the table a wealth of experience,
          particularly in the front-end development domain, coupled with
          comprehensive knowledge of various technologies and frameworks. My
          academic background includes a Bachelor's degree with a focus on Computer
          and Software Engineering. In my professional journey, I have excelled in
          crafting seamless and responsive user interfaces, leveraging my expertise
          in front-end technologies such as Angular, React and Vue.js. These
          frameworks have been pivotal in delivering engaging and user-friendly
          experiences across a range of projects.
          {seeMore && (
            <span>
              My commitment to staying at the forefront of web development trends
              ensures that I can provide innovative solutions that align with the
              ever-evolving demands of the industry. Complementing my proficiency in
              front-end development, I am well-versed in several robust backend
              frameworks, including Nest.js, ExpressJS, Spring-boot, and Laravel. This
              versatility allows me to undertake end-to-end development
              responsibilities, ensuring the creation of robust and scalable
              applications. My proficiency in backend technologies empowers me to
              build secure, efficient, and well-architected systems that meet the
              diverse needs of clients and end-users. The foundation of my skills is
              rooted in a comprehensive understanding of computer and software
              engineering principles. This academic background, combined with hands-on
              experience, enables me to approach software development challenges with
              a holistic and informed perspective. I am adept at translating complex
              requirements into functional and elegant solutions, demonstrating a
              commitment to delivering high-quality software products. I take pride in
              my ability to collaborate effectively within multidisciplinary teams,
              fostering a culture of innovation and efficiency. My communication
              skills, both written and verbal, contribute to seamless interactions
              with team members, stakeholders, and clients. By maintaining an open and
              collaborative approach, I ensure that project goals are clearly
              understood and achieved. In summary, my journey as a Fullstack Software
              Engineer reflects not only a proficiency in front-end and back-end
              technologies but also a commitment to continuous learning and
              adaptation. I am poised to contribute to projects that demand technical
              excellence, creativity, and a strategic approach to software
              development. My passion for staying ahead in the ever-evolving tech
              landscape, combined with a solid academic foundation, positions me as a
              valuable asset for projects seeking a seasoned and dedicated software
              engineering professional.
            </span>
          )}
          <span
            className="font-bold cursor-pointer"
            onClick={() => setSeeMore(!seeMore)}
          >
            { !seeMore ? "See more" : "See less" }
          </span>
        </p>
        <Link href="/assets/updated_cv.pdf" passHref target="_blank" className="section_btn site-btn">
            <FontAwesomeIcon icon={faDownload} /> get my cv
        </Link>
      </div>
    </div>
  );
};

export default Hero;
