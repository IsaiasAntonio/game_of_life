var flag;
let speed=2000, timer, long = 50;

function dTable(){
    document.getElementById("indexTable").innerHTML ="";
    for(let i=0;i<largo;i++){
		document.getElementById("tablacont").innerHTML+="<tr id="+i+"></tr>";
		for(let j=0;j<largo;j++){
            document.getElementById(i).innerHTML+="<td class='muerta' id="+i+","+j+"></td> ";
        }
			
	}
}