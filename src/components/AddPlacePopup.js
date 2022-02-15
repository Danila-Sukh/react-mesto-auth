import React from "react";
import PopupWithForm from "./PopupWithForm";


function AddPlacePopup(props) {

    const nameCard = React.useRef();
    const linkCard = React.useRef();

    function handleSubmit(e) {
        e.preventDefault()
        props.onAddPlace({
            name: nameCard.current.value,
            link: linkCard.current.value,
        })
    }

    return (
        <PopupWithForm
            isOpened={props.isOpened}
            onPopupClick={props.onPopupClick}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name="add-card"
            buttonText="Сохранить"
            title="Новое место"
        >
            <input
                id="name-card"
                className="popup__input popup__input_card_name"
                type="text"
                name="name"
                placeholder="Название"
                required
                minLength="3"
                maxLength="30"
                ref={nameCard}
            />
            <span id="name-card-error" className="error"></span>

            <input
                id="link"
                className="popup__input popup__input_card_link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                required
                ref={linkCard}
            />
            <span id="link-error" className="error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;