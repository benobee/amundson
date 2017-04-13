import $ from 'jquery';

const lightbox = {
    init(){
        //this.lightbox.init();
    },
    convertToPercent(number){
        return number * 100;
    },
    focalPoints(slides){
        $.each(slides, (i) => {
           var focalPoint = $(this).find('.image').data('image-focal-point');
           var imageSource = $(this).find('.image').data('image');                
           var split = focalPoint.split(',');

          var x = Math.floor(this.convertToPercent(split[0])) + '%';
          var y = Math.floor(this.convertToPercent(split[1])) + '%';

          var position = String(x + ' , ' + y);

          $(this).find('.image').css({
             'backkground-image' : 'url(' + imageSource + ')',
             'background-position-x' : x,
             'background-position-y' : y
          });
        });       
    },
    lightbox: {
      init(){
        this.element = $('.app-module.lightbox');

        //check if element on page, if not stop init
        if (this.element.length == 0){ return false; };

        this.array = $('.product-images .thumbs .thumb').clone().toArray();
        this.initializeLightboxCarousel();
        this.closeButton = $(this.element).find('.close');
        this.events();

      },
      initializeLightboxCarousel(id){
        this.owl = $('#lightbox-carousel');

        this.owl.length !== 0 ? true : false;

        $(this.owl).owlCarousel({
            items: 1,
            autoplay: false,
            loop: true,
            mouseDrag: true,
            autoWidth: false,
            nav: true,
            navText: true,
            onInitialized(){
                //click next
                $('#lightbox-carousel .controls .next').click((event) => {
                    event.stopPropagation();
                    this.owl.trigger('next.owl.carousel', [500]);         
                });
              
                //click prev
                $('#lightbox-carousel .controls .prev').click((event) => {
                    event.stopPropagation();
                    // With optional speed parameter
                     // Parameters has to be in square bracket '[]'
                    this.owl.trigger('prev.owl.carousel', [500]);
                });
            }
        });        
      },
      events(){
        //open lightbox
        $('.product-images .thumb').on("click", (e) => {
            const thumbId = $(e.currentTarget).data('id');

            $(this.owl).trigger('to.owl.carousel', thumbId - 1);

            setTimeout(() => {
              this.open();
            }, 200);
        });

        //close lightbox
        $(this.closeButton).on('click', () => {
            this.close();
        }); 
      },
      open(){
        $(this.element).addClass('active');
      },
      close(){
        $(this.element).removeClass('active');
      }
    }
}

export default lightbox;