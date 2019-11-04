var plus1=document.getElementById("plus123");
var plus2=document.getElementById("plus2");
var plus3=document.getElementById("plus3");
var plus4=document.getElementById("plus4");
var plus5=document.getElementById("plus5");
var plus6=document.getElementById("plus6");
var plus7=document.getElementById("plus7");
var plus8=document.getElementById("plus8");
var plus9=document.getElementById("plus9");
var plus10=document.getElementById("plus10");
var plus11=document.getElementById("plus11");
var plus12=document.getElementById("plus12");
var m1=document.getElementById("m1");
var m2=document.getElementById("m2");
var m3=document.getElementById("m3");
var m4=document.getElementById("m4");
var m5=document.getElementById("m5");
var m6=document.getElementById("m6");
var m7=document.getElementById("m7");
var m8=document.getElementById("m8");
var m9=document.getElementById("m9");
var m10=document.getElementById("m10");
var m11=document.getElementById("m11");
var m12=document.getElementById("m12");
var count1 =document.getElementById("count1");
var count2=document.getElementById("count2");
var count3=document.getElementById("count3");
var count4=document.getElementById("count4");
var count5=document.getElementById("count5");
var count6=document.getElementById("count6");
var count7=document.getElementById("count7");
var count8=document.getElementById("count8");
var count9=document.getElementById("count9");
var count10=document.getElementById("count10");
var count11=document.getElementById("count11");
var count12=document.getElementById("count12");
var total1 =document.getElementById("total1");
var total2=document.getElementById("total2");
var total3=document.getElementById("total3");
var total4=document.getElementById("total4");
var total5=document.getElementById("total5");
var total6=document.getElementById("total6");
var total7=document.getElementById("total7");
var total8=document.getElementById("total8");
var total9=document.getElementById("total9");
var total10=document.getElementById("total10");
var total11=document.getElementById("total11");
var total12=document.getElementById("total12");
var money= document.getElementById("money");


var prices =[3,4,14,60,8000,70000,200000,500000,10000000,1200000000,1300000000,4239000000];

function removedots(val)
{
	var res="";
	for (var i =0; val.length> i; i++) {
		if (val[i]!=="."){
			res=res+val[i];
		}
	}
	return res;
}
function adddots (val){
	var res="";
	i=0;
	for (var j = val.length; 0<=j; j--) {
		if ((j%3===1)&&(val.length-i>1)){
			res=res+val[i]+".";

		} else if (j>0){
			res=res+val[i];
		}
	i++;
	}
	return res;

}

function add(price,count,total){
	if (parseInt(removedots(money.innerHTML))>(price-1)){
	count.value=parseInt(count.value)+1;
	//total.value=parseInt(total.value)+price;
    var valeur=parseInt(removedots(total.value));
    var result=valeur+price;
    total.value=adddots(String(result));


	//money.innerHTML=parseInt(money.innerHTML)-price;
	v=parseInt(removedots(money.innerHTML));
    re=v-price;
    money.innerHTML=adddots(String(re));


	}
}
function deduct(price,count,total){
	if (parseInt(count.value)>0){
	count.value=parseInt(count.value)-1;	
	//total.value=parseInt(total.value)-price;
	var valeur=parseInt(removedots(total.value));
    var result=valeur-price;
    total.value=adddots(String(result));
	//money.innerHTML=parseInt(money.innerHTML)+price;
	v=parseInt(removedots(money.innerHTML));
    re=v+price;
    money.innerHTML=adddots(String(re));
	}
	
}
console.log(String(parseInt(removedots(total1.value))));
b =removedots("25663564");
console.log(parseInt(b));
c= adddots ("1234568722");
console.log(c);
console.log(removedots(c));
plus1.addEventListener("click",function(){ add(prices[0], count1,total1); });
m1.addEventListener("click",function(){ deduct(prices[0], count1,total1); });

plus2.addEventListener("click",function(){ add(prices[1], count2,total2); });
m2.addEventListener("click",function(){ deduct(prices[1], count2,total2); });

plus3.addEventListener("click",function(){ add(prices[2], count3,total3); });
m3.addEventListener("click",function(){ deduct(prices[2], count3,total3); });

plus4.addEventListener("click",function(){ add(prices[3], count4,total4); });
m4.addEventListener("click",function(){ deduct(prices[3], count4,total4); });

plus5.addEventListener("click",function(){ add(prices[4], count5,total5); });
m5.addEventListener("click",function(){ deduct(prices[4], count5,total5); });

plus6.addEventListener("click",function(){ add(prices[5], count6,total6); });
m6.addEventListener("click",function(){ deduct(prices[5], count6,total6); });

plus7.addEventListener("click",function(){ add(prices[6], count7,total7); });
m7.addEventListener("click",function(){ deduct(prices[6], count7,total7); });

plus8.addEventListener("click",function(){ add(prices[7], count8,total8); });
m8.addEventListener("click",function(){ deduct(prices[7], count8,total8); });

plus9.addEventListener("click",function(){ add(prices[8], count9,total9); });
m9.addEventListener("click",function(){ deduct(prices[8], count9,total9); });

plus10.addEventListener("click",function(){ add(prices[9], count10,total10); });
m10.addEventListener("click",function(){ deduct(prices[9], count10,total10); });

plus11.addEventListener("click",function(){ add(prices[10], count11,total11); });
m11.addEventListener("click",function(){ deduct(prices[10], count11,total11); });

plus12.addEventListener("click",function(){ add(prices[11], count12,total12); });
m12.addEventListener("click",function(){ deduct(prices[11], count12,total12); });