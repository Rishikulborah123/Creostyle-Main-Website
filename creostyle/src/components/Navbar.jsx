import React from 'react'
import {  NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'




const Navbar = (props) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.toLowerCase() === "home") {
            navigate("/");
        } else if (query.toLowerCase() === "about") {
            navigate("/about");
        } else if (query.toLowerCase() === "services") {
            navigate("/services");
        } else if (query.toLowerCase() === "team") {
            navigate("/team");
        } else if (query.toLowerCase() === "courses") {
            navigate("/courses");
        } else if (query.toLowerCase() === "donation") {
            navigate("/donation");
        } else if (query.toLowerCase() === "contact") {
            navigate("/contact");
        } else {
            // If no match is found, navigate to a search results page or show a message
            navigate(`/?query=${encodeURIComponent(query)}`);
        }
        setQuery("");
    };
    
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/donation") {
            console.log(location.pathname);
            document.body.style.background = "white";
        } else {
            console.log(location.pathname);
            document.body.style.backgroundColor = "rgb(28, 28, 44)";
            document.body.style.background = "linear-gradient(135deg, rgb(28, 28, 44), #3e3480)"; // Reset to default
        }
    }, [location.pathname]);

    return (
        <nav style={{backgroundColor:""}} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <img style={{width:"90px"}} src={props.logo}alt="" />
                <NavLink className="navbar-brand" to="/">
                    Creostyle
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/services">
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/team">
                                Team
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses">
                                Our Cources
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-success" to="/donation">
                                Our Donation
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}

                        />
                        <button className="btn btn-outline-success" type="submit">
                            Search
                            
                        </button>
                    </form>
                </div>
            </div>
        </nav>




    )
}

export default Navbar
