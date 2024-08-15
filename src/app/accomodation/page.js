'use client'
import Theme from "../../components/theme.jsx"
import Header from "../../components/Header/Header"
import Footer from "../../components/footer"
const page = () => {
    return (
        <>
        <div>
            <Header active="accomodation" />
            <div className="target mb-12 px-[5%] foothandle">
                <div className="container" >
                <h1 className="font-extrabold  sm:text-4xl text-2xl mb-4">Accomodation</h1>
                    <p className="sm:text-[1.125rem] text-[1rem]">Participants will make their own arrangements for travel, boarding, lodging etc. However, limited accommodation facility may be provided to the participants in hostels and guest rooms of the institute on special request. For lady participants’ accommodation shall be arranged in the Girls hostels of the institute, on request. For guests, the accommodation shall be arranged by our Institute.
                    </p>
                    <br />
                    <b className="sm:text-[1.125rem] text-[1rem]">Travel grant will be provided to IEEE students on first come first serve basis(as per availability of grant).</b>
                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default page