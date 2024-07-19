import React from 'react';

import { Main } from '@layout';
import { Seo } from '@common';
import { Hero, CardGrid } from '@home';

export default function IndexPage() {
  return (
    <Main>
      <Seo  />
      <Hero />
      <CardGrid />
    </Main>
  );
}
