import { render, screen } from '@testing-library/react';
import Menu from '@/components/Menu';
import { usePathname as usePathnameOriginal } from 'next/navigation';
import { mocked } from 'jest-mock';

jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

const usePathname = mocked(usePathnameOriginal);

describe('Menu', () => {
    it('applies active class to Search when on /', () => {
        usePathname.mockReturnValue('/');
        render(<Menu />);
        expect(screen.getByText('Search')).toHaveClass('active');
        expect(screen.getByText('Favourites')).not.toHaveClass('active');
    });

    it('applies active class to Favourites when on /favourites', () => {
        usePathname.mockReturnValue('/favourites');
        render(<Menu />);
        expect(screen.getByText('Favourites')).toHaveClass('active');
        expect(screen.getByText('Search')).not.toHaveClass('active');
    });
});
