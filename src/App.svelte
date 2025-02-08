<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './pages/home.svelte';
  import Signup from './pages/register.svelte';
  import Login from './pages/login.svelte';
  import Profiluser from './pages/profiluser.svelte';
  import Menu from './utils/Menu.svelte';
  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Accueil</Link>
    <Link to="/signup">Inscription</Link>
    <Link to="/login">Connexion</Link>
    <Link to="/profiluser">Profil</Link>
  </nav>
<div>
  
  <Route path="/" component={Home} exact />
  <Route path="/signup" component={Signup} />
  <Route path="/login" component={Login} />
  <Route path="/profiluser" component={Profiluser} />
</div>
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
