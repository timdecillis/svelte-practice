<script>
  let clicked = false;
  import Button from "./Button.svelte";
  const handleClick = () => {
    clicked = !clicked;
  }
</script>
<h1>Welcome to Svelte</h1>

{#if clicked}
  <div></div>
{/if}

<Button on:click={handleClick} />

