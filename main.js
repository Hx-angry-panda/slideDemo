setTimeout(function(){
    $('.images img:nth-child(1)').css({'transform': 'translateX(-100%)'})
    $('.images img:nth-child(2)').css({'transform': 'translateX(-100%)'})
    $('.images img:nth-child(1)').one('transitionend',function(){ //用.on的意思是只要transitionend之后都会执行，而.one是transitionend之后只执行一次
        $('.images img:nth-child(1)').css({'transform': 'none'})
        .addClass('right')
    })
},2000)
setTimeout(function(){
    $('.images img:nth-child(2)').css({'transform': 'translateX(-200%)'})
    $('.images img:nth-child(3)').css({'transform': 'translateX(-100%)'})
    $('.images img:nth-child(2)').one('transitionend',function(){
        $('.images img:nth-child(2)').css({'transform': 'none'})
        .addClass('right')
    })
},4000)
setTimeout(function(){
    $('.images img:nth-child(3)').css({'transform': 'translateX(-200%)'})
    $('.images img:nth-child(1)').css({'transform': 'translateX(-100%)','z-index':'1'})
    $('.images img:nth-child(3)').one('transitionend',function(){
        $('.images img:nth-child(3)').css({'transform': 'none'})
        .addClass('right')
    })
},6000)
setTimeout(function(){
    $('.images img:nth-child(1)').css({'transform': 'translateX(-200%)'})
    $('.images img:nth-child(2)').css({'transform': 'translateX(-100%)','z-index':'1'})
    $('.images img:nth-child(1)').one('transitionend',function(){
        $('.images img:nth-child(1)').css({'transform': 'none'})
        .addClass('right')
    })
},8000)
setTimeout(function(){
    $('.images img:nth-child(2)').css({'transform': 'translateX(-200%)'})
    $('.images img:nth-child(3)').css({'transform': 'translateX(-100%)','z-index':'1'})
    $('.images img:nth-child(2)').one('transitionend',function(){
        $('.images img:nth-child(2)').css({'transform': 'none'})
        .addClass('right')
    })
},10000)
setTimeout(function(){
    $('.images img:nth-child(3)').css({'transform': 'translateX(-200%)'})
    $('.images img:nth-child(1)').css({'transform': 'translateX(-100%)','z-index':'1'})
    $('.images img:nth-child(1)').one('transitionend',function(){

    })
},12000)