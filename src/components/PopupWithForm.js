function PopupWithForm({title, name, children, isOpen, onClose, buttonText}){
    return(
        <div className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ""}`}>
            <div className="popup__container">
                <button onClick={onClose} type="button" className="popup__close-icon" aria-label="Закрыть"></button>
                <h3 className="popup__name">{title}</h3>
                <form className={`popup__form popup__form_type_${name}`} name="red-form" noValidate>
                    {children}
                    <button type="submit" className="popup__button">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}
export default PopupWithForm