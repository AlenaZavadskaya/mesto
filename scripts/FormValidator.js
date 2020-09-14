export const config = {
	formSelector: '.form',
	fieldSetSelector: '.form__input-container',
	inputSelector: '.form__item',
	submitButtonSelector: '.submit__button',
	inactiveButtonClass: 'submit__button_disabled',
	inputErrorClass: 'form__item_error',
	errorClass: 'form__item-error',
	activeError: 'form__item-error_active'
};


export class FormValidator {
	constructor(config, formElement) {
		this._config = config;
		this._formElement = formElement;
	}

	// Функция, которая добавляет класс с ошибкой
	_showInputError = (formElement, inputElement, errorMessage) => {
		// Находим элемент ошибки внутри самой функции
		const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

		inputElement.classList.add(config.inputErrorClass);

		// Заменим содержимое span с ошибкой на переданный параметр
		errorElement.textContent = errorMessage;
		// Показываем сообщение об ошибке
		errorElement.classList.add(config.activeError);
	};

	// Функция, которая удаляет класс с ошибкой
	_hideInputError = (formElement, inputElement) => {
		// Находим элемент ошибки
		const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
		inputElement.classList.remove(config.errorClass);
		// Скрываем сообщение об ошибке
		errorElement.classList.remove(config.activeError);
		// Очистим ошибку
		errorElement.textContent = '';
	};

	// Функция, которая проверяет валидность поля
	_isValid = (formElement, inputElement) => {
		if (!inputElement.validity.valid) {
			// Если поле не проходит валидацию, покажем ошибку
			// showInputError получает параметром форму, в которой
			// находится проверяемое поле, и само это поле
			this._showInputError(formElement, inputElement, inputElement.validationMessage);
		} else {
			// Если проходит, скроем
			// hideInputError теперь получает параметром форму, в которой
			// находится проверяемое поле, и само это поле
			this._hideInputError(formElement, inputElement);
		}
	};

	// Функция принимает массив полей
	_hasInvalidInput = (inputList) => {
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
	_toggleButtonState = (inputList, buttonElement) => {
		// Если есть хотя бы один невалидный инпут
		if (this._hasInvalidInput(inputList)) {
			// сделай кнопку неактивной
			buttonElement.classList.add(config.inactiveButtonClass);
			buttonElement.setAttribute('disabled', true);
		} else {
			// иначе сделай кнопку активной
			buttonElement.removeAttribute('disabled');
			buttonElement.classList.remove(config.inactiveButtonClass);
		}
	};

	_setEventListeners = (formElement) => {
		// Найдём все поля формы и сделаем из них массив
		const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
		// Найдём в текущей форме кнопку отправки
		const buttonElement = formElement.querySelector(config.submitButtonSelector);
		// Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
		this._toggleButtonState(inputList, buttonElement);

		// Обойдём все элементы полученной коллекции
		inputList.forEach((inputElement) => {
			inputElement.addEventListener('input', () => {
				// Внутри колбэка вызовем isValid,
				// передав ей форму и проверяемый элемент
				this._isValid(formElement, inputElement);

				// Вызовем toggleButtonState и передадим ей массив полей и кнопку
				this._toggleButtonState(inputList, buttonElement);
			});
		});
	};

	enableValidation = () => {
		// Найдём все формы с указанным классом в DOM,
		// сделаем из них массив методом Array.from
		const formList = Array.from(document.querySelectorAll(config.formSelector));

		// Переберём полученную коллекцию
		formList.forEach((formElement) => {
			formElement.addEventListener('submit', (evt) => {
				// У каждой формы отменим стандартное поведение
				evt.preventDefault();
			});

			// Для каждой формы вызовем функцию setEventListeners,
			// передав ей элемент формы
			this._setEventListeners(formElement);
		});
	};
}

