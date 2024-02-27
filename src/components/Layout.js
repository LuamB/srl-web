import Header from "./Header.js";
import Footer from "./Footer.js";
import { Ubuntu_Mono } from "next/font/google";

const ubuntuMono = Ubuntu_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-ubuntu-mono",
});

export default function Layout({ children }) {
	return (
		<>
			{console.log("Layout re-rendered")}
			<Header />
			<main className={`main ${ubuntuMono.variable} font-mono`}>
				{children}
			</main>
			<Footer />
		</>
	);
}

// <main className={`main ${ubuntuMono.className} font-mono`}>
