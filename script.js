let imageTracker1 = 'cat';
function change1() {
    let img1 = document.getElementById('img1');
    if (imageTracker1==='cat') {
        img1.src ='./images/monkey_part1x1.jpg';
        imageTracker1 = 'monkey';
    } else if (imageTracker1==='monkey') {
        img1.src='./images/panda_swap_part1x1.jpg';
        imageTracker1='panda';
    } else {
        img1.src='./images/funny-cat1_part1x1.jpg';
        imageTracker1='cat';
    }
}
let imageTracker2 = 'cat';
function change2() {
    let img2 = document.getElementById('img2');
    if (imageTracker2==='cat') {
        img2.src ='./images/monkey_part2x1.jpg';
        imageTracker2 = 'monkey';
    } else if (imageTracker2==='monkey') {
        img2.src='./images/panda_swap_part2x1.jpg';
        imageTracker2='panda';
    } else {
        img2.src='./images/funny-cat1_part2x1.jpg';
        imageTracker2='cat'
    }
}
let imageTracker3 = 'cat';
function change3() {
    let img3 = document.getElementById('img3');
    if (imageTracker3==='cat') {
        img3.src ='./images/monkey_part3x1.jpg';
        imageTracker3 = 'monkey';
    } else if (imageTracker3==='monkey') {
        img3.src='./images/panda_swap_part3x1.jpg';
        imageTracker3='panda';
    } else {
        img3.src='./images/funny-cat1_part3x1.jpg';
        imageTracker3='cat';
    }
}
let imageTracker4 = 'cat';
function change4() {
    let img4 = document.getElementById('img4');
    if (imageTracker4==='cat') {
        img4.src ='./images/monkey_part4x1.jpg';
        imageTracker4 = 'monkey';
    } else if (imageTracker4==='monkey') {
        img4.src='./images/panda_swap_part4x1.jpg';
        imageTracker4='panda';
    } else {
        img4.src='./images/funny-cat1_part4x1.jpg';
        imageTracker4='cat';
    }
}
let imageTracker5 = 'cat';
function change5() {
    let img5 = document.getElementById('img5');
    if (imageTracker5==='cat') {
        img5.src ='./images/monkey_part5x1.jpg';
        imageTracker5 = 'monkey';
    } else if (imageTracker5==='monkey') {
        img5.src='./images/panda_swap_part5x1.jpg';
        imageTracker5='panda';
    } else {
        img5.src='./images/funny-cat1_part5x1.jpg';
        imageTracker5='cat';
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
