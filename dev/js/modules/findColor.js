// 隨物件數量產生相應規律的顏色
const findColor = function(length){
    let colors = ['rgba(255, 235, 59)','rgba(3, 169, 244)','#e88e3c','#e81760','#2bab51','rgb(202,104,209)'];
    let colorBox = []
    for(let i = 0 ; i < length ;i++){
        if( i % colors.length == 0){
            colorBox.push(colors[0]);
        }else if( i % colors.length == 1){
            colorBox.push(colors[1]);
        }else if( i % colors.length == 2){
            colorBox.push(colors[2]);
        }else if( i % colors.length == 3){
            colorBox.push(colors[3]);
        }else if( i % colors.length == 4){
            colorBox.push(colors[4]);
        }else if( i % colors.length == 5){
            colorBox.push(colors[5]);
        }
    }

    return colorBox;
}

export default findColor;