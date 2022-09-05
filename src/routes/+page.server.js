import { error } from "@sveltejs/kit";
export const prerender = true;

export async function load({ params }) {
  // @ts-ignore
  const [{ metadata: participants }] = Object.values(
    import.meta.globEager("$content/participants.md")
  );
  // @ts-ignore
  const [{ metadata: agenda }] = Object.values(
    import.meta.globEager("$content/agenda.md")
  );

  // if (metadata) {
  return { participants, agenda };
  // }

  throw error(404, "Not found");
}
