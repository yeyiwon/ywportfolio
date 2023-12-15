const sec1_o_top = $(".sec1").offset().top;
$(window).scroll(function () {
    let s_top = $(window).scrollTop();

    if (s_top + 150 >= sec1_o_top) {
        $(".sec1_L_img").addClass("sec1_L_img_active");
    }
    if (s_top + 250 >= sec1_o_top) {
        $(".sec1_R_text").addClass("sec1_R_text_active");
    }
});
