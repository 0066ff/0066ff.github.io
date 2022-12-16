function draw() {
  var canvas = document.getElementById('families');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // Get the DPR and size of the canvas
    var dpr = window.devicePixelRatio;
    var rect = canvas.getBoundingClientRect();
    // Set the "actual" size of the canvas
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    // Scale the context to ensure correct drawing operations
    ctx.scale(dpr, dpr);
    // Set the "drawn" size of the canvas
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    // 色
    ctx.fillStyle = "#00060f";
    ctx.strokeStyle = "#00060f";
    // 枠
    ctx.strokeRect( 40, 10, 50, 40);
    ctx.strokeRect(160, 10, 50, 40);
    ctx.strokeRect(310, 10, 50, 40);
    ctx.strokeRect(430, 10, 50, 40);
    ctx.strokeRect( 10, 90, 50, 40);
    ctx.strokeRect( 70, 90, 50, 40);
    ctx.strokeRect(130, 90, 50, 40);
    ctx.strokeRect(190, 90, 50, 40);
    ctx.strokeRect(310, 90, 50, 40);
    ctx.strokeRect(430, 90, 50, 40);
    ctx.strokeRect(190,170, 50, 40);
    ctx.strokeRect(250,170, 50, 40);
    ctx.strokeRect(310,170, 50, 40);
    // 人名
    ctx.font = "16px Meiryo, 'Hiragino Sans', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("有里彩", 65, 30);
    ctx.fillText("功",  185, 30);
    ctx.fillText("光奈",335, 30);
    ctx.fillText("洋一",455, 30);
    ctx.fillText("道生", 35,110);
    ctx.fillText("流河", 95,110);
    ctx.fillText("大地",155,110);
    ctx.fillText("星加",215,110);
    ctx.fillText("一直",335,110);
    ctx.fillText("友衣",455,110);
    ctx.fillText("記歩",215,190);
    ctx.fillText("勇士",275,190);
    ctx.fillText("？？",335,190);
    // 年齢
    ctx.font = "12px Meiryo, 'Hiragino Sans', sans-serif";
    ctx.fillText("43歳", 65, 44);
    ctx.fillText("43歳",185, 44);
    ctx.fillText("48歳",335, 44);
    ctx.fillText("50歳",455, 44);
    ctx.fillText("16歳", 35,124);
    ctx.fillText("18歳", 95,124);
    ctx.fillText("21歳",155,124);
    ctx.fillText("23歳",215,124);
    ctx.fillText("23歳",335,124);     
    ctx.fillText("10歳",455,124);
    ctx.fillText( "3歳",215,204);
    ctx.fillText( "1歳",275,204);
    // 二重線
    ctx.beginPath(); ctx.moveTo( 90, 27); ctx.lineTo(160, 27); ctx.stroke();
    ctx.beginPath(); ctx.moveTo( 90, 33); ctx.lineTo(160, 33); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(360, 27); ctx.lineTo(430, 27); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(360, 33); ctx.lineTo(430, 33); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(240,107); ctx.lineTo(310,107); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(240,113); ctx.lineTo(310,113); ctx.stroke();
    // 縦線親側
    ctx.beginPath(); ctx.moveTo(125, 33); ctx.lineTo(125, 65); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(395, 33); ctx.lineTo(395, 65); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(275,113); ctx.lineTo(275,145); ctx.stroke();
    // 横線
    ctx.beginPath(); ctx.moveTo( 35, 65); ctx.lineTo(215, 65); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(335, 65); ctx.lineTo(455, 65); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(215,145); ctx.lineTo(335,145); ctx.stroke();
    // 縦線子側
    ctx.beginPath(); ctx.moveTo( 35, 65); ctx.lineTo( 35, 90); ctx.stroke();
    ctx.beginPath(); ctx.moveTo( 95, 65); ctx.lineTo( 95, 90); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(155, 65); ctx.lineTo(155, 90); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(215, 65); ctx.lineTo(215, 90); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(335, 65); ctx.lineTo(335, 90); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(455, 65); ctx.lineTo(455, 90); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(215,145); ctx.lineTo(215,170); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(275,145); ctx.lineTo(275,170); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(335,145); ctx.lineTo(335,170); ctx.stroke();
  }
}
