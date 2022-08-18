<template>
    <img src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/images/1-b90e91a4.png">

<img src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/images/2-f3fd6cf5.png">

<div class="vod"><video autoplay="" playsinline="" loop="" muted="" src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/videos/3-27c8c3ea.webm"></video></div>

<img src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/images/4-105dd65b.png">

<img src="https://paidpost-assets.nyt.com/paidpost/allbirds/birds-eye-view/images/5-ac49bfdc.png">
</template>

<script>
    export default {
        
    }

    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;
    let speed = 0.09;
    let imgArray;
    let bird;

    window.onload = function(){
        window.addEventListener("mousemove", mouseFunc, false);
        imgArray = document.getElementsByTagName("img");
        bird = document.getElementsByClassName("vod")[0];

        function mouseFunc(e){
            x = (e.clientX - window.innerWidth / 2);
            y = (e.clientY - window.innerHeight / 2);
        }
        loop();
    }

    function loop(){
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        console.log(x, y);

        for(let i = 0; i < imgArray.length; i++){
            imgArray[i].style.transform = "translate(" + -(mx/(16-i*2)) + "px, " + -(my/(10-i)) + "px)";
        }

        bird.style.transform = "translate(" + -(mx/20) + "px, " + -(my/20) + "px)";

        window.requestAnimationFrame(loop);
    }

</script>

<style>
    img{
        position: absolute;
    }

    .vod{
        position: absolute;
    }
</style>