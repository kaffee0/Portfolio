import { Geist, Geist_Mono, M_PLUS_Rounded_1c, Rampart_One } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mPlusRounded = M_PLUS_Rounded_1c({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-mplus-rounded",
  display: "swap",
});

const rampartOne = Rampart_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rampart-one",
  display: "swap",
});

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mPlusRounded.variable} ${rampartOne.variable} antialiased`}
        suppressHydrationWarning
        style={{
          background: '#5a9a3e',
          minHeight: '100vh',
          overflow: 'hidden',
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
