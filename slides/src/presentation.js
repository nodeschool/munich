/** @jsx jsx */
import { Component } from 'react';
import { Deck, Heading, ListItem, List, Text, Image, Link, S } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import { css, jsx } from '@emotion/core';
import 'normalize.css';

import { Slide } from './components/Slide';
import config from './config';

const { isProd, publicPath } = config;

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#E6BE02',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
        <Slide fill transition={['zoom']} bgColor="primary">
          <Image
            css={css`
              height: 700px;
            `}
            src={`${
              isProd ? publicPath : ''
            }/assets/images/nodeschool-muc-logo.svg`}
          ></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading size={4}>Self-guided Workshoppers</Heading>
          <Image
            src={`${isProd ? publicPath : ''}/assets/images/workshoppers.png`}
          ></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image
            src={`${isProd ? publicPath : ''}/assets/images/learnyounode-1.png`}
          ></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image
            height="700"
            src={`${isProd ? publicPath : ''}/assets/images/learnyounode-2.png`}
          ></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image
            src={`${isProd ? publicPath : ''}/assets/images/ask-a-mentor.jpg`}
          ></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading>
            <span aria-label="bow" role="img">
              🙇‍♀️🙇‍♂️
            </span>
          </Heading>
          <Heading size={5} textColor="secondary">
            Thank you to
          </Heading>
          <Heading size={5} textColor="secondary">
            our event sponsor!
          </Heading>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image
            src={`${
              isProd ? publicPath : ''
            }/assets/images/event-sponsors/p7s1-logo.jpg`}
          />
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading>
            <span aria-label="bow" role="img">
              🙇‍♀️🙇‍♂️
            </span>
          </Heading>
          <Heading size={5} textColor="secondary">
            Thank you to
          </Heading>
          <Heading size={5} textColor="secondary">
            our sponsors!
          </Heading>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image
            height="400"
            src={`${
              isProd ? publicPath : ''
            }/assets/images/sponsors/peerigon.svg`}
          />
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading>
            <span aria-label="coding" role="img">
              👨‍💻👩‍💻
            </span>
          </Heading>
          <Heading size={3} textColor="secondary">
            Happy coding!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
