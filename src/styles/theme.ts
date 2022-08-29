import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        highlight: {
            '100': '#FFBA08',
            '50': '#ffba0880'
        },
        textColor: {
            '100': '#47585B',
            '50': '#F5F8FA'
        },
        info: {
            '100': '#999999',
            '50': '#DADADA'
        }
    },
    fonts: {
        // heading: 'Poppins',
        // body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'textColor.50',
                color: 'textColor.100'
            }
        }
    }
})