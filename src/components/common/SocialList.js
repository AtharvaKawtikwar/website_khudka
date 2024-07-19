import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faTwitter,
  faDev,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { StyledSocialList, StyledButton } from './styles';

export default function SocialList(props) {
  return (
    <StyledSocialList {...props}>
      <li>
        <StyledButton
          as="a"
          href="https://github.com/AtharvaKawtikwar"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://x.com/atharvakawtikw1"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://dev.to/atharva_kawtikwar_1cfc48c"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDev} />
        </StyledButton>
      </li>
      <li>
        <StyledButton
          as="a"
          href="https://in.linkedin.com/in/atharvakawtikwar"
          aria-label="github repo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </StyledButton>
      </li>
    </StyledSocialList>
  );
}
