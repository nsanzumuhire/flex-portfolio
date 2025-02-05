import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = `I am a Fullstack Software Engineer currently based in Kigali, Rwanda, with
          a proven track record of success in the information technology and
          services industry. I bring to the table a wealth of experience,
          particularly in the front-end development domain, coupled with
          comprehensive knowledge of various technologies and frameworks. My
          academic background includes a Bachelor's degree with a focus on Computer
          and Software Engineering. In my professional journey, I have excelled in
          crafting seamless and responsive user interfaces, leveraging my expertise
          in front-end technologies such as Angular, React and Vue.js. These
          frameworks have been pivotal in delivering engaging and user-friendly`

export const metadata: Metadata = {
  title: "Daniel Nsanzumuhire - Software engineer",
  description,
  image: '/assets/daniel_vogue_2.jpg',
  openGraph: {
      title: 'Daniel Nsanzumuhire - Software engineer',
      description,
      images: [
        {
          url: '/assets/daniel_vogue_2.jpg',
          alt: 'Daniel Nsanzumuhire - Software engineer',
        },
      ],
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
