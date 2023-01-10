import type { AppProps } from "next/app"
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs"
import "@styles/main.scss"
import dynamic from "next/dynamic"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ClerkProvider {...pageProps}>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn afterSignUpUrl={"/SignUp"} />
      </SignedOut>
    </ClerkProvider>
  )
}

export default MyApp
