<script lang="ts" >
  import Button from "./Button.svelte";
  import Options from "./Options.svelte";
  import Flavor from "./Flavor.svelte";

  let clicked = false;
  let selected: string | null = 'none';

  const handleClick = () => {
    clicked = !clicked;
  };

  const updateFlavor = (chosen: string) => {
    selected = chosen;
  }
</script>

<h1>Welcome to Svelte</h1>

{#if clicked}
  <div></div>
{/if}

<Button on:click={handleClick} />

<Options flavor={selected} updateFlavor={updateFlavor} />

<!-- <Flavor flavor={selected} /> -->
<div>{selected}</div>
