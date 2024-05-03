<script>
    import { useChat } from 'ai/svelte';
    import Select from "../components/Select.svelte";


    const { input, handleSubmit, messages, error } = useChat();
</script>

<main>

    <Select />

    <ul>
        {#each $messages as message}
            <li>{message.role}: {message.content}</li>
        {/each}
    </ul>
    <form on:submit={handleSubmit}>
        <input bind:value={$input} />
        <button type="submit">Send</button>
    </form>
    {#if $error}
        <p>{$error}</p>
    {/if}
</main>
