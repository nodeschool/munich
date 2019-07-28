import Typography from 'typography'
import theme from '../theme'

const typography = new Typography({
  baseFontSize: theme.baseFontSize,
  baseLineHeight: theme.baseLineHeight,
  headerFontFamily: theme.fonts,
  bodyFontFamily: theme.fonts,
})
export default typography
