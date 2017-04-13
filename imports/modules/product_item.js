import $ from "jquery";
import 'owl.carousel';

const product = {
	init(){
        this.focalPoints();
		this.rotateBannerImages();
        this.productCarousel();
        this.relatedProducts();
	},
	rotateBannerImages(){
        const owl = $('#product-banner-images');
        
        owl.length !== 0 ? true : false;

        $(owl).owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            mouseDrag: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            autoplayTimeout:8000
        });
	},
    productCarousel() {
        const owl = $('#product-images');

        owl.length !== 0 ? true : false;

        $(owl).owlCarousel({
            items: 1,
            autoplay: false,
            loop: true,
            mouseDrag: true,
            animateIn: 'fadeIn',
            nav: false,
            dots: true,
            animateOut: 'fadeOut',
            onInitialized(){
                //click next
                $('.product-images .controls .next').on('click', (e) => {
                    e.stopPropagation();
                    owl.trigger('next.owl.carousel', [500]);         
                });
              
                //click prev
                $('.product-images .controls .prev').on('click', (e) => {
                    e.stopPropagation();
                    // With optional speed parameter
                     // Parameters has to be in square bracket '[]'
                    owl.trigger('prev.owl.carousel', [500]);
                });

                $('.thumbs .thumb').on("click", (e) => {
                    let thumbId;
                    thumbId = $(e.currentTarget).data('id');

                    let index = Number(thumbId) - 1;

                    $(owl).trigger('to.owl.carousel', [index]);
                });
            }
        });
  },
  relatedProducts() {
    //hiding same
    const id = $('.Product').data('item-id');

    $('.related-products .item[data-item-id="'+ id +'"]').hide();

    //remove duplicates
    var seen = {};
    $('.related-products .item').each(function() {
        var txt = $(this).text();
        if (seen[txt])
            $(this).remove();
        else
            seen[txt] = true;
    });

  },
  convertToPercent(number){
      return number * 100;
  },
  focalPoints(){

    let array = $('.owl-carousel .image').toArray();

    console.log(array);

    $.each(array, (i, item) => {
        let x = 0;
        let y = 0;

        let focalPoint = $(item).data('image-focal-point');   
        let split = focalPoint.split(',');

        x = Math.floor(this.convertToPercent(split[0])) + '%';
        y = Math.floor(this.convertToPercent(split[1])) + '%';

        let position = String(x + ' , ' + y);

        let imageSource = $(item).data('image');

        $(item).css({
           'backkground-image' : 'url(' + imageSource + ')',
           'background-position-x' : x,
           'background-position-y' : y
        });
    });       
  }
};

export default product;