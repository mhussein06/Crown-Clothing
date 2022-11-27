import {  Navigate, Outlet } from 'react-router-dom';


export const IsUserLoggedIn = ({ user, children, ...rest }) => {
    return (
        (!user) ? <Outlet /> : <Navigate
            to={{
                pathname: '/',
            }}
         />
    )
}

export default IsUserLoggedIn;