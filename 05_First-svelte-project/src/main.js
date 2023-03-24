import './app.css'
import App from './App.svelte'

// injects the app into the html tag with id=app. like root in React
const app = new App({
  target: document.getElementById('app'),
})

export default app
