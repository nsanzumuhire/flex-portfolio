'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navIsFixed, setNavIsFixed] = useState(false);

  // Toggle mobile menu open/close state
  const toggleIsOpen = () => {
    setIsOpen(prev => !prev);
  };

  // Set navIsFixed state based on scroll position
  const handleScroll = () => {
    setNavIsFixed(window.pageYOffset > 70);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compute age based on a birth year of 1994
  const getAge = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const birthYear = 1994;
    const yearDiff = currentYear - birthYear;
    // Adjust age if current month is before October or if in October but before the 7th
    const hasHadBirthday = now.getMonth() >= 9 && now.getDate() >= 7;
    return hasHadBirthday ? yearDiff : yearDiff - 1;
  };

  return (
    <>
      {/* Main menu */}
      <div className={`menu ${navIsFixed ? 'menu--active' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="menu__wrapper d-none d-lg-block col-md-12">
              <nav>
                <ul>
                <li>
                <a onClick={() => handleScrollTo('about')} >
                 About
                </a>
              </li>
              <li>
                <a onClick={() => handleScrollTo('resume')}>
                 Resume
                </a>
              </li>
              <li>
                <a onClick={() => handleScrollTo('contact')}>
                Contact
                </a>
              </li>
                </ul>
              </nav>
            </div>
            <div className="menu__wrapper col-md-12 d-lg-none">
              <button type="button" className="menu__mobile-button" onClick={toggleIsOpen}>
                {!isOpen && (
                  <span>
                    <FontAwesomeIcon icon={faBars} aria-hidden="true" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Main menu */}

      {/* Mobile menu */}
      <div className={`mobile-menu d-lg-none ${isOpen ? 'active' : ''}`}>
        <div className="container">
          <div className="mobile-menu__close">
            <span onClick={toggleIsOpen}>
              <FontAwesomeIcon icon={faTimes} aria-hidden="true" />
            </span>
          </div>
          <nav className="mobile-menu__wrapper">
            <ul onClick={toggleIsOpen}>
              <li>
                <a onClick={() => handleScrollTo('about')} >
                 About
                </a>
              </li>
              <li>
                <a onClick={() => handleScrollTo('resume')}>
                 Resume
                </a>
              </li>
              <li>
                <a onClick={() => handleScrollTo('contact')}>
                Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Mobile menu */}

      {/* Header */}
      <header id="about" className="main-header">
        <div className="container">
          <div className="row personal-profile">
            <div className="col-sm-12 col-lg-5 personal-profile__avatar">
              <Image
                src="/assets/daniel_vogue_2.jpg"
                alt="avatar"
                width={260}
                height={260}
                priority
              />
            </div>
            <div className="col-sm-12 col-lg-7">
              <p className="personal-profile__name">Daniel Nsanzumuhire_</p>
              <p className="personal-profile__work">Software engineer_</p>
              <div className="personal-profile__contacts">
                <dl className="contact-list contact-list__opacity-titles">
                  <dt>A.k.a:</dt>
                  <dd>Flex_</dd>
                  <dt>Age:</dt>
                  <dd>{getAge()}</dd>
                  <dt>Phone:</dt>
                  <dd>
                    <Link href="tel:250784226895" passHref>
                      (+250) 784-226-895
                    </Link>
                  </dd>
                  <dt>Email:</dt>
                  <dd>
                    <Link href="mailto:nsanzudaniel59@gmail.com" passHref>
                      nsanzudaniel59@gmail.com
                    </Link>
                  </dd>
                  <dt>Address:</dt>
                  <dd>Kigali, Rwanda</dd>
                </dl>
              </div>
              <p className="flex gap-4">
                <Link href="https://github.com/nsanzumuhire" className='text-white opacity-20 hover:opacity-100 text-2xl' target="_blank"  passHref>
                    <FontAwesomeIcon icon={faGithub} width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/nsanzumuhire-daniel-687442144/" className='text-white opacity-20 hover:opacity-100 text-2xl' target="_blank"  passHref>
                    <FontAwesomeIcon icon={faLinkedin} width={24} height={24} />
                </Link>
                <Link target="_blank" href="https://twitter.com/nsanzumuhire_" className='text-white opacity-20 hover:opacity-100 text-2xl'passHref>
                    <FontAwesomeIcon icon={faTwitter} width={24} height={24}/>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* Header */}
    </>
  );
};

export default Header;

