function stc(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/model.json",modelready);
    
}

function modelready(){
    classifier.classify(gotResults);
    
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        randomnumberr=Math.floor(Math.random()*255)+1;
        randomnumberg=Math.floor(Math.random()*255)+1;
        randomnumberb=Math.floor(Math.random()*255)+1;
        document.getElementById("rel").innerHTML="I can hear- "+results[0].label;
        document.getElementById("rec").innerHTML="Acuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("rec").style.color="rgb("+randomnumberr+","+randomnumberg+","+randomnumberb+")";
        document.getElementById("rel").style.color="rgb("+randomnumberr+","+randomnumberg+","+randomnumberb+")";
        img=document.getElementById("a1");
        img1=document.getElementById("a2");
        img2=document.getElementById("a3");
        img3=document.getElementById("a4");
        if(results[0].label=="clap"){
            img.src="aliens-01.gif";
            img.src="aliens-02.png";
            img.src="aliens-03.png";
           
        }else if(results[0].label=="backgroundnoise"){
            img.src="aliens-01.png";
            img.src="aliens-02.gif";
            img.src="aliens-03.png";
            
        }else if(results[0].label=="dog"){
            img.src="aliens-01.png";
            img.src="aliens-02.png";
            img.src="aliens-03.gif";
            
        }else if(results[0].label=="cat"){
            img.src="aliens-01.gif";
            img.src="aliens-02.png";
            img.src="aliens-03.png";
            
        }
    }
}