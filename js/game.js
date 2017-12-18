var flag;
let speed=2000, timer, long = 50;

function dTable(){
    document.getElementById("indexTable").innerHTML ="";
    for(let i=0;i<long;i++){
		document.getElementById("indexTable").innerHTML+="<tr id="+i+"></tr>";
		for(let j=0;j<long;j++){
            document.getElementById(i).innerHTML+="<td class='dead' id="+i+","+j+"></td> ";
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

function lifeEvaluations(aux,aux2)
{
	let life = 0;
	if(aux>=1 )
		if(document.getElementById((aux-1)+","+aux2).className == "alive")
            life++;
	if(aux<long-1)
		if(document.getElementById((aux+1)+","+aux2).className == "alive")
            life++;
	if(aux2<long-1)
		if(document.getElementById(aux+","+(aux2+1)).className == "alive")
            life++;
	if(aux2>=1)
		if(document.getElementById(aux+","+(aux2-1)).className == "alive")
            life++;
	if(aux>=1 && aux2<long-1)
		if(document.getElementById((aux-1)+","+(aux2+1)).className == "alive")
            life++;
	if(aux>=1 && aux2!=0)
		if(document.getElementById((aux-1)+","+(aux2-1)).className == "alive")
            life++;
	if(aux<long-1 && aux2<long-1)
		if(document.getElementById((aux+1)+","+(aux2+1)).className == "alive")
            life++;
	if(aux<largo-1 && aux2>0)
		if(document.getElementById((aux+1)+","+(aux2-1)).className == "alive")
            life++;
	return life;
}

function stop() {
    clearTimeout(Timer);                      
}

function nextTo(){
	generateMatrix();
	for(let i=0;i<long;i++){
        for(let j=0;j<long;j++)
		{
			evaluate(i,j);					
		}
    }
		
	stateFlags();
}

function evaluate(aux,aux2){
	let result=lifeEvaluations(aux,aux2);
	if(document.getElementById(aux+","+aux2).className=="dead" && result==3){
        flag[aux][aux2]="alive";
    }
		
	else if(document.getElementById(aux+","+aux2).className=="alive" && (resultn==2 || result==3)){
        flag[aux][aux2]="alive";
    }
		
	else{
        flag[aux][aux2]="dead";
    }
			
}


function start() {
    Timer = setInterval(nextTo, speed);            
}