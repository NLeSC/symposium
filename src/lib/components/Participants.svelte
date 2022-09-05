<script>
  export let data
</script>

<div id="participants" class="p-10 flex flex-wrap gap-10 container mx-auto my-20">
  <h2 class="text-2xl font-medium ">Confirmed participants</h2>
  <div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    {#each data as item}
      <a class="mt-6 hover:border-amber-500 hover:shadow-amber-500 transition-shadow rounded shadow bg-white p-4 flex flex-col items-center text-[#374151] hover:no-underline "
         target="_blank" href={item.link}>
        <img class="h-[80px] object-contain" src="{item.image}" alt="{item.image}"/>
        <div class="w-full lg:pl-6 p-4">
          <h4 class="mb-2 text-xl font-medium font-heading">
            {#if item.name}
              {item.name}
            {/if}
          </h4>
          <p class="mb-4 text-gray-400 text-sm leading-loose">
            {#if item.country}
              {item.country}
            {/if}
          </p>
        </div>
      </a>
    {/each}
  </div>
</div>









