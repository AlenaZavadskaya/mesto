export default class UserInfo {

	constructor(name, about, avatar, api) {

		this._nameSelector = name;
		this._infoSelector = about;
		this._avatar = avatar;
		this._api = api;
	}

	getUserInfo(data) {
		const userInfo = {
			// name: this._nameSelector.textContent,
			// info: this._infoSelector.textContent,
			// avatar: this._avatar.src

			name: data.name,
			about: data.about,
			avatar: data.avatar
		}

		return userInfo;
	}

	saveUserInfo(data, nameInput, jobInput, avatar) {

		nameInput.textContent = data.name;
		jobInput.textContent = data.about;
		avatar.src = data.avatar;
	}

	setUserInfo(nameInput, jobInput, avatarInput) {
		this._nameSelector.textContent = nameInput.value;
		this._infoSelector.textContent = jobInput.value;
		this._avatar.src = avatarInput.value;
	}
}