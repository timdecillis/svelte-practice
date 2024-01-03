<script lang="ts">
  import { data } from "./dummydata";
  export let updateFlavor: (chosen: string) => void;

  const handleFlavorClick = (chosen: string) => {
    updateFlavor(chosen);
  };
</script>

{#each data as flavor}
  <button on:click={() => handleFlavorClick(flavor)}>{flavor}</button>
{/each}
