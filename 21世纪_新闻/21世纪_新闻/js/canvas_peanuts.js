
function can(canid,url,cantime,length,state){
  // canvasid 第一张图完整路径 速率 张数 类型
  var frame = 1;
  var canvas = document.getElementById(canid);
  canvas.width = 750;
  canvas.height = 1338;
  if (!canvas.getContext) {
    console.log("Canvas not supported. Please install a HTML5 compatible browser.");
    return;
  }
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = 'rgba(255, 255, 255, 0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var imgc = document.createElement('img');
  imgc.src = url.split('|')[0]+frame+url.split('|')[1];
  imgc.onload = loaded1();
  function loaded1() {
    if(canstop==0){
    setTimeout(update1, 1000 / cantime);}
  }
  //canvas控制
  function redraw1() {
    ctx.clearRect(0, 0, canvas.width , canvas.height );
    ctx.drawImage(imgc, 0, 0, canvas.width , canvas.height );
  }
  function update1() {
    if (frame <= length) {
      if(frame==length){
        if(state==1){
          frame=1;
        }else if(state==2){
          frame=1;
        }
      }
      redraw1();
      imgc.src = url.split('|')[0]+frame+url.split('|')[1];
      imgc.onload = loaded1();
      frame++;
      
    }
  }
}