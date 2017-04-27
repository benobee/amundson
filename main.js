import * as core from "./src/modules/index.js";
import $ from "jquery";
import Events from './src/modules/pubsub.js';

const css = require("./main.less");

class App_Build {
    constructor() {
        core.animation.init();
        core.product.init();
        core.filters.init();
        core.cart.init();
        core.geo.init();
        core.navbar.init();
        this.core = core;
    }
};

const App = new App_Build();
