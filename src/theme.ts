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
        fontFamily: '"Exo", "Roboto", "Helvetica", "Arial", "sans-serif"'

    }
})

theme = responsiveFontSizes(theme);

export default theme