import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from 'react'
function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
    function handleEditAvatarClick (){
            setEditAvatarPopupOpen(true)
    }
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
    function handleEditProfileClick(){
        setEditProfilePopupOpen(true)
    }
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
    function handleAddPlaceClick (){
        setAddPlacePopupOpen(true)
    }
    const [selectedCard, setSelectedCard] = useState(false)
    function handleCardClick (card){
        setSelectedCard(card)
    }
    function closeAllPopups(){
        setEditAvatarPopupOpen(false)
        setEditProfilePopupOpen(false)
        setAddPlacePopupOpen(false)
        setSelectedCard(false)
    }
  return (
    <div className="background">
        <div className="page">
            <Header />
            <Main handleCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}/>
            <Footer />
            <PopupWithForm onClose={closeAllPopups}  isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name ="red" >
                <input id="name-input" type="text" name="firstname" className="popup__item popup__item_el_name" placeholder="Имя" minLength="2" maxLength="40" required/>
                <span className="name-input-error popup__item-error"></span>
                <input id="job-input" type="text" name="job" className="popup__item popup__item_el_job" placeholder="О себе" minLength="2" maxLength="200" required/>
                <span className="job-input-error popup__item-error"></span>
                <button type="submit" className="popup__button">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="imgred">
                <input id="img-input" type="url" name="newimg" className="popup__item popup__item_el_img" placeholder="Ссылка" required />
                <span className="img-input-error popup__item-error"></span>
                <button type="submit" className="popup__button">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm onClose={closeAllPopups} title="Вы уверены?" name="confirm">
                <button type="submit" className="popup__button">Да</button>
            </PopupWithForm>
            <PopupWithForm onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title="Новое место" name="add">
                <input id="placename-input" type="text" name="name" className="popup__item popup__item_type_add popup__item_el_place" minLength="2" maxLength="30" placeholder="Название" required/>
                <span className="placename-input-error popup__item-error"></span>
                <input id="src-input" type="url" name="link" className="popup__item popup__item_type_add popup__item_el_src" placeholder="Ссылка на картинку" required />
                <span className="src-input-error popup__item-error"></span>
                <button type="submit" className="popup__button">Создать</button>
            </PopupWithForm>
            <ImagePopup card={selectedCard} isOpen={selectedCard} onClose={closeAllPopups} />
        </div>
    </div>
  );
}
export default App;
