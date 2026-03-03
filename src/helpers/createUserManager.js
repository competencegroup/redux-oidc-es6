import * as OidcClient from 'oidc-client-ts';
const UserManager = OidcClient.UserManager;

export default function createUserManager(config) {
  return new UserManager(config);
}
