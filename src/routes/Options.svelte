<script lang="ts">

  import { data } from "./dummydata";
  import { setContext } from "svelte";
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

  setContext('flavor', {
    flavor: 'chocolate'
  })

</script>

{#each data as flavor}
  <button
  on:click={disable}
  on:click={() => handleFlavorClick(flavor)}
  disabled={loading}

  >{flavor} </button>
{/each}