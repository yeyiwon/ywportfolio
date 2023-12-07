$(document).ready(function(){

    $('.sec3_img2').eq(0).css({left: 0});

    let curr_idx = 0;
    let timer = 1000;
    
$('.btn_R2').click(function(){
    버튼막기();
    slide(curr_idx % img_count, '-100%', (curr_idx + 1) % img_count, '100%', timer);
    curr_idx += 1;
});

$('.btn_L2').click(function(){
    버튼막기();
    slide(curr_idx % img_count, "100%", (curr_idx-1) % img_count, "-100%", timer);
    curr_idx -=1;
})

    let img_count = $('.sec3_img2').length;
    for(let i=0; i<img_count; i++) {
        $('.indis2').append(`<div class="indi2"></div>`)
    }
    $('.indi2').eq(0).addClass('indi2_active')


function slide(o_idx, o_pos, c_idx, c_pos, t) {
    // 나갈방
    $('.sec3_img2').eq(o_idx).animate({
        left: o_pos
    }, t)

    // 들어올방
    $('.sec3_img2').eq((c_idx)).css({
        left: c_pos
    }).stop(true).animate({
        left: 0
    }, t)

    $('.indi2').eq(o_idx).removeClass('indi2_active');
    $('.indi2').eq(c_idx).addClass('indi2_active');
}

function 버튼막기() {
        // 버튼 막기
        $('.sec3_btn2').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.sec3_btn2').css({pointerEvents:'auto'})
        }, timer)
    }

    let interval;
    function auto_slide() {
        interval=setInterval(function(){
            $('.btn_R2').trigger('click')
        }, timer+2000)
    }

    $('.sec3_imgbox2').hover(function(){
        clearInterval(interval)
    }, function(){
        auto_slide()
    })

    $('.indi2').click(function(){

    console.log("색칠된거: " + $('.indi2_active').index())
    console.log("클릭한거: " + $(this).index())

        let colored = $('.indi2_active').index();
        let clicked = $(this).index();

        if(colored < clicked) { 
           
            버튼막기() 
            
            slide(colored, '-100%', clicked, '100%', timer);
            curr_idx = clicked ;
        }
        else if(colored > clicked) {
           
            버튼막기() 
            slide(colored, '100%', clicked, '-100%',timer);
            curr_idx = clicked ;
        }

        
    })

})