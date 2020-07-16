const progressBar = function(idBox,boxArv,colorBox){
    boxArv.forEach((el,i)=>{
        new ProgressBar.Circle(`#${idBox[i]}`, {
            color: colorBox[i],
            strokeWidth: 8,
            trailWidth: 8,
            duration: 1500,
            text: {
                value: '0%'
            },
            step: function(state, bar) {
              bar.setText((bar.value() * 100).toFixed(0) + "%");
            }
        }).animate(el);
    })

}

export default progressBar;