import React, { useState } from 'react'

export default function About() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (itemNumber) => {
    setActiveItem(activeItem === itemNumber ? null : itemNumber);
  };

  const accordionData = [
    {
      title: "Accordion Item #1",
      content: "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
      title: "Accordion Item #2",
      content: "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    },
    {
      title: "Accordion Item #3",
      content: "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
    }
  ];

  return (
    <div className="container">
      <div className="accordion" id="accordionExample">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index + 1}`}>
              <button 
                className={`accordion-button ${activeItem !== index + 1 ? 'collapsed' : ''}`}
                type="button"
                onClick={() => toggleItem(index + 1)}
              >
                {item.title}
              </button>
            </h2>
            <div 
              id={`collapse${index + 1}`}
              className={`accordion-collapse collapse ${activeItem === index + 1 ? 'show' : ''}`}
              aria-labelledby={`heading${index + 1}`}
            >
              <div className="accordion-body">
                <strong>{item.title}</strong> {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}