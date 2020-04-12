import React from 'react';
import './Card.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ content }) => {
  if (content) {
    const { desc, icon, name } = content;
    return (
      <div className="card-container">
        <div>
          <section className="top">
            <img src={icon} alt="" />
            <div className="name">{name}</div>
          </section>
          <section className="middle">{desc}</section>
        </div>
        <section className="bottom">
          <ul className="menu-api-links">
            <li>
              <NavLink to="/developer/en/api/dummy1/intro">
                <span>Intro</span> <FontAwesomeIcon icon={faChevronRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/developer/en/api/dummy1/guide">
                <span>Developer's Guide</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/developer/en/api/dummy1/reference">
                <span>API Reference</span> <FontAwesomeIcon icon={faChevronRight} />
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    );
  } else return null;
};

export default Card;
