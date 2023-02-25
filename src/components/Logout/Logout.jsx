import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import LogoutIcon from '@mui/icons-material/Logout';

export default function LogoutButton({className}) {
    const { logout } = useAuth0() 

    return <LogoutIcon className={className} onClick={() => logout({returnTo: window.location.origin})}/>
}