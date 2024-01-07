<script lang="ts" >
  import { count } from './store'
  import Options from "./Options.svelte";
  import Flavor from "./Flavor.svelte";

  console.log('count:', count)

  let selected: string = 'none';

  const updateFlavor = (chosen: string) => {
    selected = chosen;
  }
</script>

<Options updateFlavor={updateFlavor} />

<Flavor flavor={selected} />

