/** @jsx jsx */

import { jsx } from '@emotion/core'
import facepaint from 'facepaint'
const breakpoints = [0, 640, 800, 1600]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

const Block = ({ yellow, children }) => {
  return (
    <div
      css={theme => ({
        margin: '0 auto',
        backgroundColor: yellow && theme.hoverColor,
        color: yellow && theme.white,
        a: {
          color: yellow && theme.white,
        },
      })}
    >
      <div
        css={mq({
          margin: '0 auto',
          position: 'relative',
          width: ['auto', 'auto', '94%', '64.7058823529rem'],
          padding: '2rem 5rem',
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default Block
