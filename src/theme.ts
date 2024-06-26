import { extendTheme } from '@chakra-ui/react'

const config = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
})

const customTheme = extendTheme({
    semanticTokens: {
        colors: {
            bg: {
                default: '#1E2428',
                _dark: '#ECEFF4',
            },
        },
    },
    styles: {
        global: {
            'html, body': {
                fontFamily: 'mundial, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
            },
        },
    },
})

const theme = extendTheme(config, customTheme)

export default theme
