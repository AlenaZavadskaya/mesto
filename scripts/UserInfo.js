import { Popup } from '../scripts/Popup.js';
import { nameInput, jobInput, placeNameInput, placeJobInput } from '../pages/index.js';

export default class UserInfo {
	constructor(nameSelector, infoSelector) {
		this._nameSelector = nameSelector;
		this._infoSelector = infoSelector;
		//	debugger
	}
	
	getUserInfo() {
		debugger
		const userInfo = {
			name: this._nameSelector.textContent,
			info: this._infoSelector.textContent
		}

		nameInput.value = userInfo.name;
		jobInput.value = userInfo.info;
		//console.log(data.name);
		return userInfo;
		/*this._nameSelector.value = document.querySelector('.profile__name').textContent;
		this._infoSelector.value = document.querySelector('.profile__about').textContent;
		console.log(userInfo);*/
	}
		
	setUserInfo(nameInput, jobInput) {
		// document.querySelector('.form__item_name').textContent = userInfo.name;
		// document.querySelector('.form__item_about').textContent = userInfo.info;
		// console.log(data);
		this._nameSelector.textContent = nameInput.value;
		this._infoSelector.textContent = jobInput.value;

		// const inputList = Array.from(document.querySelectorAll('.form__item'));
		// inputList.forEach((input) => {
		// input.textContent = userInfo.name;
		// });
	}
}