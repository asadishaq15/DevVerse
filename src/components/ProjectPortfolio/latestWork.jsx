import React, { useEffect } from 'react';
import './latestWork.css';
import { FaSearch, FaLink } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import P1 from "../../images/Slider_1.png";
import P2 from "../../images/Slider_2.png";
import P3 from "../../images/Slider_3.png";
import P4 from "../../images/Slider_4.png";
import P6 from "../../images/Slider_6.png";
import P7 from "../../images/Slider_7.png"
import { Link } from 'react-router-dom';

const LatestWorkComponent = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    useEffect(() => {
        document.title = 'Software House Portfolio | DevVerse'
    }, []);

    const projects = [
        {
            name: "BARS",
            imageUrl: P1,
            link: '/project/115/bars-application'
        },
        {
            name: "Smart Code",
            imageUrl: P2,
            link: '/project/116/smart-code-application'
        },
        {
            name: "UP Mobile",
            imageUrl: P3,
            link: '/project/117/up-mobile-application'
        },
        {
            name: "OCEAM",
            imageUrl: P4,
            link: '/project/118/oceam-application'
        },
        {
            name: "Swipe Gallery",
            imageUrl: P6,
            link: '/project/119/swipe-gallery'
        },
        {
            name: "The Drawers",
            imageUrl: P7,
            link: '/project/121/the-drawers'
        },
    ];

    return (
        <div className="latest-work-container">
            <div className="container-heading">
                <h2>This is our Latest <strong>Work</strong></h2>
                <p>You can review some of the projects that were successfully implemented by DevVerse.</p>
            </div>
            <div className="project-container">
                {projects.map((project, index) => (
                    <Link key={index} to={project.link} className="project-card" data-aos="zoom-in">
                        <div className="project-image-container">
                            <img src={project.imageUrl} alt={project.name} className="project-image" />
                        </div>
                        <div className="project-info">
                            <div className="project-buttons" style={{ marginTop: "auto" }}>
                                <button className="Link-button"
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                        color: '#007bff'
                                    }}
                                >
                                    <FaSearch />
                                </button>
                                <button className="Link-button"
                                    style={{
                                        fontSize: '15px',
                                        fontWeight: 'bold',
                                        color: '#007bff'
                                    }}
                                >
                                    <FaLink />
                                </button>
                            </div>
                            <h3 style={{
                                marginTop: "auto",
                                fontSize: "22px",
                                fontFamily: "sans-serif",
                                color: "white"
                            }}>
                                {project.name}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LatestWorkComponent;
