import 'server-only';
import { fetchAccessToken } from "hume";
import { env } from '~/env';

export const getHumeAccessToken = async () => {
  try {
    const accessToken = await fetchAccessToken({
      apiKey: env.HUME_API_KEY, // Use the validated environment variable
      secretKey: env.HUME_SECRET_KEY, // Use the validated environment variable
    });

    // Return null if the token is undefined
    return accessToken ?? null;
  } catch (error) {
    console.error("Error fetching Hume access token:", error);
    return null;
  }
};
