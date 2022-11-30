import { LogLevel, PublicClientApplication } from '@azure/msal-browser';

// Config object to be passed to Msal on creation
export const msalConfig = {
  auth: {
    clientId: '225dc787-73ac-464a-bd33-b40992ae05d6',
    authority: 'https://login.microsoftonline.com/{8f6bd982-92c3-4de0-985d-0e287c55e379}/',
    redirectUri: 'http://localhost:8080', // Must be registered as a SPA redirectURI on your app registration
    postLogoutRedirectUri: 'http://localhost:8080' // Must be registered as a SPA redirectURI on your app registration
  },
  cache: {
    cacheLocation: 'localStorage'
  }
  
};

export const msalInstance = new PublicClientApplication(msalConfig);

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ['User.Read'],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
  graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
