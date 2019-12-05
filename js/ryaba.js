
const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  // взять данные по dataUrl, вытащить их и передать в handleData
$.getJSON(dataURL, handleData);
$("form").hide();
$("#button-fetch").hide();


 
}

function handleData(data) {
	
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  let resultText = "";
  let var1 = $("input[name=var1]")[0].value; 
  let var2 = $("input[name=var2]")[0].value;
  
  let var3 = $("input[name=var3]")[0].value;
  let var4 = $("input[name=var4]")[0].value;
  let var5 = $("input[name=var5]")[0].value;
  let var6 = $("input[name=var6]")[0].value;
  let speach = $("input[name=speach]")[0].value;
  

  data["text"].forEach(function(item, index) {
  	item = item.replace ("{var1}", var1);
  	item = item.replace ("{var2}", var2);
  	item = item.replace ("{var3}", var3);
  	item = item.replace ("{var4}", var4);
  	item = item.replace ("{var5}", var5);
  	item = item.replace ("{var6}", var6);
  	item = item.replace ("{speach}", speach);

  	resultText = resultText + item + "<BR>";
  });
     
	$("#result").html(resultText);
	 result.style.cssText = `border-style: solid;
	 border-color: black;
	 border-width: 1px;
	 padding: 15px;`
	 var newButton = document.createElement("a");
        
        newButton.classname = "closebutton";
        newButton.style.cssText = `position: absolute;
         top: 60px;
         left: 825px;
         text-align: center;
         vertical-align: middle;
         background: #f2f6f8;
         border: 1 solid;
         width: 35px;
         height: 35px;
         font-size: 25px;
         font-style: bold;
         color: red;
         border-radius: 30px;`

		
        newButton.innerHTML = "X";
        newButton.href = '';
        newButton.title = 'Закрыть';
        document.body.append(newButton);
  }


function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
