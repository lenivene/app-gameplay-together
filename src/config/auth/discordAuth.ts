const redirect_uri = 'https://auth.expo.io/@anonymous/gameplay-together-8bc0ad85-a0c6-4f6a-b558-7d25512a5830';
const scope = 'identify email guilds connections';
const response_type = 'token';
const client_id = '858383055503622164';
const cdn_image = 'https://cdn.discordapp.com';

export const configDiscord = {
  redirect_uri: encodeURIComponent(redirect_uri),
  scope: encodeURIComponent(scope),
  response_type,
  client_id,
  cdn_image,
}