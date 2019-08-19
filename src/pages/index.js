import React from 'react';
import NodeSchoolLogo from '../images/nodeschool-munich-logo.svg';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="NodeSchool Munich" />
      <header className="site-header">
        <div className="section typeset">
          <div className="single-measure">
            <h1>NodeSchool Munich</h1>
            <p>Open source workshops that teach web software skills.</p>
            <NodeSchoolLogo
              className="logo"
              alt="nodeschool-munich-logo"
              title="NodeSchool Munich Logo"
            ></NodeSchoolLogo>
          </div>
        </div>
      </header>
      <section>
        <div className="learn-coding">
          <div className="section typeset">
            <div className="single-measure">
              <h3>Learn Coding</h3>

              <p>
                Du wolltest schon immer mal programmieren? Oder willst endlich
                mal Node.js ausprobieren? Nimm teil und lerne Programmieren mit
                Node.js ganz einfach - versprochen! Es hilft, wenn du schon mal
                etwas mit JavaScript gemacht hast - wenn nicht, komm trotzdem!
                Wir helfen gern.
              </p>

              <p>
                Join us and learn coding with us. You are going to learn the
                basics of Node.js. It's a plus if you know some JavaScript
                beforehand, but if not we can help you out.
              </p>
            </div>
          </div>
        </div>

        <div className="self-guided">
          <div className="section typeset">
            <div className="single-measure">
              <h3>Self-Guided</h3>

              <p>
                Du lernst mit kleinen Programmen, die du selbst schreibst -
                keine langweiligen Vorträge! Alle Aufgaben sind Open Source und
                online unter nodeschool.io verfügbar, so kannst du auch ganz
                einfach nach der NodeSchool selber weiter lernen.
              </p>

              <p>
                You will go through a set of self-paced challenges. No boring
                talks. All challenges are Open Source and available online on{' '}
                <a href="http://nodeschool.io/">nodeschool.io</a>. This means
                you can continue learning after the event.
              </p>
            </div>
          </div>
        </div>

        <div className="for-everyone">
          <div className="section typeset">
            <div className="single-measure">
              <h3>For Everyone</h3>

              <p>
                Wir finden programmieren großartig und möchten ein Event für
                alle machen. Das bedeutet, wir freuen uns über alle Teilnehmer -
                ganz gleich wie fit ihr schon mit JavaScript oder Node.js seid.
                Wir erwarten aber auch, dass alle genauso großartig zueinander
                sind und unseren{' '}
                <a href="https://github.com/nodeschool/munich/blob/gh-pages/code_of_conduct.md">
                  Code of Conduct
                </a>{' '}
                respektieren.
              </p>

              <p>
                We think coding is awesome and everyone should feel welcome at
                our event. This includes that we are expecting all participants
                to be awesome to each other and respect the{' '}
                <a href="https://github.com/nodeschool/munich/blob/gh-pages/code_of_conduct.md">
                  Code of Conduct
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="attend">
          <div className="section typeset">
            <div className="single-measure">
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
