/** @jsx jsx */
import { Component } from 'react'
// Import Spectacle Core tags
import { Deck, Heading, ListItem, List, Text, Image, Link, S } from 'spectacle'

import { Slide } from './components/Slide'

import createTheme from 'spectacle/lib/themes/default'
import { css, jsx } from '@emotion/core'

require('normalize.css')

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
  },
)

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
            src="assets/images/nodeschool-muc-logo.svg"
          ></Image>
        </Slide>
        <Slide branding footer transition={['fade']} bgColor="primary">
          <Text textColor="secondary">
            <S type="bold">NodeSchool</S> is an open source project run by
            volunteers with two goals
          </Text>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <List bulletStyle="−">
              <ListItem>High quality programming curriculum</ListItem>
              <ListItem>Host community learning events</ListItem>
            </List>
          </div>
          <Link href="https://nodeschool.io/about.html">
            <S textColor="tertiary" type="underline">
              https://nodeschool.io/about.html
            </S>
          </Link>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading size={4}>Worldwide</Heading>
          <Image src="assets/images/nodeschool-worldmap.png"></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading>
            <span aria-label="Thinking" role="img">
              🤔
            </span>
          </Heading>
          <Heading size={4}>How does it work?</Heading>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading size={4}>Self-guided Workshoppers</Heading>
          <Image src="assets/images/workshoppers.png"></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image src="assets/images/learnyounode-1.png"></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image height="700" src="assets/images/learnyounode-2.png"></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image height="700" src="assets/images/learnyounode-3.png"></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image src="assets/images/workshops-1.png"></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Image src="assets/images/workshops-2.png"></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading size={5}>More on</Heading>
          <Link href="https://nodeschool.io/">
            <S textSize={42} textColor="tertiary" type="underline">
              https://nodeschool.io/
            </S>
          </Link>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading size={5}>Ask for help, if you are stuck!</Heading>
          <Image src="assets/images/ask-a-mentor.jpg"></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading size={3}>Join us!</Heading>
          <Image
            height="400"
            src="assets/images/nodeschool-muc-logo.svg"
          ></Image>
        </Slide>
        <Slide branding footer transition={['fade']}>
          <Heading size={3} textColor="secondary">
            Support us!
          </Heading>
          <Text margin="30px 0 0 0" textColor="secondary">
            Help{' '}
            <S type="bold" textColor="tertiary">
              NodeSchool
            </S>{' '}
            by
          </Text>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <List bulletStyle="−">
              <ListItem>supporting others as a mentor</ListItem>
              <ListItem>sponsoring a location</ListItem>
              <ListItem>spreading the word</ListItem>
            </List>
          </div>
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
          <Image src="assets/images/event-sponsors/p7s1-logo.jpg" />
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
          <Image height="400" src="assets/images/sponsors/peerigon.svg" />
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
    )
  }
}
