import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm
          title="Новое место"
          name="place"
          isOpen={props.isOpen}
          onClose={props.isClose}
        >
          <input
            id="place-input"
            type="text"
            name="place"
            placeholder="Название"
            size="40"
            className="popup__input popup__input_type_place"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="place-input-error" className="popup__input-error"></span>
          <input
            id="link-input"
            type="url"
            name="image"
            placeholder="Ссылка на картинку"
            size="40"
            className="popup__input popup__input_type_photo-link"
            required
          />
          <span id="link-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__submit-button">
            Создать
          </button>
        </PopupWithForm>
  )
}
export default AddPlacePopup;