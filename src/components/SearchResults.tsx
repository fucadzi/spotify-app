import { SpotifyTrack } from '@/app/types/spotify';
import styles from '@/components/searchResults.module.scss';
import Image from 'next/image';

export default function SearchResults({ tracks }: { tracks: SpotifyTrack[] }) {
    // const [favourites, setFavourites] = useState<string[]>([]);
    // const toggleFavourites = () => {
    // }

    return (
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
                        action
                        {/* <i
                            className={`mdi ${
                                favourites.includes(track.id)
                                    ? 'mdi-heart'
                                    : 'mdi-heart-outline'
                            }`}
                        /> */}
                    </div>
                </li>
            ))}
        </ul>
    );
}