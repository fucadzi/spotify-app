'use client';
import styles from '@/app/page.module.scss';
import { useFavouritesStore } from '@/store/favouritesStore';

export default function FavouritesPage() {
    const { favourites } = useFavouritesStore();

    return (
        <div className="items-center justify-items-center min-h-screen p-2 md:p-8">
            <main className={styles.page}>
                <div className="flex flex-col">
                    <h2 className={styles.title}>Your favourites</h2>
                    <ul>
                        {favourites.map((track: SpotifyTrack) => (
                            <li key={track.id}>{track.name}</li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}

