let memData = {
    memId : 10001,
    memEmail : 'f1020@gmail.com',
    memPsw : 'a1234567A',
    memSurname : '黃',
    memName : '阿炳',
    memScore : 1020,
    memImage : './images/member/rcc_author3.jpg',
    memAddr : '桃園市中大路200號',
    memPhone : '0922222222',
    memHeight :178,
    memWeight :65,
    memGender : '男'
}
new Vue({
    el: '#memApp',
    data: {
        memData,
    },
})