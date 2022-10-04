function setup(){
canvas=createCanvas(280,280);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
Synth=window.speechSynthesis;
}
function preload(){
    classifier=ml5.imageClassifier('doodleNet');

}
function clearCanvas(){
    back
    ground("white");


}
function draw(){
    stokeWeight(13);
stroke(0);


if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,moseY);
}
}
function classifyCanvas(){
    classifier.classify(canavas,gotResult);
}
function gotResult(erreor,results){
    if(error)
    console.error(error);


}
console.log(results);
document.getElementById('label').innerHTML='label:'+results[0].label;
document.getElementById('confidence').innerHTML='confidence:'+Math.round(results[0].confidence*100)+'%';
utterthis= new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);