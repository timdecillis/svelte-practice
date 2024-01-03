<script>
  let clicked = false;
  import Button from "./Button.svelte";
  const handleClick = () => {
    clicked = !clicked;
  }
</script>
<h1>Welcome to Svelte</h1>

{#if clicked}
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{/if}

<Button on:click={handleClick} />

