'use client';
import { useEffect } from 'react';
import Search from '@/components/Search';
import styles from '@/app/page.module.scss';
import { useMainStore } from '@/store/mainStore';

export default function Home() {
    const { token, getToken, errorMessage } = useMainStore();

    useEffect(() => {
        // requesting spotify access token
        getToken();
    }, [getToken]);

    return (
        <div className="items-center justify-items-center min-h-screen p-2 md:p-8">
            <main className={styles.page}>
                <div className="flex flex-col">
                    <h2 className={styles.title}>Spotify Track Search</h2>
                    {errorMessage ? (
                        <div className={styles.error}><i className={`mdi mdi-alert`}/> {errorMessage}</div>
                    ) : (
                        <Search token={token} />
                    )}
                </div>
            </main>
        </div>
    );
}
