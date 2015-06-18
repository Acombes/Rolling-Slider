/**
 * Created by ancom on 18/06/15.
 */
(function ($) {
    $(document).ready(function() {
        var slider = $('.rolling-slider');

        $('#prev').click(function (e) {
            e.preventDefault();
            slider.children().eq(slider.children().length - 1).insertBefore(slider.children().eq(0))
        });

        $('#next').click(function (e) {
            e.preventDefault();
            slider.children().eq(0).insertAfter(slider.children().eq(slider.children().length - 1))
        });
    });
})(jQuery);