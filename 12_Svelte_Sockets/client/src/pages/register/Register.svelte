<script>
    import { BASE_URL, myUsername } from '../../stores/globalStore.js'
    let username = "";

    async function handleRegistration() {
        fetch($BASE_URL + '/register', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username })
        })
    }
</script>


<h1>Register Page</h1>


<input bind:value={username} placeholder="...usrname">
<button on:click={handleRegistration}>Register now</button>