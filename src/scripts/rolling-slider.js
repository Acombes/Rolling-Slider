(function () {
    function extend( defaults, options ) {
        var extended = {};
        var prop;
        for (prop in defaults) {
            if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                extended[prop] = defaults[prop];
            }
        }
        for (prop in options) {
            if (Object.prototype.hasOwnProperty.call(options, prop)) {
                extended[prop] = options[prop];
            }
        }
        return extended;
    }

    function RollingSlider(selector, options) {
        if (typeof selector === 'undefined') {
            selector = this.defaultOptions.containerClass;
        } else if (typeof selector === 'object') {
            options = selector;

            selector = options.containerClass || this.defaultOptions.containerClass;
        }

        this.div = document.querySelector(selector);
        if (this.div == []) {
            throw new Error('rollingSliderContainerNotFound');
        }
        this._init(options);
    }

    RollingSlider.prototype = {
        defaultOptions: {
            containerClass: ".rolling-slider",
            itemsContainerClass: ".items",
            itemClass: ".item",
            animationDuration: 200,
            direction: {
                prev: 'prev',
                next: 'next'
            },
            /**
             * Is passed the list of items as 1st argument and the movement direction as 2nd
             */
            beforeRotation: function () {},
            /**
             * Is passed the list of items as argument and the movement direction as 2nd
             */
            afterRotation: function () {}
        },
        _init: function (options) {
            this.options = extend(this.defaultOptions, options);
            this.itemsContainer = this.div.querySelector(this.options.itemsContainerClass);
        },
        /**
         * Rotate the slider one step counter-clockwise
         */
        prev: function () {
            var self = this,
                items = this.itemsContainer.children;
            this.options.beforeRotation.call(this, this.itemsContainer, this.options.direction.prev);
            this.itemsContainer.insertBefore(items[items.length - 1], items[0]);
            setTimeout(function() {
                self.options.afterRotation.call(self, self.itemsContainer, self.options.direction.prev);
            }, this.options.animationDuration);
        },
        /**
         * Rotate the slider one step clockwise
         */
        next: function () {
            var self = this,
                items = this.itemsContainer.children;
            this.options.beforeRotation.call(this, this.itemsContainer, this.options.direction.next);
            this.itemsContainer.appendChild(items[0]);
            setTimeout(function() {
                self.options.afterRotation.call(self, self.itemsContainer, self.options.direction.next);
            }, this.options.animationDuration);
        }
    };
    window.RollingSlider = RollingSlider;
})();