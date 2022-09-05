<script>
  import Event from "./components/Event.svelte";

  // export const [{ metadata: content }] = Object.values(import.meta.globEager("$content/agenda.md"))
  import Carrousel from "./components/Carrousel.svelte";
  export let data

</script>

<div id="agenda" class="bg-[#122114] text-white py-20 px-3">
  <div class="max-w-screen-lg w-full mx-auto">
    <div class="grid gap-5 grid-cols-1 sm:grid-cols-2">
      <div class="prose text-white">
        <div class="text-xl font-bold">
          About the workshop
        </div>
        <p class="mt-5">
          This international workshop aims to set the future agenda for national and international funders to support sustainable research software.
        </p>
        <p class="mt-5">
          Our guests
          will have the opportunity to influence the discussion at this early stage, and on the international level, to draw due attention to our shared belief
          in sustainable research software.
        </p>
        <p>
          <a class="hover:underline" href="/venue">More information about the venue here</a>
        </p>


        <div class="text-xl font-bold mt-10 mb-3">
          Contact
        </div>
        <a class="hover:underline" href="mailto:events@esciencecenter.nl">events@esciencecenter.nl</a>

      </div>
      <!-- Map -->
      <div>
        <!--        <img src={data.image1} class="my-2 w-full h-auto rounded" alt="about part 2">-->


        <Carrousel/>

      </div>

    </div>
    <!--  Agenda -->
    <div class="text-3xl text-center my-20 italic">Workshop programme</div>
    <div class="mt-20 max-w-screen-md mx-auto mb-10">
      <div>
        <div class="text-2xl font-bold mb-6">Day 0</div>
        {#each data.day0 as event}
          <Event {event}/>
        {/each}

        <div class="text-2xl font-bold mt-10 mb-6">Day 1</div>
        {#each data.day1 as event}
          <Event {event}/>
        {/each}
      </div>
      <div>
        <div class="text-2xl font-bold mt-10 mb-6">Day 2</div>
        {#each data.day2 as event}
          <Event {event}/>
        {/each}
      </div>
    </div>

  </div>
</div>
