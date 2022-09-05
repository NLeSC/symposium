import { error } from "@sveltejs/kit";
export const prerender = true;

export async function load({ params }) {
  // @ts-ignore
  const [{ metadata: menuItems }] = Object.values(
    import.meta.globEager("$content/menu-items.md")
  );
  // @ts-ignore
  const [{ metadata: agenda }] = Object.values(
    import.meta.globEager("$content/menu-items.md")
  );

  // if (metadata) {
  return { menuItems, agenda };
  // }

  throw error(404, "Not found");
}
