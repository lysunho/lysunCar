//footer部分js
var footerData=[
	{
		title:"导购大全",
		option:["城市大全","品牌大全","车系大全"]
	},
	{
		title:"购车指南",
		option:["如何挑选二手车","如何判断事故火烧水浸车","二手车指标说明"]
	},
	{
		title:"关于我们",
		option:["大搜车理念","牛车","大风车","大搜车手机版"]
	},
	{
		title:"联系我们",
		option:["联系电话"]
	}
];
function createBox(origin){
	var div=document.createElement("div"),
		title=document.createElement("h3"),
		ul=document.createElement("ul");
		div.className="box";
		title.innerHTML=origin.title;
		origin.option.forEach(function(item){
			var li=document.createElement("li");
			var anchor=document.createElement("a");
			anchor.innerHTML=item;
			li.appendChild(anchor);
			ul.appendChild(li);
		});
	div.appendChild(title);
	div.appendChild(ul);
	return div;
}
var footerFragment=document.createDocumentFragment();
footerData.forEach(function(item){
	footerFragment.appendChild(createBox(item));
});
var weixin=document.createElement("div");
weixin.className="weixin";
weixin.innerHTML=["<img src=\"./images/weixin.jpg\">","<span>扫一扫，关注微信公众号</span>"].join("");
footerFragment.appendChild(weixin);
document.getElementById("top").appendChild(footerFragment);

var hotData=["厦门","北京","南宁","杭州","郑州","漳州","长沙","合肥","西安","上海","宁波","温州","太原","青岛","南京","武汉","沈阳","成都","石家庄","重庆","台州","大连","福州","佛山","临沂","济南","苏州","贵阳","泉州","南昌","天津","东莞","深圳","昆明","广州","包头","鞍山","淮南","长春","金华","乌鲁木齐","无锡","柳州","潍坊","荆州","保定","枣庄","洛阳","常州"," 沧州","更多城市"];
var hotFragment=document.createDocumentFragment();
var hot=document.createElement("div"),
	span=document.createElement("span");
hot.className="hot";
span.innerHTML="热门城市： ";
hotFragment.appendChild(span);
function createAnchor(option){
	var anchor=document.createElement("a");
	anchor.innerHTML=option;
	return anchor;
}
hotData.forEach(function(item){
	hotFragment.appendChild(createAnchor(item));
});
hot.appendChild(hotFragment);
document.getElementById("middle").appendChild(hot);