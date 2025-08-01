// removed the comment around the "return false" statement
// I can't remember why I commented it in the first place :-(
function swap(){this.className="msieFix";}
function swapBack(){this.className="trigger";}
function toggle(){(this.parentNode.className=="trigger")?this.parentNode.className="msieFix":this.parentNode.className="trigger";return false;}
function reveal(){
this.parentNode.parentNode.parentNode.className="msieFix";
}
function cleanUp(){
	var zA;
	var LI = document.getElementsByTagName("li");
	var zLI= LI.length;
		for(var k=0;k<zLI;k++){
		if(LI[k]!=this.parentNode){
		LI[k].className="trigger";
		}
	}
}
function TJK_keyBoardDropDown(){
	var LI = document.getElementById('TJK_dropDownMenu').getElementsByTagName("li");
	var zLI= LI.length;
	if (document.getElementById){
		for(var k=0;k<zLI;k++){
			if(LI[k].id){
                LI[k].className="trigger";
                 if (LI[k].id == 'CF' || LI[k].id == 'GJ' || LI[k].id == 'KR' || LI[k].id == 'ST' || LI[k].id == 'UZ' || LI[k].id == 'SS') {
                    LI[k].firstChild.onclick=toggle;
                }
				LI[k].firstChild.onfocus=cleanUp;
 			}
			if(LI[k].className=="trigger"){
				LI[k].onmouseover=swap;
				LI[k].onmouseout=swapBack;
			}
			if(!LI[k].id){
				LI[k].firstChild.onfocus=reveal;
				LI[k].firstChild.onhover=swapBack;
			}
		}
	}
}
document.write('<style type="text/css" media="screen">@import "TJK_keyBoardDropDownModernBrowsersWithScriptSupport.css";</style>')