import "./globals.css";

export const metadata = {
  title: "WhatBytes Dashboard",
  description: "Skill test dashboard for WhatBytes internship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
