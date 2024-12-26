import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav"
import WhatsAppButton from "../components/WhatsAppButton";

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className="bg-[#F7F7F7]">
        <Header />
          <Nav/>
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </body>
      </html>
    );
  }
  