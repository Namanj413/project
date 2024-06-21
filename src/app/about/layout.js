import { Inter } from "next/font/google";
import "../globals.css";
import Container from "../styles/custom-container/container";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Randall-Kaplan",
  description: "Randall-Kaplan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <div className="bg-white-500 z-50  ">
            <Header />
            <div className="lg:pt-0 ">{children}</div>
            <Footer />
          </div>
        </Container>
      </body>
    </html>
  );
}
