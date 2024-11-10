import Image from "next/image";
import styles from "./page.module.css";
import FBSVG from "../../public/facebook_icon.svg";
import ZALOSVG from "../../public/ZALO.jpg";
import YOUTUBESVG from "../../public/youtube.png";
import { Metadata } from "next";
const url = 'https://nickdaoquan.vn';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: 'Nguyễn Thành Thức - Nhập Mua Bán Nick Game',
  description: 'Uy tín - Chất Lượng - Không bắt Scam',
  keywords: [
    'ngoc rong online',
    'Shop Nick Ngọc Rồng Online',
    'Shop Nick Liên Quân',
    'Shop Nick Free Fire',
  ],
  applicationName: 'nickdaoquan.vn',
  authors: [
    {
      name: 'Nguyễn Thành Thức',
    }
  ],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{textAlign: "center"}}>Liên Hệ Nhập Nick Uy Tín - Chất Lượng</h1>
        <h2 style={{textAlign: "center"}}>Ngọc Rồng Online</h2>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{textAlign: "center"}}
        >
          <Image
            aria-hidden
            src={ZALOSVG}
            alt="Zalo icon"
            width={300}
            height={300}
          />
        </a>
        <p style={{textAlign: "center", color: "red" }}>Shop Nick Ngọc Rồng, Liên Quân, Free Fire, Avatar Sẽ Sớm Khai Trương, Thiếu Nick Để Bán Thôi !!!</p>
        <p style={{textAlign: "center", color: "red" }}>Chỉ Nhập Nick Ở Server Chính, Không Nhập Nick Server Lậu Nhé Anh Em</p>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.facebook.com/nguyenthanhthuc.2k/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={FBSVG}
            alt="FB icon"
            width={40}
            height={40}
          />
        </a>
        <a
          href="https://www.youtube.com/@nguyenthanhthuc.2k"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={YOUTUBESVG}
            alt="Youtube icon"
            width={40}
            height={40}
          />
        </a>
      </footer>
    </div>
  );
}
