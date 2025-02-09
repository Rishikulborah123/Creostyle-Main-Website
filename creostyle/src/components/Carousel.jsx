import React from 'react'


const Carousel = () => {
    return (
        <>
            <div style={{marginTop:"100px"}}>
                <div style={{ height: "480px", backgroundColor: "#022935", color: "white" }} id="carouselExampleCaptions" className="carousel slide active">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img style={{ height: "550px", objectFit: "cover",filter:"brightness(70%)" }} src={'/images/Bg2.jpg'} className="w-100" alt="..." />
                            <div className="carousel-caption text-dark d-flex flex-column justify-content-center align-items-center h-100 text-white">
                                <h1 style={{ fontFamily: "Nunito Sans", letterSpacing: "3px" }}><strong>Welcome To Creostyle</strong></h1>
                                <p style={{fontSize:"25px",fontFamily:"Sorce Code Pro"}}>At Creostyle, we bring your ideas to life with bespoke web development solutions.</p>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img style={{ height: "550px", objectFit: "cover" }} src={'/images/Bg.jpg'} className="w-100" alt="..." />
                            <div className="carousel-caption text-dark d-flex flex-column justify-content-center align-items-center h-100 text-white ">
                                <h1 style={{ fontFamily: "Nunito Sans", letterSpacing: "3px" }}><strong>Crafting Stylish Digital Experiences</strong></h1>
                                <p>Tailored websites that look stunning on every device</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img style={{ height: "550px", objectFit: "cover",filter:"brightness(60%)" }} src={'/images/Bg1.jpg'} className="w-100" alt="..." />
                            <div className="carousel-caption text-dark d-flex flex-column justify-content-center align-items-center h-100 text-white ">
                                <h1 style={{ fontFamily: "Nunito Sans", letterSpacing: "3px" }}><strong>Scalable Hosting & SEO Optimization</strong></h1>
                                <p>Fast, secure, and optimized for growth.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
            <hr style={{position:"relative",top:"120px"}} class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>
            <div style={{
                marginTop: "200px",
                backgroundColor: "rgba(255, 255, 255, 0.05)", // Transparent white background
                backdropFilter: "blur(1px)", // Glass effect
                borderRadius: "15px", // Rounded corners
                // padding: "20px", // Optional padding
                boxShadow: "0 4px 50px rgba(0, 0, 0, 3)",
                maxWidth:"90%"
                
                
            }} className="container">
                <div className="row align-items-center ">
                    <div className=" col-md-10 mx-auto col-xl-5 mb-4">
                        <div className="lc-block">
                            <img
                                className="img-fluid"
                                src={'./images/web development.webp'}
                                srcSet=""
                                sizes=""
                                width=""
                                height=""
                                style={{ borderRadius: "15px" , marginTop:"50px",boxShadow: "0 4px 50px rgba(0, 0, 0, 3)" }}
                                alt="Photo by Alessandro Di Credico"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-xl-5 mx-auto" style={{ color: "white" }}>
                        <div className="lc-block mb-2">
                            <svg
                                width="3em"
                                height="3em"
                                viewBox="0 0 16 16"
                                lc-helper="svg-icon"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                                />
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </div>
                        <div className="lc-block mb-3 me-lg-5 ">
                            <div editable="rich">
                                <h1 style={{ color: "white" }} className="fw-bolder">Web Development Expertise</h1>
                                <p className="lead">
                                At Creostyle, we specialize in modern, innovative web development that meets the unique needs of each client. Whether it’s e-commerce, content management, or custom development, we build scalable and secure websites.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <hr style={{ position: "relative", top: "80px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>
            <div style={{
                marginTop: "200px",
                backgroundColor: "rgba(255, 255, 255, 0.05)", // Transparent white background
                backdropFilter: "blur(1px)", // Glass effect
                borderRadius: "15px", // Rounded corners
                padding: "20px", // Optional padding
                boxShadow: "0 4px 50px rgba(0, 0, 0, 3)",
                maxWidth:"90%"
            }} className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-xl-5 mx-auto" style={{ color: "white" }}>
                        <div className="lc-block mb-2">
                            <svg
                                width="3em"
                                height="3em"
                                viewBox="0 0 16 16"
                                lc-helper="svg-icon"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                                />
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </div>
                        <div className="lc-block mb-3 me-lg-5">
                            <div editable="rich">
                                <h1 style={{ color: "white" }} className="fw-bolder">Custom Web Design</h1>
                                <p className="lead">
                                Our custom web design services offer tailored, visually striking websites that represent your brand identity. We focus on intuitive designs that not only attract visitors but also engage them.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-10 mx-auto col-xl-5 mb-4">
                        <div className="lc-block">
                            <img
                                className="img-fluid"
                                src={'./images/custom design.png'}
                                srcSet=""
                                sizes=""
                                width=""
                                height=""
                                style={{ borderRadius: "15px" , marginTop:"50px",boxShadow: "0 4px 50px rgba(0, 0, 0, 3)" }}
                                alt="Photo by Alessandro Di Credico"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ position: "relative", top: "80px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>
            <div style={{
                marginTop: "200px",
                backgroundColor: "rgba(255, 255, 255, 0.05)", // Transparent white background
                backdropFilter: "blur(1px)", // Glass effect
                borderRadius: "15px", // Rounded corners
                padding: "20px", // Optional padding
                boxShadow: "0 4px 50px rgba(0, 0, 0, 3)",
                maxWidth:"90%"
            }} className="container">
                <div className="row align-items-center">
                    <div className="col-md-10 mx-auto col-xl-5 mb-4">
                        <div className="lc-block">
                            <img
                                className="img-fluid"
                                src={'./images/se0.webp'}
                                srcSet=""
                                sizes=""
                                width=""
                                height=""
                                style={{ borderRadius: "15px" , marginTop:"50px",boxShadow: "0 4px 50px rgba(0, 0, 0, 3)" }}
                                alt="Photo by Alessandro Di Credico"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-xl-5 mx-auto" style={{ color: "white" }}>
                        <div className="lc-block mb-2">
                            <svg
                                width="3em"
                                height="3em"
                                viewBox="0 0 16 16"
                                lc-helper="svg-icon"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                                />
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                            </svg>
                        </div>
                        <div className="lc-block mb-3 me-lg-5">
                            <div editable="rich">
                                <h1 style={{ color: "white" }} className="fw-bolder">24/7 Support & SEO Solutions</h1>
                                <p className="lead">
                                With our scalable hosting solutions and 24/7 technical support, your website is always up and running smoothly. We also implement SEO optimization strategies to drive organic traffic and improve your search engine rankings.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Carousel
