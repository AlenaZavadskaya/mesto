const popup = document.querySelector('.popup');
const popupPlace = document.querySelector('#popupPlace'); 
const popupOpenButton = document.querySelector('.edit-button');
const popupAddButton = document.querySelector('.add-button') 
const popupCloseButton = popup.querySelector('.popup__close');
const popupPlaceClose = document.querySelector('#popupPlaceClose'); 
const submitButton = popup.querySelector('.submit__button'); 
const formElement = document.querySelector('.form'); 
const nameInput = document.querySelector('.form__item_name'); 
const jobInput = document.querySelector('.form__item_about');
const pictureInput = document.querySelector('.form__item_link');
const titleInput = document.querySelector('.form__item_title');
const formPlaceElement = document.querySelector('#form-card'); 
const placeNameInput = document.querySelector('.profile__name'); 
const placeJobInput = document.querySelector('.profile__about');
const popupImage = document.querySelector('.popup-image');
const elementsContainer = document.querySelector('.elements__container');


// открыть попап редактирования профиля 
const popupToggle = function (event) { 
  event.preventDefault(); 
  popup.classList.toggle('popup_opened');
  nameInput.value = placeNameInput.textContent; 
  jobInput.value = placeJobInput.textContent; 
}

// открыть попап добавления фото
const popupPlaceToggle = function (event) { 
  event.preventDefault(); 
  popupPlace.classList.toggle('popup_opened');
}

// закрыть попап 
const closePopup = function (event) { 
  if (event.target !== event.currentTarget) return
  popupToggle(event);
} 

// закрыть попап 2
const closePopupPlace = function (event) { 
  if (event.target !== event.currentTarget) return
  popupPlaceToggle(event);
}

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
  // Вставляем новые значения с помощью textContent 
  placeNameInput.textContent = nameInput.value; 
  placeJobInput.textContent = jobInput.value; 
  popupToggle(event); 
} 

// Прикрепляем обработчик к форме: 
// он будет следить за событием “submit” - «отправка» 
formElement.addEventListener('submit', formSubmitHandler);


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
	
	
  // открываем попап с картинкой при клике на фото
  const popupImageToggle = function (evt) {
    evt.preventDefault();
	 document.querySelector('.popup-image').classList.toggle('popup-image_opened');
	 document.querySelector('.popup-image__img').src = element.link;
	 document.querySelector('.popup-image__title').textContent = element.name;
  }

  // закрываем попап с картинкой при клике на крестик
	document.querySelector('.popup-image__close').addEventListener('click', function (evt) {
    if (evt.target !== evt.currentTarget) return
	 document.querySelector('.popup-image').classList.remove('popup-image_opened');
  })

  document.querySelector('.element__image').addEventListener('click', popupImageToggle); 
	
  // отображаем на странице карточки
  elementsContainer.prepend(templateElement);
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


// Прикрепляем обработчик к форме:
formPlaceElement.addEventListener('submit', createCard);