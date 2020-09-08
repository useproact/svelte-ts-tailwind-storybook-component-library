<script>
	export let name;
	var c = 'test';
</script>

<h1 class="bg-gray-500">hello, {name}!</h1>
<div class="custom" />

<style>
	h1 {
		@apply text-purple-500;
	}
	.custom {
		@apply text-red-100;
	}
</style>
