import $ from 'jquery';

const navbar = {
	init() {
		this.injectSocialIcons();
	},
	injectSocialIcons(){
		/* look for social icons in footer and append into main nav */
		const socialIcons = $('#footer-blocks .socialaccountlinks-v2-block .sqs-block-content').clone();
		console.log(socialIcons);
		const nav = $('#secondaryNavWrapper');

		const target = $(nav).find('.site-navigation');

		$(target).after(socialIcons);

		$(nav).find('.sqs-block-content').addClass('social-top-nav');
	}
};

export default navbar;