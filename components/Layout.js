import Mainfooter from "./inc/footer"
import Topheader from "./inc/header"
import Head from 'next/head'
import Script from 'next/script'

const Layout = ({children}) => {
    return(
        <> 
            <Script src="/js/bootstrap.bundle.min.js" strategy="beforeInteractive" crossOrigin="anonymous" />
            <Head>
                <title>Carsemba - buying cars has never been this simple.</title>
            </Head>
            {children}
            <Mainfooter />
        </>
    )
}

export default Layout