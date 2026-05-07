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

//エリア検索タブ
$(function () {
        $('.area-tab-button').on('click', function () {
            const areaId = $(this).data('area');

            $('.area-tab-button').removeClass('active');
            $(this).addClass('active');

            $('.area-tab-content').removeClass('active');
            $('#' + areaId).addClass('active');
        });
    });

// エリアリンクスクロール
$('.area-tab-content a').on('click', function (e) {

    e.preventDefault();

    const target = $(this).attr('href');
    const targetTop = $(target).offset().top - 80;

    $('html, body').animate({
    scrollTop: targetTop
    }, 400);

});

// クリニックもっと見る
    const showCount = 2;

    $('.clinic-card-list-wrap').each(function () {
        const $wrap = $(this);
        const $cards = $wrap.find('.clinic-card');
        const $button = $wrap.find('.clinic-more-btn');

        // 初期表示：2件だけ
        $cards.removeClass('is-show');
        $cards.slice(0, showCount).addClass('is-show');

        // 2件以下ならボタン非表示
        if ($cards.length <= showCount) {
        $button.hide();
        }

        $button.on('click', function () {
        const isOpen = $wrap.hasClass('is-open');

        if (isOpen) {
            $cards.removeClass('is-show');
            $cards.slice(0, showCount).addClass('is-show');
            $wrap.removeClass('is-open');
            $button.text('もっと見る');
        } else {
            $cards.addClass('is-show');
            $wrap.addClass('is-open');
            $button.text('閉じる');
        }
        });
    });


