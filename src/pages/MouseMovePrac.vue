<template>
    <h1>test</h1>
    <div class="cursor_item"></div>
</template>

<script>
    export default {
        
    }

    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;
    let speed = 0.08;

    let cursor_item;
    let h1;

    window.onload = function(){
        h1 = document.getElementsByTagName("h1")[0];
        cursor_item = document.getElementsByClassName("cursor_item")[0];
        window.addEventListener("mousemove", mouseFunc, false);

        function mouseFunc(e){
            x = e.clientX;
            y = e.clientY;
            //cursor.log(e.clientX, e.clientY);
        }
        loop();
    }

    function loop(){
        //console.log(x);
        mx += (x - mx) * speed;
        my += (y - my) * speed;
        //console.log(x, mx)

        h1.innerHTML = "x: " + mx + " y: " + my;
        cursor_item.style.transform = "translate(" + mx + "px, " + my + "px)";
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