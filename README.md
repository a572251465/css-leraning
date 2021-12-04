# 飞上天的🐖 CSS成长之路
![个人logo](http://lihh-core.top/images/personal-logo.jpeg)
* [GitHub](https://github.com/a572251465)
* [个人博客](http://lihh-core.top/share)
* [个人作品展示集](http://lihh-core.top)

-----------------------------
> 下面记录了个人学习成长记录的点点滴滴
## 1. 选择器
* 类选择器：表示以<.>开头的选择器就是类选择
* id选择器：以#开头的选择器表示id选择器，而且权重相当高，原则上ID一般都是唯一的，但是在css中，ID出现了多个并不会只渲染第一个，而是会雨露均沾，所以原则上不推荐重复的id
* 属性选择器：含有特殊标识[]的选择器
  * [title] {}：指定某个属性
  * [title="css-world"] {}：指定某个属性等于css-world
  * [title~='flower'] {}：选择 title 属性包含单词 "flower" 的所有元素。
  * [title^='css-world'] {}：属性选择器的值以css-world开头
  * [title$='css-world'] {}：属性选择器的值以css-world结尾
* 伪类选择器：一般指前面有个<span style="border-bottom:1px solid red;">一个英文冒号{:}</span>,例如，:first-child, :last-child等
* 伪元素选择器：表示存在<span style = "border-bottom: 1px solid red;">两个连续的冒号{:}</span>的选择器，例如，::first-line等
* 关系选择器：
  * 后代选择器：div p
  * 相邻后代选择器：div > p
  * 兄弟选择器：p ~ ul
  * 相邻兄弟选择器：div + p
* 更多资料参照 ==> [选择器学习地址](https://www.w3school.com.cn/cssref/css_selectors.asp)
## 2. 块级元素
1. <span style = "border-bottom: 1px solid red;">“块级元素”和“display 为 block 的元素”不是一个概念</span>,之所以称之为块级元素是因为满足了块级元素的特征，也就是水平流上只能单独显示一个元素，多个块级元素则换行显示
2. 使用display: list-item来清除浮动带来的危害,如下代码，实例效果参照[实例效果](https://demo.cssworld.cn/3/1-1.php):
   1. `` .clear:after {content: ''; display: list-item; clear: both;} ``
   2. <span style = "border-bottom: 1px solid red;">在普通元素上将属性设置display: list-item没什么异常的地方，但是在:after/:before表现就不同了，设置后元素会出现项目符号，其实这个项目符号是为了存储圆点，数字等项目符号，其实还有一个官方的话“标记盒子”</span>
3. **其实每个元素都存在这两个盒子，一个外在盒子(负责元素是否在一行显示)，另一个是内在盒子(负责盒子的宽高等属性)，又称为外部盒子以及容器盒子，比如：display: block就是外在块级盒子，内在块级容器盒子/ display: inline-block就是外在内联盒子，内在块级容器盒子**
4. 所谓的”流动性“，并不是看上去宽度100%显示那么简单，而是一种margin/border/padding/content内容区域自动分配的机制，如果设置了固定的宽度就会破环这种”流动性“，具体的实例demo参照[流动性demo](https://demo.cssworld.cn/3/2-3.php)
5. _**深藏不露的width: auto的不同表现形式**_：
   1. 充分利用可用空间
      1. 这个特征就是利用了块级元素流的特征，上述标记(4)就是最明显的体现，最重要的一句话<span style = "border-bottom: 1px solid red">如果元素设置了固定的宽度，会破坏其流式的特征</span>
      2. **格式化宽度**
         1. 格式化宽度仅出现在”绝对定位模型“中，也就是出现在position: absolute/ fixed元素中。
         2. 对于非替换元素，当left/top, top/bottom对立方位的属性同时存在的时候，元素的宽度为格式化宽度。其宽度大小相对于最近的具有定位特性的祖先元素计算
         3. 例如代码``div {position: absolute; left: 20px; right: 20px}``,假设该元素最近的具有定位特性的祖父元素的宽度是1000px，那么这个元素的宽度就是960(1000px - 20px - 20px)
   2. 收缩与包裹
      1. 内部尺寸以及包裹性，怎么确定是内部尺寸呢，就是当没有内容的时候元素的宽度为0，这就是内部尺寸的表现。
      2. 包裹性最具有代表性的属性是display: inline-block;(其实记住包裹性的大小都是元素撑开的就行了)
      3. 那么包裹性具体有哪些场景呢???
         1. 页面中某个模块的文字内容是动态的，可能是几个字，也可能是一句话。然后，希望文字少的时候居中显示，文字超过一行的时候居左显示。具体实例参照[代码实例](https://demo.cssworld.cn/3/2-5.php)
   3. 收缩到最小
   4. 超出容器限制
6. content-box
   1. 通过属性box-sizing 设置content-box值。设置后元素的宽度直接作用在了width/height上。
   2. 当此时元素设置了padding/border的话，实际占用的大小肯定会比预先设定的大小要大
7. border-box
   1. 通过属性box-sizing 设置border-box值。设置后元素的大小就是设置的宽高。什么意思呢？？
   2. 例如设置了width: 100px; 100px = padding-left + border-left + width + border-right + padding-right
8. _**关于height: 100%**_
   1. height和width还有一个比较明显的区别就是对百分比单位的支持。对于width属性，就算父元素width为auto，其百分比值也是支持的；但是，对于height属性，如果父元素height为auto，只要子元素在文档流中，其百分比值完全被忽略了。
   2. **_为何height: 100%无效呢???_**
      1. 如果包含块的高度没有显式指定(既高度由内容决定)，并且该元素不是绝对定位，则计算值为auto，一句话总结就是”因为解释成为了auto“。所以auto与百分比无法计算
      2. 宽度的解释为：如果包含块的宽度取决于该元素的宽度，那么产生的布局在CSS2.1中是未定义的
  
