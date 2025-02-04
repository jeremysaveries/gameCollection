<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './pages/home.svelte';
  import Signup from './pages/register.svelte';
  import Login from './pages/login.svelte';
 
</script>

<Router>
  <nav>
    <Link to="/">Accueil</Link>
    <Link to="/signup">Inscription</Link>
    <Link to="/login">Connexion</Link>
    
  </nav>

  <Route path="/" component={Home} />
  <Route path="/signup" component={Signup} />
  <Route path="/login" component={Login} />

 
</Router>


<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
