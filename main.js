var input = document.querySelector('input');

var btn = document.querySelector(".addTask > button");


btn.addEventListener('click', addList);


function addList(e) {

    var notCompleted = document.querySelector(".notCompleted");

    var Completed = document.querySelector(".Completed");

    var newLi = document.createElement("li");


    // two check and delete btn  
    var checkBtn = document.createElement('button');
    var delBtn = document.createElement('button');

    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';


    if(input.value !== ''){
        newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);

        checkBtn.addEventListener('click', function() {

            var parent = this.parentNode;
            parent.remove();
            Completed.appendChild(parent);
            checkBtn.style.display = "none";

        }); 

        delBtn.addEventListener('click', function() {
            var parent = this.parentNode;
            parent.remove();
        }); 
    } 
}























/*
document.addEventListener("DOMContentLoaded", function() {


    document.querySelector("#submit").disabled = true;

    document.querySelector("#task").onkeyup = function() {
        if(document.querySelector("#task").value.length > 5 ) {
            document.querySelector("#submit").disabled = false;

        } else {
            document.querySelector("#submit").disabled = true;

        }
    }



    document.querySelector("form").onsubmit = function() {

        var task = document.querySelector("#task").value; //abdulrahman 

        var li  = document.createElement("li"); // li 

        li.innerHTML = task // value abdulrahman === li 


        document.querySelector("#tasks").appendChild(li);

        console.log(li);

        document.querySelector("#task").value = '';
        document.querySelector("#submit").disabled = true;

        return false;
    }

});

*/































/*
var button = document.getElementById("button").addEventListener("dblclick" , function() {

    console.log(123);
    console.log(e.type);
})


*/



/*
var nnnn = document.getElementById("demoooo33").innerText = "<h2>hello js</h2>"
var nnnn = document.getElementById("demoooo33").textContent = "<h2>hello js</h2>"
var nnnn = document.getElementById("demoooo33").innerHTML = "<h1>hello js</h1>"
*/
// console.log(nnnn.innerText); // wrong

// console.log(nnnn.textContent); // right


/*
var dddd = document.getElementById("demoooo33").classList.add("class1");
var ddddd = document.getElementById("demoooo333").className;

console.log(dddd);

console.log(ddddd);

var classsss = document.getElementsByClassName("list");

console.log(classsss[0].getAttribute("id"));

console.log(classsss[0].setAttribute("src", "images/is/5"));




*/


/* createElement -- createTextNode -- createAttrbite -- insertBefore -- appenChild*/

var MydIv = document.createElement("DIV"); // create div 

document.body.appendChild(MydIv); // insert div in body 
/*
var myText = document.createTextNode("Hello Js and html");


MydIv.appendChild(myText);

console.log(MydIv);

var formm = document.querySelector("#hhhhhALAA");
var h2 = document.querySelector("#hhh2h2h2Alaa");

formm.insertBefore(MydIv , h2)

*?







/*
console.log(document.URL);
console.log(document.doctype);
console.log(document.domain);
console.log(document.head);
console.log(document.body);
console.log(document.links[0]);
console.log(document.forms[0][0]);
console.log(document.title);
console.log(document.all);

*/
/*
document.getElementById("demo").innerHTML = "hell js";

var x = document.getElementsByClassName("list");

console.log(x[2]);

for(var i = 0; i < x.length; i++) {
    x[i].style.color = "red";
}


var vvv = document.getElementsByTagName("h2");

console.log(vvv[2]);

for(var i = 0; i < vvv.length; i++) {
    vvv[i].style.backgroundColor = "red";
}


var bbb = document.querySelector("#id");

console.log(bbb);



function ChangeClick() {
    var kkkk = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < kkkk.length; i++) {
        kkkk[i].style.backgroundColor = "red";
    }

    //var x  = document.querySelectorAll('input[type="text"]');
 
    //for(var i = 0; i < x.length; i++) {
    //    x[i].style.backgroundColor = "red";
    //}
 
 }

 var query = document.querySelector("#id");

 var query = document.querySelector(".class");

 var query = document.querySelector("div");

 var query = document.querySelector("input[type='text']");

 */