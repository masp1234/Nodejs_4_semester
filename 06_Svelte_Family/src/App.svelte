<script>
  import { onMount } from 'svelte';

  import { BASE_URL } from './store/urlDomain';

  import Home from './components/Home/Home.svelte';
  import Pibling from './components/Pibling/Pibling.svelte';

  // mounts only once when the page is loaded - only want fetch to happen once
  onMount(async () => {
    const registerURL = `${$BASE_URL}/gotham/batman?hobby=catching the bad guys`;
    const registerResponse = await fetch(registerURL, {
      credentials: 'include'
    });
    const batmanRegisteredMessage = await registerResponse.json();

    const registeredResponse = await fetch(`${$BASE_URL}/gotham`, {
      credentials: 'include'
    });
    const registeredResponseMessage = await registeredResponse.json();
    console.log(registeredResponseMessage);
  });

  const piblings = ['John', 'Mark'];
  const niblings = [
    {
        id: 1,
        name: "Ann",
        isGirl: true,
        cookies: []       
      },
      {
        id: 2,
        name: "Amelie",
        isGirl: true,
        blackSheep: "medium-black-sheep",
        cookies: [],  
      },
      {
        id: 3,
        name: "Peter",
        blackSheep: "ultra-black-sheep",
        cookies: []
      }
  ];
</script>

<Home>
  <h3>This is the home of the Svelte Family</h3>
  <Pibling name={piblings[0]} niblings={niblings}/>
  <Pibling name={piblings[1]} niblings={niblings}/>
</Home>