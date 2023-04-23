function Card(props){
    function handleClick() {
        props.onCardClick(props.card);
      } 
    return(
        <>
            <img onClick={handleClick} src={props.card.link} alt={props.card.name} className="element__pic"/>
            <button type="button" className="element__trash" aria-label="Удалить"></button>
            <div className="element__text">
                <h2 className="element__description">{props.card.name}</h2>
                <div className="element__likes">
                    <button type="button" className="element__like" aria-label="Лайк"></button>
                    <p className="element__qty-like">{props.card.likes.length}</p>
                </div>
            </div>
        </>
    )
}
export default Card