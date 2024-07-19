import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { StyledCardGrid, StyledCard } from './styles';

export default function CardGrid() {
  return (
    <StyledCardGrid>
      <section>
        <h2>My Projects</h2>
        <p>
          My projects are a mix of blog posts, tech articles, case studies presented in websites and applications.
        </p>
        <ul className="cards">
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/icon/simplilegal.jpeg" alt="Simplilegal" />
            <div className="card-content">
              <span className="type">Tech</span>
              <h3>Simplilegal</h3>
              <p>
              Simplilegal is a fine-tuned Llama2 - 7b model on a dataset consisting of legal documents and advisories. 
The model acts as an assistant to the user providing with coherent advises and sample documents according to the user’s 
prompt.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/icon/Greensprout.jpeg" alt="Pug" />
            <div className="card-content">
              <span className="type">tech</span>
              <h3>GreenSprout</h3>
              <p>
              GreenSprout developed a working model where we would encourage in donating money to plant trees and the same 
money would be given to volunteers who would volunteer to plant trees and provide them with necessary 
materials.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/icon/EVA2Z.jpeg" alt="EV" />
            <div className="card-content">
              <span className="type">Tech</span>
              <h3>EV A2Z</h3>
              <p>
              EV A2Z Developed a working model which helped in locating nearest EV station. It also helped people to choose the 
              best EV they can buy depending on their location and mode of use. 
              </p>
            </div>
          </StyledCard>
          {/* <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-4.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">blog</span>
              <h3>Dui sapien eget mi proin sed</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ipsum dolor sit amet consectetur. Et malesuada fames ac turpis
                egestas.
              </p>
            </div>
          </StyledCard>
          <StyledCard as="li" title={`Project`} key={`Card`}>
            <StaticImage src="../../images/pugs/pug-5.jpg" alt="Pug" />
            <div className="card-content">
              <span className="type">learning</span>
              <h3>Gravida rutrum quisque non tellus orci ac auctor</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
                viverra aliquet eget sit amet tellus cras.
              </p>
            </div>
          </StyledCard> */}
        </ul>
      </section>
    </StyledCardGrid>
  );
}
