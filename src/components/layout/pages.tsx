'use client';

import Header from '@/components/layout/header/pages';
import { usePathname } from 'next/navigation';
import Footer from './footer/pages';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hideContentPaths = ['/login', '/signup', '/findpassword', '/updatepassword'];
    const shouldShowContents = !hideContentPaths.includes(pathname);

    return (
        <>
            {shouldShowContents && <Header />}
            {children}
            {shouldShowContents && <Footer />}
        </>
    );
}
