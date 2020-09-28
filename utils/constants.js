export const popupProfile = document.querySelector('#popupProfile');
export const popupPlace = document.querySelector('#popupPlace');
export const popupProfileOpenButton = document.querySelector('.edit-button');
export const popupPlaceAddButton = document.querySelector('.add-button')
export const profileForm = document.querySelector('.form');
export const placeForm = document.querySelector('#form-card');
export const nameInput = document.querySelector('.form__item_name');
export const jobInput = document.querySelector('.form__item_about');
export const pictureInput = document.querySelector('.form__item_link');
export const titleInput = document.querySelector('.form__item_title');
export const placeNameInput = document.querySelector('.profile__name');
export const placeJobInput = document.querySelector('.profile__about');
export const popupImage = document.querySelector('#popupImage');
export const popupImagePicture = popupImage.querySelector('.popup-image__img');
export const popupImageTitle = popupImage.querySelector('.popup-image__title');
export const cardsContainer = document.querySelector('.elements__container');
export const initialCards = [
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