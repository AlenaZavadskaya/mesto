let popup = document.querySelector('.popup');
let popupPlace = document.querySelector('#popupPlace'); 
let popupOpenButton = document.querySelector('.edit-button');
let popupAddButton = document.querySelector('.add-button') 
let popupCloseButton = popup.querySelector('.popup__close');
let popupPlaceClose = document.querySelector('#popupPlaceClose'); 
let submitButton = popup.querySelector('.submit__button'); 
let page = document.querySelector('.root'); 
let formElement = document.querySelector('.form'); 
let nameInput = document.querySelector('.form__item_name'); 
let jobInput = document.querySelector('.form__item_about');
const pictureInput = document.querySelector('.form__item_link');
const titleInput = document.querySelector('.form__item_title');
const formPlaceElement = document.querySelector('#form-card'); 
let placeNameInput = document.querySelector('.profile__name'); 
let placeJobInput = document.querySelector('.profile__about');
let placePictureInput = document.querySelector('.element__image');
const placeTitleInput = document.querySelector('.element__title');
let likeElement = document.querySelector('.element__like');
const popupImage = document.querySelector('.popup-image');
const elementsContainer = document.querySelector('.elements__container');


// открыть попап 
let popupToggle = function (event) { 
	event.preventDefault(); 
	popup.classList.toggle('popup_opened');
	nameInput.value = placeNameInput.textContent; 
	jobInput.value = placeJobInput.textContent; 
}

// открыть попап 2
let popupPlaceToggle = function (event) { 
	event.preventDefault(); 
	popupPlace.classList.toggle('popup_opened');
}
/*
let popupImageToggle = function (event) {
	event.preventDefault();
	popupImage.classList.toggle('popup_opened');
	popupImage.querySelector('.popup-image__img').src = document.querySelector('.element__image').textContent;
	popupImage.querySelector('.popup-image__title') = document.querySelector('.element__title').textContent;
}
document.querySelector('.element__image').addEventListener('click', popupImageToggle);
*/
// закрыть попап 
let closePopup = function (event) { 
	if (event.target !== event.currentTarget) return
	popupToggle(event);
} 

// закрыть попап 2
let closePopupPlace = function (event) { 
	if (event.target !== event.currentTarget) return
	popupPlaceToggle(event);
}
/*
// закрыть image-popup
let closePopupImage = function (evt) {
	if (evt.target !== evt.currentTarget) return
	popupImageTogggle(evt);
}
*/
popupOpenButton.addEventListener('click', popupToggle); 
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closePopup);

popupAddButton.addEventListener('click', popupPlaceToggle);
popupPlaceClose.addEventListener('click', popupPlaceToggle);
popupPlace.addEventListener('click', closePopupPlace);


// Обработчик «отправки» формы, хотя пока 
// она никуда отправляться не будет 
function formSubmitHandler (evt) { 
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. 
	 // Вставьте новые значения с помощью textContent 
	placeNameInput.textContent = nameInput.value; 
	placeJobInput.textContent = jobInput.value; 
	popupToggle(event); 
} 

// Прикрепляем обработчик к форме: 
// он будет следить за событием “submit” - «отправка» 
formElement.addEventListener('submit', formSubmitHandler);


const initialCards = [
	{
		 name: 'Архыз',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		 name: 'Челябинская область',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		 name: 'Иваново',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		 name: 'Камчатка',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		 name: 'Холмогорский район',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		 name: 'Байкал',
		 link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];


const addElementToContainer = (element) => {
	//  наполняем содержимым и клонируем содержимое тега template
	const templateElement = document.querySelector('#element-template').content.cloneNode(true);
	templateElement.querySelector('.element__image').src = element.link;
	templateElement.querySelector('.element__title').textContent = element.name;
   //  удаляем карточку при нажатии на значек
	templateElement.querySelector('.element__delete').addEventListener('click', function () {
		const cardElement = event.target.closest('.element') // сlosest находит весь блок карточки в разметке
		cardElement.remove();
	});

	// меняем стиль для лайка
	templateElement.querySelector('.element__like').addEventListener('click', function (evt) {
		evt.target.classList.toggle('element__like_active');
	});

	// отображаем на странице карточки
	elementsContainer.prepend(templateElement);
	
	
	

	let popupImageAdd = function () {
		document.querySelector('.popup-image__img').src = element.link;
		document.querySelector('.popup-image__title').textContent = element.name;
	}

// открываем попап с картинкой при клике на фото
let popupImageToggle = function (evt) {
	evt.preventDefault();
	document.querySelector('.popup-image').classList.toggle('popup-image_opened');
	popupImageAdd();
	}

  // закрываем попап с картинкой при клике на крестик
   document.querySelector('.popup-image__close').addEventListener('click', function (evt) {
   if (evt.target !== evt.currentTarget) return
		popupImageToggle(evt);
	})

   document.querySelector('.element__image').addEventListener('click', popupImageToggle);
   };


initialCards.forEach(addElementToContainer);

const createCard = document.querySelector('#createCard');

createCard.addEventListener('click', function (evt) {
	evt.preventDefault();
	const addedCards = [{ name: titleInput.value, link: pictureInput.value }];
	addedCards.concat(initialCards);
	addedCards.forEach(addElementToContainer);
	popupPlaceToggle(event);
});


formPlaceElement.addEventListener('submit', createCard);
/*

// открываем попап с картинкой при клике на фото
let popupImageToggle = function (evt) {
	evt.preventDefault();
	document.querySelector('.popup-image').classList.toggle('popup-image_opened');
	//document.querySelector('.popup-image__img').src = element.link;
	document.querySelector('.popup-image__img').src = document.querySelector('.element__image').src;
	//document.querySelector('.popup-image__title').textContent = element.name;
	document.querySelector('.popup-image__title').textContent = document.querySelector('.element__name').textContent;

}
document.querySelector('.element__image').addEventListener('click', popupImageToggle);



// закрываем попап с картинкой при клике на крестик

document.querySelector('.popup-image__close').addEventListener('click', function (evt) {
if (evt.target !== evt.currentTarget) return
popupImageToggle(evt);
})


*/