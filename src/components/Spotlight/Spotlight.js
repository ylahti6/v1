import React from 'react';
import Card from './Card/Card';
import './Spotlight.scss';
import textContent from '../../assets/textContent';
import { IoMdAddCircle } from "react-icons/io";

const App = () => {
  const {spotlight, allProjects} = textContent;
  const cardsData = [
    { 
      title: 'Echo lala', 
      link: "google.com" 
    },
    { 
      title: 'e-ink standby', 
      link: 'This is the second card.' 
    },
    { 
      title: 'card 3', 
      link: 'This is the third card.' 
    },
    { 
      title: 'Card 4', 
      link: 'This is the third card.' 
    },
    { 
      title: 'Card 5', 
      link: 'This is the third card.' 
    },
    { 
      title: 'Card 6', 
      link: 'This is the third card.' 
    },
  ];

  return (
    <div className="spotlight">
      <p>{spotlight}</p>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} link={card.link} />
      ))}

      <a href='#' className='all-projects'><IoMdAddCircle className='icon'/>{allProjects}</a>
    </div>
  );
};

export default App;
