import { create } from 'zustand';

type MainStore = {
    token: string | null;
    tokenExpiry: number | null;
    getToken: () => Promise<void>;
};

export const useMainStore = create<MainStore>((set, get) => ({
  token: null,
  tokenExpiry: null,
  async getToken() {
    const { token, tokenExpiry } = get();
    const authUrl = 'https://accounts.spotify.com/api/token';
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

    if (!token || (tokenExpiry && Date.now() > tokenExpiry)) {
        fetch(authUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`
            })
            .then(res => res.json())
            .then((data) => {
                set({
                    token: data.access_token,
                    tokenExpiry: Date.now() + data.expires_in * 1000,
                });
            });
    }
  }
}));
