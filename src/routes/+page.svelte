<script lang="ts">
  import { count } from "./store";
  import Options from "./Options.svelte";
  import Flavor from "./Flavor.svelte";
  import { onDestroy, setContext } from "svelte";

  let clicks: number;
  let currentUser: string;
  $: (currentUser)
  setContext('flavor', {
    flavor: 'chocolate'
  })

  let chosenColor: string;
  $: chosenColor;

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

  const updateColor = (e: Event) => chosenColor = e.target.value;
</script>

<button on:click={handleClick}>{currentUser}'s of clicks: {clicks} </button>

<Options {updateFlavor} />

<Flavor flavor={selected} />

<form method="post" on:submit|preventDefault>
  <label for="username">change username</label>
  <input id="username" type="text"/>
  <input type="submit" value="Save"/>
</form>

<progress color="black" style="background-color: green" value=1 />

<input type="color" on:change|preventDefault={updateColor} />
<div style="background-color: {chosenColor}">this is a div</div>
