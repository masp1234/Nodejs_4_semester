<script>
  import io from 'socket.io-client'
  let chosenColor = "#000000"

  const socket = io('localhost:8080')

  socket.on('a new color was chosen', (data) => {
    console.log(data)
    document.body.style.backgroundColor = data.data
  })
  
  function sendColor() {
    socket.emit('some event', { data: chosenColor })
    }


  </script>
    
  <input bind:value={chosenColor} type="color">
  
  <button on:click={sendColor}>Send color</button>