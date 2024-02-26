import "../styles/globals";
import Layout from "../components/Layout";
import { Ubuntu_Mono } from "next/font/google";

const ubuntuMono = Ubuntu_Mono({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-ubuntu-mono",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${ubuntuMono.variable} font-sans`}>
			{console.log("RootLayout re-rendered")}
			<body>
				<Layout />
				<main className={`main ${ubuntuMono.className}`}>{children}</main>
			</body>
		</html>
	);
}
