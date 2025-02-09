import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useRef } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';



const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState({
        title: "",
        description: ""
    });
    const ref = useRef(null);
    const closeref = useRef(null);
    const handleLearnMore = (title, description) => {
        ref.current.click();
        setSelectedCourse({ title, description });
    };
    const onenroll = () => {
        closeref.current.click();
    }
    return (
        <div style={{ marginTop: "200px" }}>
            <>
                {/* Button trigger modal */}
                <button
                    type="button"
                    className="btn btn-primary d-none"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    ref={ref}
                >
                    Launch demo modal
                </button>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog  modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    {selectedCourse.title}
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <div>
                                    <strong>Course Overview:</strong>
                                    <p>{selectedCourse.description.overview}</p>
                                    <strong>What you will Learn:</strong>
                                    {selectedCourse?.description?.highlights && (
                                        <ul>
                                            {selectedCourse.description.highlights.map((highlight, index) => (
                                                <li key={index}>{highlight}</li>
                                            ))}
                                        </ul>

                                    )}
                                    <strong>price:Rs.{selectedCourse.description.price}</strong>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                    ref={closeref}
                                >
                                    Close
                                </button>
                                <NavLink onClick={onenroll} className="btn btn-primary" to="/Contact">
                                    Enroll
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </>

            <section className="py-lg-16 py-8">
                {/* container */}
                <div className="container text-white">
                    {/* row */}
                    <div className="row align-items-center">
                        {/* col */}
                        <div className="col-lg-6 col-12 mb-6 mb-lg-0 d-flex flex-column align-items-center text-center text-lg-start">
                            <div className="">
                                {/* heading */}
                                <h5 className="text-white mb-4">
                                    <i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2" />
                                    Most trusted education platform
                                </h5>
                                {/* heading */}
                                <h1 className="display-3 sm-display-1 fw-bold mb-3">
                                    Welcome To <h1 style={{ color: "#67bedb" }} className="display-3 fw-bold mb-3" >Creostyle</h1>
                                </h1>
                                {/* para */}
                                <p className="pe-lg-10 pe mb-5">
                                    We’re excited to have you on board as you begin your journey to mastering cutting-edge technology. Our courses are designed to help you unlock your potential and gain the skills needed to thrive in the digital world. Let’s build the future together!
                                </p>

                                {/* btn */}

                            </div>
                        </div>
                        {/* col */}
                        <div className="col-lg-6 col-12  d-lg-flex justify-content-center">
                            <DotLottieReact
                                src="https://lottie.host/fac094ad-4fd6-4eb8-a42d-50da39f470ca/AXgtSzhN8D.lottie"
                                loop
                                autoplay
                            />

                        </div>
                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>
            <section style={{ marginTop: "90px" }} className="py-lg-16 py-8 ">
                {/* container */}
                <div className="container text-white">
                    {/* row */}
                    <div className="row align-items-center">
                        {/* col */}
                        <div className="col-lg-7 d-flex">
                            <DotLottieReact
                                src="https://lottie.host/f139ea14-ee1a-43f1-9378-5255e589f827/rbio1qrlK5.lottie"
                                loop
                                autoplay
                            />

                        </div>
                        <div className="col-lg-5 col-12 mb-6 mb-lg-0 d-flex flex-column align-items-center text-center text-lg-start">
                            <div className="">
                                {/* heading */}

                                {/* heading */}
                                <h1 className="display-3 fw-bold mb-3">
                                    Learn From The Experts
                                </h1>
                                {/* para */}
                                <p className="pe-lg-10 mb-5">
                                    At Creostyle, we are passionate about empowering individuals with cutting-edge skills in technology. Our courses are designed to provide in-depth knowledge and hands-on experience in some of the most in-demand fields today. Whether you're just starting out or looking to advance your career, our expert instructors are here to guide you.
                                </p>
                                {/* btn */}

                            </div>
                        </div>
                        {/* col */}
                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

            <>
                {/* Service 7 - Bootstrap Brain Component */}
                <section className="bsb-service-7 py-5 py-xl-8 mt-5 mt-xl-20">
                    <div className="container">
                        <div className="row justify-content-md-center text-white">
                            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                                <h1 className="display-5  mb-2 text-secondary text-center text-uppercase fw-bold  text-white">
                                    Our Courses
                                </h1>
                                <h2 className="display-5 mt-3 mb-5 mb-xl-9 text-center text-secondary">
                                    We offer premier Courses where excellence meets affordability.
                                </h2>

                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <p className='col-12 text-white text-center fs-5'><p>Our courses are designed to provide practical, hands-on skills in today’s most in-demand fields. Whether you’re interested in Robotics and IoT, Web Development, Cybersecurity, or Cloud Computing, our expert-led programs give you the tools to excel in technology. Each course offers comprehensive learning for beginners and professionals alike, ensuring you’re equipped for the future of digital innovation.</p></p>
                            <div className="col-12">
                                <div style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                                    backdropFilter: "blur(1px)", // Glass effect
                                    borderRadius: "15px",
                                    boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                                }} className="container-fluid  ">
                                    <div className="row">
                                        <div className="col-12 col-md-3 p-0">
                                            <div className="card border-0 bg-transparent ">
                                                <div className="card-body text-center p-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56"
                                                        fill="currentColor"
                                                        class="bi bi-cloud-check-fill text-primary mb-4" viewBox="0 0 16 16">
                                                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 4.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                                                    </svg>
                                                    <h4 className="fw-bold text-uppercase mb-4 text-primary">Cloud Computing</h4>
                                                    <p className="mb-4 text-white">
                                                        Cloud computing is revolutionizing the way businesses operate. In this course, you’ll learn about cloud architecture, services, and deployment models. We’ll cover popular platforms like AWS, Azure, and Google Cloud, focusing on how to build, manage, and scale cloud-based applications.
                                                    </p>
                                                    <a

                                                        className="fw-bold text-decoration-none link-primary"
                                                        onClick={() => handleLearnMore("Cloud Computing", {
                                                            price: 799,
                                                            overview: "Cloud computing is revolutionizing the way businesses operate. In this course, you’ll learn about cloud architecture, services, and deployment models. We’ll cover popular platforms like AWS, Azure, and Google Cloud, focusing on how to build, manage, and scale cloud-based applications.",
                                                            highlights: [
                                                                "Fundamentals of cloud architecture and services",
                                                                "Virtualization, storage, and networking in the cloud",
                                                                "Managing cloud deployments with AWS, Azure, and Google Cloud",
                                                                "Best practices for cloud security and scalability"
                                                            ]
                                                        })}

                                                    >
                                                        Learn More
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-right-short "
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 p-0  border-start border-end border-secondary">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-body text-center p-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-robot text-primary mb-4" viewBox="0 0 16 16">
                                                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                                                        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
                                                    </svg>
                                                    <h4 className="fw-bold text-uppercase mb-4 text-primary">Robotics and IoT</h4>
                                                    <p className="mb-4 text-white">
                                                        This course dives into the exciting world of Robotics and the Internet of Things (IoT). You’ll learn how to design, build, and program robots, and connect IoT devices to create smart systems. Our curriculum covers microcontrollers, sensors, actuators, and communication protocols.
                                                    </p>
                                                    <a

                                                        className="fw-bold text-decoration-none link-primary"
                                                        onClick={() => handleLearnMore("Robotics and IoT", {
                                                            price: 699,
                                                            overview: "This course dives into the exciting world of Robotics and the Internet of Things (IoT). You’ll learn how to design, build, and program robots, and connect IoT devices to create smart systems. Our curriculum covers microcontrollers, sensors, actuators, and communication protocols.",
                                                            highlights: [
                                                                "Fundamentals of robotics design",
                                                                "IoT architecture protocols",
                                                                "Sensor-based systems",
                                                                "Industry applications"
                                                            ]
                                                        })}

                                                    >
                                                        Learn More
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-right-short"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 p-0  border-start border-end border-secondary">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-body text-center p-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-file-code-fill text-primary mb-4" viewBox="0 0 16 16">
                                                        <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708" />
                                                    </svg>
                                                    <h4 className="fw-bold text-uppercase mb-4 text-primary">Web Development</h4>
                                                    <p className="mb-4 text-white">
                                                        Learn how to create dynamic, responsive websites from scratch. This course covers everything from front-end design to back-end development. You'll get hands-on experience with HTML, CSS, JavaScript, and server-side programming to build modern, full-stack applications.
                                                    </p>
                                                    <a
                                                        
                                                        className="fw-bold text-decoration-none link-primary"
                                                        onClick={() => handleLearnMore("", {
                                                            price: 599, 
                                                            overview: " Learn how to create dynamic, responsive websites from scratch. This course covers everything from front-end design to back-end development. You'll get hands-on experience with HTML, CSS, JavaScript, and server-side programming to build modern, full-stack applications.",
                                                            highlights: [
                                                                "Front-end design with HTML, CSS, and JavaScript",
                                                                "Back-end development with Node.js and Express",
                                                                "Database management with MongoDB",
                                                                "Building and deploying web applications"
                                                                
                                                            ]
                                                        })}
                                                    >
                                                        Learn More
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-right-short"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-3 p-0">
                                            <div className="card border-0 bg-transparent">
                                                <div className="card-body text-center p-5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width={56}
                                                        height={56}
                                                        fill="currentColor"
                                                        className="bi bi-incognito text-primary mb-4"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="m4.736 1.968-.892 3.269-.014.058C2.113 5.568 1 6.006 1 6.5 1 7.328 4.134 8 8 8s7-.672 7-1.5c0-.494-1.113-.932-2.83-1.205a1.032 1.032 0 0 0-.014-.058l-.892-3.27c-.146-.533-.698-.849-1.239-.734C9.411 1.363 8.62 1.5 8 1.5c-.62 0-1.411-.136-2.025-.267-.541-.115-1.093.2-1.239.735Zm.015 3.867a.25.25 0 0 1 .274-.224c.9.092 1.91.143 2.975.143a29.58 29.58 0 0 0 2.975-.143.25.25 0 0 1 .05.498c-.918.093-1.944.145-3.025.145s-2.107-.052-3.025-.145a.25.25 0 0 1-.224-.274ZM3.5 10h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Zm-1.5.5c0-.175.03-.344.085-.5H2a.5.5 0 0 1 0-1h3.5a1.5 1.5 0 0 1 1.488 1.312 3.5 3.5 0 0 1 2.024 0A1.5 1.5 0 0 1 10.5 9H14a.5.5 0 0 1 0 1h-.085c.055.156.085.325.085.5v1a2.5 2.5 0 0 1-5 0v-.14l-.21-.07a2.5 2.5 0 0 0-1.58 0l-.21.07v.14a2.5 2.5 0 0 1-5 0v-1Zm8.5-.5h2a.5.5 0 0 1 .5.5v1a1.5 1.5 0 0 1-3 0v-1a.5.5 0 0 1 .5-.5Z"
                                                        />
                                                    </svg>
                                                    <h4 className="fw-bold text-uppercase mb-4 text-primary">Cybersecurity</h4>
                                                    <p className="mb-4 text-white">
                                                        In an increasingly digital world, cybersecurity is more important than ever. This course teaches you the fundamentals of securing networks, data, and applications. You’ll learn how to identify vulnerabilities, implement security measures, and protect systems from cyber threats.
                                                    </p>
                                                    <a

                                                        className="fw-bold text-decoration-none link-primary"
                                                        onClick={() => handleLearnMore("Cybersecurity", {
                                                            price: 999,
                                                            overview: "In an increasingly digital world, cybersecurity is more important than ever. This course teaches you the fundamentals of securing networks, data, and applications. You’ll learn how to identify vulnerabilities, implement security measures, and protect systems from cyber threats.",
                                                            highlights: [
                                                                "Network security and encryption",
                                                                "Threat detection and incident response",
                                                                "Security policies and compliance",
                                                                "Ethical hacking and penetration testing"
                                                            ]
                                                        })}

                                                    //  onClick={onclick("Cybersecurity",1000)}
                                                    >
                                                        Learn More
                                                        {/* {isOpen && <Modals ref={ref} desc={modalData.desc} price={modalData.price} onClose={() => setIsOpen(false)} />} */}
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width={16}
                                                            height={16}
                                                            fill="currentColor"
                                                            className="bi bi-arrow-right-short"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                                            />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

                <section style={{ marginTop: "90px" }} className="py-lg-16 py-8 ">
                    {/* container */}
                    <div className="container text-white">
                        {/* row */}
                        <div className="row align-items-center">
                            {/* col */}
                            <div className="col-lg-7 d-flex">
                                <DotLottieReact
                                    src="https://lottie.host/4817b8b0-49a9-4f2d-960e-fe8065b153b4/uEC06Pg6QM.lottie"
                                    loop
                                    autoplay
                                />

                            </div>
                            <div className="col-lg-5 col-12 mb-6 mb-lg-0 d-flex flex-column align-items-center text-center text-lg-start">
                                <div style={{
                                    backgroundColor: "rgba(255, 255, 255, 0.12)",
                                    backdropFilter: "blur(1px)", // Glass effect
                                    borderRadius: "15px",
                                    boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                                }} className="card border-1 bg text-white p-3">
                                    {/* heading */}

                                    {/* heading */}
                                    <h1 className="display-0.7 fw-bold mb-3">
                                        We'll help master you in every skills.
                                    </h1>
                                    {/* para */}
                                    <p className="pe-lg-10 mb-5">
                                        Highlight specific services or products that are unique to your business here. It can be your flagship product, or a service that you've pioneered. Give it room to shine here.
                                    </p>
                                    {/* btn */}

                                </div>
                            </div>
                            {/* col */}
                        </div>
                    </div>
                </section>

            </>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

            <section className="team-section py-5 mt-5 mt-xl-20">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
                            <h1 className="display-5  mb-2 text-secondary text-center text-uppercase fw-bold  text-white">
                                Meet Our Mentors
                            </h1>
                            <h2 className="display-5 mt-3 mb-5 mb-xl-9 text-center text-secondary">
                                Who will be your mentors in this courses?
                            </h2>

                        </div>
                        <p className='col-12 col-xl-10 text-white text-center fs-5'><p>Your mentors are experienced industry professionals, passionate about teaching and helping you succeed. With expertise in fields like robotics, web development, cybersecurity, and cloud computing, they bring real-world insights and practical skills to each course, ensuring you're ready for today's tech challenges.</p></p>
                        <div className="col-12 col-md-3">
                            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                                <div className="card-body p-4">
                                    <div className="member-profile position-absolute w-100  text-center">
                                        <img style={{ width: "100px", position: "relative", top: "-130px", right: "25px" }}
                                            className="rounded-circle mx-auto d-inline-block shadow-sm "
                                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-text pt-1">
                                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                                            Aryan Mitra
                                        </h5>
                                        <div className="mb-3 text-center">Web Development, Robotics & Cybersecurity Mentor
                                        </div>
                                        <div>
                                        Aryan brings a wealth of knowledge in web development, specializing in full-stack development with React.js. He is also experienced in robotics, IoT, cybersecurity, DSA, and multiple programming languages. As a mentor, Aryan is committed to guiding students toward mastering cutting-edge technologies, equipping them with the skills needed to excel in the tech industry.
                                        </div>
                                    </div>
                                </div>
                                {/*//card-body*/}
                                <div className="card-footer theme-bg-primary border-0 text-center">
                                    <ul className="social-list list-inline mb-0 mx-auto">
                                        <li className="list-inline-item">
                                            <a className="text-dark" href="#">

                                                <i className="fab fa-linkedin-in fa-fw"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-dark" href="#">

                                                <i className="fab fa-instagram fa-fw"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-dark" href="#">

                                                <i className="fab fa-github fa-fw"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*//social-list*/}
                                </div>
                                {/*//card-footer*/}
                            </div>
                            {/*//card*/}
                        </div>
                        {/*//col*/}
                        <div className="col-12 col-md-3">
                            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                                <div className="card-body p-4">
                                    <div className="member-profile position-absolute w-100 text-center">
                                        <img
                                            style={{ width: "100px", position: "relative", top: "-130px", right: "25px" }}
                                            className="rounded-circle mx-auto d-inline-block shadow-sm"
                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-text pt-1">
                                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                                            Rishikul Borah
                                        </h5>
                                        <div className="mb-3 text-center">Frontend Development Mentor
                                        </div>
                                        <div>
                                        Rishikul leads the frontend course at Creostyle, teaching students how to create dynamic, responsive websites using modern technologies like React.js. As a seasoned MERN stack developer, he provides valuable insights into frontend frameworks, helping students master user-centric design and development.
                                        </div>
                                    </div>
                                </div>
                                {/*//card-body*/}
                                <div className="card-footer theme-bg-primary border-0 text-center">
                                    <ul className="social-list list-inline mb-0 mx-auto">
                                        <li className="list-inline-item">
                                            <a className="text-dark" href="#">

                                                <i className="fab fa-linkedin-in fa-fw"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-dark" href="#">

                                                <i className="fab fa-instagram fa-fw"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-dark" href="#">

                                                <i className="fab fa-github fa-fw"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*//social-list*/}
                                </div>
                                {/*//card-footer*/}
                            </div>
                            {/*//card*/}
                        </div>
                        {/*//col*/}
                        <div className="col-12 col-md-3 col-lg-3">
                            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
                                <div className="card-body p-4">
                                    <div className="member-profile position-absolute w-100 text-center">
                                        <img
                                            style={{ width: "100px", position: "relative", top: "-130px", right: "25px" }}
                                            className="rounded-circle mx-auto d-inline-block shadow-sm"
                                            src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="card-text pt-1">
                                        <h5 className="member-name mb-0 text-center text-primary font-weight-bold">
                                            Ricky Kashyap
                                        </h5>
                                        <div className="mb-3 text-center">Backend, Robotics & Cybersecurity Mentor
                                        </div>
                                        <div>
                                        With a strong background in backend development, cybersecurity, and robotics, Ricky helps students understand how to build secure, efficient systems. He brings expertise in robotics, cybersecurity, DSA, and programming languages and provides mentorship on deploying APIs and building secure backend solutions.{" "}
                                        </div>
                                    </div>
                                </div>
                                {/*//card-body*/}
                                <div className="card-footer theme-bg-primary border-0 text-center">
                                    <ul className="social-list list-inline mb-0 mx-auto">
                                        <li className="list-inline-item">
                                            <a className="text-dark" href="#">

                                                <i className="fab fa-linkedin-in fa-fw"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-dark" href="#">

                                                <i className="fab fa-github fa-fw"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="text-dark" href="#">

                                                <i className="fab fa-instagram fa-fw"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*//social-list*/}
                                </div>
                                {/*//card-footer*/}
                            </div>
                            {/*//card*/}
                        </div>
                        {/*//col*/}

                        {/*//col*/}
                    </div>
                    {/*//row*/}
                </div>
            </section>



        </div>
    )
}

export default Courses
