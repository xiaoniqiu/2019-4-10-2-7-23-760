module.exports = function main(inputs) {
    // write your code here...
    var price = 0;
    if(inputs.distance<2){
        price = 6 + 0.25 * inputs.parkTime;
    }else if(2<=inputs.distance<8){
        price = 0.8 * inputs.distance + 0.25 * inputs.parkTime;
    }else{
        price = 1.2 * inputs.distance + 0.25 * inputs.parkTime;
    }
    return price;
};
