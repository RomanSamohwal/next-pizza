import {Nunito} from 'next/font/google';
import './globals.css';

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

export default function AppLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head >
            <title>Next Pizza</title>
            <link data-rh="true" rel="icon" href="/logo.png" />
        </head>
        <body className={nunito.variable}>
        <div>{children}</div>
        </body>
        </html>
    );
}
