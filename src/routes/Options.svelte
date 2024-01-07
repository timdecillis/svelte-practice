<script lang="ts">
  import { onMount, beforeUpdate, afterUpdate } from "svelte";

  import { data } from "./dummydata";
  export let updateFlavor: (chosen: string) => void;

  const handleFlavorClick = (chosen: string) => {
    updateFlavor(chosen);
  };
  let loading = false;
  const disable = () => {
    loading = true;
    setTimeout(() => {
      loading = false;
    }, 1500)
  };

  beforeUpdate(() => console.log('about to'))
  afterUpdate(() => console.log('born to do'))

</script>

{#each data as flavor}
  <button
  on:click={disable}
  on:click={() => handleFlavorClick(flavor)}
  disabled={loading}

  >{flavor} </button>
{/each}