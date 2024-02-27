import "../styles/globals.css";
import { SWRConfig } from "swr";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout.js";
// import RootLayout from "./layout";

export default function App({ Component, pageProps, session }) {
	return (
		<SWRConfig
			value={{
				fetcher: async (...args) => {
					const response = await fetch(...args);
					if (!response.ok) {
						throw new Error(`Request with ${JSON.stringify(args)} failed.`);
					}
					return await response.json();
				},
			}}
		>
			<Layout>
				<SessionProvider session={session}>
					<Component {...pageProps} />
				</SessionProvider>
			</Layout>
		</SWRConfig>
	);
}
