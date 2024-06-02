import React from "react";

const WishCards = ({ name }) => {
  const wishes = [
    `Happy Birthday, ${name}! Wishing you a day filled with love and joy.`,
    `Dear ${name}, may your birthday be as amazing as you are! Enjoy your special day!`,
    `${name}, it's your day to shine! Have a fantastic birthday celebration!`,
  ];
  return (
    <div className="wish-cards">
      {wishes.map((wish, index) => (
        <div key={index} className="wish-card">
          <p>{wish}</p>
        </div>
      ))}
    </div>
  );
};

export default WishCards;
