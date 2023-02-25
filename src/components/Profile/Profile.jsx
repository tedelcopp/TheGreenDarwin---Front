import React from "react";
import { useAuth0 } from "@auth0/auth0-react"

//user profile

export default function Profile() {
    const { user, isAuthenticated, isLoading} = useAuth0();

    return(
        isAuthenticated && 
        <div>
            <img src={user.picture} alt={user.name}/>
            <h3>{user.name}</h3>
        </div>
    )

}