'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/components/menu.module.scss';

export default function NavMenu() {
    const pathname = usePathname();

    return (
        <nav className={`${styles.menu} pt-2 px-2 md:pt-8 md:px-8`}>
            <Link href="/" className={pathname === '/' ? styles.active : ''}>Search</Link>
            <Link href="/favourites" className={pathname === '/favourites' ? styles.active : ''}>Favourites</Link>
        </nav>
    );
}