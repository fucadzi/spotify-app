import { render, screen } from '@testing-library/react';
import SearchResults from '@/components/SearchResults';

const tracks = [
    {
        id: '1',
        name: 'Track 1',
        artists: [{ name: 'Artist 1' }],
        album: { images: [{}, {}, { url: '/cover.jpg' }], name: 'Album 1' },
        external_urls: { spotify: 'https://spotify.com/track/1' },
    },
];

test('renders track info', () => {
    render(<SearchResults tracks={tracks} />);
    expect(screen.getByText('Track 1')).toBeInTheDocument();
    expect(screen.getByText('Artist 1')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', expect.stringContaining('Album 1'));
});

test('renders spotify link', () => {
    render(<SearchResults tracks={tracks} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://spotify.com/track/1');
});
