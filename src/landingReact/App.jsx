import { BodyContent } from "./body/BodyContent"
import { HeaderNav } from "./headernav/Headernav"
import { Footer } from "./footer/Footer"
import './style.css'

export function App(){
    return(
        <>
            <HeaderNav />
            <BodyContent name="Carlos"/>
            <Footer />
        </>

    )
}