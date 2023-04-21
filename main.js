const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    var sum = 0;
function sumNumber(){ 
    
    for(i=0 ; i<numbers.length ; i+=1 ){
        sum += numbers[i];
    }
    return sum;
}

console.log(sumNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));
document.getElementById("sumt").innerHTML="sum"+"="+""+sum;
document.getElementById("numav").innerHTML="Average"+"="+""+sum / numbers.length ;


function ShowAndHide() {
    var x = document.getElementById('myP1');
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


function formvalidation(){
    var username1= document.getElementById("username1").value;
    var Email1= document.getElementById("Email1").value;
    var phone1= document.getElementById("phone1").value;
    var error= document.getElementById("error");
    var text="";

    if(username1.length<7){       
        text="Enter Valid Name";
        error.innerHTML=text;
        return false;
        }
        else if(Email1.indexOf("@") == -1 || Email1.length<5){           
            text="Enter Valid Email";
            error.innerHTML=text;
            return false;
        }
        else if(isNaN(phone1) || phone1.length != 11){
            text="Enter Valid phone";
            error.innerHTML=text;
            return false;
        }
        else{
            return true;
        }
}


function showtime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var second = date.getSeconds();

    if(hours>12){
        hours=hours-12;
    }

    hours = (hours<10) ? "0" + hours : hours;
    minutes = (minutes<10) ? "0" + minutes : minutes;
    second = (second<10) ? "0" + second : second;
    

    var time = hours + ":" + minutes + ":" + second;
    document.getElementById("clock").innerHTML= time;

    setTimeout(showtime,1000);
}

showtime();







