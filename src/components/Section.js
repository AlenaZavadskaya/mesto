export default class Section {

	constructor({ items, renderer }, containerSelector) {

		this._items = items;
		this._renderer = renderer;
		this._container = containerSelector;
	}

	// принимает DOM-элемент и добавляет его в контейнер
	addItem(item, isArray) {
		if (isArray) {
			this._container.append(item);
		} else {
			this._container.prepend(item);
		}
	}

	// Отрисовка отдельного элемента
	renderItem(item) {
		this._renderer(item);
	}

	// Перебираем каждый элемент массива
	rendererItems() {
		this._items.forEach(item => {
			this._renderer({ name: item.name, link: item.link, _id: item._id, owner: item.owner, likes: item.likes });
		})
	}
}