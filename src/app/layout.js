import "./globals.css";

export const metadata = {
  title: "Konakona | Space Marketplace",
  description: "Rent any space for any purpose.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
