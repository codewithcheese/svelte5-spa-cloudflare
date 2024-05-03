<script>
  import { useChat } from "ai/svelte";
  import Input from "../components/Input.svelte";
  import Button from "../components/Button.svelte";

  const { input, handleSubmit, messages, error } = useChat();
</script>

<main class="p-4">
  <ul>
    {#each $messages as message}
      <li>{message.role}: {message.content}</li>
    {/each}
  </ul>
  <form class="space-y-2" onsubmit={handleSubmit}>
    <Input
      bind:value={$input}
      label="Message"
      placeholder="Type a message..."
      id="message"
    />
    <Button variant="default" type="submit" text="Send" />
  </form>
  {#if $error}
    <p>{$error}</p>
  {/if}
</main>
