import './Social.scss';
import textContent from '../../assets/textContent';
import { TfiArrowRight } from "react-icons/tfi";

function Social() {
  const {social, github, linkedin, codepen} = textContent;
  return(
    <div className='social'>
      <a href='#'>Get in contact <TfiArrowRight /></a>
      <p>{social}</p>
      <a href='#'>{github}</a>
      <a href='#'>{codepen}</a>
      <a href='#'>{linkedin}</a>
    </div>
  );
}

export default Social;