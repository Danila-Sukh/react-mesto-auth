import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const inputLink = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: inputLink.current.value,
    });
  }
  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onPopupClick={props.onPopupClick}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name="popup__form_download-avatar"
      buttonText="Сохранить"
      title="Обновить аватар"
    >
      <input
        id="avatar"
        className="popup__input popup__input_avatar"
        type="url"
        name="avatar"
        placeholder="Ссылка на картинку"
        required
        ref={inputLink}
      />
      <span id="avatar-error" className="error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;