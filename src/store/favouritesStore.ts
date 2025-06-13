import { create } from 'zustand';

type FavouritesStore = {
    favourites: SpotifyTrack[];
    toggleFavourites: (track: SpotifyTrack) => void;
};

export const useFavouritesStore = create<FavouritesStore>((set) => ({
    favourites: [],
    toggleFavourites: (track) =>
        set((state) => {
        const isFavourite = state.favourites.some((t) => track.id === t.id);

        return {
            favourites: isFavourite
            ? state.favourites.filter((t) => t.id !== track.id)
            : [track, ...state.favourites],
        };
        }),
}));
