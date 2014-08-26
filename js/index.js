/* ==========================================================
 * index.js v20140825
 * ==========================================================
 * Copyright makaiqian
 * http://makaiqian.com
 *
 * BeautyPhoto
 * ========================================================== */

var $changeValue = $('.js-change-value');
var $numBlur = $('#js-num-blur');
var $progress = $('.js-progress');
var $progressWidth = $('.js-progress').width();
var $progressMax = $('.js-progress').attr('max');

// 滚动条的位置
var progressX = $changeValue.offset().left;
var progressY = $changeValue.offset().top;
// 显示进度条的值
$numBlur.text($progress.attr('value'));

// 改变进度
$changeValue.on('click', function(e) {
    // 得到鼠标点击的位置
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    // 改变进度的值
    var sValue = e.pageX - progressX;
    var numValue = sValue / $progressWidth * $progressMax;
    $progress.attr('value', numValue);
    numValue = numValue.toFixed(1);
    $numBlur.text(numValue);
    // 改变模糊度
    var numValuePx = 'blur(' + numValue + 'px)';
    $('.pic-now').css('-webkit-filter',numValuePx);
});
