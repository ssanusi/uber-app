import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


let theme = createMuiTheme({
    palette: {
        primary : {
            main: '#000000'
        },
        secondary : {
            main : '#FFFFFF'
        }

    },
    typography:{
        fontFamily: '"sans-serif"',
        fontWeightRegular: "normal"

    }
})

theme = responsiveFontSizes(theme);

export default theme