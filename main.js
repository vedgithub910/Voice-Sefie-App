var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();


} 
recognition.onresult=function run(event){
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
if(content=="take my selfie")
{speak();}  
}
function speak(){
apia=window.speechSynthesis;
bolo="Taking Your Selfie in 5 Seconds";
kaise=new SpeechSynthesisUtterance(bolo);
apia.speak(kaise);
Webcam.attach(cam)
setTimeout(function(){
takepic();
save();
},5000
);
}
Webcam.set({
width:360,height:360,image_format:'png',png_quality:90
});
cam=document.getElementById("camera");
function takepic(){
Webcam. snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="myimg" src="'+data_uri+'">';
}
);
}
function save(){
l1=document.getElementById("link");
i1=document.getElementById("myimg").src;
l1.href=i1;
l1.click()
}