<script lang="ts">
  import { data } from "./dummydata";
  export let updateFlavor: (chosen: string) => void;

  const handleFlavorClick = (chosen: string) => {
    updateFlavor(chosen);
  };
  let disabled = false;
  const disable = () => disabled = true
</script>

{#each data as flavor}
  <button
  on:click={disable}
  disabled={disabled}
  >{flavor}
</button>
{/each}
