<script lang="ts">
  import { count } from "./store";
  import Flavor from "./Flavor.svelte";
  import { onDestroy } from "svelte";

  let currentUser: string;

  let newUser: string = '';

  let currentFlavor: string;

  const unsubscribe = count.subscribe(({ user, flavor }) => {
    currentUser = user;
    currentFlavor = flavor;
  });

  onDestroy(unsubscribe);

</script>

<Flavor flavor={currentFlavor} user={currentUser} />

<form method="post" action="user" on:submit|preventDefault>
  <label for="newUser">change username</label>
  <input id="newUser" name="newUser" type="text" value={newUser}/>
  <input type="submit" value="Save"/>
</form>

<form method="post" action="flavor" on:submit|preventDefault>
  <label for="flavor">update flavor</label>
  <input id="flavor" name="flavor" type="text"/>
  <input type="submit" value="Save"/>
</form>