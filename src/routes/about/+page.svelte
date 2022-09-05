<script>
  // export const [{ metadata: content }] = Object.values(import.meta.globEager("$content/about.md"))
  export let data
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="max-w-screen-lg w-full mx-auto pt-20 px-3">

  <div class="font-bold text-2xl">
    {data.title1}
  </div>

  <img src={data.image1} class="my-10 w-full max-h-[400px] object-cover object-top rounded" alt="about part 1">
  <p class="mt-8">
    The <a target="_blank" href="https://www.researchsoft.org/">Research Software Alliance (ReSA)</a> and the <a target="_blank"
                                                                                                                 href="https://www.esciencecenter.nl/">Netherlands
    eScience Center</a> are hosting a two-day international workshop to set the future agenda for national and international funders to support sustainable
    research software.<br> <br>As the importance of software in research has become increasingly apparent, so has the urgent need to sustain it. Funders can
    play a crucial role in this respect by ensuring structural support. Over the past few years, a variety of methods for sustaining research software have been
    explored, including improving and extending funding policies and instruments. During the workshop, funding organizations will join forces to explore how
    they can effectively contribute to making research software sustainable.<br> <br>Additional support to increase accessibility will be available on request.
    Online opportunities will be provided to contribute to discussions around and during the conference, and recordings of the plenary presentations will be
    made available.<br> <br>Please note this workshop is open to national research funding organizations, by invitation. If you are interested in attending but
    have not received an invitation, please contact us at
    <a class="text-green-800 hover:underline" href="mailto:events@esciencecenter.nl">events@esciencecenter.nl</a>
  </p>

  <div class="font-bold text-2xl mt-20 mb-6">
    Why are we hosting this international workshop?
  </div>
  <p class="No rights can be derived from the information provided on this website. Although the information on this website has been compiled with the utmost care and is regularly updated, the Netherlands eScience Center cannot guarantee that it is free of errors and always up to date. As such, the eScience Center cannot be held liable for any information that might contain errors or be outdated.
All material is owned by the Netherlands eScience Center. Reproduction is permitted, except where otherwise stated, provided the source is acknowledged.
Personal profile pages of eScience Center staff do not in any way constitute official eScience data. The views and opinions expressed are strictly those of the page authors.
The Netherlands eScience Center does not guarantee that the website will function error-free or uninterrupted.
The Netherlands eScience Center website contains links to various external sites. These links are provided for reference purposes only. The Netherlands eScience Center does not necessarily endorse or recommend any entities listed on this website, nor does it necessarily share the views expressed by them. The Netherlands eScience Center cannot be held liable for any damage, loss or injury that a person or organisation may suffer as a result of any dealing with an organisation or person reached via these web pages.
The Netherlands eScience Center shall not be liable for any damages of any kind, including consequential or incidental damages, arising from the submission, installation, maintenance, transmission, copying, modification, distribution or use of any materials.">
    In this modern age, research is nearly impossible to do without research software. One of top priorities at the Netherlands eScience Center has always been
    to obtain recognition for research software and the role of research software engineers (RSEs) behind it. But the world of research is international, and
    pulling this off on a global level requires the minds of many experts across many institutions to work together.
  </p>



  <!---->
  <div class="mt-10 mb-40">
    <div class="font-bold text-xl mb-6">
      {data.title3}
    </div>
    <div class="flex gap-8">
      <div class="w-1/3">
        <img src={data.image3} class="my-2 w-full h-auto rounded" alt="about part 3">
      </div>
      <div class="w-2/3 prose text-[#1f2937]">
        <p>
          In workshop sessions, participants will discuss how funders can contribute to the following workshop themes:
        </p>
        <ul>
          <li>Structurally improving sustainability and reuse of research software</li>
          <li>Designing funding mechanisms to sustain research software communities</li>
          <li>Combining funding mechanisms to support sustainable research software</li>
          <li>Improving the research software skills of researchers and research support staff</li>
          <li>Supporting the recognition and career paths of people involved in research software</li>
        </ul>
      </div>
    </div>
  </div>
</div>
