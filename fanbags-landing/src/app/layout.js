import "./globals.css";

export const metadata = {
  title: "FanBags - Turn Social Attention into On-Chain Fee Revenue",
  description: "Just tag @fanbags — we cover the fees, your fan bag is live instantly. The simplest way to monetize your community on-chain.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
