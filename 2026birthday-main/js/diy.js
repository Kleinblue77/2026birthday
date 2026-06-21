$(function(){
    $('#dowebok').fullpage({
        navigation: true,
        navigationPosition:"left",
        navigationColor:['#fff'],
        autoScrolling: true,
        css3: true,
        scrollingSpeed: 700,
        // 关键冷却：两次翻页最少间隔900ms，动画没完成不会触发下一页
        scrollDelay: 900,
        // 灵敏度调高，滚轮要滑动更长距离才翻页，不会一碰就跳
        touchSensitivity: 16,
        fitToSection: true,
        fitToSectionDelay: 600,
        // 关闭循环回弹
        loopTop: false,
        loopBottom: false,
        continuousVertical: false,
        // 把文字滚动框加入白名单，内部滚动不触发页面翻页
        normalScrollElements: ".ly-txt14",
        afterLoad:function(link, index){
            // 只有两页，到第二页禁止向下滚动，杜绝跳到不存在的第三页
            if(index == 2){
                $.fn.fullpage.setAllowScrolling(false, 'down');
            }else{
                $.fn.fullpage.setAllowScrolling(true, 'down');
            }
        }
    });
});