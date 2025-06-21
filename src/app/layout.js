import "./globals.css";

export const metadata = {
  title: 'CodeBattles',
  description: 'Система для проведения соревнований по программированию, сделанная в Нижнем Новогороде',

  openGraph: {
    description: 'Платформа для проведения соревнований по программированию',
    type: 'article',
    images: [
      {
        url: 'https://i.imgur.com/PIunStN.png',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Additional meta tags
  verification: {
    google: '67U_5Wbz7uET9zHtfyfFFXvfWEtbMuijLDkvIlqxO8o',
    yandex: 'fda795ffee3e0468',
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
  },

}
export default function RootLayout({ children, params }) {
  return (
    <html lang="ru" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
