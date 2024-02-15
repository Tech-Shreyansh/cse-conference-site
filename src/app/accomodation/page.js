'use client'
import Theme from "../../components/theme.jsx"
import Header from "../../components/Header/Header"
import Footer from "../../components/footer"
const page = () => {
    return (
        <>
        <div>
            <Header active="accomodation" />
            <div id="call" className="target mb-5 foothandle">
                <div className="container" >
                <h1 className="text-blue-800 text-4xl mb-4">Accomodation</h1>
                    <p>Participants will make their own arrangements for travel, boarding, lodging etc. However, limited accommodation facility may be provided to the participants in hostels and guest rooms of the institute on special request. For lady participants’ accommodation shall be arranged in the Girls hostels of the institute, on request. For guests, the accommodation shall be arranged by our Institute.
                    </p>
                </div>
            </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0">
        <Footer />
    </div>
    </>
    )
}

export default page