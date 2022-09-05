<script>
  import Carrousel from "$components/Carrousel.svelte";

  export const [{ metadata: content }] = Object.values(import.meta.globEager("$content/venue.md"))
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="max-w-screen-lg w-full mx-auto pt-20 px-3">
  <div class="font-bold text-2xl">
    {content.title1}
  </div>

  <div class="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2">
    <div class="prose">
      <p>
        The workshop will take place at the <a target="_blank" href="https://hermitage.nl/en/">Dutch Hermitage Amsterdam</a>, a seventeenth-century
        building and national monument. There are several car parks and hotels within walking distance of the museum. The Hermitage
        Amsterdam is easy to reach by car and by public transport. You can also travel by boat: there is a landing right in front of
        the main entrance by the Amstel river. We recommend you take <a target="_blank" href="https://hermitage.nl/nl/plan-uw-bezoek/adres-route/">the
        Hermitage's</a> advice on how to get there.
      </p>
    </div>
    <div class="">
      <Carrousel/>
    </div>
  </div>

</div>
