import React from 'react';

function InfoTooltip(props) {
    return (
        <section className={`popup ${props.name} ${props.isOpened ? 'popup__opened' : ''}`} onClick={props.onPopupClick}>
            <div className="popup__container" onClick={e => e.stopPropagation()}>
                <button type="button" className="popup__close popup__close_type_infotool" onClick={props.onClose}></button>
                <div className="popup__container popup__container_type_tooltip">
                    <img className="popup-tooltip__image" alt="картинка информации" src={props.popupImg} />
                    <p className="popup-tooltip__text">{props.popupText}</p>
                </div>
            </div>
        </section>
    );
}

export default InfoTooltip;
