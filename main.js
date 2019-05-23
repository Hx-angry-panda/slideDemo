let n = 1
init()

setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend',function(x){
            makeEnter($(x.currentTarget))
        })
    makeCurrent(getImage(n+1))
    n = n + 1
}, 3000);

// 获取图片
function getImage(n){
    return $(`.images img:nth-child(${x(n)})`)
}

// 初始化图片位置
function init(){
    n = 1
    $(`.images img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

// 图片位置
function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    $node.removeClass('current enter').addClass('leave')
    return $node
}
function makeEnter($node){
    $node.removeClass('leave current').addClass('enter')
}

// 无缝切换图片的循环
function x(n) {
    if (n > 3){
        n = n % 3
        if (n === 0){
            n = 3
        }
    }
    return n
}
