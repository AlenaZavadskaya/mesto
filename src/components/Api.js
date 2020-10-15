import { avatarInput, jobInput, nameInput } from "../utils/constants";

export class Api {
	constructor(options) {
		this._url = options.url;
		this._headers = options.headers;
		this._body = options.body;
		this._users = options.users;
		this._me = options.me;
	}

	getUserData() {
		return fetch(`${this._url}${'users'}/${'me'}`, {
			method: 'GET',
			headers: this._headers
		})
			.then(res => {
				if (res.ok) {
					return res.json(); // возвращаем результат работы метода и идём в следующий then
				}

				// если ошибка, отклоняем промис
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	editUserData() {
		return fetch(`${this._url}${'users'}/${'me'}`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: nameInput.value,
				about: jobInput.value
			})
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	editAvatar() {
		return fetch(`${this._url}${'users'}/${'me'}/${'avatar'}`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({ avatar: avatarInput.value })
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	getInitialCards() {
		return fetch(`${this._url}${'cards'}`, {
			method: 'GET',
			headers: this._headers
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	addCards(data) {
		return fetch('https://mesto.nomoreparties.co/v1/cohort-16/cards', {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	deleteCard(data) {
		return fetch(`${this._url}${'cards'}/${data._id}`, {
			method: 'DELETE',
			headers: this._headers,
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	addLike(data) {
		return fetch(`https://mesto.nomoreparties.co/v1/cohort-16/cards/likes/${data._id}`, {
			method: 'PUT',
			headers: this._headers,
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	removeLikes(data) {
		return fetch(`https://mesto.nomoreparties.co/v1/cohort-16/cards/likes/${data._id}`, {
			method: 'DELETE',
			headers: this._headers
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}
}

