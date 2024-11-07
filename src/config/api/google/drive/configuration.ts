import { registerAs } from '@nestjs/config'
import * as config from './google-api-service.json'
export default registerAs('googleDrive', () => ({
  clientId: config.clientId,
  redirectUrl: config.redirectUrl,
  clientSecret: config.clientSecret,
  refreshToken: config.refreshToken
}));
