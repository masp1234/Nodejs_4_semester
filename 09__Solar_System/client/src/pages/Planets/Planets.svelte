<script>
    import { onMount } from 'svelte'
    import { BASE_URL } from '../../store/globalStore'

    onMount(async () => {
        console.log()
        // fetch
        const response = await fetch($BASE_URL + "/planets", {
            // credentials for session
            credentials: 'include'
        });
        const { data: planets } = await response.json();
        console.log(planets)

    });
</script>

<h1>This is for planets</h1>