import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_pic">
    <div className="popup__overlay"></div>
    <div className="popup__pic-container">
      <img src="#" alt="Изображение." className="popup__pic" />
      <h2 className="popup__pic-title">картинка</h2>
      <button type="button" className="popup__close"></button>
    </div>
  </div>
  )
}

export default ImagePopup;