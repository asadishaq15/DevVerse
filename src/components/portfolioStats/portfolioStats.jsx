import React, { useState, useEffect, useRef } from 'react';
import './portfolioStats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faTasks, faUsers, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import backgroundImg from "../../assets/portfolioStatsBg.webp";

const PortfolioStats = () => {
  const [completedProjects, setCompletedProjects] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [weeklyWorkingHours, setWeeklyWorkingHours] = useState(0);
  const [foundedDate, setFoundingDate] = useState(0);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCount = (targetValue, setValue) => {
    let currentValue = 0;
    const step = Math.ceil(targetValue / 200);

    const interval = setInterval(() => {
      currentValue += step;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(interval);
      }
      setValue(currentValue);
    }, 20);
  };

  const animateStats = () => {
    animateCount(2021, setFoundingDate);
    animateCount(130, setCompletedProjects);
    animateCount(120, setClientsCount);
    animateCount(40, setWeeklyWorkingHours);
  };

  return (
    <div ref={statsRef} className="PortfolioMain">
      <Link to="/portfolio">
        <button className="end-button">VIEW PORTFOLIO</button>
      </Link>
      <div className="portfolio-stats-container"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="stat-column">
          <FontAwesomeIcon icon={faBuilding} size="2x" className="fa-icon" />
          <p className="stat-value">{foundedDate}</p>
          <p className="stat-description">Since 2021</p>
        </div>
        <div className="stat-column">
          <FontAwesomeIcon icon={faTasks} size="2x" className="fa-icon" />
          <p className="stat-value">{completedProjects}</p>
          <p className="stat-description">Projects delivered</p>
        </div>
        <div className="stat-column">
          <FontAwesomeIcon icon={faUsers} size="2x" className="fa-icon" />
          <p className="stat-value">{clientsCount}</p>
          <p className="stat-description">Satisfied clients</p>
        </div>
        <div className="stat-column">
          <FontAwesomeIcon icon={faClock} size="2x" className="fa-icon" />
          <p className="stat-value">{weeklyWorkingHours}</p>
          <p className="stat-description">Dedicated hours per week</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioStats;
