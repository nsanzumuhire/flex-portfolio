'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

// Import resume data
import resumeData from '../../public/assets/resume.json';

const Hero = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { profile } = resumeData;

  return (
    <div className="row">
      <div className="col-md-10">
        <h2 id="hello_header" className="section__title">About_</h2>
        <p className="section__description text-base">
          {profile}
        </p>
        <Link href="/assets/updated_cv.pdf" passHref target="_blank" className="section_btn site-btn">
            <FontAwesomeIcon icon={faDownload} /> get my cv
        </Link>
      </div>
    </div>
  );
};

export default Hero;
