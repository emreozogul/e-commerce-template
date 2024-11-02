import { Header, Footer } from '@/components/containers';

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="min-h-screen pt-4">{children}</main>
            <Footer />
        </>
    );
} 