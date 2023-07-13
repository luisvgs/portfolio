import { extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#202023', '#202023')(props)
    }
  })
}

const components = {
  Text: {
      baseStyle: props => ({
      color: mode('#f0e7db', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Heading: {
      baseStyle: props => ({
      color: mode('#f0e7db', '#ff63c3')(props),
      textUnderlineOffset: 3,
    })
  },
  Link: {
      baseStyle: props => ({
      color: mode('#f0e7db', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
const theme = extendTheme({ config, styles, components});

export default theme;
