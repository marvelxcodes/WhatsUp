import type { AppProps } from "next/app"
import { ClerkProvider } from "@clerk/nextjs"
import "@styles/main.scss"

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ClerkProvider {...pageProps}>
			<Component {...pageProps} />
		</ClerkProvider>
	)
}

export default MyApp
