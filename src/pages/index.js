/** @jsx jsx */

import { css, jsx } from '@emotion/core'
import facepaint from 'facepaint'

import NodeSchoolLogo from '../images/nodeschool-munich-logo.svg'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Block from '../components/block'

const breakpoints = [0, 640, 800, 1600]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="NodeSchool Munich" />
      <header
        css={mq({
          padding: ['1rem 0', '1.5rem 0', '2rem 0'],
          textAlign: 'center',
        })}
      >
        <h1>NodeSchool Munich</h1>
        <p>Open source workshops that teach web software skills.</p>
        <NodeSchoolLogo
          css={mq({
            display: 'block',
            margin: '0 auto',
            width: ['35%', '25%', '20%', '20%', '15%'],
          })}
          alt="nodeschool-munich-logo"
          title="NodeSchool Munich Logo"
        ></NodeSchoolLogo>
      </header>
      <section>
        <Block yellow>
          <h3>Learn Coding</h3>
          <p>
            Du wolltest schon immer mal programmieren? Oder willst endlich mal
            Node.js ausprobieren? Nimm teil und lerne Programmieren mit Node.js
            ganz einfach - versprochen! Es hilft, wenn du schon mal etwas mit
            JavaScript gemacht hast - wenn nicht, komm trotzdem! Wir helfen
            gern.
          </p>
          <p>
            Join us and learn coding with us. You are going to learn the basics
            of Node.js. It's a plus if you know some JavaScript beforehand, but
            if not we can help you out.
          </p>
        </Block>
        <Block>
          <h3>Self-Guided</h3>

          <p>
            Du lernst mit kleinen Programmen, die du selbst schreibst - keine
            langweiligen Vorträge! Alle Aufgaben sind Open Source und online
            unter nodeschool.io verfügbar, so kannst du auch ganz einfach nach
            der NodeSchool selber weiter lernen.
          </p>

          <p>
            You will go through a set of self-paced challenges. No boring talks.
            All challenges are Open Source and available online on{' '}
            <a href="http://nodeschool.io/">nodeschool.io</a>. This means you
            can continue learning after the event.
          </p>
        </Block>
        <Block yellow>
          <h3>For Everyone</h3>

          <p>
            Wir finden programmieren großartig und möchten ein Event für alle
            machen. Das bedeutet, wir freuen uns über alle Teilnehmer - ganz
            gleich wie fit ihr schon mit JavaScript oder Node.js seid. Wir
            erwarten aber auch, dass alle genauso großartig zueinander sind und
            unseren{' '}
            <a href="https://github.com/nodeschool/munich/blob/gh-pages/code_of_conduct.md">
              Code of Conduct
            </a>{' '}
            respektieren.
          </p>

          <p>
            We think coding is awesome and everyone should feel welcome at our
            event. This includes that we are expecting all participants to be
            awesome to each other and respect the{' '}
            <a href="https://github.com/nodeschool/munich/blob/gh-pages/code_of_conduct.md">
              Code of Conduct
            </a>
            .
          </p>
        </Block>
        <Block>
          <h3>Interested in learning Node.js?</h3>

          <p>
            Head over to{' '}
            <a href="https://www.meetup.com/nodeschool-munich">
              https://www.meetup.com/nodeschool-munich
            </a>
            , join our community and stay informed when the next NodeSchool
            Munich will be!
          </p>

          <br />
          <p>
            🚀{' '}
            <a href="https://github.com/nodeschool/munich/blob/gh-pages/README.md#getting-started">
              Getting started
            </a>
          </p>
        </Block>
      </section>
    </Layout>
  )
}

export default IndexPage
