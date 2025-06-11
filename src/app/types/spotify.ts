export type SpotifyTrack = {
    id: string;
    name: string;
    album: {
        id: string;
        name: string;
        images: { url: string; height: number; width: number }[];
    };
    artists: {
        id: string;
        name: string;
    }[];
    duration_ms: number;
    external_urls: {
        spotify: string;
    };
    preview_url: string | null;
    popularity: number;
    uri: string;
};
