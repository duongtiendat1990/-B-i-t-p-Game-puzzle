let imageTracker1 = 'monkey';
function change1() {
    let img1 = document.getElementById('img1');
    if (imageTracker1==='monkey') {
        img1.src ='./images/monkey_part1x1.jpg';
        imageTracker1 = 'panda';
    } else if (imageTracker1==='panda') {
        img1.src='./images/panda_swap_part1x1.jpg';
        imageTracker1='cat';
    } else {
        img1.src='./images/funny-cat1_part1x1.jpg';
        imageTracker1='monkey';
    }
}
let imageTracker2 = 'monkey';
function change2() {
    let img2 = document.getElementById('img2');
    if (imageTracker2==='monkey') {
        img2.src ='./images/monkey_part2x1.jpg';
        imageTracker2 = 'panda';
    } else if (imageTracker2==='panda') {
        img2.src='./images/panda_swap_part2x1.jpg';
        imageTracker2='cat';
    } else {
        img2.src='./images/funny-cat1_part2x1.jpg';
        imageTracker2='monkey'
    }
}
let imageTracker3 = 'monkey';
function change3() {
    let img3 = document.getElementById('img3');
    if (imageTracker3==='monkey') {
        img3.src ='./images/monkey_part3x1.jpg';
        imageTracker3 = 'panda';
    } else if (imageTracker3==='panda') {
        img3.src='./images/panda_swap_part3x1.jpg';
        imageTracker3='cat';
    } else {
        img3.src='./images/funny-cat1_part3x1.jpg';
        imageTracker3='monkey';
    }
}
let imageTracker4 = 'monkey';
function change4() {
    let img4 = document.getElementById('img4');
    if (imageTracker4==='monkey') {
        img4.src ='./images/monkey_part4x1.jpg';
        imageTracker4 = 'panda';
    } else if (imageTracker4==='panda') {
        img4.src='./images/panda_swap_part4x1.jpg';
        imageTracker4='cat';
    } else {
        img4.src='./images/funny-cat1_part4x1.jpg';
        imageTracker4='monkey';
    }
}
let imageTracker5 = 'monkey';
function change5() {
    let img5 = document.getElementById('img5');
    if (imageTracker5==='monkey') {
        img5.src ='./images/monkey_part5x1.jpg';
        imageTracker5 = 'panda';
    } else if (imageTracker5==='panda') {
        img5.src='./images/panda_swap_part5x1.jpg';
        imageTracker5='cat';
    } else {
        img5.src='./images/funny-cat1_part5x1.jpg';
        imageTracker5='monkey';
    }
}
function check() {
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
    let img4 = document.getElementById('img4');
    let img5 = document.getElementById('img5');
    if(imageTracker1===imageTracker2 && imageTracker2===imageTracker3 && imageTracker3===imageTracker4 && imageTracker4===imageTracker5) {
        img1.style= "box-shadow: red 4px 4px 9px";
        img2.style= "box-shadow: red 4px 4px 9px";
        img3.style= "box-shadow: red 4px 4px 9px";
        img4.style= "box-shadow: red 4px 4px 9px";
        img5.style= "box-shadow: red 4px 4px 9px";
    } else {
        img1.style="";
        img2.style="";
        img3.style="";
        img4.style="";
        img5.style="";
        }
}