'use client'
import Theme from "../../components/theme.jsx"
import Header from "../../components/Header/Header"
import Footer from "../../components/footer"
const page = () => {
    return (
        <div>
            <Header active="travel-grant" />
            <div className="target md:mb-5 foothandle px-[5%]">
                <div className="container" >
                <h1 className="font-extrabold  sm:text-4xl text-2xl mb-4">Travel Grant</h1>
                <b className="sm:text-lg text-md">Travel grant will be provided to IEEE students on first come first serve basis(as per availability of grant).
                </b></div>
            </div>
        <Footer />
    </div>
    )
}

export default page
