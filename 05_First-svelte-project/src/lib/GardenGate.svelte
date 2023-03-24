<script>
    let door = 'closed';
    function openOrCloseDoor() {
        if (door === 'closed') {
            door = 'Open'
        }
        else {
            door = 'closed'
        }
    }
</script>


<h1 on:click={openOrCloseDoor}>{door}</h1>