import React from 'react';

import { Main } from '@layout';
import { Seo } from '@common';
import { StyledAbout } from '@about/styles';

export default function AboutPage() {
  return (
    <Main>
      <Seo title="About" description="About Us page" />
      <StyledAbout>
        <h1>About</h1>
        <div>
          {/* <div className="section starter">
            <h2>Gatsby Emotion Tailwind Starter</h2>
            <p>
              A Gatsby starter combining some of my favourite libraries to
              create an awesome template to build your own{' '}
              <a href="https://jamstack.org/">JAMStack</a> website!
            </p>
          </div> */}
          <div className="section tech">
            <h2>Experience</h2>
            <ul>
              <li>
                
                 JIO PLATFORMS LTD.
                 <p>May 2024-July 2024</p>
              </li>
              <li>
                <a
                  className="emotion"
                  href="https://emotion.sh/docs/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Emotion:
                </a>{' '}
                Library designed for writing css styles with JavaScript.
              </li>
              <li>
                <a
                  className="tailwind"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS:
                </a>{' '}
                CSS framework that gives you all of the building blocks you need
                to build bespoke designs with low-level utility classes.
              </li>
            </ul>
          </div>
          <div className="section features">
            <h2>Education</h2>
            <ul>
              <li>Mukesh Patel School of Techology Management & Engineering</li>
              <p>2022-2026</p>
              <li>Fr Agnel Multipurpose School</li>
              <p>2007-2022</p>
              
              {/* <li>
                Host your own static website on{' '}
                <a
                  href="https://www.netlify.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Netlify
                </a>
                ,{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
                </a>
                ,{' '}
                <a
                  href="https://surge.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Surge
                </a>
                , and many more!
              </li> */}
            </ul>
          </div>
        </div>
      </StyledAbout>
    </Main>
  );
}
