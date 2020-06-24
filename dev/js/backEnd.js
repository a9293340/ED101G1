window.addEventListener('load',gogoPower);

function gogoPower(){
    let collapseItem =document.getElementsByClassName('collapse-item');
    for(let i = 0; i < collapseItem.length; i++){
        collapseItem[i].addEventListener('click',bkChangePage);
    }

    let bkmemVM = new Vue({
        el:'#bkMemberBox',
        data:{
            members:[],
        },
        methods: {
            
        },
        computed: {
        },
        mounted() {
            $.getJSON("../dev/js/modules/memDataS.json").then((data)=>{
                this.members = data;
            })
        },
    })
}


function bkChangePage(e){
    e.preventDefault();
    let count = Number(this.dataset.count);
    let backEndBox =document.getElementsByClassName('backEndBox');
    for(let i = 0; i < backEndBox.length; i++){
        backEndBox[i].classList.add('backEndBoxNone');
    }
    backEndBox[count].classList.remove('backEndBoxNone');
}