/**
 * jquery.area.js
 * 移动端省市区三级联动选择插件
 * author: 锐不可挡
 * date: 2016-06-17
**/

/*定义三级省市区数据*/
var province = 	["全广西","南宁市", "柳州市", "桂林市", "梧州市", "北海市", "崇左市", "来宾市", "贺州市", "玉林市", "百色市", "河池市", "钦州市", "防城港市", "贵港市"];
var city = 		[
						[""],
						["青秀区", "兴宁区", "西乡塘区", "江南区", "良庆区", "邕宁区", "武鸣区", "隆安县", "马山县", "上林县", "宾阳县", "横县"],
						["柳北区", "柳南区", "城中区", "鱼峰区", "柳城县", "柳江县", "鹿寨县", "融安县", "融水苗族自治县", "三江侗族自治县"],
						["象山区", "秀峰区", "叠彩区", "七星区", "雁山区", "临桂区", "阳朔县", "灵川县", "全州县", "平乐县", "兴安县", "灌阳县", "荔浦县", "资源县", "永福县", "龙胜各族自治县", "恭城瑶族自治县"],
						["长洲区", "万秀区", "龙圩区", "岑溪市", "苍梧县", "蒙山县", "藤县"],
						["海城区", "银海区", "铁山港区", "合浦县"],
						["江州区", "凭祥市", "扶绥县", "宁明县", "龙州县", "大新县", "天等县"],
						["兴宾区", "合山市", "象州县", "武宣县", "忻城县", "金秀瑶族自治县"],
						["八步区", "昭平县", "钟山县", "富川瑶族自治县"],
						["玉州区", "福绵区", "北流市", "容县", "陆川县", "博白县", "兴业县"],
						["右江区", "靖西市", "田阳县", "田东县", "平果县", "德保县", "那坡县", "凌云县", "乐业县", "田林县", "西林县", "隆林各族自治县"],
						["金城江区", "宜州市", "南丹县", "天峨县", "凤山县", "东兰县", "巴马瑶族自治县", "都安瑶族自治县", "大化瑶族自治县", "罗城仫佬族自治县", "环江毛南族自治县"],
						["钦南区", "钦北区", "灵山县", "浦北县"],
						["港口区", "防城区", "东兴市", "上思县"],
						["港北区", "港南区", "覃塘区", "桂平市", "平南县"]
				];

var expressArea, areaCont, areaList = $("#areaList"), areaTop = areaList.offset().top;

/*初始化省份*/
function intProvince() {
	areaCont = "";
	for (var i=0; i<province.length; i++) {
		areaCont += '<li onClick="selectP(' + i + ');">' + province[i] + '</li>';
	}
	areaList.html(areaCont);
	$("#areaBox").scrollTop(0);
	$("#backUp").removeAttr("onClick").hide();
}
intProvince();

/*选择省份*/
function selectP(p) {
	areaCont = "";
	areaList.html("");
	for (var j=0; j<city[p].length; j++) {
		areaCont += '<li onClick="selectC(' + p + ',' + j + ');">' + city[p][j] + '</li>';
	}
	areaList.html(areaCont);
	$("#areaBox").scrollTop(0);
	expressArea = province[p] + " > ";
	$("#backUp").attr("onClick", "intProvince();").show();
	if (province[p] == "全广西") {
		expressArea = province[p] + "";
		$("#expressArea p").html(expressArea);
		clockArea();
	}
}

/*选择城市*/
function selectC(p,c) {
	clockArea();
	expressArea += city[p][c];
	$("#expressArea p").html(expressArea);
}

/*关闭省市区选项*/
function clockArea() {
	$("#areaMask").fadeOut();
	$("#areaLayer").animate({"bottom": "-100%"});
	intProvince();
}

$(function() {
	/*打开省市区选项*/
	$("#expressArea").click(function() {
		$("#areaMask").fadeIn();
		$("#areaLayer").animate({"bottom": 0});
	});
	/*关闭省市区选项*/
	$("#areaMask, #closeArea").click(function() {
		clockArea();
	});
});