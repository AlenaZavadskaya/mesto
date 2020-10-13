import { avatarInput, jobInput, nameInput } from "../utils/constants";

export class Api {
	constructor(options) {
		this._url = options.url;
		this._headers = options.headers;
		this._body = options.body;
		this._users = options.users;
		this._id = options.id;
		this._me = options.me;
	}

	getUserData() {
		return fetch(`${this._url}${'users'}/${'me'}`, {
			method: 'GET',
			headers: {
				authorization: '90f4c0de-1eee-42e7-8058-3892f79789d8'
			}
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
					return res.json(); // возвращаем результат работы метода и идём в следующий then
				}

				// если ошибка, отклоняем промис
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
					return res.json(); // возвращаем результат работы метода и идём в следующий then
				}

				// если ошибка, отклоняем промис
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
					return res.json(); // возвращаем результат работы метода и идём в следующий then
				}

				// если ошибка, отклоняем промис
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	addCards(data) {
		return fetch(`${this._url}${'cards'}`, {
			method: 'POST',
			headers: {
				authorization: '90f4c0de-1eee-42e7-8058-3892f79789d8',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				// если ошибка, отклоняем промис
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	deleteCard(data) {
		return fetch(`${this._url}${'cards'}/${data._id}`, {
			method: 'DELETE',
			headers: {
				authorization: '90f4c0de-1eee-42e7-8058-3892f79789d8',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				// если ошибка, отклоняем промис
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	addLike(data) {
		return fetch(`${this._url}${'cards'}/${'likes'}/${data._id}`, {
			method: 'PUT',
			headers: {
				authorization: '90f4c0de-1eee-42e7-8058-3892f79789d8',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				// если ошибка, отклоняем промис
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	removeLikes(data) {
		return fetch(`${this._url}${'cards'}/${'likes'}/${data._id}`, {
			method: 'DELETE',
			headers: {
				authorization: '90f4c0de-1eee-42e7-8058-3892f79789d8',
				'Content-Type': 'application/json'
			}
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				// если ошибка, отклоняем промис
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}
}

