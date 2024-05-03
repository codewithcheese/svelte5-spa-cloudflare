<script lang="ts">
  import { createLabel, melt } from "@melt-ui/svelte";

  type InputProps = {
    placeholder: string;
    id: string;
    value: string;
    label?: string;
  };

  let { placeholder, id, value = $bindable(), label }: InputProps = $props();

  const {
    elements: { root },
  } = createLabel();

  $effect(() => {
    console.log("value", value);
  });
</script>

<div class="flex flex-col items-start justify-center">
  <label
    use:melt={$root}
    for={id}
    class="mb-0.5 font-medium text-gray-900"
    data-melt-part="root"
  >
    {#if label}
      <span>{label}</span>
    {/if}
  </label>
  <input
    type="text"
    {id}
    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    {placeholder}
    bind:value
  />
</div>
