import PopupWithForm from "./PopupWithForm";
import { useRef, useState , useEffect} from "react";

function EditAvatarPopup(props){
    
    const [link, setLink] = useState('')
    useEffect(() => {
       setLink('')
    }, [props.isOpen]);

    const avatarRef = useRef(); 
    function handleChange(e) {
        setLink(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateAvatar({avatar: avatarRef.current.value}); 
      } 
    return (
        <PopupWithForm onSubmit={handleSubmit} buttonText='Сохранить' onClose={props.onClose} isOpen={props.isOpen} title="Обновить аватар" name="imgred">
            <input ref={avatarRef} value={link} onChange={handleChange} id="img-input" type="url" name="newimg" className="popup__item popup__item_el_img" placeholder="Ссылка" required />
            <span className="img-input-error popup__item-error"></span>
        </PopupWithForm>
    )
}
export default EditAvatarPopup