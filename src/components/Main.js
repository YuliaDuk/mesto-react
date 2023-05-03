import Card from "./Card"
import api from "../utils/Api";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Main (props){

    // const [cards, setCards] = useState([])
    // useEffect(()=>{
    //     api.getCards()
    //     .then((res)=>{
    //         setCards(res)
    //     })
    //     .catch((err)=>console.log(err))
    // },[])
   
    const currentUser = useContext(CurrentUserContext)
    return (
        <main className="content"> 
            <section className="profile">
                <button onClick={props.onEditAvatar} type="button" className="profile__img-button" aria-label="Редактировать"><img src={currentUser.avatar} alt="Аватар" className="profile__avatar"/></button>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button onClick ={props.onEditProfile} type="button" className="profile__button" aria-label="Редактировать"></button>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button" aria-label="Добавить"></button>
            </section>
            <section className="elements"> 
                {props.cards.map((card)=> 
                <article key={card._id} className="element">
                    <Card onCardLike={props.handleCardLike} onCardClick={props.handleCardClick} onCardDelete={props.handleCardDelete} card={card} />
                </article>
                )}               
            </section>
        </main>
    )
}
export default Main