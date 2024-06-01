export const environment = {
  production: false,
  loginParams: {
    has_login: true,
    login_url: 'http://localhost:7001/realms/CredentialIssuer',
    client_id: 'oidc4vci-wallet-client',
    scope: 'openid profile email offline_access',
    grant_type: 'code'
  },
  base_url: 'http://localhost:8081',
  wallet_url: 'http://localhost:4202',
  api_base_url: '/api/v1/credentials?type=StudentCredential',
  credential_offer_url: '/api/v1/credential-offer',
  procedures_path: '/api/v1/procedures'
};
