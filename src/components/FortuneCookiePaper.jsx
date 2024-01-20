
import React from 'react';

const FortuneCookiePaper = ({quote}) => {
  //destructuración
  const {phrase , author} = quote;
  
  
  return (
    <div className="fortune-cookie-paper">
      
      <div className="paper-content">
        <p className="fortune-text"> {phrase} </p>
        <p className="author-text">{author}</p>
      </div>
    </div>
  );
};

export default FortuneCookiePaper;