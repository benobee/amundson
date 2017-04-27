import $ from 'jquery';

const cart = {
	init(){
		$('.Cart').on("click", (e) => {
			e.stopPropagation();

			$('#QuiversRibbon, #secondaryNavWrapper').toggleClass('cart-open');

		});

		$('body').on("click", (e) => {
			$('#QuiversRibbon, #secondaryNavWrapper').removeClass('cart-open');
		});
	}
}

export default cart;