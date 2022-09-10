import React from "react";
import path from '../images/Error.svg';

export function BadInfoTooltip ({onClose, isOpen}) {

  return(
    <div className={`bad-popup popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`bad-popup__container`} >
      <button className={`bad-popup__exit popup__close`} onClick={() => onClose()}/>
        <img className={`bad-popup__image`} src={path} alt={'Ошибка'}/>
        <h2 className={`bad-popup__title`}>Что-то пошло не так!<br/>Попробуйте ещё раз</h2>
      </div>
    </div>
    
  )
}