import  React from 'react'

interface IProps {
   isLoggedIn : boolean
}

const HomePage : React.FC<IProps> = ({ isLoggedIn }) => isLoggedIn ? <div>Hello, Authentication Page</div> : <div>Hello, Home Page</div>


export default HomePage