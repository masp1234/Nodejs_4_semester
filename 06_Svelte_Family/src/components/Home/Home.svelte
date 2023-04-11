<script>
    import { fridgeMessages } from "../../store/fridgeMessages";

    function eraseFridgeMessages() {
        fridgeMessages.set([]);
    }
</script>

<h5>{$fridgeMessages}</h5>
<button on:click={eraseFridgeMessages}>Erase Fridge Messages</button>

 <slot></slot>

<p>------------------------</p>
<p>|
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
     Welcome         
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    |</p>
<p>------------------------</p>