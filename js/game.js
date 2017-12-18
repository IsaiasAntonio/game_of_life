var flag;
let speed=2000, timer, long = 50;

function dTable(){
    document.getElementById("indexTable").innerHTML ="";
    for(let i=0;i<long;i++){
		document.getElementById("tablacont").innerHTML+="<tr id="+i+"></tr>";
		for(let j=0;j<long;j++){
            document.getElementById(i).innerHTML+="<td class='muerta' id="+i+","+j+"></td> ";
        }
			
	}
}

function generateMatrix()
{
	state=new Array(long);
	for(a=0;a<long;a++){
        state[a]=new Array(long);
    }
		
}	

function stateFlags(){
	for(let i=0;i<long;i++){
        for(let j=0;j<long;j++){
            document.getElementById(i+","+j).className=estado[i][j];
        }    
    }			
}

function stop() {
    clearTimeout(Timer);                      
}

