<script>
  import { useChat } from "ai/svelte";
  import ExampleDialog from "./ExampleDialog.svelte";
  import { Input } from "./ui/input/index";
  import { Label } from "./ui/label/index";
  import { Button } from "./ui/button/index";

  const { input, handleSubmit, messages, error } = useChat();
</script>

<main class="p-4">
  <ExampleDialog />
  <ul>
    {#each $messages as message}
      <li>{message.role}: {message.content}</li>
    {/each}
  </ul>
  <form class="space-y-2" onsubmit={handleSubmit}>
    <Label for="message" class="text-right">Message</Label>
    <Input bind:value={$input} placeholder="Type a message..." id="message" />
    <Button variant="default" type="submit">Send</Button>
  </form>
  {#if $error}
    <p>{$error}</p>
  {/if}
</main>
