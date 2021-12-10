import Mainfooter from "./inc/footer"
import Topheader from "./inc/header"

const Layout = ({children}) => {
    return(
        <> 
            {children}
            <Mainfooter />
        </>
    )
}

export default Layout