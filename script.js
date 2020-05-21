// 1...handleform()
// console.log('clicked',event.target);

// 2...handleform()
// var target = event.target
// console.log(target.children)    

// 3...handleform()
// var children = event.target.querySelectorAll('input')
// console.log(event.target.children)    
//4..handleform()
// console.log(children)    
// console.log(elem)
// console.log(elem.name)

// step first handleform desing then callback inside


var vechicleData = [];

function handleForm(callback){
    event.preventDefault();
    var children = event.target.querySelectorAll('input')
    var data = {};
    Array.from(children).forEach(function(elem){
        if(elem.name){
            data[elem.name]=elem.value
        }
    });
    // console.log(data)
    callback(data);

}

function addToData(data){
    vechicleData.push(data);
    console.log(vechicleData)
}

window.addEventListener('load',function(){
    var form = document.querySelector("form");
    form.addEventListener('submit',function(){
        handleForm(addToData)
    });
})