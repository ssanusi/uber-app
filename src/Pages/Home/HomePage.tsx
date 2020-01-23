import  React from 'react'
import AuthenticatedHomePage from './AuthenticatedHomePage'
import UnAuthenticatedHomePage from './UnAuthenticatedHomePage'

interface IProps {
   isLoggedIn : boolean
}

const HomePage : React.FC<IProps> = ({ isLoggedIn }) => isLoggedIn ? <AuthenticatedHomePage /> : <UnAuthenticatedHomePage />


export default HomePage