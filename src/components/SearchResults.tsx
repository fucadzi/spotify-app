import { SpotifyTrack } from '@/app/types/spotify';
import styles from '@/components/searchResults.module.scss';
import Image from 'next/image';
import { useFavouritesStore } from '@/store/favouritesStore';

export default function SearchResults({ tracks }: { tracks: SpotifyTrack[] }) {
    const { favourites, toggleFavourites } = useFavouritesStore();
    const isFavourite = (id: string) => favourites.some(track => track.id === id);

    return (
        <>
            <ul className={`${styles.results} flex flex-col md:grid`}>
                {tracks.map((track: SpotifyTrack) => (
                    <li className={styles.result} key={track.id}>
                        <Image
                            className={styles.albumCover}
                            src={track.album.images[2].url}
                            alt={`Album cover for ${track.album.name}`}
                            width={60}
                            height={60}
                            priority
                        />
                        <div>
                            <div className={styles.trackName}>
                                <a href={track.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
                                    {track.name}
                                </a>
                            </div>
                            <div>
                                {track.artists.map(artist => artist.name).join(', ')}
                            </div>
                        </div>
                        <div className={styles.action}>
                            <button onClick={() => toggleFavourites(track)}>
                                <i
                                    className={`mdi ${isFavourite(track.id) ? 'mdi-heart' : 'mdi-heart-outline'}`}
                                />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <ul>
                Favourites:
                {favourites.map((track: SpotifyTrack) => (
                    <div key={track.id}>{track.name}</div>
                ))}
            </ul>
        </>
    );
}
