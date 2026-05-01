$(function () {

  // ハンバーガーメニュー
    var $nav = $('#navArea');
    var $btn = $('.toggle_btn');
    var $mask = $('#mask');

    $btn.on('click', function () {
        $nav.toggleClass('open');

        // ハンバーガーを開いた時だけ、エリア検索を閉じる
        if ($nav.hasClass('open')) {
        $('.sub').removeClass('active');
        }
    });

    $mask.on('click', function () {
        $nav.removeClass('open');
    });

// メイン画像slider
$(function () {
    let currentSlide = 0;
    const $slides = $('.main-slide');
    const slideLength = $slides.length;

    function showSlide(index) {
        $slides.removeClass('active');
        $slides.eq(index).addClass('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideLength;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideLength) % slideLength;
        showSlide(currentSlide);
    }

    $('.slider-btn-next').on('click', function () {
        nextSlide();
    });

    $('.slider-btn-prev').on('click', function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide();
    }, 5000);
});


// エリア検索
$('.has-sub > div > a').on('click', function (e) {
    e.preventDefault();

    var $parent = $(this).closest('.has-sub');

    $parent.find('.sub').toggleClass('active');
    $parent.find('.arrow_u').toggleClass('active');
    });

});

//タブ
$(function () {
    $('.treatment-tabs').each(function () {
        const $tabs = $(this);

        $tabs.find('.tab-button').on('click', function () {
        const tabId = $(this).data('tab');

        $tabs.find('.tab-button').removeClass('active');
        $(this).addClass('active');

        $tabs.find('.tab-content').removeClass('active');
        $tabs.find('#' + tabId).addClass('active');
        });
    });
});