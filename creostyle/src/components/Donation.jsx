import React from 'react'

const Donation = () => {
    return (
        <div style={{ marginTop: "100px" }}>
            <section
                className="bsb-hero-5 px-3 bsb-overlay"
                style={{ backgroundImage: `url('./images/bgdonation.jpg')` }}
            >
                <div className="container">
                    <div className="row justify-content-md-center align-items-center">
                        <div className="col-12 col-md-11 col-lg-9 col-xl-8 col-xxl-7">
                            <h2 style={{ color: "#11be11" }} className="display-4 text-center fw-bold mb-4 text-green">
                                Transforming Lives <p className='text-white'>through competition and education</p>
                            </h2>

                            <p className="lead text-white text-center mb-5 d-flex justify-content-sm-center">
                                <span className="col-12 col-sm-10 col-md-8 col-xxl-7">
                                    There are three ways to ultimate success: The first way is to be
                                    kind. The second way is to be kind. The third way is to be kind.
                                </span>
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>
            <section className="bsb-service-7 py-5 py-xl-8 mt-5 mt-xl-20">
                <div className="container">
                    <div className="row justify-content-md-center text-dark">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-12">
                            <h2 className="display-5  mb-2 text-secondary text-center text-uppercase fw-bold  text-dark">
                                Our Commitment to <span style={{ color: "#11be11" }}>Social Impact</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-xl-12 mb-5 mt-5 mb-lg-0">
                            <img className='rounded' style={{
                                width: "100%", height: "30vh", objectFit: "cover",
                                backdropFilter: "blur(1px)", // Glass effect
                                borderRadius: "15px",
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 3)"
                            }} src="./images/backgroundphoto.jpg" alt="" />
                        </div>
                        <p className='col-12 mt-3 text-dark text-center fs-5'><p>At CreoStyle, we believe in using our success to create lasting, positive change. We’re committed to giving back and making education accessible to those who need it most. That’s why 20% of our profits go directly to supporting children’s education.</p></p>
                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

            <section className="bsb-service-7 py-5 py-xl-8 mt-3 mt-xl-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-xl-4 mb-5 mt-5 mb-lg-0">
                            <img className='rounded w-100' style={{
                                height: "100%", width: "50vh", objectFit: "cover", filter: 'sepia(0%) saturate(150%) hue-rotate(40deg)',
                                backdropFilter: "blur(1px)", // Glass effect
                                borderRadius: "15px",
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 3)"
                            }} src="./images/verticalbg.jpg" alt="" />
                        </div>
                        <div className="col-12 col-md-8 col-xl-8 mb-5 mt-5 mb-lg-0">
                            <h3 className="display-6  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                What We Give: <p style={{ color: "#11be11" }}>The Power Of Education</p>
                            </h3>
                            <div className='row'>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                    <svg style={{ color: "green" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                                    </svg>
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Breaking the Cycle of <p style={{ color: "#11be11" }}>Poverty</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none", overflowWrap: "break-word" }}>Education is one of the most powerful tools to break the cycle of poverty. By giving underprivileged children access to learning opportunities, we enable them to gain knowledge and skills that can lead to better jobs, financial stability, and improved living conditions, ultimately changing their lives for the better.</p>
                                    </h4>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                    <svg style={{ color: "green" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
                                    </svg>
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Creating Equal <p style={{ color: "#11be11" }}>Opportunities</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>Education is a fundamental right, but many children are deprived of it due to financial barriers. By providing free education, we are leveling the playing field, giving every child the opportunity to succeed regardless of their background or circumstances</p>
                                    </h4>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                    <svg style={{ color: "green" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-3-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                                    </svg>
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Unlocking  <p style={{ color: "#11be11" }}>Potential</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>Every child has the potential to achieve great things. Through education, we unlock their talents, creativity, and problem-solving abilities. With the right guidance and resources, they can grow into innovators, leaders, and positive contributors to society</p>
                                    </h4>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                    <svg style={{color:"green"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-4-square-fill" viewBox="0 0 16 16">
                                        <path d="M6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218" />
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265Z" />
                                    </svg>
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Building a Brighter  <p style={{ color: "#11be11" }}>Future</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>Education paves the way for a brighter future for individuals and communities alike. With skills in technology, literacy, and critical thinking, children are better prepared to face future challenges and contribute to the development of their communities and the world.</p>
                                    </h4>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

            <section className="bsb-service-7 py-5 py-xl-8 mt-5 mt-xl-20">
                <div className="container">
                    <div className="row justify-content-md-center text-dark">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-12">
                            <h2 className="display-5  mb-2 text-secondary text-center text-uppercase fw-bold  text-dark">
                                Free Education For <span style={{ color: "#11be11" }}>Underprivileged Students</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-xl-12 mb-5 mt-5 mb-lg-0">
                            <img className='rounded' style={{
                                width: "100%", height: "30vh", objectFit: "cover",
                                backdropFilter: "blur(1px)", // Glass effect
                                borderRadius: "15px",
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 3)"
                            }} src="./images/education.jpg" alt="" />
                        </div>
                        <p className='col-12 mt-3 text-dark text-center fs-5'><p>We provide free education to children who cannot afford it. From basic literacy to advanced tech skills, we equip them with the knowledge they need to thrive in the modern world. Our programs focus on practical learning to build a strong foundation for their future.</p></p>
                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

            <section className="bsb-service-7 py-5 py-xl-8 mt-3 mt-xl-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-xl-4 mb-5 mt-5 mb-lg-0">
                            <img className='rounded w-100' style={{
                                height: "100%", width: "50vh", objectFit: "cover", filter: 'sepia(0%) saturate(150%) hue-rotate(40deg)',
                                backdropFilter: "blur(1px)", // Glass effect
                                borderRadius: "15px",
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 3)"
                            }} src="./images/skills.jpeg" alt="" />
                        </div>
                        <div className="col-12 col-md-8 col-xl-8 mb-5 mt-5 mb-lg-0">
                            <h3 className="display-6  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                Teaching <p style={{ color: "#11be11" }}>Essential Skills</p>
                            </h3>
                            <div className='row'>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                <svg style={{ color: "green" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z" />
                                    </svg>
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Preparing for the <p style={{ color: "#11be11" }}>Digital Age</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none", overflowWrap: "break-word" }}>The world is becoming increasingly technology-driven, and digital skills are essential for future success. By teaching children coding, robotics, and other tech-related skills, we prepare them for the evolving job market and equip them to thrive in the digital age.</p>
                                    </h4>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                <svg style={{ color: "green" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-2-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306" />
                                    </svg>
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Building Confidence and  <p style={{ color: "#11be11" }}>Independence</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>By learning valuable skills, children develop confidence in their abilities and become more independent thinkers. These skills not only enhance their education but also empower them to take control of their futures and pursue their goals with determination and self-assurance.</p>
                                    </h4>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                <svg style={{ color: "green" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-3-square-fill" viewBox="0 0 16 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318" />
                                    </svg>
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Hands-On Learning for  <p style={{ color: "#11be11" }}>Real-World Solutions</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>Our programs emphasize practical, hands-on learning, allowing children to apply their knowledge to real-world problems. Through projects and activities, they gain critical problem-solving skills and the confidence to innovate and create solutions that matter.</p>
                                    </h4>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

            <section className="bsb-service-7 py-5 py-xl-8 mt-5 mt-xl-20">
                <div className="container">
                    <div className="row justify-content-md-center text-dark">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-12">
                            <h2 className="display-5  mb-2 text-secondary text-center text-uppercase fw-bold  text-dark">
                                Spreading <span style={{ color: "#11be11" }}>Awarness</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-xl-12 mb-5 mt-5 mb-lg-0">
                            <img className='rounded' style={{
                                width: "100%", height: "30vh", objectFit: "cover"
                                ,
                                backdropFilter: "blur(1px)", // Glass effect
                                borderRadius: "15px",
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 3)"
                            }} src="./images/awarness.jpg" alt="" />
                        </div>
                        <div className='row mt-3'>
                            <div className="col-12 col-md-4 col-xl-4 mb-2 mt-2 mb-lg-0">
                                <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                    Highlighting Educational <p style={{ color: "#11be11" }}>Inequality</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none", overflowWrap: "break-word" }}>We actively work to bring attention to the educational disparities faced by underprivileged children. By highlighting the gaps in access to education, we aim to raise awareness of the urgent need for equal learning opportunities for all, regardless of socioeconomic status.</p>
                                </h4>
                            </div>
                            <div className="col-12 col-md-4 col-xl-4 mb-2 mt-2 mb-lg-0">
                                <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                    Engaging Communities and <p style={{ color: "#11be11" }}>Partners</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>Through community outreach programs and collaborations with local and global partners, we spread the message about the importance of education. We engage schools, businesses, and individuals to join our mission and contribute to creating a more educated and empowered generation.</p>
                                </h4>
                            </div>
                            <div className="col-12 col-md-4 col-xl-4 mb-2 mt-2 mb-lg-0">
                                <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                    Inspiring Action and  <p style={{ color: "#11be11" }}>Support</p>
                                    <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>Awareness leads to action. By informing others about the challenges faced by children in need, we inspire individuals, organizations, and businesses to support our cause. Together, we can drive positive change, encouraging more people to take part in the fight for educational equality.</p>
                                </h4>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

            <section className="bsb-service-7 py-5 py-xl-8 mt-3 mt-xl-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-xl-4 mb-5 mt-5 mb-lg-0">
                            <img className='rounded w-100' style={{
                                height: "100%", width: "50vh", objectFit: "cover", filter: 'sepia(0%) saturate(150%) hue-rotate(40deg)',
                                backdropFilter: "blur(1px)", // Glass effect
                                borderRadius: "15px",
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 3)"
                            }} src="./images/empowering.jpeg" alt="" />
                        </div>
                        <div className="col-12 col-md-8 col-xl-8 mb-5 mt-5 mb-lg-0">
                            <h3 className="display-6  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                Empowering the  <p style={{ color: "#11be11" }}>Next Generation</p>
                            </h3>
                            <div className='row'>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Fostering Leadership <p style={{ color: "#11be11" }}>Skills</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none", overflowWrap: "break-word" }}>By teaching children essential life and technology skills, we empower them to become leaders in their communities. Whether it's through problem-solving, critical thinking, or innovation, we equip them with the tools to take initiative and drive positive change.</p>
                                    </h4>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Encouraging Innovation and <p style={{ color: "#11be11" }}>Creativity</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>We inspire children to think outside the box and pursue creative solutions to challenges. By fostering a mindset of innovation, they learn to develop new ideas and approaches that can benefit not only their own lives but also society at large.</p>
                                    </h4>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Instilling Confidence and<p style={{ color: "#11be11" }}>Self-Reliance</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>Empowerment begins with confidence. Through our programs, children gain a sense of self-reliance and belief in their abilities. With the right skills and knowledge, they grow into confident individuals who can take control of their futures and achieve their dreams.</p>
                                    </h4>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

            <section className="bsb-service-7 py-5 py-xl-8 mt-3 mt-xl-20">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-xl-4 mb-5 mt-5 mb-lg-0">
                            <img className='rounded w-100 w-xl-75' style={{
                                height: "100%", width: "50vh", objectFit: "cover", filter: 'sepia(0%) saturate(150%) hue-rotate(40deg)',
                                backdropFilter: "blur(1px)", // Glass effect
                                borderRadius: "15px",
                                boxShadow: "0 4px 30px rgba(0, 0, 0, 3)"
                            }} src="./images/help.jpeg" alt="" />
                        </div>
                        <div className="col-12 col-md-8 col-xl-8 mb-5 mt-5 mb-lg-0">
                            <h3 className="display-6  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                How You Can  <p style={{ color: "#11be11" }}>Help</p>
                            </h3>
                            <div className='row'>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Choosing Creostyle Supports<p style={{ color: "#11be11" }}>Education</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none", overflowWrap: "break-word" }}>By choosing Creostyle for your web development needs, you're not just investing in quality services — you're also contributing to our mission of providing education to children in need. A portion of every project helps fund our efforts to make education accessible for all.</p>
                                    </h4>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0">
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Partner with Us for <p style={{ color: "#11be11" }}>Greater Impact</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>Join us in expanding our reach. By partnering with Creostyle, whether as a business or an individual, you can help amplify our impact. Together, we can offer more resources, build better programs, and change more lives through education.</p>
                                    </h4>
                                </div>

                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0 mt-5">
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Spread the<p style={{ color: "#11be11" }}>Word</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>You can make a difference simply by spreading awareness about our cause. Sharing our mission with your network helps increase support and brings more attention to the educational needs of underprivileged children, furthering our mission to reach and teach.</p>
                                    </h4>
                                </div>
                                <div className="col-12 col-md-6 col-xl-6 mb-2 mt-2 mb-lg-0 mt-5">
                                    <h4 className="display-7  mb-2 text-secondary  text-uppercase fw-bold  text-dark">
                                        Donate or<p style={{ color: "#11be11" }}>Volunteer</p>
                                        <p style={{ fontSize: "15px", fontWeight: "normal", textTransform: "none" }}>Direct contributions and volunteering can have a lasting impact. Whether it’s donating time, resources, or funds, your support helps us continue providing free education and empowering the next generation. Every bit of help brings us closer to our goal of educational equality.</p>
                                    </h4>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <hr style={{ position: "relative", top: "20px" }} className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"></hr>

            <section className="bsb-service-7 py-5 py-xl-8 mt-5 mt-xl-20">
                <div className="container">
                    <div className="row justify-content-md-center text-dark">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-12">
                            <h2 className="display-5  mb-2 text-secondary text-center text-uppercase fw-bold  text-dark">
                                Our Vision For <span style={{ color: "#11be11" }}>The future</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-10 col-xl-12 mb-5 mt-5 mb-lg-0">
                            <img className='rounded' style={{
                                width: "100%", height: "30vh", objectFit: "cover", objectPosition: "20% 70%",
                                backdropFilter: "blur(1px)", // Glass effect
                                borderRadius: "15px",
                                boxShadow: "0 4px 50px rgba(0, 0, 0, 3)"
                            }} src="./images/future.jpeg" alt="" />
                        </div>
                        <p className='col-12 mt-5 text-dark text-center fs-5'><p>Our vision is a world where every child has access to education and the opportunity to succeed. As we grow, we remain committed to expanding our outreach and continuing to invest in initiatives that build a brighter, more inclusive future for all.</p></p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Donation
