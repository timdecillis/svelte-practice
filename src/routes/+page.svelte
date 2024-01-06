<script lang="ts" >
  import Options from "./Options.svelte";
  import Flavor from "./Flavor.svelte";
  import Actions from "./Flavor.svelte";

  let selected: string = 'none';

  console.log('selected')

  const updateFlavor = (chosen: string) => {
    selected = chosen;
  }
</script>

<Options updateFlavor={updateFlavor} />

<Flavor flavor={selected} />

