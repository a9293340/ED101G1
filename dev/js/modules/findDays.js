const nextDay = function(n){
    var temp = new Date();
    return new Date(temp.setDate(temp.getDate() + n));
}

export default nextDay;