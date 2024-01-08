<script lang="ts">
  import { count } from "./store";
  import Options from "./Options.svelte";
  import Flavor from "./Flavor.svelte";
  import { onDestroy } from "svelte";

  let clicks: number;
  let currentUser: string;
  $: (currentUser)

  let selected: string = "none";

  const updateFlavor = (chosen: string) => {
    selected = chosen;
  };
  const handleClick = () => {
    count.update((store) => {
      return { ...store, count: store.count + 1 };
    });
  };

  const unsubscribe = count.subscribe(({ count, user }) => {
    clicks = count;
    currentUser = user;
  });

  onDestroy(unsubscribe);
</script>

<button on:click={handleClick}>{currentUser}'s of clicks: {clicks} </button>

<Options {updateFlavor} />

<Flavor flavor={selected} />

<form method="post" on:submit|preventDefault>
  <label for="username">change username</label>
  <input id="username" type="text"/>
  <input type="submit" value="Save"/>
</form>

<progress value=1 />
