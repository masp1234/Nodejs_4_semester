<script>
    export let name = "Martin";
    export let greeting = 'Hello';

    function changeGreeting() {
        if (greeting === 'Hello') {
        greeting = 'goodbye';
        }
        else {
        greeting = 'Hello'
        }
    }

  </script>

<h1 on:click={changeGreeting} on:keydown={changeGreeting}>{greeting} {name}</h1>

<style>
    h1 {
      color: yellow;
      /* Makes it so you don't select the text             */
      user-select: none;
    }
  </style>