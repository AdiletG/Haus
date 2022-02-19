

let btn = $('.first-screen__btn');

let title = $('.first-screen__title');
let subtitle = $('.first-screen__subtitle');

btn.on('click',function () {
    title.css('color','red');
    subtitle.toggleClass('active')
});

let burger = $('.burger');
let navigation = $('.header__nav');
burger.on('click',function () {
    burger.toggleClass('burger_active');
    navigation.toggleClass()
})