<script>
  export let data;
</script>

<svelte:head>
  <title>Organizers</title>
</svelte:head>

<div class="max-w-screen-lg w-full mx-auto pt-20 px-3">
  <div class="font-bold text-2xl">
    {data.title1}
  </div>

  <div class="mt-8">
    <div class="flex flex-col sm:flex-row gap-4">
      <div class="sm:w-2/3 prose">
        <p class="">
          The <a target="_blank" href="https://www.researchsoft.org/">Research Software Alliance (ReSA)</a> is an international community of professionals whose
          mission is to “bring research software communities together
          to collaborate on the advancement of the research software ecosystem.” Together, they ensure that “research software and those who develop and
          maintain
          it are recognized and valued as fundamental and vital to research worldwide.”
        </p>
        <p class="mt-8">
          The <a target="_blank" href="https://www.esciencecenter.nl/">Netherlands eScience Center</a> is a research organization that since 2012 has been
          uniquely positioned as an independent foundation, financed by the Dutch Research Council (NWO) and the Dutch organization for IT in
          education and research (SURF). It is the national centre with the digital skills to create innovative software solutions in academic software. The
          core
          activities of the eScience Center are carried out by Research Software Engineers (RSEs) who are high-end, university-level specialists who do two
          things: they do research using digital technologies and methodologies, and they engineer software.
        </p>
      </div>
      <div class="hidden sm:block sm:w-1/3 mt-6">
        <img src={data.image1} class="my-2 w-full h-auto rounded" alt="about part 2">
      </div>
    </div>
    <br>
  </div>

  <div class="font-bold text-2xl">
    {data.title2}
  </div>

  <section class="container mx-auto flex flex-wrap pb-10">
    {#each data.advisory as member}
      <div class="p-4 w-full sm:w-1/2 lg:w-1/3">
        <div class="flex flex-col h-full p-4 items-center rounded shadow bg-white">
          <img class="rounded-full object-cover w-[150px] h-[150px]" alt={member.name} src={member.image}>
          <div class="w-full lg:pl-6 p-4">
            <h4 class="mb-2 text-2xl font-bold font-heading">
              { member.name }
            </h4>
            <p class="mb-4 text-gray-700 leading-loose">{ member.desc }</p>
          </div>
        </div>
      </div>
    {/each}
  </section>


  <div class="font-bold text-2xl">
    {data.title3} (Netherlands eScience Center)
  </div>
  <section class="container mx-auto flex flex-wrap pb-10">
    {#each data.organizers as member}
      <div class="p-4 w-full sm:w-1/2 lg:w-1/3">
        <div class="flex flex-col h-full p-4 items-center rounded shadow bg-white">
          <img class="rounded-full object-cover w-[150px] h-[150px]" alt={member.name} src={member.image}>
          <div class="w-full lg:pl-6 p-4">
            <h4 class="mb-2 text-2xl font-bold font-heading">
              { member.name }
            </h4>
            <p class="mb-4 text-gray-700 leading-loose">{ member.desc }</p>
          </div>
        </div>
      </div>
    {/each}
  </section>
</div>
