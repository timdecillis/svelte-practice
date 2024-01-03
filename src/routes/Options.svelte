<script>
  import { data } from "./dummydata";
</script>

{#each data as flavor}
  <button>{flavor}</button>
{/each}