<script lang="ts">
  import { count } from "./store";
  import Options from "./Options.svelte";
  import Flavor from "./Flavor.svelte";
  import { onDestroy } from "svelte";

  console.log("count:", count);

  let clicks;

  let selected: string = "none";

  const updateFlavor = (chosen: string) => {
    selected = chosen;
  };
  const handleClick = () => {
    count.update((number) => {
      console.log(number.user);
    });
  };
  count.subscribe((value) => (clicks = value.count));

  // onDestroy(unsubscribe)
</script>

<button on:click={handleClick}>Number of clicks: </button>

<Options {updateFlavor} />

<Flavor flavor={selected} />
