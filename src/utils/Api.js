class Api {
    constructor({baseUrl, headers}){
        this._baseUrl = baseUrl
        this._headers = headers;
    }
    getCards(){
         return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(this._getResponseData)
    }
    getProfileInfo(){
        return fetch(`${this._baseUrl}/users/me`,{
            headers: this._headers
        })
        .then(this._getResponseData)
    }
    redProfile({firstname, job}){
       return fetch(`${this._baseUrl}/users/me`,{
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
            name: firstname,
            about: job
        })
       })
    }
    redImgProfile({newimg}){
        return fetch(`${this._baseUrl}/users/me/avatar`,{
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: newimg,
            })
           })
    }
    addNewCard({name, link}){
         return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link,
            })
        })
        .then((res)=>res.json())
    }
    _addLikes(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
            method: 'PUT',
            headers: this._headers,
        })
        .then(this._getResponseData)
    }
    _removeLikes(cardId){
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`,{
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._getResponseData)
    }
    deleteCard(cardId){
        return fetch (`${this._baseUrl}/cards/${cardId}`,{
            method: 'DELETE',
            headers: this._headers,
        })
        .then(this._getResponseData)
    }
    toggleApiLikes(cardId, isLiked){
        return isLiked ? this._removeLikes(cardId) : this._addLikes(cardId)
    }
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`) 
        }
        return res.json()
    } 
}
const api = new Api({baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63', 
headers: {
  authorization: '56a6b55a-fd33-4c3c-8624-42a430500012',
  'Content-Type': 'application/json'}
});
export default api