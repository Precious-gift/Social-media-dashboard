let togle = document.getElementById("togle");
let change = document.getElementById('indicator');
let dchange = document.getElementsByClassName('dtogle');
togle.onclick = function() {
    document.getElementById("togle").classList.toggle("dtogle");
    if(document.getElementById("togle").classList.contains('dtogle')){
        //change.attributes('indicator').removeNameItem;
        //change.classList.toggle('dindicator');
        document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
        change.style.cssText = 'background-color: hsl(230, 17%, 14%); margin-left: 5px;';    
    }else {
        document.body.style.backgroundColor = 'white';
        change.style.cssText = 'background-color: hsl(225, 100%, 98%); margin-right: 5px;';
    }
}

