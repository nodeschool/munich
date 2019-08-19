import React from 'react';
import PropTypes from 'prop-types';
import PeerigonLogo from '../images/peerigon.svg';
import '../index.scss';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
      }}
    >
      <main>{children}</main>
      <footer className="site-footer">
        <div className="section typeset">
          <div className="column column--trio">
            <h6>contact</h6>
            <ul>
              <li>
                <a href="https://www.meetup.com/nodeschool-munich">
                  meetup.com/nodeschool-munich
                </a>
              </li>
              <li>
                <a href="https://nodeschool.io/munich">nodeschool.io/munich</a>
              </li>
              <li>
                <a href="https://twitter.com/nodeschoolaux">@nodeschoolmuc</a>
              </li>
            </ul>
          </div>
          <div className="column column--trio">
            <h6>Questions? Want to help out?</h6>
            <p>
              Please open an issue on{' '}
              <a href="https://github.com/nodeschool/munich">GitHub</a> and join
              the discussion.
            </p>
          </div>
          <div className="column column--trio">
            <h6>sponsored by</h6>
            <p>
              <a style={{ background: 'none' }} href="https://peerigon.com">
                <PeerigonLogo
                  src="images/peerigon.svg"
                  width="273px"
                  height="80px"
                  alt="Peerigon - the JavaScript Company"
                />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
