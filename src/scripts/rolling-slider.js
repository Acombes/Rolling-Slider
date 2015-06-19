(function ($) {
    function RollingSlider(selector, options) {
        if (typeof selector === 'undefined') {
            selector = this.defaultOptions.containerClass;
        } else if (typeof selector === 'object') {
            options = selector;

            selector = options.containerClass || this.defaultOptions.containerClass;
        }

        this.div = $(selector);
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
            this.options = $.extend({}, this.defaultOptions, options);
            this.itemsContainer = this.div.find(this.options.itemsContainerClass);
        },
        /**
         * Rotate the slider one step counter-clockwise
         */
        prev: function () {
            var self = this;
            this.options.beforeRotation.call(this, this.itemsContainer, this.options.direction.prev);
            this.itemsContainer.children().eq(this.itemsContainer.children().length - 1).insertBefore(this.itemsContainer.children().eq(0));
            setTimeout(function() {
                self.options.afterRotation.call(self, self.itemsContainer, self.options.direction.prev);
            }, this.options.animationDuration);
        },
        /**
         * Rotate the slider one step clockwise
         */
        next: function () {
            var self = this;
            this.options.beforeRotation.call(this, this.itemsContainer, this.options.direction.next);
            this.itemsContainer.children().eq(0).insertAfter(this.itemsContainer.children().eq(this.itemsContainer.children().length - 1));
            setTimeout(function() {
                self.options.afterRotation.call(self, self.itemsContainer, self.options.direction.next);
            }, this.options.animationDuration);
        }
    };
    window.RollingSlider = RollingSlider;
})(jQuery);