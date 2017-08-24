import $ from 'jquery';

class Modal {
	constructor() { //selecting any or all dom elements that we want to work onto
		this.openModalButton = $(".open-modal"); //saving button to our new property
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		//clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		//clicking the open modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		//pushes the ESC key or any key
		$(document).keyup(this.keyPresshandler.bind(this));

	}

	keyPresshandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false; //prevents default behavior of scrolling up due to href:"#"
	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");
	}

}

export default Modal;