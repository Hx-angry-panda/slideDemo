let $buttons = $('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0
makeFakeSlides()
bindEvents()

//复制第一张到最后，复制最后一张到最前
function makeFakeSlides() {
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)
    $slides.append($firstCopy) //api: 在每个匹配元素里面的末尾处插入参数内容
    $slides.prepend($lastCopy) //api: 将参数内容插入到每个匹配元素的前面（元素内部）
    //一开始移动到第一张不会有过渡
    $('.images').css({'transition': 'all 0s'})
    $slides.css({ 'transform': 'translateX(-400px)' })
    $slides.offset() //防止合并
    $('.images').css({'transition': 'all 0.5s'})
}

//绑定事件
function bindEvents() { 
    $('#buttonWrapper').on('click', 'button', function (e) { //id 为buttonWrapper 里的 button 被点击触发的函数
        let $button = $(e.currentTarget)
        let index = $button.index()
        goToSlide(index)
    })
}

//无缝轮播
function goToSlide(index){
    if (index > $buttons.length - 1){
        index = 0
    }
    if (index < 0){
        index = $buttons.length - 1
    }
    if (current === $buttons.length - 1 && index === 0) {
        //最后1个到第1个
        $slides.css({ 'transform': `translateX(${-($buttons.length +1)*400}px)`})
            .one('transitionend', function () {
                $slides.hide()
                    .offset() //不加的话hide 和 show 会合并
                $slides.css({ 'transform': `translateX(${-(index + 1) *400}px)`})
                    .show()
            })
    } else if (current === 0 && index === $buttons.length - 1) {
        //第1个到最后1个
        $slides.css({ 'transform': 'translateX(0px)'})
            .one('transitionend', function () {
                $slides.hide()
                    .offset() //不加的话hide 和 show 会合并
                $slides.css({ 'transform': `translateX(${-(index + 1) * 400}px)` })
                    .show()
            })
    }else{
        $slides.css({'transform': `translateX(${- (index+1) * 400}px)`}) // 400} px 中间有个空格会出错
    }
    current = index
}

// 上一张 下一张
$('#previous').on('click', function(){
    goToSlide(current - 1)
})
$('#next').on('click', function(){
    goToSlide(current + 1)
})

// 播放轮播 鼠标进入暂停 鼠标离开继续
let timer = setInterval(function(){
    goToSlide(current + 1)
},2000)
$('#container').on('mouseenter', function(){
    window.clearInterval(timer)
}).on('mouseleave', function(){
    timer = setInterval(function(){
        goToSlide(current + 1)
    },2000)
})