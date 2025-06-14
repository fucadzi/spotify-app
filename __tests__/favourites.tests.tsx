import { render, screen, fireEvent } from '@testing-library/react';
import Favorites from '@/components/Favorites';

const mockRemove = jest.fn();
const favourites = [
    {
        id: '1',
        name: 'Track 1',
        artists: [{ name: 'Artist 1' }],
        album: { images: [{ url: '/cover.jpg' }], name: 'Album 1' },
        external_urls: { spotify: 'https://spotify.com/track/1' },
    },
];

test('renders track info', () => {
    render(<Favorites favourites={favourites} removeFavourite={mockRemove} />);
    expect(screen.getByText('Track 1')).toBeInTheDocument();
    expect(screen.getByText('Artist 1')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', expect.stringContaining('Album 1'));
});

test('shows empty message when no favourites', () => {
    render(<Favorites favourites={[]} removeFavourite={mockRemove} />);
    expect(screen.getByText('No favourites yet :)')).toBeInTheDocument();
});

test('calls removeFavourite when button is clicked', () => {
    render(<Favorites favourites={favourites} removeFavourite={mockRemove} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockRemove).toHaveBeenCalledWith(favourites[0]);
});
