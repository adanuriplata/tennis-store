import React from 'react';

export const Button = ({ text, color }) => {
  return (
    <button className={`${color === 'dark' ? 'b-dark' : 'b-white'} button `}>
      <div className="button__content">
        <div className="button__content__text">{text}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="6"
          viewBox="0 0 23 6"
        >
          <path
            fill={`${color === 'dark' ? '#29304A' : '#fff'}`}
            fillRule="evenodd"
            d="M22.908 2.7L20.428.128a.39.39 0 0 0-.579 0 .425.425 0 0 0 0 .6l1.778 1.843H.413C.165 2.57 0 2.74 0 3c0 .257.165.428.413.428h21.213l-1.779 1.844a.425.425 0 0 0 0 .6.44.44 0 0 0 .29.128.44.44 0 0 0 .289-.129l2.48-2.572a.531.531 0 0 0 .002-.6z"
          />
        </svg>
      </div>
    </button>
  );
};

export default Button;
