import { useState } from 'react';
import styles from '@/components/search.module.scss';
import SearchResults from './SearchResults';

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
                <SearchResults tracks={results} />
            )}
        </div>
    );
}