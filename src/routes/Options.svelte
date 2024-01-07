<script lang="ts">
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
</script>

{#each data as flavor}
  <button
  on:click={disable}
  on:click={() => handleFlavorClick(flavor)}
  disabled={loading}

  >{flavor} </button>
{/each}

<form on:submit|preventDefault={handleSubmit}>
	<select
		bind:value={selected}
		on:change={() => (answer = '')}
	>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer} />

	<button disabled={!answer} type="submit">
		Submit
	</button>
</form>
