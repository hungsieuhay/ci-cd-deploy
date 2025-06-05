import localFont from "next/font/local";

export const DMSansVN = localFont({
  src: [
    {
      path: "../../public/fonts/DMSansVN-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSansVN-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/DMSansVN-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/DMSansVN-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/DMSansVN-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/DMSansVN-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-sans",
});
