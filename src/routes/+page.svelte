<script lang="ts">
  import { count } from "./store";
  import Options from "./Options.svelte";
  import Flavor from "./Flavor.svelte";
  import { onDestroy } from "svelte";

  console.log("count:", count);

  let clicks: number;
  let currentUser: string;

  let selected: string = "none";

  const updateFlavor = (chosen: string) => {
    selected = chosen;
  };
  const handleClick = () => {
    count.update((value) => {
      return { ...value, count: value.count + 1 };
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
