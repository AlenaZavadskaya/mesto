export default class Section {

	constructor({ items, renderer }, containerSelector, api) {

		this._items = items; // это массив объекта (карточек) initialCards
		this._renderer = renderer;
		this._container = containerSelector;
		this._api = api;
	}

	// принимает DOM-элемент и добавляет его в контейнер
	addItem(item, isArray) {
		// debugger
		if (isArray) { 
      this._container.append(item); 
		} else { 
      this._container.prepend(item); 
		} 
  }

	// saveItem(data) {
	// 	debugger
	// 	this._api
	// 		.addCards({ name: data.name, link: data.link })
	// 		.then((data) => this.addItem(data.name, data.link))
	// 		.catch((err) => console.log(err));
	// 	debugger
	// }

	// Отрисовка отдельного элемента
	renderItem(item) {
		this._renderer(item);
	}

	// Перебираем каждый элемент массива
	rendererItems() {
		this._items.forEach(item => {
			// this._renderer(item); // вызываем renderer, передав item
			this._renderer({name: item.name, link: item.link, id: item._id});
		})
	}

}