import {
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE
} from '@env';

export const configDiscord = {
  redirect_uri: encodeURIComponent(REDIRECT_URI || ''),
  scope: encodeURIComponent(SCOPE || ''),
  response_type: RESPONSE_TYPE,
  client_id: CLIENT_ID,
  cdn_image: CDN_IMAGE,
}