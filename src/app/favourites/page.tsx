'use client';
import styles from '@/app/page.module.scss';
import Favorites from '@/components/Favorites';
import { useFavouritesStore } from '@/store/favouritesStore';

export default function FavouritesPage() {
    const { favourites, removeFavourite } = useFavouritesStore();

    return (
        <div className="items-center justify-items-center min-h-screen p-2 md:p-8">
            <main className={styles.page}>
                <h2 className={styles.title}>Your favourites</h2>
                <Favorites favourites={favourites} removeFavourite={removeFavourite} />
            </main>
        </div>
    );
}

