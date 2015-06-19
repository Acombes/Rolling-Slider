/**
 * Created by ancom on 18/06/15.
 */
(function () {
    window.slider = new RollingSlider('.rolling-slider', {
        beforeRotation: function (items, direction) {
            console.log('before ' + direction);
        },
        afterRotation: function (items, direction) {
            console.log('after ' + direction);
        }
    });

    document.querySelector('#prev').addEventListener('click', function (e) {
        e.preventDefault();
        slider.prev();
    });

    document.querySelector('#next').addEventListener('click', function (e) {
        e.preventDefault();
        slider.next();
    });
})();