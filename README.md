# svelte5-spa-cloudflare starter kit

This is a starter kit for a Svelte 5 SPA on Cloudflare Pages.

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Vercel AI SDK](https://sdk.vercel.ai/docs/introduction)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn-svelte](https://github.com/shadcn/shadcn-svelte)
- [Fontsource Inter](https://fontsource.org/fonts/inter)

## Why SPA?

For when you want to keep it simple and not have to deal with server-side rendering, ever multiplying page views, and all the other stuff that comes with it.

Root layout:

`./src/routes/+layout.ts`

```ts 
export const ssr = false;
```


