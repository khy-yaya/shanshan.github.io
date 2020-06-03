let photosDom = document.getElementById('photos');
//获取图片数组
let images = photosDom.getElementsByTagName('img');	
//获取图片数量
let len = images.length;		
//计算每张图片按Y轴旋转的角度 
let deg = Math.floor(360 / len); 					
for(let i = 0; i < len;i++){
    images[i].style = 'transform : rotateY(' + deg * i + 'deg) translateZ(350px)'; //deg前面不要加空格
    if(i == 1){
        images[i].style = 'transform : rotateY(' + deg * i + 'deg) translateZ(350px)';
    }
}
let x = 0;
setInterval(function(){
    photosDom.style.transform = "rotateX(-10deg) rotateY("+ (x++) * 0.2 +"deg)";
},10);