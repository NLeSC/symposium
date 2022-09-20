import { error } from "@sveltejs/kit";
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  // @ts-ignore
  const [{ metadata }] = Object.values(
    import.meta.glob("$content/venue.md", { eager: true })
  );
  if (metadata) {
    return metadata;
  }

  throw error(404, "Not found");
}
