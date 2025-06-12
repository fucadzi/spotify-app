'use client'
import { useState, useEffect } from 'react';
import Search from '@/components/Search';
import styles from '@/app/page.module.scss';

export default function Home() {
    const [token, setToken] = useState<string | null>(null);
    const [tokenExpiry, setTokenExpiry] = useState<number | null>(null);

    const authUrl = 'https://accounts.spotify.com/api/token';
    const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

    useEffect(() => {
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
                    setToken(data.access_token);
                    // expires_in is in seconds
                    setTokenExpiry(Date.now() + data.expires_in * 1000);
                });
        }
    }, [clientId, clientSecret, token, tokenExpiry]);

    return (
        <div className="items-center justify-items-center min-h-screen p-2 md:p-8">
            <main className={styles.page}>
                <div className="flex flex-col">
                    <h2 className={styles.title}>Spotify Track Search</h2>
                    <Search token={token} />
                </div>
            </main>
        </div>
    );
}
