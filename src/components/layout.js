/** @jsx jsx */
import PropTypes from 'prop-types'
import { Global, css, jsx } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import theme from '../theme'
import PeerigonLogo from '../images/peerigon.svg'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={theme => css`
          html,
          body {
            padding: 0;
            background-color: ${theme.white};
            min-height: 100%;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h3 {
            text-shadow: 1px 1px rgba(0, 0, 0, 0.24);
          }
          a {
            color: ${theme.linkColor};
            font-weight: bold;
            text-decoration: underline;
            transition: color 0.1s, background-color 0.1s;
            &:hover,
            &:active,
            &:focus {
              color: ${theme.hoverColor};
              text-decoration: none;
            }
          }
          section {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          ul {
            list-style-type: none;
            margin: 0;
          }
        `}
      ></Global>
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer css={{ textAlign: 'center' }}>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              [`@media (min-width: 800px)`]: {
                flexDirection: 'row',
                alignItems: 'flex-start',
              },
            }}
          >
            <div css={{ padding: '0 2rem' }}>
              <h3>contact</h3>
              <ul>
                <li>
                  <a href="https://www.meetup.com/nodeschool-munich">
                    meetup.com/nodeschool-munich
                  </a>
                </li>
                <li>
                  <a href="https://nodeschool.io/munich">
                    nodeschool.io/munich
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/nodeschoolmuc">@nodeschoolmuc</a>
                </li>
              </ul>
            </div>
            <div css={{ padding: '0 2rem' }}>
              <h3>Questions? Want to help out?</h3>
              <p>
                Please open an issue on{' '}
                <a href="https://github.com/nodeschool/munich">GitHub</a> and
                join the discussion.
              </p>
            </div>
            <div css={{ padding: '0 2rem' }}>
              <h3>sponsored by</h3>
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
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
