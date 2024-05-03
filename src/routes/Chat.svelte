<script>
  import { useChat } from "ai/svelte";
  import Input from "../components/Input.svelte";

  const { input, handleSubmit, messages, error } = useChat();
</script>

<main>
  <ul>
    {#each $messages as message}
      <li>{message.role}: {message.content}</li>
    {/each}
  </ul>
  <form onsubmit={handleSubmit}>
    <Input
      bind:value={$input}
      label="Message"
      placeholder="Type a message..."
      id="message"
    />
    <button type="submit">Send</button>
  </form>
  {#if $error}
    <p>{$error}</p>
  {/if}
</main>
