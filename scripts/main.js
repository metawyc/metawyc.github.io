let myImage=document.querySelector('img');
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/firefox1.jpg'){
        myImage.setAttribute('src','images/firefox2.jpg');
    }else{
        myImage.setAttribute('src','images/firefox1.jpg');
    }
}

let myButton=document.querySelector('button');
let myHeading=document.querySelector('h1');
function setUsertName(){
    let myName=prompt("请输入你的名字：");
    if(!myName){
        setUsertName()
    }else{
        localStorage.setItem('name',myName);  //调用API，把数据存储在浏览器中供后续存取
        myHeading.textContent='Mozilla酷毙了'+myName;
    }
}

myButton.onclick=function(){
    setUsertName();
}