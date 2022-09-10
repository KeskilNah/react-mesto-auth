import React from "react";
import path from '../images/Union.svg';

export function InfoTooltip ({onClose, isOpen}) {
console.log(isOpen)
  return(
    <div className={`infoTooltip-popup popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className={`infoTooltip-popup__container`} >
      <button className={`infoTooltip-popup__exit popup__close`} onClick={() => onClose()}/>
        <img className={`infoTooltip-popup__image`} src={path} alt={'картинка'}/>
        <h2 className={`infoTooltip-popup__title`}>Вы успешно <br/>зарегистрировались!</h2>
      </div>
    </div>
    
  )
}