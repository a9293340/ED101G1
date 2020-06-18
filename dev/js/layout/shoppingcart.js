let orderCart = []; 
let otherMenu =[];
let setdoMenu = [];
let singleNum = 0;


var singleorderlist = new Vue({   //購物車 vue
    el:'#list',  
    data:{
        finalsinglelist:[],
        finalsetdolist:[],
        finalorderlist:[]
    },
})


// function setdoCart(){      //套餐的加入購物車
//     let A = this.dataset.id;
//     console.log(A);
//     for(let i = 0;i<setdo.length;i++){
//         if(setdo[i].id == Number(A)){
//             setdoMany =  document.getElementById(`setdocount${A}`).innerText;
//             setdoId = setdo[i].id;
//             setdoName = setdo[i].name;
//             setdoPrice = setdo[i].price;
//             setdoImg = setdo[i].img;
//             if(setdoMany>0){
//             // localStorage.setItem('setdoMany',setdoMany);
//             // localStorage.setItem('setdoid',setdoid);
//             // localStorage.setItem('setdoname',setdoname);
//             // localStorage.setItem('setdoprice',setdoprice);
//             // localStorage.setItem('setdoimg',setdoimg);
//                 setdoList=
//                 {
//                     setdoNum:`${setdoNum}`,
//                     setdoMany:`${setdoMany}`,
//                     setdoId:`${setdoId}`,
//                     setdoName:`${setdoName}`,
//                     setdoPrice:`${setdoPrice}`,
//                     setdoImg:`${setdoImg}`,
//                 }

//                 // if(JSON.parse(localStorage.getItem('setdoMenuList'))){
//                 //     console.log(JSON.parse(localStorage.getItem('setdoMenuList')));
//                 // }
//                 // for(var i = 0 ;i<setdoMenu.length;i++){
//                 // if(JSON.parse(localStorage.getItem('setdoMenuList')[i].setdoid)==setdoList.setdoid){
//                 //     JSON.parse(localStorage.getItem('setdoMenuList')[i].setdoMany)+1;
//                 // }
//                 // }
//                 var samename = 0;
//                 if(setdoMenu.length>0){
//                      for(var c =0  ;c < setdoMenu.length; c++){
//                             if(setdoMenu[c].setdoName == setdoList.setdoName){
//                                 samename=1;
//                             setdoMenu[c].setdoMany = parseInt(setdoMenu[c].setdoMany)+parseInt(setdoList.setdoMany);
//                             } 
//                      }
//                     if(samename!=1){
//                         setdoMenu.push(setdoList);
//                         // window.location.reload();
//                     }
//                 }
//                 else
//                 {
//                     // setdoNum++;
//                     // localStorage.setItem('setdoNum',setdoNum);
//                     setdoMenu.push(setdoList);
//                     // window.location.reload();
//                 }
//                 // setdoMenu.push(setdoList);
//                 // console.log(setdoMenu[]);
//                 var setdoMenuList =JSON.stringify(setdoMenu);
//                 localStorage.setItem('setdoMenuList',setdoMenuList);

//                 // var finalsetdolist = JSON.parse(localStorage.getItem('setdoMenuList'));
//                 // singleorderlist.$data.finalsetdolist = finalsetdolist;
//                 // console.log(singleorderlist.$data.finalsetdolist);
//                 // window.location.reload();
//                 setsetdocart()
//             }else{
//                 alert("還沒選數量喔");
//             }
//         }
//     }
// }



function setcart(){          //一開始自選購物車重新渲染
    var finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));
    singleorderlist.$data.finalsinglelist = finalsinglelist;
    orderCart=finalsinglelist; //整個的重點
    singleNum=localStorage.getItem('singleNum');
    console.log(singleorderlist.$data.finalsinglelist);

    setTimeout(function(){
        for(var h=0; h<singleNum; h++){
          if(document.getElementById(`b${h}`)){
      document.getElementById(`b${h}`).addEventListener('click',deletesinglecart);
          }else{
              console.log("not yet");
          }
          }  
      },1000);
   
}

if(localStorage.getItem('singleOrder')){ //重點2
    setcart();
    }
//...................................
function setsetdocart(){       //一開始套餐購物車重新渲染
    var finalsetdolist = JSON.parse(localStorage.getItem('setdoMenuList'));
    singleorderlist.$data.finalsetdolist = finalsetdolist;
    setdoMenu=finalsetdolist;
    console.log(singleorderlist.$data.finalsetdolist);

    setTimeout(function(){
    for(var i=0; i<7; i++){
                if(document.getElementById(`setdodelete${i}`)){
                    document.getElementById(`setdodelete${i}`).addEventListener('click',deletesetdocart);
                }
            }
    },1000);        
}
if(localStorage.getItem('setdoMenuList')){
    setsetdocart();
}

function setordercart(){          //一開始其他購物車重新渲染
    var finalorderlist = JSON.parse(localStorage.getItem('otherOrder'));
    singleorderlist.$data.finalorderlist = finalorderlist;
    otherMenu=finalorderlist;
    
    setTimeout(function(){
        for(var i=1000; i<1010; i++){
                    if(document.getElementById(`orderdelete${i}`)){
                        document.getElementById(`orderdelete${i}`).addEventListener('click',deleteordercart);
                    }
                }
        },1000);   

}
if(localStorage.getItem('otherOrder')){
    setordercart();
}




function deletesinglecart(){       //刪除購物車
    let A = this.dataset.num;
    console.log(A);
    var finalsinglelist = JSON.parse(localStorage.getItem('singleOrder'));
    for(let i=0; i<finalsinglelist.length; i++){

        if(finalsinglelist[i].sNum ==  Number(A)){
            finalsinglelist.splice(i,1);
            orderCart.splice(i,1);
        }
    }
  
    console.log(finalsinglelist);
    singleorderlist.$data.finalsinglelist = finalsinglelist;
    localStorage.setItem('singleOrder', JSON.stringify(finalsinglelist));  

}

function deletesetdocart(){
    let A = this.dataset.num;
    console.log(A);
    var finalsetdolist = JSON.parse(localStorage.getItem('setdoMenuList'));
    for(let i=0; i<finalsetdolist.length; i++){

        if(finalsetdolist[i].setdoId ==  Number(A)){
            finalsetdolist.splice(i,1);
            setdoMenu.splice(i,1);
        }
    }
    singleorderlist.$data.finalsetdolist = finalsetdolist;
    localStorage.setItem('setdoMenuList', JSON.stringify(finalsetdolist)); 
}


function deleteordercart(){
    let A = this.dataset.num;
    console.log(A);
    var finalorderlist = JSON.parse(localStorage.getItem('otherOrder'));
    for(let i=0; i<finalorderlist.length; i++){

        if(finalorderlist[i].otherId ==  Number(A)){
            finalorderlist.splice(i,1);
            otherMenu.splice(i,1);
        }
    }
    singleorderlist.$data.finalorderlist = finalorderlist;
    localStorage.setItem('otherOrder', JSON.stringify(finalorderlist)); 
}









