import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpened]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  function handleName(e) {
    setName(e.target.value)
  }

  function handleDescription(e) {
    setDescription(e.target.value)
  }

  return (<PopupWithForm
    isOpened={props.isOpened}
    onPopupClick={props.onPopupClick}
    onClose={props.onClose}
    onSubmit={handleSubmit}
    name="edit-profile"
    buttonText="Сохранить"
    title="Редактировать профиль"
  >
    <input
      id="user-name"
      className="popup__input popup__input_is_name"
      type="text"
      name="name"
      placeholder="Имя пользователя"
      required
      minLength="3"
      maxLength="40"
      value={name || ''}
      onChange={handleName}
    />
    <span id="user-name-error" className="error"></span>

    <input
      id="about"
      className="popup__input popup__input_is_job"
      type="text"
      name="about"
      placeholder="О себе"
      required
      minLength="3"
      maxLength="200"
      value={description || ''}
      onChange={handleDescription} />
    <span id="about-error" className="error"></span>
  </PopupWithForm>)
}

export default EditProfilePopup;