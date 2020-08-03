/*console.log('hello');
let content = document.querySelector('.content');
let profile = content.querySelector('.profile');

let profileHeader = content.querySelector('.profile__header');
let profileParagraph = content.querySelector('.profile__paragraph');

console.log(profileHeader);
console.log(profileParagraph);*/

let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.edit-button');
let popupCloseButton = popup.querySelector('.popup__close');

let popupToggle = function (event) {
	event.preventDefault();
	popup.classList.toggle('popup_opened');
}
/*popupToggle();*/

let closePopup = function (event) {
	if (event.target !== event.currentTarget) return
	popupToggle(event);
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closePopup);


let page = document.querySelector('.page');



// Находим форму в DOM
let formElement = popup.querySelector('.form')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    let nameInput = form.querySelector('.form__item_name')
    let jobInput = form.querySelector('.form__item_about')

	 // Получите значение полей из свойства value
	let name = nameInput.value;
	let job = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
	let placeNameInput = document.querySelector('.profile__name');
	let placeJobInput = content.querySelector('.profile__about');
	
	
	 // Вставьте новые значения с помощью textContent
	placeNameInput.textContent = name;
	placeJobInput.textContent = job;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('.submit__button', formSubmitHandler);