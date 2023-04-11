<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function sayHello() {
        dispatch('alert', {
            text: 'hello'
        })
    }

</script>

<button on:click={sayHello}>
    Click here
</button>