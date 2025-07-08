// app/layout.tsx
import "../styles/globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import ClientWrapper from "@/utils/clientWrapper";
import SmoothScroll from "@/utils/smoothScroll";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import ScrollToTop from "@/components/scrollToTop";
import { getMetadata } from "@/utils/metaData";


export const metadata = {
  title: "Crown Electric Mobility | Stylish Electric Bikes in Pakistan",
  description: "Explore top stylish electric bikes in Pakistan with Crown Electric Mobility. Eco-friendly and budget-friendly options available in Karachi, Lahore, Multan, Hyderabad & more. Ride smart today!",
  metadataBase: new URL("https://crownelectricmobility.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crown Electric Mobility | Stylish Electric Bikes in Pakistan",
    description: "Explore top stylish electric bikes in Pakistan with Crown Electric Mobility. Eco-friendly and budget-friendly options available in Karachi, Lahore, Multan, Hyderabad & more. Ride smart today!",
    url: "https://crownelectricmobility.com/",
    siteName: "Crown Electric Mobility",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics gaId="G-XKWM0HCQX3" />    
        <GoogleTagManager gtmId="GTM-M552XJC5" /> 
      </head>
      <body>      
        <Header />
        <SmoothScroll>
          <ClientWrapper>{children}
            <ScrollToTop />
          </ClientWrapper>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
