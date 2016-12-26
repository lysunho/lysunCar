var brandData=[
	{
		firstLetter:"A",
		option:["阿尔法罗密欧","阿斯顿.马丁","奥迪","安凯客车"]
	},
	{
		firstLetter:"B",
		option:["宝骏","宝马","保时捷","北京汽车","北汽制造","奔驰","奔腾","本田","比亚迪","标致","别克","宾利","布加迪","巴博斯","宾仕盾","宝沃","北汽新能源","北汽威旺","北汽幻速"]
	},
	{
		firstLetter:"C",
		option:["昌河","长安","长城","成功汽车","长安商用"]
	},
	{
		firstLetter:"D",
		option:["大众","道奇","东风","东南","大宇","东风风光","大迪","大发","东风风度","东风风神","东风小康","DS","东风风行"]
	},
	{
		firstLetter:"F",
		option:["法拉利","菲亚特","丰田","福迪","福特","福田","富奇","菲斯克","福汽启腾"]
	},
	{
		firstLetter:"G",
		option:["GMC","广汽传祺","广汽吉奥","观致","光冈"]
	},
	{
		firstLetter:"H",
		option:["哈飞","海马","悍马","红旗","华普","华泰","黄海","华颂","海格","华凯","汉江","哈弗","恒天"]
	},
	{
		firstLetter:"J",
		option:["吉利汽车","Jeep","江淮","江铃","捷豹","金杯","金程","金龙","江铃集团轻汽","金旅","九龙"]
	},
	{
		firstLetter:"K",
		option:["开瑞","凯迪拉克","克莱斯勒","康迪","卡尔森","科尼塞克","凯翼","KTM","卡威"]
	},
	{
		firstLetter:"L",
		option:["兰博基尼","劳斯莱斯","雷诺","力帆","莲花汽车","林肯","铃木","陆风","路虎","猎豹汽车","罗孚","老爷车","理念","路特斯"]
	},
	{
		firstLetter:"M",
		option:["马自达","玛莎拉蒂","迈巴赫","MINI","美亚","迈凯伦","摩根"]
	},
	{
		firstLetter:"N",
		option:["纳智捷","尼奥普兰","南京金龙"]
	},
	{
		firstLetter:"O",
		option:["讴歌","欧宝","欧朗"]
	},
	{
		firstLetter:"P",
		option:["帕卡德"]
	},
	{
		firstLetter:"Q",
		option:["奇瑞","起亚","乔治*巴赫","启辰"]
	},
	{
		firstLetter:"R",
		option:["日产","荣威","瑞麟","如虎"]
	},
	{
		firstLetter:"S",
		option:["萨博","三菱","双环","斯巴鲁","斯柯达","smart","上汽大通","陕汽通家","赛麟","斯派朗","绅宝","世爵","思铭"]
	},
	{
		firstLetter:"T",
		option:["泰卡特","特斯拉","腾势"]
	},
	{
		firstLetter:"W",
		option:["威麟","威兹曼","沃尔沃","五菱汽车","五十铃"]
	},
	{
		firstLetter:"X",
		option:["西雅特","现代","雪佛兰","雪铁龙","新凯"]
	},
	{
		firstLetter:"Y",
		option:["一汽","依维柯","英菲尼迪","永源","野马汽车","云雀","英致"]
	},
	{
		firstLetter:"Z",
		option:["中华","中兴","众泰","中顺","中欧汽车","知豆"]
	}
];
function createBox(origin){
	var box=document.createElement("div"),
		pp=document.createElement("p"),
		ul=document.createElement("ul");
		box.className="box";
		pp.innerHTML=origin.firstLetter;
		box.appendChild(pp);
		origin.option.forEach(function(item){
			var li=document.createElement("li"),
			 	anchor=document.createElement("a");
			anchor.innerHTML=[origin.firstLetter," ",item].join("");
			li.appendChild(anchor);
			ul.appendChild(li);
		});
		box.appendChild(ul);
	return box;
}
var brandFragment=document.createDocumentFragment();
brandData.forEach(function(item){
	brandFragment.appendChild(createBox(item));
});
document.getElementById("main_inner").appendChild(brandFragment);