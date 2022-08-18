<template>
    <!-- <h1>test</h1> -->
    <div class="cursor_item"></div>
    <button type="button">START</button>
</template>

<script>
    export default {
        
    }

    let x = 0;
    let y = 0;
    // let mx = 0;
    // let my = 0;
    // let speed = 0.08;

    let cursor_item;
    // let h1;

    window.onload = function(){
        //h1 = document.getElementsByTagName("h1")[0];
        cursor_item = document.getElementsByClassName("cursor_item")[0];
        window.addEventListener("click", mouseFunc, false);

        function mouseFunc(e){
            x = e.clientX;
            y = e.clientY;
            cursor_item.style.transform = "translate(" + x + "px, " + y + "px)";
            
        }
        //loop();
    }

    // function loop(){
    //     //console.log(x);
    //     mx += (x - mx) * speed;
    //     my += (y - my) * speed;
    //     //console.log(x, mx)

    //     h1.innerHTML = "x: " + mx + " y: " + my;

    //     cursor_item.style.transform = "translate(" + mx + "px, " + my + "px)";
    //     window.requestAnimationFrame(loop);
    // }
            //cursor.log(e.clientX, e.clientY);

</script>

<style>
    body{
        position: relative;
        background-color: black;

        margin: 0;
    }

    h1{
        color: #fff;
    }

    button{
        font-size : 40px;
        font-weight: bold;
        background: #fff;
        color: red;
        padding: 30px 80px;
        margin: 50px;
        cursor: pointer;
        transition: all 500ms cubic-bezier(0.755, 0.010, 0.310, 1.000);
    }

    button:hover{
        background: red;
        color: #fff;
        font-size: 80px;
        padding: 80px 150px;
    }

    .cursor_item{
        position: fixed;
        width: 100px;
        height: 100px;
        background-color: red;
        top: 0;
        left: 0;
        margin: -50px 0 0 -50px;
        transition: all 500ms cubic-bezier(0.755, 0.010, 0.310, 1.000);
    }
</style>