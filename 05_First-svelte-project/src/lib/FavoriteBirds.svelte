<script>
    import Bird from "./Bird.svelte";
    const birds =["Pigeon", "Parrot","Eagle"]
    const birdEmoji = ["🐦","🦜","🦅"];

    let birdIndex = 0;
    let favoriteBird = birds[0];
    let favoriteBirdEmoji = birdEmoji[birdIndex];

    function changeFavoriteBird() {
        birdIndex = (birdIndex + 1) % birds.length;
        favoriteBird = birds[birdIndex];
        favoriteBirdEmoji = birdEmoji[birdIndex];
    }
</script>

<div on:click={changeFavoriteBird} on:keydown={changeFavoriteBird}>
    <Bird
    name={favoriteBird}
    emoji={favoriteBirdEmoji}/>
</div>

<Bird name={birds[1]} emoji={birdEmoji[1]}/>

<h2>All birds that i know of</h2>
{#each birds as bird}
<Bird name={bird}/>
{/each}