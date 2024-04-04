import { Big_Shoulders_Stencil_Text, Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Atom/Header/Header";
import Footer from "../components/Atom/Footer/Footer";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})
const big = Big_Shoulders_Stencil_Text({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-big',
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${big.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
