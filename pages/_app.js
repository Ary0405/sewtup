import { AuthProvider, getUserFromSession } from "@/context/authContext"
import App from "next/app";
import '@/styles/root/globals.scss'

export default function MyApp({ Component, pageProps, user }) {
  return (
    <AuthProvider ssrUser={user}>
      <Component {...pageProps} />
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
