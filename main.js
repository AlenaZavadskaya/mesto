!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r=document.querySelector("#popupProfile"),o=document.querySelector("#popupPlace"),i=document.querySelector("#popupAvatar"),a=document.querySelector(".edit-button"),c=document.querySelector(".add-button"),u=(document.querySelector(".form"),document.querySelector("#form-card")),s=document.querySelector(".form__item_name"),l=document.querySelector(".form__item_about"),f=document.querySelector(".form__item_link"),d=document.querySelector(".form__item_title"),_=document.querySelector(".form__item_avatar"),h=document.querySelector(".profile__avatar"),m=document.querySelector(".profile__name"),p=document.querySelector(".profile__about"),y=document.querySelector("#popupImage"),v=document.querySelector(".elements__container"),b=document.querySelector("#popupWithSubmit"),S=document.querySelector(".profile__cont"),k=(document.querySelector(".element__counter"),document.querySelector(".element__delete"),document.querySelector(".submit__button"),{formSelector:".form",fieldSetSelector:".form__input-container",inputSelector:".form__item",submitButtonSelector:".submit__button",inactiveButtonClass:"submit__button_disabled",inputErrorClass:"form__item_error",errorClass:"form__item-error",activeError:"form__item-error_active"});function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(t,n,r,o,i,a){var c=o.handleCardClick,u=i.deleteCard,s=i.addLike,l=i.removeLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._user=n,this._title=t.name,this._image=t.link,this._id=t._id,this._templateElement=r,this._api=a,this._ownerId=t.ownerId,this._owner=t.owner,this._likes=t.likes,this._handleCardClick=c,this._deleteCard=u,this._addLike=s,this._removeLike=l}var t,n,r;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateElement).content.cloneNode(!0).querySelector(".element")}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._setEventListeners(),this._cardPicture=this._card.querySelector(".element__image"),this._cardTitle=this._card.querySelector(".element__title"),this._cardPicture.src=this._image,this._cardTitle.textContent=this._title,this._cardPicture.setAttribute("alt",this._title),this._counter=this._card.querySelector(".element__counter"),this._counter.textContent=this._likes.length,this._showLike(),this.showBuscket(),this._card}},{key:"_setEventListeners",value:function(){var e=this;this._cardRemove=this._card.querySelector(".element__delete"),this._cardLike=this._card.querySelector(".element__like"),this._cardImage=this._card.querySelector(".element__image"),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._card)})),this._cardRemove.addEventListener("click",(function(){e._deleteCard()})),this._cardLike.addEventListener("click",(function(){e._cardLike.classList.contains("element__like_active")?(e._removeLike(e._card),e._likeCard()):(e._addLike(e._card),e._likeCard())}))}},{key:"removeCard",value:function(){this._card.remove(),this._card=null}},{key:"_likeCard",value:function(){this._cardLike.classList.toggle("element__like_active")}},{key:"setLikesCounter",value:function(e){this._counter=this._card.querySelector(".element__counter"),this._counter.textContent=e.likes.length}},{key:"showBuscket",value:function(){this._cardRemove=this._card.querySelector(".element__delete"),this._ownerId===this._user._id&&this._cardRemove.classList.toggle("element__delete-active")}},{key:"_showLike",value:function(){var e=this;this._likes.forEach((function(t){t._id===e._user._id&&e._likeCard()}))}}])&&g(t.prototype,n),r&&g(t,r),e}();function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,"_showInputError",(function(e,t,n){var r=e.querySelector("#".concat(t.id,"-error"));t.classList.add("form__item_error"),r.textContent=n,r.classList.add("form__item-error_active")})),E(this,"_hideInputError",(function(e,t){var n=e.querySelector("#".concat(t.id,"-error"));t.classList.remove("form__item-error"),t.classList.remove("form__item_error"),n.classList.remove("form__item-error_active"),n.textContent=""})),E(this,"_isValid",(function(e,t){t.validity.valid?r._hideInputError(e,t):r._showInputError(e,t,t.validationMessage)})),E(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),E(this,"_toggleButtonState",(function(e){r._hasInvalidInput(e)?r.disableSubmitButton():r.ableSubmitButton()})),E(this,"ableSubmitButton",(function(){Array.from(document.querySelectorAll(".submit__button")).forEach((function(e){e.removeAttribute("disabled"),e.classList.remove("submit__button_disabled")}))})),E(this,"disableSubmitButton",(function(){Array.from(document.querySelectorAll(".submit__button")).forEach((function(e){e.classList.add("submit__button_disabled"),e.setAttribute("disabled",!0)}))})),E(this,"disabledValidation",(function(){var e=Array.from(document.querySelectorAll(".form__item")),t=Array.from(document.querySelectorAll(".form__item-error"));e.forEach((function(e){e.classList.remove("form__item_error")})),t.forEach((function(e){e.classList.add(".form__item-error"),e.textContent=""}))})),E(this,"_setEventListeners",(function(e){var t=Array.from(e.querySelectorAll(".form__item")),n=e.querySelector(".submit__button");r._toggleButtonState(t,n),t.forEach((function(o){o.addEventListener("input",(function(){r._isValid(e,o),r._toggleButtonState(t,n)}))}))})),E(this,"enableValidation",(function(){Array.from(document.querySelectorAll(".form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),r._setEventListeners(e)}))})),this._config=t,this._formElement=n};function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=n}var t,n,r;return t=e,(n=[{key:"addItem",value:function(e,t){t?this._container.append(e):this._container.prepend(e)}},{key:"renderItem",value:function(e){this._renderer(e)}},{key:"rendererItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer({name:t.name,link:t.link,_id:t._id,owner:t.owner._id,ownerId:t.owner._id,likes:t.likes})}))}}])&&C(t.prototype,n),r&&C(t,r),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._handleEscClose=this._handleEscClose.bind(this)}var t,n,r;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(){"Escape"===event.key&&this.close()}},{key:"_handleOverlayClose",value:function(){event.target===event.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton=this._popupSelector.querySelector(".popup__close"),this._closeButton.addEventListener("click",(function(){e.close()})),this._popupSelector.addEventListener("mousedown",(function(){e._handleOverlayClose()}))}}])&&O(t.prototype,n),r&&O(t,r),e}();function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t,n){return(A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=B(e);if(t){var o=B(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(i,e);var t,n,r,o=x(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e))._popupPicture=e.querySelector(".popup-image__img"),t._popupTitle=e.querySelector(".popup-image__title"),t}return t=i,(n=[{key:"open",value:function(e){this._popupPicture.src=e.link,this._popupTitle.textContent=e.name,this._popupPicture.setAttribute("alt",e.link),A(B(i.prototype),"open",this).call(this)}}])&&I(t.prototype,n),r&&I(t,r),i}(P);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return(V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=z(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=z(e);if(t){var o=z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return J(this,n)}}function J(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(i,e);var t,n,r,o=N(i);function i(e){var t,n=e.popupSelector,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,n))._submitHandler=r,t._formSubmitHandler=t._formSubmitHandler.bind(G(t)),t}return t=i,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._popupSelector.querySelectorAll(".form__item")),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"close",value:function(){Array.from(this._popupSelector.querySelectorAll(".form__item")).forEach((function(e){e.textContent=""})),this._popupSelector.removeEventListener("submit",this._formSubmitHandler),V(z(i.prototype),"close",this).call(this)}},{key:"_formSubmitHandler",value:function(e){e.preventDefault(),this._submitHandler(this._getInputValues())}},{key:"renderLoading",value:function(e){this._submitButton=this._popupSelector.querySelector(".submit__button"),this._submitButton.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){this._popupSelector.addEventListener("submit",this._formSubmitHandler),V(z(i.prototype),"setEventListeners",this).call(this)}}])&&H(t.prototype,n),r&&H(t,r),i}(P);function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=t,this._infoSelector=n,this._avatar=r}var t,n,r;return t=e,(n=[{key:"getUserInfo",value:function(e){return{name:e.name,about:e.about,avatar:e.avatar,id:e._id}}},{key:"saveUserInfo",value:function(e,t,n,r){t.value=e.name,n.value=e.about,r.src=e.avatar}},{key:"setUserInfo",value:function(e){this._nameSelector.textContent=e.name,this._infoSelector.textContent=e.about,this._avatar.src=e.avatar}}])&&$(t.prototype,n),r&&$(t,r),e}();function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers,this._body=t.body,this._users=t.users,this._me=t.me}var t,n,r;return t=e,(n=[{key:"getUserData",value:function(){return fetch("".concat(this._url,"users","/","me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editUserData",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"users","/","me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"editAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"users","/","me","/","avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addCards",value:function(e,t){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e,t)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards","/").concat(e._id),{method:"DELETE",headers:this._headers,body:JSON.stringify()}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cards","/","likes","/").concat(e._id),{method:"PUT",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}},{key:"removeLikes",value:function(e){return fetch("".concat(this._url,"cards","/","likes","/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}))}}])&&K(t.prototype,n),r&&K(t,r),e}();function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Z=new U(y),ee=new F(m,p,h),te=new L(k,"#form-edit"),ne=new L(k,"#form-card"),re=new L(k,"#form-avatar"),oe=new Q({url:"https://mesto.nomoreparties.co/v1/cohort-16/",headers:{authorization:"90f4c0de-1eee-42e7-8058-3892f79789d8","Content-Type":"application/json"}});function ie(e,t){var n=new j({items:e,renderer:function(e){var r=function(e,t){var n=new w(e,t,"#element-template",{handleCardClick:function(){Z.open(e),Z.setEventListeners()}},{deleteCard:function(){var t=new W({popupSelector:b,submitHandler:function(){oe.deleteCard(e).then((function(){n.removeCard(),t.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});t.open(),t.setEventListeners()},addLike:function(){oe.addLike(n).then((function(e){n.setLikesCounter(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},removeLike:function(){oe.removeLikes(n).then((function(e){n.setLikesCounter(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}},"https://mesto.nomoreparties.co/v1/cohort-16/cards");return n}(e,t).generateCard();n.addItem(r)}},v,"https://mesto.nomoreparties.co/v1/cohort-16/cards");return n}Promise.all([oe.getUserData(),oe.getInitialCards()]).then((function(e){var t=X(e,2),n=t[0],r=t[1];ee.getUserInfo(n),ee.setUserInfo(n),ie(r,n).rendererItems()})).catch((function(e){console.log(e)}));var ae=new W({popupSelector:o,submitHandler:function(){ae.renderLoading(!0),oe.addCards({name:d.value,link:f.value}).then((function(e){ae.renderLoading(!1),ie(e,e.owner._id).renderItem(e,e.owner._id),ae.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}}),ce=new W({popupSelector:r,submitHandler:function(){ce.renderLoading(!0),oe.editUserData({name:s.value,about:l.value}).then((function(e){ee.setUserInfo(e),ce.renderLoading(!1),ce.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}}),ue=new W({popupSelector:i,submitHandler:function(){ue.renderLoading(!0),oe.editAvatar({avatar:_.value}).then((function(e){var t=ee.getUserInfo(e);ee.saveUserInfo(t,m,p,h),ue.renderLoading(!1),ue.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});S.addEventListener("click",(function(){re.disabledValidation(),re.disableSubmitButton(),ue.open(),ue.setEventListeners()})),c.addEventListener("click",(function(){ne.disabledValidation(),ne.disableSubmitButton(),u.reset(),ae.open(),ae.setEventListeners()})),a.addEventListener("click",(function(){te.disabledValidation(),te.ableSubmitButton(),oe.getUserData().then((function(e){var t=ee.getUserInfo(e);ee.saveUserInfo(t,s,l,_),s.value=m.textContent,l.value=p.textContent,ce.open(),ce.setEventListeners()})).catch((function(e){console.log("Ошибка: ".concat(e))}))})),te.enableValidation(),ne.enableValidation()}]);