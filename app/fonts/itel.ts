import localFont from "next/font/local";

export const Itel = localFont({
  src: [
    {
      path: "../../public/fonts/iTel-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/iTel-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-itel",
});
