import React from 'react';

const PopupWithForm = (props) => {
  return (
    <div className={`popup ${props.name} ${props.isOpened ? 'popup__opened' : ''}`} onClick={props.onPopupClick}>
      <div className="popup__container" onClick={e => { e.stopPropagation() }}>
        <button className="popup__close" type="button" onClick={props.onClose}></button>
        <h3 className="popup__description">{props.title}</h3>
        <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
          {props.children}
          <button className="popup__button" type="submit">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;