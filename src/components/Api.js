import { avatarInput, jobInput, nameInput } from "../utils/constants";

export class Api {
  constructor(options) {
		this._url = options.url;
		this._headers = options.headers;
		this._body = options.body;
  }

	getUserData() {
		return fetch('https://mesto.nomoreparties.co/v1/cohort-16/users/me', {
			method: 'GET',
			headers: {
				authorization: '90f4c0de-1eee-42e7-8058-3892f79789d8'
			}
		})
			.then(res => {
				if (res.ok) {
					console.log(res)
					return res.json(); // возвращаем результат работы метода и идём в следующий then
				}

				// если ошибка, отклоняем промис
				return Promise.reject(`Ошибка: ${res.status}`);
			});
	}

	editUserData() {
		return fetch('https://mesto.nomoreparties.co/v1/cohort-16/users/me', {
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
		return fetch('https://mesto.nomoreparties.co/v1/cohort-16/users/me/avatar', {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({avatar: avatarInput.value})
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
		return fetch('https://mesto.nomoreparties.co/v1/cohort-16/cards', {
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
		
		// .then(function (res) {
    //     return res.json(); // возвращаем результат работы метода и идём в следующий then
    //   }).then(function (data) {
		// 		// console.log(data); // если мы попали в этот then, data — это объект
		// 	return data[0].link, data[0].name
    //   }).catch(function (err) {
    //     console.log('Ошибка. Запрос не выполнен');
    //   });
	}

	addCards(data) {
		return fetch('https://mesto.nomoreparties.co/v1/cohort-16/cards', {
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
		debugger
		return fetch(`https://mesto.nomoreparties.co/v1/cohortId/cards/${_id}`, {
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

  // другие методы работы с API
}

