<script>
  import Colors from "./pages/colors/Colors.svelte";
  import Register from "./pages/register/Register.svelte";
  import { Router, Link, Route } from "svelte-navigator";
  import { BASE_URL, myUsername } from "./stores/globalStore";


  import { onMount } from 'svelte'

  onMount(async () => {
    const response = await fetch($BASE_URL + "/users/me", {
      // includes send the session id "connect.sid" cookie with the request
      credentials: 'include'
    });
    const result = await response.json();
    myUsername.set(result.data)


  });
</script>


{#if $myUsername}
  <Colors />


{:else}
<Register/>
{/if}


<Register></Register>
<Colors />

