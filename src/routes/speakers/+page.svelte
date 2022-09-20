<script>
  import SpeakersIntroduction from "$content/speakers.md";
  import SvelteMarkdown from "svelte-markdown";

  export let data;
</script>

<svelte:head>
  <title>Speakers</title>
</svelte:head>

<div class="container mx-auto mb-16 w-full ">
  <div class=" mt-10 max-w-4xl mx-auto text-left ">
    <SpeakersIntroduction />
  </div>

  <section class="container mx-auto flex flex-wrap pb-10">
    <div class="grid gap-5 mx-auto">
      {#each data.members as member}
        <div class="flex flex-wrap p-4 items-center rounded shadow bg-white">
          <img
            class="rounded-full object-contain w-[200px] h-[200px] bg-gray-800 mx-auto"
            alt={member.name}
            src={member.image}
          />
          <div class=" p-4">
            <h4 class="mb-2 text-xl font-bold font-heading">
              {member.name}
            </h4>
            <p class="mb-4 text-gray-700 leading-loose prose">
              <SvelteMarkdown source={member.desc} />
            </p>
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>
