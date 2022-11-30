import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { msalInstance, loginRequest } from '../../authConfig';
export class MsalDataService {
  isLoggedIn(): boolean {
    return msalInstance.getActiveAccount() != null;
  }
  login() {
    msalInstance.loginRedirect(loginRequest)
  }
  logout() {
    msalInstance.logoutRedirect()
  }

  async getData(accessToken: string) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);
    return await fetch("https://graph.microsoft.com/v1.0/me", { method: "GET", headers: headers }).then(response => response.json())
  }

  async callProfile() {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest
    }).catch(async (e) => {
      if (e instanceof InteractionRequiredAuthError) {
        await msalInstance.acquireTokenRedirect(loginRequest);
      }
      throw e;
    });
    return await this.getData(response.accessToken)
  }
  async getPhoto() {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest
    }).catch(async (e) => {
      if (e instanceof InteractionRequiredAuthError) {
        await msalInstance.acquireTokenRedirect(loginRequest);
      }
      throw e;
    });
    return await this.getPhotoData(response.accessToken)
  }
  async getPhotoData(accessToken: string) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);
    return await fetch("https://graph.microsoft.com/v1.0/me/photo/$value", { method: "GET", headers: headers }).then(response => response.blob())
  }


  async getToken() {
    const response = await msalInstance.acquireTokenSilent({
      ...loginRequest
    }).catch(async (e) => {
      if (e instanceof InteractionRequiredAuthError) {
        await msalInstance.acquireTokenRedirect(loginRequest);
      }
      throw e;
    });
    return await this.getData(response.accessToken)
  }
  async getEvents() {


  }

} 
