import axios from "axios";
import { configDiscord } from "../config/auth/discordAuth";

export const apiDiscord = axios.create({
  baseURL: 'https://discord.com/api'
});

export const getAuthUrlDiscord = () => {
  const baseURL = apiDiscord.defaults.baseURL;
  const {cdn_image, ...config} = configDiscord;
  const params = config as any;

  return `${baseURL}/oauth2/authorize?${new URLSearchParams(params).toString()}`;
}