import {UserManager} from 'oidc-client/dist/oidc-client';

export default function createUserManager(config) {
  return new UserManager(config);
}
