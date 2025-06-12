import { useState } from 'react';
import { SpotifyTrack } from '@/app/types/spotify';
import styles from '@/components/search.module.scss';
import Image from "next/image";

export default function Search({ token }: { token: string | null }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!token || !query) return;
        setLoading(true);
        const res = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );
        const data = await res.json();
        setResults(data.tracks?.items || []);
        setLoading(false);
    };

    return (
        <div className={styles.search}>
            <div className={styles.searchWrap}>
                <input className={styles.input} placeholder='What song are you looking for?' value={query} onChange={e => setQuery(e.target.value)} />
                <button className={styles.button} onClick={handleSearch}>Search</button>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : results.length === 0 ? (
                <div></div>
            ) : (
            <ul className={styles.results}>
                {results.map((track: SpotifyTrack) => (
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
                        <div className={styles.action}>action</div>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
}