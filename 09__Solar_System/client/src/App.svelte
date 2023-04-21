<script>
    // usenavigate is for dynamic navigating
    import { Router, Link, Route, useNavigate } from "svelte-navigator";
    import Home from './pages/Home/Home.svelte'
    import Planets from "./pages/Planets/Planets.svelte";
</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="/planets">Planets</Link>
    </nav>
    <Route path="/">
        <Home></Home>
    </Route>
    <Route path="/planets">
        <Planets></Planets>
    </Route>
</Router>