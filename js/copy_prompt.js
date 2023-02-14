// 复制提示
document.body.oncopy = function () {
iziToast.info({
timeout: 4000, // 关闭弹窗的时间
// icon: 'Fontawesome', // 图标类别
closeOnEscape: 'true', // 允许使用Esc键关闭弹窗
transitionIn: 'bounceInLeft', // 弹窗打开动画
transitionOut: 'fadeOutRight', // 弹窗关闭动画
displayMode: 'replace', // 替换已经打开的弹窗
layout: '2', // Medium模式
position: 'topRight', // 弹窗位置
//icon: 'fad fa-copy', // 图标类名
iconUrl: '/img/avatar.png',
backgroundColor: '#fff', // 弹窗背景色
title: '复制成功', // 通知标题
message: '请遵守 CC BY-NC-SA 4.0 协议' // 通知消息内容
});
}
