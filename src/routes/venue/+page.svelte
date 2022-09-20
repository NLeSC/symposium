<script>
  import Content from "$content/venue.md";
  import Carrousel from "$components/Carrousel.svelte";

  export let data
</script>

<svelte:head>
  <title>General info</title>
</svelte:head>

<div class="max-w-screen-lg w-full mx-auto py-20 px-3">
  <div class="font-bold text-2xl">
    {data.title1}
  </div>

  <div class="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2">
    <Content/>

    <div>
      <Carrousel/>
    </div>
  </div>

  <div class="mt-20">

    <div class="font-bold text-3xl">
      Hotels
    </div>
    <p class="mt-6">
      The list of our recommended hotels are located near the Hermitage and can be easily booked through a hotel booking site.
    </p>
    <p class="mt-2">
      We will reimburse up to <b>150 euros per night </b>with a maximum of 3 nights.
    </p>
    <div class="flex flex-wrap gap-5 mx-auto mt-6">
      {#each data.hotels as hotel}
        <a href={hotel.link} class=" w-[300px] text-current p-4 items-center rounded shadow bg-white" target="_blank">
          <div class="font-bold text-md">{hotel.name}</div>
          <div class="mt-2 font-bold font-md"> €{hotel.price} <small>/night</small></div>
          <div class="mt-2 text-gray-500 text-sm">{hotel.address}</div>
        </a>
      {/each}
    </div>
  </div>


</div>
