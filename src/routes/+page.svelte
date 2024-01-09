<script lang="ts">
  import { count } from "./store";
  import Flavor from "./Flavor.svelte";
  import { onDestroy } from "svelte";

  let currentUser: string;
  let newUser: string;

  let currentFlavor: string;

  const unsubscribe = count.subscribe(({ user, flavor }) => {
    currentUser = user;
    currentFlavor = flavor;
  });

  onDestroy(unsubscribe);

  const handleUserChange = () => {

    count.update((store) => {
      return {...store, user: newUser}
    })
  };

</script>

<Flavor flavor={currentFlavor} user={currentUser} />

<form method="post" action="user" on:submit|preventDefault={handleUserChange}>
  <label for="username">change username</label>
  <input id="username" name="username" type="text" bind:value={newUser}/>
  <input type="submit" value="Save"/>
</form>

<form method="post" action="flavor" on:submit|preventDefault>
  <label for="username">update flavor</label>
  <input id="flavor" type="text"/>
  <input type="submit" value="Save"/>
</form>