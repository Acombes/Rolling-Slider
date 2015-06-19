/**
 * Created by ancom on 18/06/15.
 */
(function ($) {
    $(document).ready(function() {
        window.slider = new RollingSlider('.rolling-slider', {
            beforeRotation: function (items, direction) {
                console.log('before ' + direction);
            },
            afterRotation: function (items, direction) {
                console.log('after ' + direction);
            }
        });

        $('#prev').click(function (e) {
            e.preventDefault();
            slider.prev();
        });

        $('#next').click(function (e) {
            e.preventDefault();
            slider.next();
        });
    });
})(jQuery);