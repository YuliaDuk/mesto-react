import api from "../utils/Api"
import Card from "./Card"
import { useState, useEffect } from "react"
function Main (props){
    const [userName, setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])
    useEffect(()=>{
        api.getCards()
        .then((res)=>{
            setCards(res)
        })
        .catch((err)=>console.log(err))
        api.getProfileInfo()
        .then((res)=>{
            console.log(res)
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
        })
        .catch((err)=>console.log(err))
    },[])
    return (
        <main className="content"> 
            <section className="profile">
                <button onClick={props.onEditAvatar} type="button" className="profile__img-button" aria-label="Редактировать"><img src={userAvatar} alt="Аватар" className="profile__avatar"/></button>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button onClick ={props.onEditProfile} type="button" className="profile__button" aria-label="Редактировать"></button>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button" aria-label="Добавить"></button>
            </section>
            <section className="elements"> 
                {cards.map((card)=>
                <article key={card._id} className="element">
                    <Card onCardClick={props.handleCardClick} card={card} />
                </article>
                )}               
            </section>
        </main>
    )
}
export default Main