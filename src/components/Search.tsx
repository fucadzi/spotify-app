import { useState, useEffect } from "react";
import { SpotifyTrack } from "@/app/types/spotify";

export default function Search({ token }: { token: string | null }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!token || !query) return;
        const res = await fetch(
            `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );
        const data = await res.json();
        setResults(data.tracks?.items || []);
    };

    useEffect(() => {
        console.log('results are', results);
    }, [results]);

    return (
        <div>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map((track: SpotifyTrack) => (
                    <li key={track.id}>{track.name}</li>
                ))}
            </ul>
        </div>
    );
}