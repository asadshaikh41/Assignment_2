function submit(){
    let Sentence=document.getElementById("Sentence").value;
    let Letter=document.getElementById("letter").value;
    let index= Sentence.indexOf(Letter);


    if(Sentence.length==0){
    alert("please Enter sentence");
    return refresh()
    }

   if(Letter.length==0){
    alert("please enter letter")
    return refresh()
}

    if(index==-1){
        alert("the letter does not exist in the sentence")
        return refresh();
        
       }else{
        alert(Sentence.substring(index+1));
        return refresh();

    }  
 }
 refresh()

 function refresh(){
    let Sentence=document.getElementById("Sentence").value="";
    let Letter=document.getElementById("letter").value="";
 }
