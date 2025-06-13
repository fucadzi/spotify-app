import { create } from "zustand";

type MainStore = {
  favourites: SpotifyTrack[];
  toggleFavourites: (track: SpotifyTrack) => void;
};

export const useMainStore = create<MainStore>((set) => ({
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
