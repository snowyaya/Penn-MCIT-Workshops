import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      background:
        "radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 70%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 70%), \n    radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 70%)"
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 30,
        textUnderlineOffset: 6,
        textDecorationColor: '#DDDDDD',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#DDDDDD', '#DDDDDD')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  // heading: 'M PLUS Rounded 1c'
  heading: "Montserrat",
  body: "Montserrat"

}

const colors = {
  grassTeal: '#A68DAD'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme