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
	placeAvatarInput,
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PicturePopup from '../components/PicturePopup.js';
import { Api } from '../components/Api.js';
import Popup from '../components/Popup.js';
import PopupWithSubmit from '../components/PopupWithSubmit';


const popupWithImage = new PopupWithImage(popupImage);
const userInfo = new UserInfo(placeNameInput, placeJobInput, 'https://mesto.nomoreparties.co/v1/cohort-16/users/me');
const editForm = new FormValidator(config, '#form-edit');
const cardForm = new FormValidator(config, '#form-card');
const avatarForm = new FormValidator(config, '#form-avatar');



const api = new Api({
	url: 'https://mesto.nomoreparties.co/v1/cohort-16/',
	headers: {
		authorization: '90f4c0de-1eee-42e7-8058-3892f79789d8',
		'Content-Type': 'application/json'
	},
});


const apiUser = api.getUserData();
apiUser.then((data) => {
	const userData = userInfo.getUserInfo(data);
	placeAvatarInput.src = data.avatar;
	nameInput.value = data.name;
	jobInput.value = data.about;
	userInfo.setUserInfo(userData);
})
	.catch((err) => {
		console.log(`Ошибка: ${err}`);
	});


const profile = new PopupWithForm({
	popupSelector: popupProfile,
	submitHandler: () => {
		profile.renderLoading(true);
		const apiEditUser = api.editUserData({
			name: nameInput.value,
			about: jobInput.value
		});
		apiEditUser.then((data) => {
			userInfo.setUserInfo(data);
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})


		const apiUser = api.getUserData();
		apiUser.then((data) => {
			const userData = userInfo.getUserInfo(data);
			userData.name = nameInput.value;
			userData.about = jobInput.value;
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
			.finally(profile.renderLoading(false));
		profile.close();
	}
});



const avatar = new PicturePopup({
	popupSelector: popupAvatar,
	submitHandler: () => {
		avatar.renderLoading(true);
		const apiUser = api.editAvatar();
		apiUser.then((data) => {
			const userData = userInfo.getUserInfo(data);
			userInfo.saveUserInfo(userData, placeNameInput, placeJobInput, placeAvatarInput);
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
			.finally(avatar.renderLoading(false));

		avatar.close();
	}
})

// добавление карточек на страницу
const apiCard = api.getInitialCards();
apiCard.then((el) => {
	const cardsList = new Section({
		items: el,
		renderer: (item) => {
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
})
	.catch((err) => {
		console.log(err);
	});




function getCard(item) {
	const card = new Card(item, '#element-template',
		{
			handleCardClick: () => {
				popupWithImage.open(card);
				popupWithImage.setEventListeners();
			}
		},
		{
			deleteCard: () => {

				const popupSubmit = new PopupWithSubmit({
					popupSelector: popupWithSubmit,
					submitHandler: () => {
						const apiDeleteCard = api.deleteCard(card);
						apiDeleteCard.then(() => {
							card.removeCard();
							popupSubmit.close();
						})
							.catch((err) => {
								console.log(`Ошибка: ${err}`);
							});
					}
				});
				popupSubmit.open();
				popupSubmit.setEventListeners();
			},
			addLike: () => {

				const apiLikeCard = api.addLike(card);
				apiLikeCard.then((data) => {
					card.setLikesCounter(data);
				})
					.catch((err) => {
						console.log(`Ошибка: ${err}`);
					});
			},
			removeLike: () => {

				const apiRemoveLike = api.removeLikes(card);
				apiRemoveLike.then((data) => {
					card.setLikesCounter(data);
				})
					.catch((err) => {
						console.log(`Ошибка: ${err}`);
					});
			}

		},
		'https://mesto.nomoreparties.co/v1/cohort-16/cards');
	return card
}


// добавление новых карточек на страницу
const popupPlaceForm = new PopupWithForm({
	popupSelector: popupPlace,
	submitHandler: () => {
		popupPlaceForm.renderLoading(true);
		const apiNewCard = api.addCards({

			name: titleInput.value,
			link: pictureInput.value,
		});

		apiNewCard.then((data) => {
			const newCards = new Section({
				items: data,
				renderer: (item) => {
					const card = getCard(item);
					// console.log(item);
					// Создаём карточку и возвращаем наружу
					const cardElement = card.generateCard();
					// Добавляем в DOM
					newCards.addItem(cardElement);
				}
			},
				cardsContainer,
				'https://mesto.nomoreparties.co/v1/cohort-16/cards'
			);
			popupPlaceForm.renderLoading(false)
			newCards.renderItem(data);
			popupPlaceForm.close();
		})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			})
		// .finally(popupPlaceForm.renderLoading(false));
	}
});


popupAvatarOpenButton.addEventListener('click', () => {
	avatarForm.disabledValidation();
	avatarForm.ableSubmitButton();
	avatar.open();
	avatar.setEventListeners();
})

// обработчик 
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
		userInfo.setUserInfo(userData);
		// nameInput.value = userData.name;
		// jobInput.value = userData.about;

	})
		.catch((err) => {
			console.log(`Ошибка: ${err}`);
		})
	profile.open();
	profile.setEventListeners();
});


editForm.enableValidation();
cardForm.enableValidation();
