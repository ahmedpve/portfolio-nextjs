import { Inter, Poppins, Russo_One } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] });
const russoOne = Russo_One({ subsets: ["latin"], weight: ["400"] });

export const fonts = {
  heading: poppins.style.fontFamily,
  body: inter.style.fontFamily,
  logo: russoOne.style.fontFamily,
};
