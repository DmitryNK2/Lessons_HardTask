let product;
let num = 266219;
let str = num.toString();
console.log(str);
for(i = 0; i < 6; i++){
    if(i == 0){
        product = str[i];
    } else{
        product = product * str[i];
    }
}
console.log(product);

product = product**3;
console.log(product);

let product2 = product.toString();
console.log(product2[0]+product2[1]);