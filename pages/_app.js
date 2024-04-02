import { AuthProvider, getUserFromSession } from "@/context/authContext"
import App from "next/app";
import '@/styles/root/globals.scss'
import { ChakraProvider } from '@chakra-ui/react'


export default function MyApp({ Component, pageProps, user }) {
  return (
    <AuthProvider ssrUser={user}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  if (appContext.router.isSsr === undefined) {
    const user = await getUserFromSession(appContext.ctx);
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps, user: user };
  } else {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }
}
