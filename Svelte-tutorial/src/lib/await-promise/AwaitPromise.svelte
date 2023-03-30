<script>
	import { getRandomNumber } from './get-random-number';

	let promise = getRandomNumber();

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

<button on:click={handleClick}>
	generate random number
</button>


{#await promise: then number}

<p>{number}</p>






{/await}
