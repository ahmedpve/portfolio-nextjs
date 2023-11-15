import { Bungee, Inter, Russo_One } from "next/font/google";

const bungee = Bungee({ subsets: ["latin"], weight: ["400"] });
const russoOne = Russo_One({ subsets: ["latin"], weight: ["400"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });

export const fonts = {
  heading: russoOne.style.fontFamily,
  body: inter.style.fontFamily,
  logo: bungee.style.fontFamily,
};
