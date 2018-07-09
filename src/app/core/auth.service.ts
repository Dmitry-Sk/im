import { Injectable } from '@angular/core';
import * as Oidc from 'oidc-client';

import { AuthUser } from '../domain/view-models/auth-user-view-model';

@Injectable()
export class AuthService {
  private userManager: any = null;
  private _profile: any = null;
  private _access_token: any = null;

  constructor() {}

  private _tokenWasPassed() {
    return window.location.hash.indexOf('id_token') !== -1;
  }

  private _sendSignInRequest() {
    this.userManager
      .signinRedirect()
      .then(req => this._postSignIn(req))
      .catch(error => {
        console.log('[AuthProvider] SignIn request error', error);
      });
  }

  private _postSignIn(req: any) {
    console.log('[AuthProvider] SignIn success', req || '');
    if (!req) return;
    window.location.href = req.url;
  }

  private _processSignInResponse() {
    console.log('[AuthProvider] Processing SignIn response...');
    this.userManager
      .signinRedirectCallback()
      .then(response => this._postProcessSignInResponse(response))
      .catch(error => this._signInResponseProcessingError(error));
  }

  private _signInResponseProcessingError(error: any) {
    console.log('[AuthProvider] SignIn processing error', error);
  }

  private _postProcessSignInResponse(response: any) {
    console.log('[AuthProvider] Token loaded, expires in', response.expires_in);
    console.log('[AuthProvider] profile', response.profile);
    console.log('[AuthProvider] access_token', !!response.access_token);

    this._profile = response.profile;
    //$cookies.putObject('profile', _profile);

    this._access_token = response.access_token;
    //$cookies.put('token', _access_token);
    window.location.hash = '';
  }

  private _postSignOut(req) {
    console.log('[AuthProvider] SignOut success', req || '');
    if (!req) return;
    window.location.href = req.url;
  }

  private _sendSignOutRequest() {
    console.log('[AuthProvider] Sending SignOut request');
    this.userManager.signoutRedirect().then(req => this._postSignOut(req));
  }

  //

  public getTenantId(): string {
    return this._profile.tenant_id;
  }

  public getAccessToken(): string {
    return this._access_token;
  }

  public getUserProfile(): AuthUser {
    return this._profile;
  }

  public getUserManager() {
    return this.userManager;
  }

  public configure(config: object) {
    this.userManager = new Oidc.UserManager(config);
  }

  public authenticate() {
    if (!this.userManager) {
      console.log('[AuthProvider] Error. Configuration not provided');
    }

    if (this._tokenWasPassed()) {
      this._processSignInResponse();
    } else {
      this._sendSignInRequest();
    }
  }

  public logout() {
    this._sendSignOutRequest();
  }
}
