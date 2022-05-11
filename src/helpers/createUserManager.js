import OidcClient from 'oidc-client/index.js';
const UserManager = OidcClient.UserManager;

export default function createUserManager(config) {
  return new UserManager(config);
}
