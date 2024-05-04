<script lang="ts">
  import Chat from "$components/Chat.svelte";

  type Store = {};

  const store: Store = $state({});
</script>

<Chat />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
