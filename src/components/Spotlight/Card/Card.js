import React from 'react';
import { TfiArrowTopRight } from "react-icons/tfi";
import './Card.scss';

const Card = ({ title, link }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <a href={link}><TfiArrowTopRight /></a>
    </div>
  );
};

export default Card;
