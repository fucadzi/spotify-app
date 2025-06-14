import { SpotifyTrack } from '@/app/types/spotify';
import styles from '@/components/favourites.module.scss';
import Image from 'next/image';

type FavoritesProps = {
    favourites: SpotifyTrack[];
    removeFavourite: (track: SpotifyTrack) => void;
};

export default function Favorites({ favourites, removeFavourite }: FavoritesProps) {

    return (
        <ul className={styles.favouritesList}>
            {favourites.length ? favourites.map((track: SpotifyTrack) => (
                <li className={styles.favourite} key={track.id}>
                    <Image
                        className={styles.albumCover}
                        src={track.album.images[0].url}
                        alt={`Album cover for ${track.album.name}`}
                        width={160}
                        height={160}
                        priority
                    />
                    <div className={styles.about}>
                        <div className={styles.trackName}>
                            <a href={track.external_urls.spotify} target='_blank' rel='noopener noreferrer'>
                                {track.name}
                            </a>
                        </div>
                        <div>
                            {track.artists.map(artist => artist.name).join(', ')}
                        </div>
                        <button className={styles.remove} onClick={() => removeFavourite(track)}>
                            <i className={`mdi mdi-heart`} />
                        </button>
                    </div>
                </li>
            )) : <div>No favourites yet :)</div>}
        </ul>
    );
}
