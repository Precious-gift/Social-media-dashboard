let togle = document.getElementById("togle");
let change = document.getElementById('indicator');
let topcolor = document.getElementById('container1');
let dark = document.getElementById('pageViews');
let social = document.getElementById('social');
let overview = document.getElementById('overview');
const element = document.getElementById('overviews');
let nodes = element.getElementsByClassName('pageViews');
/*const facebook = document.getElementById('facebook');
let txt = facebook.getElementsByTagName('h1')[0];
const twitter = document.getElementById('facebook1');
let txtTwitter = twitter.getElementsByTagName('h1')[0];
*/
const socials = document.getElementById('socials');
let prime = socials.getElementsByClassName('prime');
let white = socials.getElementsByTagName('h1');

togle.onclick = function() {
    document.getElementById("togle").classList.toggle("dtogle");
    if(document.getElementById("togle").classList.contains('dtogle')){
        document.body.style.backgroundColor = 'hsl(230, 17%, 14%)';
        change.style.cssText = 'background-color: hsl(230, 17%, 14%); margin-left: 5px;'; 
        topcolor.style.cssText = 'background-color: hsl(232, 19%, 15%);';
        //dark.style.cssText = 'background-color: hsl(228, 28%, 20%); color: #fff';
        social.style.cssText = 'color: #fff';
        overview.style.cssText = 'color: #fff';
        for (let i = 0; i < nodes.length; i++){
            nodes[i].style.cssText = 'background-color: hsl(228, 28%, 20%); color: #fff;';
        }
        for (let s = 0; s < prime.length; s++){
            prime[s].style.cssText = 'background-color: hsl(228, 28%, 20%);';
            white[s].style.cssText = 'color: #fff';
        }
        white.style.cssText = 'color: #fff';
        /*facebook.style.cssText = 'background-color: hsl(228, 28%, 20%);';
        txt.style.cssText = 'color: #fff;';
        twitter.style.cssText = 'background-color: hsl(228, 28%, 20%);';
        txtTwitter.style.cssText = 'color: #fff;';*/
    }else {
        document.body.style.backgroundColor = 'white';
        change.style.cssText = 'background-color: hsl(225, 100%, 98%); margin-right: 5px;';
        topcolor.style.cssText = 'background-color: hsl(225, 100%, 98%);';
        //dark.style.cssText = 'background-color: hsl(227, 47%, 96%); color: hsl(228, 12%, 44%)';
        social.style.cssText = 'color: black;';
        overview.style.cssText = 'color: black;';
        for (let i = 0; i < nodes.length; i++){
            nodes[i].style.cssText = 'background-color: hsl(227, 47%, 96%); color: hsl(228, 12%, 44%);';
        }
        for (let s = 0; s < prime.length; s++){
            prime[s].style.cssText = 'background-color: hsl(227, 47%, 96%);';
            white[s].style.cssText = 'color: black';
        }    
        /*facebook.style.cssText = 'background-color: hsl(227, 47%, 96%);';
        txt.style.cssText = 'color: black;';
        twitter.style.cssText = 'background-color: hsl(227, 47%, 96%);';
        txtTwitter.style.cssText = 'color: black;';*/
    }
}

