<script lang="ts" >
  import { count } from './store'
  import Options from "./Options.svelte";
  import Flavor from "./Flavor.svelte";

  console.log('count:', count)

  let clicks: number;

  let selected: string = 'none';

  const updateFlavor = (chosen: string) => {
    selected = chosen;
  }
  const handleClick = () => {
    count.update((number) => number + 1)
  }
  count.subscribe((value) => clicks = value);
</script>

<button on:click={handleClick} >Number of clicks: {clicks}</button>

<Options updateFlavor={updateFlavor} />

<Flavor flavor={selected} />

