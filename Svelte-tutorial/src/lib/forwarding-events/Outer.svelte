<script>
    import Inner from './Inner.svelte'
</script>

<!-- 
    if you don't specify a function that should handle an event, the event will be forwarded. 
    Could have done same as in inner svelte and forward it that way as well. The example should of course be modified for this component

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
-->

<Inner on:message />