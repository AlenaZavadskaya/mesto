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

	editUserData({ name, about }) {
		return fetch(`${this._url}${'users'}/${'me'}`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name,
				about
			})
		})
			.then(res => {
				if (res.ok) {
					return res.json();
				}

				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	editAvatar({avatar}) {
		return fetch(`${this._url}${'users'}/${'me'}/${'avatar'}`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({avatar})
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

	addCards(name, link) {
		return fetch(`${this._url}${'cards'}`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify(name, link)
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
		return fetch(`${this._url}${'cards'}/${'likes'}/${data._id}`, {
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
		return fetch(`${this._url}${'cards'}/${'likes'}/${data._id}`, {
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

	// _getResponseData(res) {
	// 	if (res.ok) {
	// 		return res.json(); // возвращаем результат работы метода и идём в следующий then
	// 	} else {

	// 		// если ошибка, отклоняем промис
	// 		return Promise.reject(new Error(`Ошибка: ${res.status}`));
	// 	}
	// }
}

