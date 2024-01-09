<script lang="ts">
  import { count } from "./store";
  import Flavor from "./Flavor.svelte";
  import { onDestroy } from "svelte";

  let currentUser: string;

  let currentFlavor: string;

  const unsubscribe = count.subscribe(({ user, flavor }) => {
    console.log('flavor:', flavor)
    currentUser = user;
    currentFlavor = flavor;
  });

  onDestroy(unsubscribe);
</script>

<Flavor flavor={currentFlavor} user={currentUser} />

<form method="post" action="user" on:submit|preventDefault>
  <label for="username">change username</label>
  <input id="username" type="text"/>
  <input type="submit" value="Save"/>
</form>

<form method="post" action="flavor" on:submit|preventDefault>
  <label for="username">update flavor</label>
  <input id="flavor" type="text"/>
  <input type="submit" value="Save"/>
</form>