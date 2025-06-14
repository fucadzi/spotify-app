'use client';
import styles from '@/app/page.module.scss';
import favStyles from '@/app/favourites/favourites.module.scss';
import { useFavouritesStore } from '@/store/favouritesStore';
import Image from 'next/image';
import { SpotifyTrack } from '@/app/types/spotify';

export default function FavouritesPage() {
    const { favourites, removeFavourite } = useFavouritesStore();

    return (
        <div className="items-center justify-items-center min-h-screen p-2 md:p-8">
            <main className={styles.page}>
                <h2 className={styles.title}>Your favourites</h2>
                <ul className={favStyles.favouritesList}>
                    {favourites.length ? favourites.map((track: SpotifyTrack) => (
                        <li className={favStyles.favourite} key={track.id}>
                            <Image
                                className={favStyles.albumCover}
                                src={track.album.images[0].url}
                                alt={`Album cover for ${track.album.name}`}
                                width={160}
                                height={160}
                                priority
                            />
                            <div className={favStyles.about}>
                                <div className={favStyles.trackName}>
                                    <a href={track.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
                                        {track.name}
                                    </a>
                                </div>
                                <div>
                                    {track.artists.map(artist => artist.name).join(', ')}
                                </div>
                                <button className={favStyles.remove} onClick={() => removeFavourite(track)}>
                                    <i className={`mdi mdi-heart`} />
                                </button>
                            </div>
                        </li>
                    )) : <div>No favourites yet :)</div>}
                </ul>
            </main>
        </div>
    );
}

