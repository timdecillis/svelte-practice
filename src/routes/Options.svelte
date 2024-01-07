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
  let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	];

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(
			`answered question ${selected.id} (${selected.text}) with "${answer}"`
		);
	}
</script>

{#each data as flavor}
  <button
  on:click={disable}
  on:click={() => handleFlavorClick(flavor)}
  disabled={loading}

  >{flavor} </button>
{/each}