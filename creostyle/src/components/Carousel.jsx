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
                            <img style={{ height: "550px", objectFit: "cover" }} src={'/images/nature.jpg'} className="w-100" alt="..." />
                            <div className="carousel-caption text-dark d-flex flex-column justify-content-center align-items-center h-100">
                                <h1 style={{ fontFamily: "Nunito Sans", letterSpacing: "3px" }}><strong>Welcome To Creostyle</strong></h1>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <img style={{ height: "550px", objectFit: "cover" }} src={'/images/nature.jpg'} className="w-100" alt="..." />
                            <div className="carousel-caption text-dark d-flex flex-column justify-content-center align-items-center h-100  ">
                                <h1 style={{ fontFamily: "Nunito Sans", letterSpacing: "3px" }}><strong>Welcome To Creostyle</strong></h1>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img style={{ height: "550px", objectFit: "cover" }} src={'/images/nature.jpg'} className="w-100" alt="..." />
                            <div className="carousel-caption text-dark d-flex flex-column justify-content-center align-items-center h-100 ">
                                <h1 style={{ fontFamily: "Nunito Sans", letterSpacing: "3px" }}><strong>Welcome To Creostyle</strong></h1>
                                <p>Some representative placeholder content for the third slide.</p>
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
                padding: "20px", // Optional padding
                boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
            }} className="container">
                <div className="row align-items-center">
                    <div className="col-md-10 mx-auto col-xl-5 mb-4">
                        <div className="lc-block">
                            <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1446229117710-2e5dd691ab55?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2l0eSUyMGJ3fGVufDB8MHx8fDE3MDMwOTE5NDV8MA&ixlib=rb-4.0.3&q=80&w=1080&h=768"
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
                                <h1 style={{ color: "white" }} className="fw-bolder">Hello World!</h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    tincidunt ac augue suscipit rhoncus. Donec ante erat, hendrerit sed
                                    eleifend et, dapibus at leo. Mauris bibendum mi ut dui sagittis
                                    volutpat.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div style={{
                marginTop: "200px",
                backgroundColor: "rgba(255, 255, 255, 0.05)", // Transparent white background
                backdropFilter: "blur(1px)", // Glass effect
                borderRadius: "15px", // Rounded corners
                padding: "20px", // Optional padding
                boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
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
                                <h1 style={{ color: "white" }} className="fw-bolder">Hello World!</h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    tincidunt ac augue suscipit rhoncus. Donec ante erat, hendrerit sed
                                    eleifend et, dapibus at leo. Mauris bibendum mi ut dui sagittis
                                    volutpat.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-10 mx-auto col-xl-5 mb-4">
                        <div className="lc-block">
                            <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1446229117710-2e5dd691ab55?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2l0eSUyMGJ3fGVufDB8MHx8fDE3MDMwOTE5NDV8MA&ixlib=rb-4.0.3&q=80&w=1080&h=768"
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
            <div style={{
                marginTop: "200px",
                backgroundColor: "rgba(255, 255, 255, 0.05)", // Transparent white background
                backdropFilter: "blur(1px)", // Glass effect
                borderRadius: "15px", // Rounded corners
                padding: "20px", // Optional padding
                boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
            }} className="container">
                <div className="row align-items-center">
                    <div className="col-md-10 mx-auto col-xl-5 mb-4">
                        <div className="lc-block">
                            <img
                                className="img-fluid"
                                src="https://images.unsplash.com/photo-1446229117710-2e5dd691ab55?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3wzNzg0fDB8MXxzZWFyY2h8MXx8Y2l0eSUyMGJ3fGVufDB8MHx8fDE3MDMwOTE5NDV8MA&ixlib=rb-4.0.3&q=80&w=1080&h=768"
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
                                <h1 style={{ color: "white" }} className="fw-bolder">Hello World!</h1>
                                <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    tincidunt ac augue suscipit rhoncus. Donec ante erat, hendrerit sed
                                    eleifend et, dapibus at leo. Mauris bibendum mi ut dui sagittis
                                    volutpat.
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
