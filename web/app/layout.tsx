import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Lucas James Quinn",
  description: "🚀 Creator of next-gen solutions for real issues in life",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
