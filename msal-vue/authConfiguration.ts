import {PublicClientApplication} from '@azure/msal-browser'

export const msalConfig = {
    auth: {
      clientId: '689b18b6-40bc-431e-9b17-b6a93c1c81fc',
      authority: 'https://login.microsoftonline.com/{8f6bd982-92c3-4de0-985d-0e287c55e379}/',
      redirectUri: window.location.origin, // Must be registered as a SPA redirectURI on your app registration
      postLogoutRedirectUri: 'http://localhost:4200/' 
    },
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = {
    scopes: ['User.Read', 'mail.send', 'User.ReadBasic.All']
  };


   
  export const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
  };
  