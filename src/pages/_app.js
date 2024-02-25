import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";

export default function App({ Component, pageProps, session }) {
	return (
		<Layout>
			<SessionProvider session={session} r>
				<Component {...pageProps} />
			</SessionProvider>
		</Layout>
	);
}
