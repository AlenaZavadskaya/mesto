import './index.css';
import {
	popupProfile,
	popupPlace,
	popupProfileOpenButton,
	popupPlaceAddButton,
	nameInput,
	jobInput,
	pictureInput,
	titleInput,
	placeForm,
	placeNameInput,
	placeJobInput,
	popupImage,
	cardsContainer,
	config,
	popupWithSubmit,
	popupAvatar,
	popupAvatarOpenButton,
	avatarInput,
	placeAvatarInput
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PicturePopup from '../components/PicturePopup.js';
import { Api } from '../components/Api.js';



const popupWithImage = new PopupWithImage(popupImage);
const userInfo = new UserInfo(placeNameInput, placeJobInput, 'https://mesto.nomoreparties.co/v1/cohort-16/users/me');
const editForm = new FormValidator(config, '#form-edit');
const cardForm = new FormValidator(config, '#form-card');
const avatarForm = new FormValidator(config, '#form-avatar');
const picturePopup = new PicturePopup(popupWithSubmit);


// document.querySelector('.element__delete').addEventListener('click', picturePopup.open());

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-16/cards',
  headers: {
    authorization: '90f4c0de-1eee-42e7-8058-3892f79789d8',
    'Content-Type': 'application/json'
  },
});


const apiUser = api.getUserData();
apiUser.then((data) => {
	const userData = userInfo.getUserInfo(data);
	userInfo.saveUserInfo(userData, placeNameInput, placeJobInput, placeAvatarInput);
})




const profile = new PopupWithForm({
	popupSelector: popupProfile,
	submitHandler: () => {
		const apiEditUser = api.editUserData({
			name: nameInput.value,
			about: jobInput.value
		});
		apiEditUser.then((data) => {
			console.log(data)
			debugger
			userInfo.saveUserInfo(data);
			userInfo.setUserInfo(data);
		})
		debugger
		const apiUser = api.getUserData();
		apiUser.then((data) => {
			console.log(data)
			const userData = userInfo.getUserInfo(data);
			userData.name = nameInput.value;
			userData.about = jobInput.value;
		})
		
		debugger
		// userInfo.setUserInfo(nameInput, jobInput);
		profile.close();
	}
});


const avatar = new PicturePopup({
	popupSelector: popupAvatar,
	submitHandler: () => {
		const apiUser = api.editAvatar();
		apiUser.then((data) => {
			console.log(data)
			// debugger
			
			const userData = userInfo.getUserInfo(data);
			userInfo.saveUserInfo(userData, placeNameInput, placeJobInput, placeAvatarInput);
		})
		// apiEditUser.then((data) => {
		// 	debugger
		// 	const userData = userInfo.setUserInfo(data);
		// userData.name = nameInput.value;
		// userData.about = jobInput.value;
		// })
		// userInfo.setUserInfo(nameInput, jobInput);
		avatar.close();
	}
})

// добавление карточек на страницу
const apiCard = api.getInitialCards();
apiCard.then((el) => {
	const cardsList = new Section({
		items : el/*.map((item) => {
			console.log(item.name, item.link);
			// console.log(data);
		})*/, 
		renderer: (item) => {
			// console.log(item);
			const card = getCard(item);
			// Создаём карточку и возвращаем наружу
			const cardElement = card.generateCard();
			// Добавляем в DOM
			cardsList.addItem(cardElement);
			
		}
	},
		cardsContainer,
		'https://mesto.nomoreparties.co/v1/cohort-16/cards'
	);
	cardsList.rendererItems();
	// cardElement.textContent = data[0].name;
	// cardElement.src = data[0].link;
	// console.log(cardElement);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });



function getCard(item) {
	const card = new Card(item, '#element-template', 'https://mesto.nomoreparties.co/v1/cohort-16'/*, {
		handleCardClick: () => {
			debugger
			popupWithImage.open(card);
			popupWithImage.setEventListeners();
		}
	}*/); 
	return card
}


// добавление новых карточек на страницу
const popupPlaceForm = new PopupWithForm({
		popupSelector: popupPlace,
		submitHandler: () => {
			debugger
			const apiNewCard = api.addCards({
				name: titleInput.value,
				link: pictureInput.value,
				// id: _id
			
			});

			apiNewCard.then((data) => {
				debugger
				// const cardAdd = { name: data.name, link: data.link };
				const newCards = new Section({
					items: data,
					renderer: (item) => {
						const card = getCard(item);
						// Создаём карточку и возвращаем наружу
						const cardElement = card.generateCard();
						// Добавляем в DOM
						newCards.addItem(cardElement);
					}
				},
					cardsContainer,
					'https://mesto.nomoreparties.co/v1/cohort-16/cards'
				);
				newCards.renderItem(data);
				popupPlaceForm.close();
			})
		}
	});


popupAvatarOpenButton.addEventListener('click', () => {
	avatarForm.disabledValidation();
	avatarForm.ableSubmitButton();
	avatar.open();
	avatar.setEventListeners();
})


popupPlaceAddButton.addEventListener('click', () => {
	cardForm.disabledValidation();
	cardForm.disableSubmitButton('#addCard');
	placeForm.reset();
	popupPlaceForm.open();
	popupPlaceForm.setEventListeners();
});

// заполнить текущими данными поля попапа редактирования профиля при его открытии 
popupProfileOpenButton.addEventListener('click', () => {
	// очистить ошибки валидации при открытии формы
	editForm.disabledValidation();
	// включить кнопку
	editForm.ableSubmitButton();

	apiUser.then((data) => {
		const userData = userInfo.getUserInfo(data);
		nameInput.value = userData.name;
		jobInput.value = userData.about;
	})
	// const userProfileInfo = userInfo.getUserInfo();
	// nameInput.value = userProfileInfo.name;
	// jobInput.value = userProfileInfo.info;

	profile.open();
	profile.setEventListeners();
});


editForm.enableValidation();
cardForm.enableValidation();


// первоначальное отображение карточек
// cardsList.rendererItems();



// удаление карточек

// «remove from stove» — значит «убрать с плиты»
// function removeFromStove(evt) {
//   evt.target.remove();
// }

// // «pan with eggs» — значит «сковорода с яйцами»
// const panWithEggs = document.querySelector('#pan');

// // при клике по элементу panWithEggs, он будет убран с плиты
// panWithEggs.addEventListener('click', removeFromStove);

// следующий код