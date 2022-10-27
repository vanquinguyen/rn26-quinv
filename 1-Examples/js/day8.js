function image1(params) {
    return console.log(params * 2);
}
// image1(12);

function image2() {
    var a = 3, b = 4, c = 2, d = 1;
    var min = a;
    if(b < min) min = b;
    if(c < min) min = c;
    if(d < min) min = d;
    console.log(min); 
}
// image2();

function image3(params) {
    var x = Math.floor((params - 1) / 2);
    return x;
}
// console.log(image3(20));

function image4(params) {
    var a,b;
    a = Math.floor(params / 10);
    b = params % 10;
    console.log(a + '\n' + b);
}
// image4(21);

function image5(params) {
    if (params <= 1) {
        return false;
    }

    for (var i = 2; i <= params / 2; i++) {
        if (params % i == 0) {
            return false;
        }
    }

    return true;
}
// console.log(image5(15));

function image6() {
    var num1 = 54, num2 = 72, gcd = 1;
        for(var i = 1; i <= num1 && i <= num2; i++)
        {
            if(num1 % i == 0 && num2 % i == 0)
                gcd = i;
        }
        console.log(gcd);
}
// image6();

function image7() {
    var str = 'dEAR hAI';
    var convertToArray = str.toLowerCase().split(' ')
    for (const value of convertToArray) {
       console.log(value.replace(value.charAt(0), value.charAt(0).toUpperCase()));
    }
}
image7();

function image8() {
    var arr = [];
    var string = 'Aptech Da Nang';
    arr = string.split(' ');
    for (const key of arr) {
        console.log(key.length);
    }
    
}
// image8();
function image9(params) {
    
}
