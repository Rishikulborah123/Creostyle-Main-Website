import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-body-tertiary text-center mt-5 ">
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Social media */}
                    <section className="mb-4">
                        {/* Facebook */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#3b5998" }}
                            href="https://www.facebook.com/share/161MejnDuD/"
                            role="button"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        {/* Twitter */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#55acee" }}
                            href="https://x.com/creostyle_tech?t=xkduq1gVA-NlEjvcHPyzzQ&s=09"
                            role="button"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        {/* Google */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#dd4b39" }}
                            href="https://creostyletechnology@gmail.com/"
                            role="button"
                        >
                            <i className="fab fa-google" />
                        </a>
                        {/* Instagram */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#ac2bac" }}
                            href="https://www.instagram.com/creostyle.in?utm_source=qr&igsh=MXVkZXpuMWRmODlocg=="
                            role="button"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                        {/* Linkedin */}
                        <a
                            data-mdb-ripple-init=""
                            className="btn text-white btn-floating m-1"
                            style={{ backgroundColor: "#0082ca" }}
                            href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A106358221&keywords=creostyle%20technology&origin=RICH_QUERY_SUGGESTION&position=0&searchId=e0ce9070-484a-4382-83b6-c429c1948427&sid=pxc&spellCorrectionEnabled=false"
                            role="button"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        {/* Github */}
                        
                    </section>
                    {/* Section: Social media */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                >
                    © Conact: 
                    <a className="text-body" href="">
                        +91 9707214486
                    </a>
                </div>
                {/* Copyright */}
            </footer>

        </div>
    )
}

export default Footer
