import React, {useRef} from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarInputRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    
    props.onUpdateAvatar({
      avatar: avatarInputRef.current.value
    })

    props.isClose();
  }

  return (
    <PopupWithForm
          title="Обновить аватар"
          name="avatar-edit"
          isOpen={props.isOpen}
          onClose={props.onClose}
          onSubmit={handleSubmit}
        >
          <input
            id="avatar-input"
            type="url"
            name="avatar"
            placeholder="Ссылка для аватара"
            size="40"
            className="popup__input popup__input_type_avatar"
            ref={avatarInputRef}
            required
          />
          <span id="avatar-input-error" className="popup__input-error"></span>
          <button type="submit" className="popup__submit-button">
            Сохранить
          </button>
        </PopupWithForm>
  )
}
export default EditAvatarPopup;