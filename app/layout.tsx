import "./globals.css";
import Footer from "../components/footer";
import SiteHeader from "../components/siteHeader";
import TutorialGuide from "../components/tutorialGuide";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <TutorialGuide />
        {children}
        <Footer />
      </body>
    </html>
  );
}
