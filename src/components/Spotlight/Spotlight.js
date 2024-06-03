import React from 'react';
import Card from './Card/Card';
import './Spotlight.scss';
import textContent from '../../assets/textContent';

const App = () => {
  const {spotlight} = textContent;
  const cardsData = [
    { 
      title: 'TalkWiz', 
      link: "google.com" 
    },
    { 
      title: 'Card 2', 
      link: 'This is the second card.' 
    },
    { 
      title: 'Card 3', 
      link: 'This is the third card.' 
    },
  ];

  return (
    <div className="spotlight">
      <p>{spotlight}</p>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} link={card.link} />
      ))}
    </div>
  );
};

export default App;
