import React from 'react'
import { Uber } from 'mdi-material-ui'
import { logoStyles } from './Logo.styles'

interface Props {

}

const Logo: React.FC<Props> = () => {
    const classes = logoStyles()
    return (
        <>
            <Uber className={classes.icon} />
        </>
    )
}

export default Logo
