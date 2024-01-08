<script lang='ts'>
  import { getContext } from "svelte";
  export let flavor: string;

  let currentFlavor = getContext('flavor').flavor
  console.log('current:', currentFlavor)

</script>

<div>{currentFlavor}</div>