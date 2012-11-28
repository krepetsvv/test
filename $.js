var help ={
init : function ()
{
	$('[info]').each(function(){
		this.onmouseover=help.start;
		this.onmouseout=help.del;
	});
},
start : function (event)
{
	help.x = event.clientX;
    help.y = event.clientY;
	help.infoText = $(this).attr('infoText');
	//alert(this);
	help.startId = setTimeout(help.create, 1000);
},
create : function ()
{
	var anim = document.createElement('span');
	var div = document.createElement('div');
	var width = help.width||100;
	anim.style.position="absolute";
	anim.style.left= help.x + "px";
	anim.style.top= help.y + "px";
	anim.id="helpSpan";
	anim.style.backgroundColor=help.backgroundColor||"black";
	div.style.color=help.textColor||"rgb(255,255,255)";
	div.style.padding="0px 0px 0px 0px";
	div.style.fontSize="16px";
	div.style.fontFamily="Georgia";
	anim.style.padding="5px 5px 5px 5px";
	div.style.width=width + "px";
	div.style.borderRadius="5%";
	anim.style.overflow="hidden";
	anim.style.width="10px";
	div.innerHTML=help.infoText;
	anim.appendChild(div);
	document.body.appendChild(anim);
	var step = (width -10)/60;
	var currentWidth = 10;
	help.id = setInterval(function(){
	currentWidth += step; 
	
	if(currentWidth>=width)
	{
		document.getElementById('helpSpan').style.width = width + "px";
		clearInterval(help.id);
	}
	else
	{
		document.getElementById('helpSpan').style.width = currentWidth + "px";
	}
}, 5)
},
del : function ()
{
	clearTimeout(help.startId);
	element = document.getElementById("helpSpan");
	if (element)
	{
	element.parentNode.removeChild(element);
	clearInterval(help.id);
	}
}
}