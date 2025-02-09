import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const About = () => {
    return (
        <div style={{ marginTop: "100px" }}>
            <section className="py-3 py-md-5 py-xl-8">
                <div style={{ color: "white" }} className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                            <h2 className="mb-4 display-5 text-center">About Creostyle</h2>
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
                                            At Creostyle, we believe in crafting stylish digital experiences that make an impact. With years of experience in web development, web hosting, and design, our team is dedicated to delivering high-quality, tailored solutions that meet your unique business needs. Whether you're a startup or an established enterprise, our mission is to bring your vision to life with creativity, technical expertise, and seamless user experiences. We prioritize innovation, responsiveness, and support, ensuring that every project reflects our commitment to excellence.
                                        </p>


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 ">
                            <DotLottieReact
                                src="https://lottie.host/4c44e9ad-e10b-4609-b936-d1de48cba6bb/lYxoxZAfQA.lottie"
                                loop
                                autoplay
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
                            {/* <img style={{
                                borderRadius: "15px",
                                boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                            }}
                                className="img-fluid rounded border border-dark"
                                loading="lazy"
                                src="./images/grp photo2.jpg"
                                alt="About 6"
                            /> */}
                            <DotLottieReact
                                src="https://lottie.host/c0cefbe6-dd26-452e-b305-4d2261376f8f/uoNSKcLtrX.lottie"
                                loop
                                autoplay
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
                                                    Founded with a passion for creativity and innovation
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseOne"
                                                className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne"
                                                data-bs-parent="#accordionAbout6"
                                            >
                                                <div className="accordion-body text-white">
                                                    Creostyle was built on the idea that digital solutions should be both functional and visually compelling. Our team continuously explores new trends and technologies to stay ahead of the curve.
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
                                                    Focus on customer satisfaction and long-term support
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseTwo"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionAbout6"
                                            >
                                                <div className="accordion-body text-white">
                                                    We don’t just build websites—we build lasting relationships. From project inception to post-launch support, we ensure smooth operations and timely updates to keep your digital presence strong.
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
                                                    Dedicated team of developers, designers, and support staff
                                                </button>
                                            </h2>
                                            <div
                                                id="collapseThree"
                                                className="accordion-collapse collapse"
                                                aria-labelledby="headingThree"
                                                data-bs-parent="#accordionAbout6"
                                            >
                                                <div className="accordion-body text-white">
                                                    Our experienced professionals collaborate closely with clients, combining technical expertise with creative insights to deliver exceptional results. Whether it’s designing a sleek UI, ensuring fast and secure hosting, or troubleshooting issues, we are here to support your growth.
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
