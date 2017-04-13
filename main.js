import * as core from "./imports/modules/index.js";
import $ from "jquery";
import Events from './imports/modules/pubsub.js';

const css = require("./main.less");

class App_Build {
    constructor() {
        core.animation.init();
        core.product.init();
        core.filters.init();
        core.cart.init();
        core.geo.init();
    }
};

const App = new App_Build();
