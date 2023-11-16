import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={'${inter.className} antialiased'}>{children}
                <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
                <script src="https://mediafiles.botpress.cloud/9a57e8ad-ae39-4b86-9337-84680f2ced05/webchat/config.js" defer></script>
            </body>

        </html>
    );
}
