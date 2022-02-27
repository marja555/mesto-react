import React from 'react';


function Popups(props) {

  return (
    <div className={`popup popup_type_${props.name} 
                    {props.isOpen ? popup_type_opened : ''}`}>
    <div className="popup__overlay"></div>
    <div className="popup__container">
      <button type="button" className="popup__close"></button>
      <h3 className="popup__title">{props.title}</h3>
      <form name={`${props.name}-form`} className="popup__form popup__form_type_profile" noValidate>
        {props.children}
      </form>
    </div>
  </div>
  )
}

export default Popups;