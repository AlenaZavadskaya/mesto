const popup = document.querySelector('.popup');
const popupProfile = document.querySelector('#popupProfile');
const popupPlace = document.querySelector('#popupPlace');
const popupProfileOpenButton = document.querySelector('.edit-button');
const popupAddButton = document.querySelector('.add-button')
const popupCloseButton = popupProfile.querySelector('.popup__close');
const popupPlaceClose = document.querySelector('#popupPlaceClose');
const profileForm = document.querySelector('.form');
const nameInput = document.querySelector('.form__item_name');
const jobInput = document.querySelector('.form__item_about');
const pictureInput = document.querySelector('.form__item_link');
const titleInput = document.querySelector('.form__item_title');
const formPlaceElement = document.querySelector('#form-card');
const placeNameInput = document.querySelector('.profile__name');
const placeJobInput = document.querySelector('.profile__about');
const popupImage = document.querySelector('#popupImage');
const elementsContainer = document.querySelector('.elements__container');
const elementForm = document.querySelector('#form-card');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close');
const popupImagePicture = popupImage.querySelector('.popup-image__img');
const popupImageTitle = popupImage.querySelector('.popup-image__title');


// открыть попап
function openPopup(popupElement) {
	popupElement.classList.add('popup_opened');
	document.addEventListener('keydown', evt => keyHandler(evt, popupElement));
}

// закрыть попап - х
function closePopup(popupElement) {
	popupElement.classList.remove('popup_opened');
	document.removeEventListener('keydown', evt => keyHandler(evt, popupElement));
}

// закрыть попап - Overlay
function closeOverlay(popupElement) {
	if (event.target === event.currentTarget) {
		closePopup(popupElement);
		document.removeEventListener('keydown', evt => keyHandler(evt, popupElement));
	}
}

// закрыть попап - Esc
function keyHandler(evt, popupElement) {
	if(evt.key === 'Escape'|| evt.key === 'Esc'|| evt.keyCode === 27) {
		closePopup(popupElement);
	}
}


// заполнить текущими данными поля попапа редактирования профиля при его открытии
popupProfileOpenButton.addEventListener('click', function () {
	nameInput.value = placeNameInput.textContent;
	jobInput.value = placeJobInput.textContent;
	openPopup(popupProfile)
});

// Обработчик «отправки» формы редактирования профиля
function handleFormSubmit(evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы. 
	// Вставляем новые значения с помощью textContent 
	placeNameInput.textContent = nameInput.value;
	placeJobInput.textContent = jobInput.value;
	closePopup(popupProfile);
}

const initialCards = [
	{
		name: 'Озеро Брайес, Италия',
		link: 'https://images.unsplash.com/photo-1487622750296-6360190669a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
	},
	{
		name: 'Италия',
		link: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
	},
	{
		name: 'Швейцария',
		link: 'https://images.unsplash.com/photo-1473800447596-01729482b8eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
	},
	{
		name: 'Новая Зеландия',
		link: 'https://images.unsplash.com/photo-1505302767374-66bca19b3219?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
	},
	{
		name: 'Тихий океан',
		link: 'https://images.unsplash.com/photo-1533790062815-de8070c76e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1119&q=80'
	},
	{
		name: 'Гренландия',
		link: 'https://images.unsplash.com/photo-1536846862558-b80d25f0dbae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
	}
];

// создаем карточку и добавляем на каждую слушатели событий
const createCard = (element) => {
	//  клонируем содержимое тега template и наполняем содержимым 
	const cardElement = document.querySelector('#element-template').content.cloneNode(true);
	const cardImage = cardElement.querySelector('.element__image');
	const cardTitle = cardElement.querySelector('.element__title');
	const cardRemove = cardElement.querySelector('.element__delete');
	const cardLike = cardElement.querySelector('.element__like')

	cardImage.src = element.link;
	cardTitle.textContent = element.name;
	cardImage.setAttribute('alt', element.name);

	cardImage.addEventListener('click', fillPopupImage);
	cardRemove.addEventListener('click', removeCard);
	cardLike.addEventListener('click', likeCard);

	return cardElement;
};


function addCard(element) {
	elementsContainer.prepend(element);
}

// добавляем карточки на страницу
formPlaceElement.addEventListener('submit', function () {
	event.preventDefault();
	const addedCard = { name: titleInput.value, link: pictureInput.value };
	addCard(createCard(addedCard));
	//elementForm.reset();
	//titleInput.textContent = '';
	//pictureInput.textContent = '';
	closePopup(popupPlace);
});

// заполняем текущими данными поля попапа с картинкой при его открытии
function fillPopupImage() {
	popupImagePicture.src = event.target.src;
	popupImageTitle.textContent = event.target.alt;
	popupImagePicture.setAttribute('alt', event.target.alt);
	openPopup(popupImage);
}

//  удаляем карточку при нажатии на значек
function removeCard(evt) {
	const card = evt.target.closest('.element') // сlosest находит весь блок карточки в разметке
	card.remove();
}

// меняем стиль для лайка
function likeCard(evt) {
	evt.target.classList.toggle('element__like_active');
}

// Прикрепляем обработчик к форме редактирования профиля: 
profileForm.addEventListener('submit', handleFormSubmit);

// Обработчики попапа редактирования профиля
popupCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupProfile.addEventListener('click', () => closeOverlay(popupProfile));

// Обработчики попапа c местом
popupAddButton.addEventListener('click', () => openPopup(popupPlace));
popupPlaceClose.addEventListener('click', () => closePopup(popupPlace));
popupPlace.addEventListener('click', () => closeOverlay(popupPlace));

// Обработчики попапа c картинкой
popupImage.addEventListener('click', () => closeOverlay(popupImage));
popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));

// первоначальное отображение карточек на странице
initialCards.forEach(function (item) { addCard(createCard(item)); });



//валидация из тренажера

const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__item');
// Выбираем элемент ошибки на основе id 
const formError = formElement.querySelector(`#${formInput.id}-error`);


// Функция, которая добавляет класс с ошибкой
// Передадим текст ошибки вторым параметром
const showInputError = (formElement, inputElement, errorMessage) => {
	// Находим элемент ошибки внутри самой функции
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add('form__item_type_error');
// Заменим содержимое span с ошибкой на переданный параметр
errorElement.textContent = errorMessage;
// Показываем сообщение об ошибке
errorElement.classList.add('form__item-error_active');
};


 // Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
	// Находим элемент ошибки
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.remove('form__item-error');
  // Скрываем сообщение об ошибке
  errorElement.classList.remove('form__item-error_active');
	// Очистим ошибку
	errorElement.textContent = '';
};


 // Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
	if (!formInput.validity.valid) {
	  // Если поле не проходит валидацию, покажем ошибку
		// showInputError получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
		showInputError(formElement, inputElement, inputElement.validationMessage);
	} else {
	  // Если проходит, скроем
		// hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
	  hideInputError(formElement, inputElement);
	}
};

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
	// проходим по этому массиву методом some
	return inputList.some((inputElement) => {
			// Если поле не валидно, колбэк вернёт true
	  // Обход массива прекратится и вся фунцкция
	  // hasInvalidInput вернёт true
 
	  return !inputElement.validity.valid;
	})
};


// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement) => {
	// Если есть хотя бы один невалидный инпут
	if (hasInvalidInput(inputList)) {
	  // сделай кнопку неактивной
		
	 
	  buttonElement.classList.add('submit__button_disabled');
	  buttonElement.setAttribute('disabled', true);
	} else {
			// иначе сделай кнопку активной
			buttonElement.removeAttribute('disabled');
	  buttonElement.classList.remove('submit__button_disabled');
	}
 };


const setEventListeners = (formElement) => {
	// Найдём все поля формы и сделаем из них массив
 const inputList = Array.from(formElement.querySelectorAll(`.form__item`));
	// Найдём в текущей форме кнопку отправки
	const buttonElement = formElement.querySelector('.submit__button');
	// Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
	toggleButtonState(inputList, buttonElement);

	// Обойдём все элементы полученной коллекции
 inputList.forEach((inputElement) => {
	 inputElement.addEventListener('input', () => {
		// Внутри колбэка вызовем isValid,
		 // передав ей форму и проверяемый элемент
	  isValid(formElement, inputElement);

			  // Вызовем toggleButtonState и передадим ей массив полей и кнопку
	  toggleButtonState(inputList, buttonElement);
	});
 });
};


const enableValidation = () => {
	// Найдём все формы с указанным классом в DOM,
	// сделаем из них массив методом Array.from
	const formList = Array.from(document.querySelectorAll('.form'));
 
	// Переберём полученную коллекцию
	formList.forEach((formElement) => {
	  formElement.addEventListener('submit', (evt) => {
		 // У каждой формы отменим стандартное поведение
		 evt.preventDefault();
	  });
 
	  // Для каждой формы вызовем функцию setEventListeners,
	  // передав ей элемент формы
	  const fieldsetList = Array.from(formElement.querySelectorAll('.form__input-container'));
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
  });
 });
};
 
 // Вызовем функцию
 enableValidation();


// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
	formSelector: '.form',
	fieldSetSelector: '.form__input-container',
	inputSelector: '.form__item',
	submitButtonSelector: '.submit__button',
	inactiveButtonClass: 'submit__button_disabled',
	inputErrorClass: 'form__item_type_error',
	errorClass: 'form__item-error'
});

/*
const form = document.forms.add;
const submitButton = document.querySelector('.submit__button');

// состояние кнопки submit меняется в зависимости от того, заполнены ли поля формы
function setSubmitButtonState(isFormValid) {
	if (isFormValid) {
		//Если с формой всё в порядке, условие разблокирует:
		submitButton.removeAttribute('disabled');
		submitButton.classList.remove('submit__button_disabled');
	} else {
		//Если хотя бы одно из полей пустое, условие её заблокирует:
		submitButton.setAttribute('disabled', true);
		submitButton.classList.add('submit__button_disabled');
	}
};


// обработчик изменения формы
form.addEventListener('input', function(setSubmitButtonState) {
	const isValid = titleInput.value.length > 0 && pictureInput.value.length > 0
	setSubmitButtonState(isValid);
});

// валидация форм

/*
<!-- index.html -->

<input id="input">
<div id="error" style="display: none"></div>

	script.js 

const input = document.querySelector('#input');
const error = document.querySelector('#error'); // Блок с ошибкой изначально скрыт

input.addEventListener('keydown', function (evt) {
  // Проверяем, была ли введена цифра
    if (Number.isNaN(Number(evt.key))) {
    // Если пользователь ввёл не цифру, показываем блок с ошибкой
    error.style.display = 'block';
    };
});
*/

/*
const input = document.querySelector('#input');
const error = document.querySelector('#error'); // Блок с ошибкой изначально скрыт

input.addEventListener('keydown', function (evt) {
  // Проверяем, была ли введена цифра
    if (!(evt.keyCode <= 57 && evt.keyCode >= 48)) {
    // Если пользователь ввёл не цифру, показываем блок с ошибкой
    error.style.display = 'block';
    };
});
*/

/*


 
 // Вызовем функцию isValid на каждый ввод символа
 formInput.addEventListener('input', isValid);
 */

/*
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`#${formInput.id}-error`);

// Передадим текст ошибки вторым параметром
const showInputError = (element, errorMessage) => {
  element.classList.add('form__input_type_error');
  // Заменим содержимое span с ошибкой на переданный параметр
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
  formError.classList.remove('form__input-error_active');
  // Очистим ошибку
  formError.textContent = '';
};


*/