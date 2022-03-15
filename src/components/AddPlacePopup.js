import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const placeInputRef = useRef();
  const placeImageInputRef = useRef();

  function handleAddPlaceSubmit(evt) {
    evt.preventDefault();

    props.onCreateCard({
      place: placeInputRef.current.value, 
      image: placeImageInputRef.current.value
    })
    props.isClose();
  }

  return (
    <PopupWithForm
          title="Новое место"
          name="place"
          isOpen={props.isOpen}
          onClose={props.isClose}
          onSubmit={handleAddPlaceSubmit}
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
            ref={placeInputRef}
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
            ref={placeImageInputRef}
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