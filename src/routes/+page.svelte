<script lang="ts">
  import { count } from "./store";
  import Flavor from "./Flavor.svelte";
  import { onDestroy } from "svelte";

  let currentUser: string;

  let flavor: string = "Cookies and Cream";

  const unsubscribe = count.subscribe(({ user, flavor }) => {
    currentUser = user;
    flavor = flavor;
  });

  onDestroy(unsubscribe);
</script>

<Flavor user={currentUser} />

<form method="post" on:submit|preventDefault>
  <label for="username">change username</label>
  <input id="username" type="text"/>
  <input type="submit" value="Save"/>
</form>