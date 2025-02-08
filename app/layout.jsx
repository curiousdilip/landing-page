import "./globals.scss";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // specify the weights you need
  display: "swap", // optional: improves font loading performance
});
export const metadata = {
  title: "Dilip Kumar Maurya | Portfolio",
  description:
    "Welcome to my portfolio showcasing my web development projects.",
  icon: "/favicon.svg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
