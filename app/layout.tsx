import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/components/Providers/TanstackProvider";
import RecoilRootProvider from "@/components/Providers/RecoilRootProvider";
import NextAuthSessionProvider from "@/components/Providers/NextAuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "달동 : 달력 동그라미",
  description: "달력에 스케쥴을 체크하여 약속을 정하는 간편한 기술",
  keywords:
    "달동,달똥,달력동그라미,달력똥그라미,약속 매칭 서비스, 약속 잡아주는",
  creator: "youngduck kim",
  generator: "Next.js",
  icons: "/favicion.ico",
  verification: {
    google: "lybtoBCBf6isHIGdGbYxTHG7N2dUanHjWahiXMgKtXY",
    other: {
      "naver-site-verification": "10bc601bd9c85b7aa84e21028a264af1f4d74359",
    },
  },
  metadataBase: new URL("https://daldong.vercel.app/"),
  openGraph: {
    title: "달동 : 달력 동그라미",
    description: "간편한 터치로 손쉽게 일정을 정하는 기술",
    url: "https://daldong.vercel.app/",
    locale: "ko-KR",
    type: "website",
    images: [
      {
        url: "https://daldong.vercel.app/public/images/img_logo_text.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <NextAuthSessionProvider>
          <TanstackProvider>
            <RecoilRootProvider>
              <main>{children}</main>
            </RecoilRootProvider>
          </TanstackProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
