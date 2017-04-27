import $ from 'jquery';

const filters = {
	init(){
		//cache DOM elements
		this.cacheDOM();

		//grid rendering
		this.beforeRender();
		this.render();
		this.afterRender();

		//bind events
		this.events();
    },
    cacheDOM(){
    	this.grid = $('.Product-list');
    	this.items = $(this.grid).find('.item').toArray();
    },
    sortByName(){
    	let array = this.items.map((i, id) => {
    		const item = {
    			name: $(i).data('name'),
    			dom: i,
    			id: 'id-' + id,
    			category: $(i).data('category')
    		}

    		return item;
    	});

    	array.sort((a, b) => {
		    if(a.name < b.name) return -1;
		    if(a.name > b.name) return 1;
		    return 0;
    	});

    	this.items = array;
    },
    addActiveFilter(){

    },
    filterByCategory(filterName){
    	$(this.grid).removeClass('is-initialized');

    	//wait for page grid to reach full 0 opacity
    	setTimeout(() => {

    		//clear all active filters
			$('.Product-list .item').removeClass('active-filter');
            
	    	$.each(this.items, (i) => {
	    		
	    		if(filterName == "category-all"){
	    			return false;
	    		} else {
		    		let selected = $(this.items[i].dom).hasClass(filterName);

		    		if(!selected){
		    			$(this.items[i].dom).addClass('active-filter');
		    		}	    			
	    		}
	    	});

	    	//show grid
			$(this.grid).addClass('is-initialized');

    	}, 600);
    	
    },
    clearRenderTargetArea(){
    	$(this.grid).html('');
    },
    beforeRender(){
    	this.sortByName();
    },
    render(){
    	this.clearRenderTargetArea();

    	$.each(this.items, (i) => {
    		$(this.grid).append(this.items[i].dom);
    	});
    },
    afterRender(){
    	//show grid
    	$(this.grid).addClass('is-initialized');
    },
    events(){
    	//click filter button
	    $('.category-select').on("click", (e) => {

            $('.category-select').removeClass('active');

            $(e.currentTarget).addClass('active');
     
	        const $this = $(this);
	     
	        let filter = $(e.currentTarget).data('filter');

	        this.filterByCategory(filter);

	    });    	
    }
};

export default filters;