var dropdown = document.getElementsByClassName("dropdown-btn");

var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}
var variableArray=[]
var value;
var basic_value;
$.getJSON("https://raw.githubusercontent.com/ayaleneh/Elevatee/master/src/main/resources/static/search.json", response => {
    response.data.forEach((val) => {
        let newVar = new Variable(val.value)
        variableArray.push(newVar)

    })
}).then(function(){
    populateDropdown()
})

function Variable(value){
    this.value=value;
    console.log("value   "+this.value)
}
var text=document.getElementById("myInput");
function populateDropdown(){
    console.log(variableArray)
    text.addEventListener('input',function(e){
        var val=this.value;
        console.log("input value "+text.value)
        closeAllLists();
        if (!val) { return false;}

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);
        for(var i=0;i<variableArray.length;i++){
            console.log(variableArray[i].value)

            if ( variableArray[i].value.toUpperCase().includes(val.toUpperCase())) {
                console.log("val is " + val)
                console.log("the spicial variable is " + variableArray[i].value)
                //see_also.push(variableArray[i
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = variableArray[i].value
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + variableArray[i].value + "'>";
                a.appendChild(b);
                console.log("text value is " + b.innerHTML)

                b.addEventListener("click", function(e) {
                    text.value=this.getElementsByTagName("input")[0].value//or this.getElementsByTagName("input")[0].value
                    basic_value=text.value
                    closeAllLists()
                    handler()

                })
            }
        }
    })
}
function handler(){
    for(var k=0;k<variableArray.length;k++){
        if(variableArray[k].value.toUpperCase()===text.value.toUpperCase()) {
            console.log("workking")
            var choice=variableArray[k].value;
            console.log(choice)
            switch (choice) {
                case "About boot camp":
                    window.location.assign("AboutBootCamp")
                    break;
                case "About developer":
                    window.location.assign("AboutDeveloper")
                    break;
                case "Program Design and algorithm":
                    window.location.assign("ProgramDesign")
                    break;
                case "Abstraction":
                    window.location.assign("Abstraction")
                    break;
                case "BootStrap":
                    window.location.assign("BootStrap")
                    break;
                case "Composition":
                    window.location.assign("Composition")
                    break;
                case "Core java":
                    window.location.assign("CoreJava")
                    break;
                case "css":
                    window.location.assign("css")
                    break;
                case "Encapsulation":
                    window.location.assign("Encapsulation")
                    break;
                case "html5":
                    window.location.assign("html5")
                    break;
                case "Inheritance":
                    window.location.assign("Inheritance")
                    break;
                case "javascript":
                    window.location.assign("javascript")
                    break;
                case "mysql":
                    window.location.assign("mysql")
                    break;
                case "polymorphosm":
                    window.location.assign("Polymorphism")
                    break;
                case "SpringBoot":
                    window.location.assign("SpringBoot")
                    break;
                case "Exercise":
                    window.location.assign("Exercise")
                    break;
                case "sample project":
                    window.location.assign("project")
                    break;
                default:
                    console.log("please enter the ...")

            }
           // window.location.assign("AboutBootCamp")
        }
            else{
              console.log("not working")
            }
        }


}


function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
        if (elmnt !== x[i] && elmnt !== text) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}

var a1=document.getElementById('a1');
var a2=document.getElementById('a2');
var a3=document.getElementById('a3');
var a4=document.getElementById('a4');
var a5=document.getElementById('a5');
var a6=document.getElementById('a6');
var a7=document.getElementById('a7');
var a8=document.getElementById('a8');
var a9=document.getElementById('a9');
var a10=document.getElementById('a10');
var a11=document.getElementById('a11');
var a12=document.getElementById('a12');
var a13=document.getElementById('a13');


a1.addEventListener("click",function f() {
    alert("definition:=GitHub is a web-based version-control and collaboration platform for software developers. ... GitHub, which is delivered through a software-as-a-service (SaaS) business model, was started in 2008 and was founded on Git, an open source code management system created by Linus Torvalds to make software builds faster.")
})
a2.addEventListener("click",function f() {
    alert("definition:=An algorithm is defined as a well-defined sequence of steps that provides a solution for a given problem, whereas a pseudocode is one of the methods that can be used to represent an algorithm. ... Program on the other hand allows us to write a code in a particular programming language.")
})
a3.addEventListener("click",function f() {
    alert("definition:=  is Sun's term, used to refer to Java SE, the standard edition and a set of related technologies, like the Java VM, CORBA, et cetera. This is mostly to differentiate from, say, Java ME or Java EE. Also note that they're talking about a set of libraries rather than the programming language.")
})
a4.addEventListener("click",function f() {
    alert("definition:= Polymorphism in Java is a concept by which we can perform a single action in different ways. ... So polymorphism means many forms. There are two types of polymorphism in Java: compile-time polymorphism and runtime polymorphism. We can perform polymorphism in java by method overloading and method overriding.")
})
a5.addEventListener("click",function f() {
    alert("definition:= Inheritance is a mechanism wherein a new class is derived from an existing class. In Java, classes may inherit or acquire the properties and methods of other classes. A class derived from another class is called a subclass, whereas the class from which a subclass is derived is called a superclass.")
})
a6.addEventListener("click",function f() {
    alert("definition")
})
a7.addEventListener("click",function f() {
    alert("definition")
})
a8.addEventListener("click",function f() {
    alert("definition")
})
a9.addEventListener("click",function f() {
    alert("definition")
})
a10.addEventListener("click",function f() {
    alert("definition")
})
a11.addEventListener("click",function f() {
    alert("definition")
})
a12.addEventListener("click",function f() {
    alert("definition")
})
a13.addEventListener("click",function f() {
    alert("definition:=Maven is a build automation tool used primarily for Java projects. Maven addresses two aspects of building software: first, it describes how software is built, and second, it describes its dependencies. ... The Maven project is hosted by the Apache Software Foundation, where it was formerly part of the Jakarta Project")
})





