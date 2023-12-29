import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/components/Providers/TanstackProvider";
import RecoilRootProvider from "@/components/Providers/RecoilRootProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "달동 : 달력 동그라미",
  description: "달력에 스케쥴을 체크하여 약속을 정하는 간편한 기술",
  keywords:
    "달동,달똥,달력동그라미,달력똥그라미,약속 매칭 서비스, 약속 잡아주는",
  creator: "youngduck kim",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <TanstackProvider>
          <RecoilRootProvider>
            <main>{children}</main>
          </RecoilRootProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
