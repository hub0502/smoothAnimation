<template>
    <h1>test</h1>
    <div class="cursor_item"></div>
</template>

<script>
export default {
    
}

window.onload = function(){
    let h1 = document.getElementsByTagName("h1")[0];
    let cursor_item = document.getElementsByClassName("cursor_item")[0];
    window.addEventListener("mousemove", mouseFunc, false);

    function mouseFunc(e){
        h1.innerHTML = "x: " + e.clientX + " y: " + e.clientY;
        cursor_item.style.transform = "translate(" + e.clientX + "px, " + e.clientY + "px)";
        //curser.log(e.clientX, e.clientY);
    }
    loop();
}
let i = 0;

function loop(){
    console.log(i += 1);
    window.requestAnimationFrame(loop);
}

</script>

<style>
    body{
        position: relative;
        background-color: black;
    }

    h1{
        color: #fff;
    }

    .cursor_item{
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: red;
        top: 0;
        left: 0;
    }
</style>