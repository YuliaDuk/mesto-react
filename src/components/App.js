import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from 'react'
function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})
    function handleEditAvatarClick (){
            setEditAvatarPopupOpen(true)
    }
    function handleEditProfileClick(){
        setEditProfilePopupOpen(true)
    }
    function handleAddPlaceClick (){
        setAddPlacePopupOpen(true)
    }
    function handleCardClick (card){
        setSelectedCard(card)
    }
    function closeAllPopups(){
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setSelectedCard({})
    }
  return (
    <div className="background">
        <div className="page">
            <Header />
            <Main handleCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
            <Footer />
            <PopupWithForm buttonText='Сохранить' onClose={closeAllPopups}  isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name ="red" >
                <input id="name-input" type="text" name="firstname" className="popup__item popup__item_el_name" placeholder="Имя" minLength="2" maxLength="40" required/>
                <span className="name-input-error popup__item-error"></span>
                <input id="job-input" type="text" name="job" className="popup__item popup__item_el_job" placeholder="О себе" minLength="2" maxLength="200" required/>
                <span className="job-input-error popup__item-error"></span>
            </PopupWithForm>
            <PopupWithForm buttonText='Сохранить' onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="imgred">
                <input id="img-input" type="url" name="newimg" className="popup__item popup__item_el_img" placeholder="Ссылка" required />
                <span className="img-input-error popup__item-error"></span>
            </PopupWithForm>
            <PopupWithForm buttonText='Да' onClose={closeAllPopups} title="Вы уверены?" name="confirm"></PopupWithForm>
            <PopupWithForm buttonText='Создать' onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title="Новое место" name="add">
                <input id="placename-input" type="text" name="name" className="popup__item popup__item_type_add popup__item_el_place" minLength="2" maxLength="30" placeholder="Название" required/>
                <span className="placename-input-error popup__item-error"></span>
                <input id="src-input" type="url" name="link" className="popup__item popup__item_type_add popup__item_el_src" placeholder="Ссылка на картинку" required />
                <span className="src-input-error popup__item-error"></span>
            </PopupWithForm>
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
    </div>
  );
}
export default App;