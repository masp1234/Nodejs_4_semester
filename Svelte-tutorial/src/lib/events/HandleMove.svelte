<script>
    let coordinates = {
        x: 0,
        y: 0
    };
    /*
    Could have used this in the on:pointermove listener as well. I'd think this is better, but if it's only used once, it might be better to do it in-line
    const handleMove = e => {
        coordinates.x = e.clientX;
        coordinates.y = e.clientY;
    };
    */
</script>

<div on:pointermove={e => {
    coordinates.x = e.clientX;
    coordinates.y = e.clientY;
}}> The pointer is at {coordinates.x}, {coordinates.y}

</div>