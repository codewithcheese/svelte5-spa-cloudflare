<script lang="ts">

  import Chat from './Chat.svelte';

  type Store = {}

  const store: Store = $state({})
</script>

<h1 class="text-3xl font-bold underline">
    Hello world!
</h1>
<Chat />

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>
