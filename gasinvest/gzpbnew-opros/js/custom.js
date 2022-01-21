$(document).ready(function () {
    'use strict';


    $('.test-step .next-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.test-step').fadeOut(500);
        setTimeout(function () {
            $(this).parents('.test-step').next().addClass("active");
        }.bind(this), 800)
    });

    var answers = [];
    $('.test-step label').on('click', function (e) {
        if (!$(this).hasClass("switch")) {
            e.preventDefault();
            answers.push($(this).find('input').val());
            $(this).addClass("switch");

            setTimeout(function () {
                $(this).parents('.test-step').fadeOut(500);
                setTimeout(function () {
                    $(this).parents('.test-step').next().addClass("active");
                }.bind(this), 800)
            }.bind(this), 500);

            $('input[name=comment]').val(answers.join(','));
        }
    });

    $('#video_main').on('click', function (e) {
        $('#video_player').prop('muted', false);
    })


    $('.test-step .prev-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.test-step').prev().addClass('active');
        $(this).parents('.test-step').removeClass('active');
    })
})


