import React from 'react'

const About = () => {
    return (
        <div style={{marginTop:"100px"}}>
            <section className="py-3 py-md-5 py-xl-8">
                <div style={{ color: "white" }} className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="mb-4 display-5 text-center">About Us</h2>
                            <p style={{ color: "rgb(129 135 141)" }} className="text-secondary mb-5 text-center lead fs-4">
                                We believe in the power of teamwork and collaboration. Our diverse
                                experts work tirelessly to deliver innovative solutions tailored to
                                our clients' needs.
                            </p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6 col-xxl-6">
                            <div className="row justify-content-lg-end">
                                <div className="col-12 col-lg-11">
                                    <div className="about-wrapper">
                                        <p className="lead mb-4 mb-md-5 text-white">
                                            As a socially responsible entity, we are deeply committed to
                                            positively impacting the communities we serve and the world at
                                            large. Through various initiatives and partnerships, we actively
                                            contribute to environmental sustainability, social welfare, and
                                            educational advancement.
                                        </p>
                                        <div className="row gy-4 mb-4 mb-md-5">
                                            <div className="col-12 col-md-6">
                                                <div style={{
                                                    borderRadius: "15px",
                                                    boxShadow: "0 4px 50px rgba(0, 0, 0, 10)"
                                                }} className="card border border-dark">
                                                    <div className="card-body p-4">
                                                        <h3 className="display-5 fw-bold text-primary text-center mb-2">
                                                            370+
                                                        </h3>
                                                        <p className="fw-bold text-center m-0">
                                                            Qualified Experts
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6">
                                                <div style={{
                                                    borderRadius: "15px",
                                                    boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                                                }} className="card border border-dark">
                                                    <div className="card-body p-4">
                                                        <h3 className="display-5 fw-bold text-primary text-center mb-2">
                                                            18k+
                                                        </h3>
                                                        <p className="fw-bold text-center m-0">
                                                            Satisfied Clients
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#!" className="btn btn-primary bsb-btn-2xl">
                                            Explore
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={20}
                                                height={20}
                                                fill="currentColor"
                                                className="bi bi-arrow-right-short"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 ">
                            <img
                                className="img-fluid rounded border border-dark"
                                style={{
                                    borderRadius: "15px",
                                    boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                                }}
                                loading="lazy"
                                src="./images/technology1.jpg"
                                alt="About Us"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bsb-about-6 py-3 py-md-5 py-xl-8">
                <div style={{ color: "white" }} className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="mb-4 display-5 text-center">Why Choose Us</h2>
                            <p style={{ color: "rgb(129 135 141)" }} className="text-secondary mb-5 text-center lead fs-4">
                                Our commitment to excellence is evident in every project we undertake,
                                ensuring that you receive nothing but the highest quality products and
                                services.
                            </p>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row gy-4 gy-lg-0 align-items-lg-center">
                        <div className="col-12 col-lg-6">
                            <img style={{
                                borderRadius: "15px",
                                boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                            }}
                                className="img-fluid rounded border border-dark"
                                loading="lazy"
                                src="./images/team work.jpg"
                                alt="About 6"
                            />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row justify-content-xl-end">
                                <div className="col-12 col-xl-11">
                                    <div className="accordion accordion-flush" id="accordionAbout6">
                                        <div style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.12)",
                                            backdropFilter: "blur(1px)", // Glass effect
                                            borderRadius: "15px",
                                            boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                                        }
                                        } className="accordion-item mb-4 border border-dark">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button
                                                    className="accordion-button bg-transparent fs-4 fw-bold text-white"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Low Price Guarantee
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionAbout6"
                                            >
                                                <div className="accordion-body text-white">
                                                    Our Low Price Guarantee isn't just a promise; it's a
                                                    commitment to providing you with unbeatable value and peace
                                                    of mind when you shop with us. Trust us to deliver quality
                                                    products and services without breaking the bank.
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.12)",
                                            backdropFilter: "blur(1px)", // Glass effect
                                            borderRadius: "15px",
                                            boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                                        }
                                        } className="accordion-item mb-4 border border-dark">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button
                                                    className="accordion-button collapsed bg-transparent fs-4 fw-bold text-white"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Life-Time Warranty
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionAbout6"
                                            >
                                                <div className="accordion-body text-white">
                                                    Discover unparalleled peace of mind with our business's
                                                    lifetime warranty commitment. We stand behind the quality
                                                    and durability of our products like no other.
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.12)",
                                            backdropFilter: "blur(1px)", // Glass effect
                                            borderRadius: "15px",
                                            boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                                        }} className="accordion-item mb-4 border border-dark">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button
                                                    className="accordion-button collapsed bg-transparent fs-4 fw-bold text-white"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Genuine Spare Parts
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionAbout6"
                                            >
                                                <div className="accordion-body text-white">
                                                    Our commitment to authenticity ensures that you receive
                                                    parts manufactured to the highest standards, guaranteeing
                                                    optimal performance and longevity for your equipment. From
                                                    small components to intricate pieces, we have everything you
                                                    need to keep your machinery running smoothly.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
