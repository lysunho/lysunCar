//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};
//数组map方法补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	}
	return result;
};
//数组filter方法补丁
Array.prototype.filter = function(callback){
	var a = -1,
		len = this.length,
		result = [];
	while(++a < len){
		callback(this[a], a, this) && result.push(this[a]);
	}
	return result;
};

//轮播图基本数据
var data2=[
	{
		title:"广告",
		href:"#",
		imgUrl:"images/banner1.jpg"
	},
	{
		title:"大风车",
		href:"#",
		imgUrl:"images/banner2.jpg"
	},
	{
		title:"车牛",
		href:"#",
		imgUrl:"images/banner3.jpg"
	}
];

//创建轮播图中的图片
function createImage(option){
	var a=document.createElement("a");
	a.title=option.title;
	a.href=option.href;
	a.style.backgroundImage="url("+option.imgUrl+")";
	return a;
}

var banner=document.getElementById("banner");
var fragment1=document.createDocumentFragment();
var images=data2.map(function(item){	
	return fragment1.appendChild(createImage(item));
});
banner.appendChild(fragment1);


//定时器轮播
var len=data2.length-1,i=0;
images[i].className="current";
function createTimer(){		
	return setInterval(function(){
		var _i=i;	
		i= i>=len? 0: i+1;
		images[_i].className="";
		images[i].className="current";
	},2000);		
}
var timer=createTimer();
banner.onmouseover=function(){
	clearInterval(timer);
}
banner.onmouseout=function(){
	timer=createTimer();
}

//左右按钮
var left=document.createElement("div"),right=document.createElement("div");
left.className="left lt";
right.className="right rt";
left.innerHTML="&lt";
right.innerHTML="&gt";
banner.appendChild(left);
banner.appendChild(right);

//按钮点击
left.onclick=function(){
	clearInterval(timer);
	var _i=i;
	i= i<=0 ? len :i-1;
	images[_i].className=null;
	images[i].className="current";
}

right.onclick=function(){
	clearInterval(timer);
	var _i=i;
	i= i>=len ?0:i+1;
	images[_i].className=null;
	images[i].className="current";
}

//主题产品部分
var data3=[
	{
		href:"#",
		bgUrl:"images/pic1.jpg",
		title:"豪车不止BBA",
		smallTitle:"德系三驾马车，是时候退位让贤啦",
		picUrl:"images/small1.png"
	},
	{	
		href:"#",
		bgUrl:"images/pic2.jpg",
		title:"百年大厂杰作",
		smallTitle:"时间在流逝，品质永流传！",
		picUrl:"images/small2.png"
	},
	{
		href:"#",
		bgUrl:"images/pic3.jpg",
		title:"便宜才是王道",
		smallTitle:"谁说便宜没好车?",
		picUrl:"images/small3.png"
	},
	{	
		href:"#",
		bgUrl:"images/pic4.jpg",
		title:"驾校毕业生",
		smallTitle:"那些年，我们练过的普桑和捷达",
		picUrl:"images/small1.png"
	},
	{
		href:"#",
		bgUrl:"images/pic5.jpg",
		title:"明星也抠门",
		smallTitle:"明星都买二手车了你还等什么",
		picUrl:"images/small5.png"
	},
	{
		href:"#",
		bgUrl:"images/pic6.jpg",
		title:"全能的大玩具",
		smallTitle:"越野帮手、四驱利器",
		picUrl:"images/small6.png"
	}
];


function createProduct(option){
	var a=document.createElement("a"),
	h2=document.createElement("h2"),
	p=document.createElement("p"),
	img=document.createElement("img");
	a.className="box";
	a.style.backgroundImage="url("+option.bgUrl+")";
	a.href=option.href;
	h2.innerHTML=option.title;
	p.innerHTML=option.smallTitle;
	img.src=option.picUrl;
	a.appendChild(h2);
	a.appendChild(p);
	a.appendChild(img);
	return a;
}

var fragment3=document.createDocumentFragment();
data3.forEach(function(item){
	fragment3.appendChild(createProduct(item));

});
document.getElementById("cars").appendChild(fragment3);


//底部其他产品介绍
var data4=[
	{
		bgUrl:"images/icon1.png",
		name:"弹个车",
		range:"面向消费者",
		special:"基于消费者个人信用提供超低首付、超长分期，灵活智选的汽车融资租赁个性化解决方案",
		support:"支持 IOS / Android"
	},
	{
		bgUrl:"images/icon2.png",
		name:"大风车",
		range:"面向拥有展厅和销售团队的大车商",
		special:"评估管理、车辆管理、客户管理、经营数据......一应俱全",
		support:"支持 IOS / Android / PC 端"
	},
	{
		bgUrl:"images/icon3.png",
		name:"车牛",
		range:"面向经营二手车的中小车商",
		special:"收车、卖车、贷款、质保、估价......一步到位",
		support:"支持 IOS / Android"
	}
];


var fragment4=document.createDocumentFragment();
function createDetail(option){
	var box=document.createElement("div");
	box.className="box";
	box.innerHTML=["<div class=\"box\">","<div class=\"top\">","<img src=\"",option.bgUrl,"\" />","<div class=\"text\">","<h2>",option.name,"</h2>","<h4>",option.range,"</h4>","</div>","</div>","<p>",option.special,"</p>","<p>",option.support,"</p>","<a>查看更多</a>","</div>"].join("");	
	return box;
}

data4.forEach(function(item){
	fragment4.appendChild(createDetail(item));
});
document.getElementById("detail").appendChild(fragment4);
document.getElementById("detail").childNodes[1].classList.add("current");
document.getElementById("detail").childNodes[2].classList.add("current");

//底部实现
var data5=[
	{
		title:"导购大全",
		content:["城市大全","品牌大全","车系大全"]
	},
	{
		title:"购车指南",
		content:["如何挑选二手车","如何判断事故火烧水浸车","二手车指标说明"]
	},
	{
		title:"关于我们",
		content:["大搜车理念","车牛","大风车","大搜车手机版"]
	},
	{
		title:"联系我们",
		content:["联系电话"]
	}
];

var fragment5=document.createDocumentFragment();
function createBox(option){
	var box=document.createElement("div");
	box.className="box";
	var h2=document.createElement("h2");
	h2.innerHTML=option.title;
	box.appendChild(h2);
	option.content.forEach(function(_item){
		var p=document.createElement("p");
		p.innerHTML="<a href=\"#\">"+_item+"</a>";
		box.appendChild(p);
	});
	return box;
}

data5.forEach(function(item){
	fragment5.appendChild(createBox(item));
});

var chat=document.createElement("div");
chat.className="chat";
chat.innerHTML=["<img src=\"images/weixin.jpg\">","<p>扫一扫，关注微信公众号</p>"].join("");
fragment5.appendChild(chat);
document.getElementById("footer_inner").appendChild(fragment5);

var data6=[ "厦门","北京","南宁", "杭州","郑州","漳州","长沙","合肥","西安", "上海" ,"宁波" ,"温州" ,"太原" ,"青岛", "南京" ,"武汉", "沈阳", "成都", "石家庄" ,"重庆" ,"台州" ,"大连" ,"福州", "佛山", "临沂" ,"济南", "苏州" ,"贵阳" ,"泉州", "南昌" ,"天津", "东莞", "深圳" ,"昆明", "广州", "包头" ,"鞍山" ,"淮南" ,"长春", "金华" ,"乌鲁木齐", "无锡", "柳州", "潍坊" ,"荆州", "保定" ,"枣庄" ,"洛阳" ,"常州", "沧州","更多城市"];



var fragment6=document.createDocumentFragment();
var hot=document.createElement("div");
var span=document.createElement("span");
span.innerHTML="热门城市:";
hot.appendChild(span);
hot.className="hot";
function createHot(option){
	var a=document.createElement("a");
	a.href="#";
	a.innerHTML=option;
	return a;
}
data6.forEach(function(item){
	fragment6.appendChild(createHot(item));
	hot.appendChild(fragment6);
});
document.getElementById("footer_inner").appendChild(hot);

var data7=["车险信息网","中山二手车","车易拍","海南二手车","汽车点评网","杭州二手车","2014汽车报价","北京汽车网","中国二手车网","汽车配件","二手车评估","湖北专用车","中国汽车网","大浙汽车","搜狐二手车","车300估价","58二手车","二手车评估"
];
var fragment7=document.createDocumentFragment();
var message=document.createElement("div");
message.className="message";

