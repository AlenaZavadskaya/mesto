import { cardsContainer, initialCards } from '../pages/index.js';

export default class Section { // ООП в интерфейсах. Продолжение / Урок 3 преимущественно
	
//	static _template = document.querySelector('#element-template').content;
	constructor({ items, renderer }, containerSelector) {
	//	this._renderedItems = data;
		this._items = items; // это массив объекта (карточек) initialCards
		this._renderer = renderer;
		this._container = containerSelector;
		
	}

// принимает DOM-элемент и добавляет его в контейнер
addItem(item) {
	this._container.prepend(item);
}
	// отвечает за отрисовку всех элементов
	// method(item) {
		// this._container.append(item);
	

	// Отрисовка каждого отдельного элемента	
	/*
	renderer(item) {
		const card = new Card(item, '#element-template');
		// Создаём карточку и возвращаем наружу
		const cardElement = card.generateCard();
		// Добавляем в DOM
		cardsContainer.prepend(cardElement);
	}
	*/
rendererItems() {
	this._items.forEach(item => {
		this._renderer(item); // вызываем renderer, передав item
	})
}

}