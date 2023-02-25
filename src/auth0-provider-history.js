import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";


const Auth0ProviderHistory = ({ children }) => {
    const history = useNavigate();
    const domain = "dev-qbpt8eaprzg0wfvf.eu.auth0.com"
    const clientId = "JlEe3AB9FZaRWMcClP6ykipsPweRhPBg"
    const cacheLocation = 'localstorage'

    const onRedirectCallback = (appState) => {
        history(appState?.returnTo || window.location.pathname)
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            cacheLocation={cacheLocation}
            authorizationParams={{
                redirect_uri: window.location.origin}}
            onRedirectCallback={onRedirectCallback}
            >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderHistory