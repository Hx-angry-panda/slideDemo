$('.images img:nth-child(1)').addClass('current')
$('.images img:nth-child(2)').addClass('enter')
$('.images img:nth-child(3)').addClass('enter')
setTimeout(function(){
    $('.images img:nth-child(1)').removeClass('current enter').addClass('leave')
    $('.images img:nth-child(2)').removeClass('enter right').addClass('current')
    $('.images img:nth-child(1)').one('transitionend',function(x){
        $('.images img:nth-child(1)').removeClass('leave').addClass('right')
    })
},3000)

setTimeout(function(){
    $('.images img:nth-child(2)').removeClass('current enter').addClass('leave')
    $('.images img:nth-child(3)').removeClass('enter right').addClass('current')
    $('.images img:nth-child(2)').one('transitionend',function(x){
        $('.images img:nth-child(2)').removeClass('leave').addClass('right')
    })
},6000)

setTimeout(function(){
    $('.images img:nth-child(3)').removeClass('current enter').addClass('leave')
    $('.images img:nth-child(1)').removeClass('enter right').addClass('current')
    $('.images img:nth-child(3)').one('transitionend',function(x){
        $('.images img:nth-child(3)').removeClass('leave').addClass('right')
    })
},9000)

setTimeout(function(){
    $('.images img:nth-child(1)').removeClass('current enter').addClass('leave')
    $('.images img:nth-child(2)').removeClass('enter right').addClass('current')
    $('.images img:nth-child(1)').one('transitionend',function(x){
        $('.images img:nth-child(1)').removeClass('leave').addClass('right')
    })
},12000)

setTimeout(function(){
    $('.images img:nth-child(2)').removeClass('current enter').addClass('leave')
    $('.images img:nth-child(3)').removeClass('enter right').addClass('current')
    $('.images img:nth-child(2)').one('transitionend',function(x){
        $('.images img:nth-child(2)').removeClass('leave').addClass('right')
    })
},15000)