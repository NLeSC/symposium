import { error } from "@sveltejs/kit";
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // @ts-ignore
  const [{ metadata }] = await Object.values(
    import.meta.globEager("$content/about.md")
  );

  if (metadata) {
    return metadata;
  }

  throw error(404, "Not found");
}
