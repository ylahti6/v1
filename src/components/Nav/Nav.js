import { useState } from 'react';
import textContent from '../../assets/textContext';
import './Nav.scss';

function Nav() {
  const { name, works, about, contact } = textContent;
  const [isChecked, setIsChecked] = useState(false);
    
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <nav className={`nav ${isChecked ? 'checked' : ''}`}>
      <input 
      type="checkbox" 
      id="nav-check" 
      checked={isChecked}
      onChange={handleToggle}
      />
      
      <div className="nav-header">
        <div className="nav-title">{name}</div>
      </div>

      <div className="nav-btn">
        <label htmlFor="nav-check">
        </label>
      </div>
      
      <ul className="nav-list">
        <li><a href="#works">{works}</a></li>
        <li><a href="#about">{about}</a></li>
        <li><a href="#contact">{contact}</a></li>
      </ul>

      <div className="overlay"></div>
    </nav>
  );
}

export default Nav;
