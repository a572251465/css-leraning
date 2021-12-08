# 飞上天的 🐖 CSS 成长之路

![个人logo](http://lihh-core.top/images/personal-logo.jpeg)

- [GitHub](https://github.com/a572251465)
- [个人博客](http://lihh-core.top/share)
- [个人作品展示集](http://lihh-core.top)

---

> 下面记录了个人学习成长记录的点点滴滴

## 1. 选择器

- 类选择器：表示以<.>开头的选择器就是类选择
- id 选择器：以#开头的选择器表示 id 选择器，而且权重相当高，原则上 ID 一般都是唯一的，但是在 css 中，ID 出现了多个并不会只渲染第一个，而是会雨露均沾，所以原则上不推荐重复的 id
- 属性选择器：含有特殊标识[]的选择器
  - [title] {}：指定某个属性
  - [title="css-world"] {}：指定某个属性等于 css-world
  - [title~='flower'] {}：选择 title 属性包含单词 "flower" 的所有元素。
  - [title^='css-world'] {}：属性选择器的值以 css-world 开头
  - [title$='css-world'] {}：属性选择器的值以 css-world 结尾
- 伪类选择器：一般指前面有个<span style="border-bottom:1px solid red;">一个英文冒号{:}</span>,例如，:first-child, :last-child 等
- 伪元素选择器：表示存在<span style = "border-bottom: 1px solid red;">两个连续的冒号{:}</span>的选择器，例如，::first-line 等
- 关系选择器：
  - 后代选择器：div p
  - 相邻后代选择器：div > p
  - 兄弟选择器：p ~ ul
  - 相邻兄弟选择器：div + p
- 更多资料参照 ==> [选择器学习地址](https://www.w3school.com.cn/cssref/css_selectors.asp)

## 2. 块级元素

### 1. 细节注意点：

1. <span style = "border-bottom: 1px solid red;">“块级元素”和“display 为 block 的元素”不是一个概念</span>,之所以称之为块级元素是因为满足了块级元素的特征，也就是水平流上只能单独显示一个元素，多个块级元素则换行显示
2. 使用 display: list-item 来清除浮动带来的危害,如下代码，实例效果参照[实例效果](https://demo.cssworld.cn/3/1-1.php):
   1. `.clear:after {content: ''; display: list-item; clear: both;}`
   2. <span style = "border-bottom: 1px solid red;">在普通元素上将属性设置 display: list-item 没什么异常的地方，但是在:after/:before 表现就不同了，设置后元素会出现项目符号，其实这个项目符号是为了存储圆点，数字等项目符号，其实还有一个官方的话“标记盒子”</span>
3. **其实每个元素都存在这两个盒子，一个外在盒子(负责元素是否在一行显示)，另一个是内在盒子(负责盒子的宽高等属性)，又称为外部盒子以及容器盒子，比如：display: block 就是外在块级盒子，内在块级容器盒子/ display: inline-block 就是外在内联盒子，内在块级容器盒子**
4. 所谓的”流动性“，并不是看上去宽度 100%显示那么简单，而是一种 margin/border/padding/content 内容区域自动分配的机制，如果设置了固定的宽度就会破环这种”流动性“，具体的实例 demo 参照[流动性 demo](https://demo.cssworld.cn/3/2-3.php)

### _**2. 深藏不露的 width: auto 的不同表现形式**_：

1.  充分利用可用空间
    1. 这个特征就是利用了块级元素流的特征，上述标记(4)就是最明显的体现，最重要的一句话<span style = "border-bottom: 1px solid red">如果元素设置了固定的宽度，会破坏其流式的特征</span>
    2. **格式化宽度**
       1. 格式化宽度仅出现在”绝对定位模型“中，也就是出现在 position: absolute/ fixed 元素中。
       2. 对于非替换元素，当 left/top, top/bottom 对立方位的属性同时存在的时候，元素的宽度为格式化宽度。其宽度大小相对于最近的具有定位特性的祖先元素计算
       3. 例如代码`div {position: absolute; left: 20px; right: 20px}`,假设该元素最近的具有定位特性的祖父元素的宽度是 1000px，那么这个元素的宽度就是 960(1000px - 20px - 20px)
2.  收缩与包裹
    1. 内部尺寸以及包裹性，怎么确定是内部尺寸呢，就是当没有内容的时候元素的宽度为 0，这就是内部尺寸的表现。
    2. 包裹性最具有代表性的属性是 display: inline-block;(其实记住包裹性的大小都是元素撑开的就行了)
    3. 那么包裹性具体有哪些场景呢???
       1. 页面中某个模块的文字内容是动态的，可能是几个字，也可能是一句话。然后，希望文字少的时候居中显示，文字超过一行的时候居左显示。具体实例参照[代码实例](https://demo.cssworld.cn/3/2-5.php)
3.  收缩到最小
4.  超出容器限制

### 3. content-box

1.  通过属性 box-sizing 设置 content-box 值。设置后元素的宽度直接作用在了 width/height 上。
2.  当此时元素设置了 padding/border 的话，实际占用的大小肯定会比预先设定的大小要大

### 4. border-box

1.  通过属性 box-sizing 设置 border-box 值。设置后元素的大小就是设置的宽高。什么意思呢？？
2.  例如设置了 width: 100px; 100px = padding-left + border-left + width + border-right + padding-right

### 5. _**关于 height: 100%**_

1.  height 和 width 还有一个比较明显的区别就是对百分比单位的支持。对于 width 属性，就算父元素 width 为 auto，其百分比值也是支持的；但是，对于 height 属性，如果父元素 height 为 auto，只要子元素在文档流中，其百分比值完全被忽略了。
2.  **_为何 height: 100%无效呢???_**
    1. 如果包含块的高度没有显式指定(既高度由内容决定)，并且该元素不是绝对定位，则计算值为 auto，一句话总结就是”因为解释成为了 auto“。所以 auto 与百分比无法计算
    2. 宽度的解释为：如果包含块的宽度取决于该元素的宽度，那么产生的布局在 CSS2.1 中是未定义的

## 3. 内联元素

### 3.1 辨别内联盒子

1. “内联元素”的“内联”特指“外在盒子”，和“display 为 inline 的元素”不是一个概念！
2. “内联元素”的典型特征就是可以和文字在一行显示。

## 4. 盒尺寸四大家族

### 1. 深入理解 content

#### 1. 什么叫替换元素???

1. 顾名思义就是内容可以被替换的，就是通过某个属性值进行内容的替换，例如：img, object, video, iframe 等
2. 内容的外观不受页面上的 CSS 的影响
3. 有自己的默认尺寸
4. 在很多 CSS 属性上有自己的一套表现规则
5. 替换元素的默认 display 值都是 inline/ inline-block 等，但是在某些特定的浏览器下返回的内容是不同的
   1. 针对于<input type = "button">/ <button></button> 返回的内容不同的，input 是 inline 类型，button 是 inline-block 类型
   2. 那么他们最大区别在哪呢？input => white-space: pre; button => white-space: normal(自动换行)

#### 2. 替换元素与非替换元素之间区别

1. 替换元素和非替换元素之间只隔了一个 src 属性
   1. 其实我们在使用 img 元素的时候难免会使用到 src 属性，所以在既定的思维中难免认为 img 就是图片，其实不然。
   2. 首先如果图片被写成为<img src = "" /> 也是会发送请求的，只不过是本页面而已
   3. 其次在不同的浏览器之间的话，<img /> 表现形式是不同的，在 FireFox 以外浏览器中这个元素就是图片盒子模型表现为 inline-block。但是在 FireFox 浏览器中<img />被认为是 inline，所以设置 width/height 是无效的
   4. 解决办法：重置样式的时候统一添加`img {display: inline-block;}`
   5. <img /> 是非替换元素 `<img src = ""/>` 是替换元素
2. 替换元素和非替换元素之间只隔了一个 CSS content 属性
   1. 非替换元素可以通过添加 content 属性来实现元素内容的修改。例如：`h1 {content: url('1.jpg)}`
   2. 使用 content 生成的文本元素危害如下：
      1. 文本无法被选中，无法复制
      2. 无法被屏幕阅读器识别，不利于 SEO

### 2. padding

1. padding 相对来说是比较温和的，为什么这么说呢，很少因为使用 padding 出现了以外情况
2. **_但是如果 box-sizing 发生变化，padding 的变化会影响盒子大小_**
3. **_如果设置元素是内联元素，padding 的设置会影响视觉效果(可能不会影响布局，但是如果设置背景色会发现影响视觉效果)_**
4. padding 的百分比不支持负值
5. _**padding 的百分比无论是水平方向还是垂直方向均是相对于宽度计算的**_

### 3. margin

1. margin 可以设置为负值
2. _**一旦元素设置了宽度，无论如何设置 margin，都不会影响元素的尺寸**_
3. _**margin 的百分比无论是水平方向还是垂直方向都是相对于宽度而言的**_

#### 1. 正确看待 CSS 世界里的 margin 合并

1. 什么叫 margin 合并
   1. 块级元素的上外边距与下外边距有时会合并为单个外边距，这样的现象叫做“margin 合并”
   2. 块级元素 -- 但是不包括浮动和绝对定位元素，尽管浮动和绝对定位可以让元素块状化
   3. 只发生在垂直方向
2. 现象场景：
   1. _**相邻兄弟元素 margin 合并，一般都是上边距以及下边距进行合并**_
   2. _**父级元素和第一个/最后一个元素进行合并**_ -- 如果我们元素需要在距离顶部的一定距离进行显示，我们自然而然使用 margin-top，但是会发现父元素会向下移动
   3. 空块级元素的 margin 合并
3. 如何阻止 margin 进行合并呢
   1. 阻止 margin-top 进行合并，满足以下一个条件就行：
      1. 父元素设置块状格式化上下文
      2. 父元素设置 border-top 的值
      3. 父元素设置 padding-top 的值
      4. 父元素跟第一个元素之间添加内联元素进行隔离
   2. 阻止 margin-bottom 进行合并，满足以下一个条件就行：
      1. 父元素设置块状格式化上下文
      2. 父元素设置 border-bottom 的值
      3. 父元素设置 padding-bottom 的值
      4. 父元素和最后一个子元素之间添加内联元素进行隔离
      5. 给父元素设置 height, min-height, max-height 等值
4. 计算规则
   1. _**正正取大值，正负值相加，负负最负值**_

#### 2. 深入理解 CSS 中的 margin: auto

1. 特点：
   1. 作用于拥有块级元素特性的元素
   2. 如果一侧定值，一侧 auto，则 auto 为剩余空间大小
   3. 如果两侧都是 auto，则平分剩余空间
   4. _**就是 width/height 为 auto 时，元素是具有对应方向的自动填充的特性**_
2. 特例
   1. _**块级特征的元素，左侧 margin-left: 0px; 右侧 margin-right: auto; 可以实现右对齐。避免 float: right**_
   2. 如果想通过 margin: auto 让元素上下居中的话，可以在父元素上通过属性 writing-mode 来修改流的方向
   3. 如果想要上下左右同时对齐的话，元素需要设置绝对定位/ 固定定位等
3. margin 无效形式解析
   1. _**inline 的非替换元素的垂直方向是无效的，水平方向有效。inline 的替换元素的 margin 是有效的**_
   2. margin 合并的时候，更改 margin 值可能是没有效果的。以父子 margin 重叠为例，假设父元素设置有 margin-top:50px，则此时元素设置 margin-top:30px 就没有任何效果表现，除非大小比 50px 大，或者是负值
   3. 绝对定位元素非定位方位的 margin 值“无效”
