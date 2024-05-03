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
    class="h-10 w-[240px] rounded-md bg-white px-3 py-2 text-gray-700"
    {placeholder}
    bind:value
  />
</div>
