

// const EMAIL = 'admin@gmail.com';
// const PASSWORD = 'admin';


// function myFunction() {
//     var x = document.getElementById("input__password");
//     if (x.type === "password") {
//         x.type = "text";
//     } else {
//         x.type = "password";
//     }
// }
// // -----------------------------------------

// function handleSubmit() {
//     var elementEmail = document.getElementById('input__email').value;
//     var elementPassword = document.getElementById('input__password').value;

//     if(elementEmail === EMAIL && elementPassword === PASSWORD) {
//         alert('Login Successfully!');
//     }
//     else alert('Login Fail')

// }
// // --------------------------------
// function resetForm() {
//     // JSDOC
//     var btnReset = document.getElementById('reset'); // res = elm
//     var inputs = document.querySelectorAll('input'); // res = elm[] 
//     //inputs[index] inputs = [inputemail, inputpass]

//     inputs.forEach(input => input.value = '');
//         // inputs[0].value ='' 
//             // inputs[1].value ='' 
// }




function fibonacci() {
    var elementInput = document.getElementById('input__fibona').value;
    var pre = 0, next = 1, sum = 0, arr = '', length = elementInput + 1;
    for (let i = 0; i <= length + 1; i++) {
        if(pre <= elementInput) {
                arr += pre + ' ';
                sum = pre + next;
                pre = next;
                next = sum;
        }
    }
    alert(arr)
}

function checkEven() {
    var elementCheck = document.getElementById('input__fibona').value;
    if (elementCheck % 2 == 0) {
        alert(`${elementCheck} la so chan`)
    } else {
        alert(`${elementCheck} la so le`)
    }
}
            

function triangle() {
    var elementInput = document.getElementById('input__fibona').value;
    var tam = '';
    for(var i = 1; i <= elementInput; i++){
        tam += '*';
        console.log(tam);
    }
}