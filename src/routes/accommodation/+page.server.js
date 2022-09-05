import { error } from "@sveltejs/kit";
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // @ts-ignore
  const [{ metadata: content }] = await Object.values(
    import.meta.globEager("$content/accommodation.md")
  );

  if (content) {
    return content;
  }

  throw error(404, "Not found");
}
