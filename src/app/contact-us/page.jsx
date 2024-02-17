'use client'
import Footer from "@/src/components/footer";
import Header from "@/src/components/Header/Header.js";


const ContactUs = () => {
    return (
        <div>
            <Header active='contact-us' />
            <div className="px-[5%] md:h-auto mb-28 md:mb-16">
                <h1 className="mt-3 mb-3 text-[#1E40AF] text-center underline">Contact Us</h1>
                <p className="text-[24px] sm:text-[36px]">For conference relatied queries write to us on :-<br />
                </p>
                <ul className=" text-[15px] sm:text-[18px]  pl-0">
                    <li>
                        <a href="mailto:acet@akgec.ac.in">acet@akgec.ac.in</a>
                    </li>
                    <li>
                        <a href="mailto:prasadrajesh@akgec.ac.in">prasadrajesh@akgec.ac.in</a>
                    </li>
                </ul>
                <p style={{ fontWeight: "400", margin: 0 }} className="text-[24px] sm:text-[36px]">Address:-</p>
                <p className=" text-[15px] sm:text-[18px]">27th Km Milestone,
                    Delhi-Meerut Expressway,
                    P.O. Adhyatmik Nagar,
                    Ghaziabad - 201009</p>
            </div>

            <Footer />

        </div>
    )
}

export default ContactUs;