import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="background">
      <div id="contact" className="container section">
        <div className="row">
          <div className="col-md-12">
            <p id="contacts_header" className="section__title">
              Get in touch_
            </p>
          </div>
        </div>
        <div className="row contacts">
          <div className="col-12">
            <div className="contacts__list">
              <dl className="contact-list">
                <dt>Phone:</dt>
                <dd>
                  <Link href="tel:250784226895">
                    (+250) 784-226-895
                  </Link>
                </dd>
                <dt>Email:</dt>
                <dd>
                  <Link href="mailto:nsanzudaniel59@gmail.com">
                    nsanzudaniel59@gmail.com
                  </Link>
                </dd>
              </dl>
            </div>
            <div className="flex w-100 ">
              <p className="text-gray-100 text-sm">
                  Built by 👽 Daniel Nsanzumuhire_
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
