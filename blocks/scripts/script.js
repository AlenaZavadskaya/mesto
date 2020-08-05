let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let submitButton = popup.querySelector('.submit__button');
let page = document.querySelector('.page');
let formElement = document.querySelector('.form');
let nameInput = document.querySelector('.form__item_name');
let jobInput = document.querySelector('.form__item_about');
let placeNameInput = document.querySelector('.profile__name');
let placeJobInput = document.querySelector('.profile__about');


// открыть попап
let popupToggle = function (event) {
	event.preventDefault();
	popup.classList.toggle('popup_opened');
}

// закрыть попап
let closePopup = function (event) {
	if (event.target !== event.currentTarget) return
	popupToggle(event);
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closePopup);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
	
	 // Получите значение полей из свойства value
	let name = nameInput.value;
	let job = jobInput.value;

	 // Вставьте новые значения с помощью textContent
	placeNameInput.textContent = nameInput.value;
	placeJobInput.textContent = jobInput.value;
	popupToggle(event);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
