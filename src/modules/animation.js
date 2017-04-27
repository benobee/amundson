import $ from "jquery";

const animation = {
	init(){
		this.add();
	},
	add(){
	    //home page
	    setTimeout(function(){
	        $('.loaderWrapper').addClass("hide");
	        $('.page-banner-image-container').addClass('scaleOut');
			$('#collection-583cbfb6ebbd1ac168ec95e5 .page-description').addClass('fadeUp');
	    }, 150);

   		//product page
        $('.Product, .Product-banner').addClass('is-initialized');   
    }
};

export default animation;
