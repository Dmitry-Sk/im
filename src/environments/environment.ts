// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  appBaseUrl: 'http://localhost',
  authentification: {
    config: {
      authority: 'http://localhost:64433/core',
      redirect_uri: window.location.protocol + '//' + window.location.host + '/app.html',
      post_logout_redirect_uri: window.location.protocol + '//' + window.location.host + '/app.html',
      popup_redirect_uri: window.location.protocol + '//' + window.location.host + '/auth-popup.html',
      client_id: 'goPMO.Impel',
      response_type: 'id_token token',
      // scope: 'openid profile email roles goPMO.Impel goPMO.Impel.Reporting',
      scope: 'openid profile email roles goPMO.Impel goPMO.Impel.Reporting',
      automaticSilentRenew: false,
      filterProtocolClaims: true,
      loadUserInfo: true
    },
    options: {
      logger: console,
      enableLogger: true,
      enableOidcLogger: false
    }
  },
  resources: {
    base: 'http://localhost:49967'
  },
  security: {
    base: 'http://localhost:64433'
  },
  attachments: {
    attachmentsBaseUrl: 'http://localhost:49967/filestorage',
    maxFileSize: '250MB'
  }
};
