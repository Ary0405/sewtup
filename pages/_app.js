import { AuthProvider, getUserFromSession } from "@/context/authContext"
import App from "next/app";
import '@/styles/root/globals.scss'
import { OrderProvider } from "@/context/orderContext";

export default function MyApp({ Component, pageProps, user }) {
  return (
    <OrderProvider>
      <AuthProvider ssrUser={user}>
        <Component {...pageProps} />
      </AuthProvider>
    </OrderProvider>
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
