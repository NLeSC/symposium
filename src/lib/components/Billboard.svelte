<script>
  function scrollIntoView({ target }) {
    const el = document.querySelector(target.getAttribute('href'));
    if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }

</script>
<div class="relative flex flex-col text-white mx-auto bg-no-repeat bg-cover aspect-[7/3] m-5 max-w-screen-lg"
     style="background-image: url('/images/bill.jpg'); "
>

  <svg class="absolute bottom-0 right-0 w-[200px] sm:w-[280px]" viewBox="0 0 199 275" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd"
          d="M0 274.925H198.898V0C174.732 19.6576 158.743 53.8139 158.743 92.6589V107.263C158.743 107.266 158.742 107.268 158.741 107.269C158.739 107.272 158.736 107.274 158.732 107.274C158.727 107.274 158.722 107.279 158.722 107.285C158.733 108.002 158.743 108.719 158.743 109.437V119.492C158.743 180.422 119.404 229.815 70.8787 229.815H70.8774C41.7828 229.815 15.9907 247.572 0 274.925Z"
          fill="#19171A"/>
  </svg>

  <svg class="absolute -bottom-[1px] left-0 w-[120px] sm:w-[170px] " viewBox="0 0 104 69" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 68.5909H103.781C81.0889 27.1634 43.071 0 0.000112246 0L0 68.5909Z" fill="#F1A944"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.000112246 0L0 68.5909H103.781C81.0889 27.1634 43.071 0 0.000112246 0Z" fill="#F1A944"/>
  </svg>

  <div class="flex flex-col items-center px-[15%] py-10" style="filter: brightness(100%)">

    <div class="flex flex-col items-center font-bold mt-10 bg-black bg-opacity-75 rounded max-w-max p-4">
      <div class="text-4xl">International Funders Workshop:</div>
      <div class="text-2xl">The Future of Research Software</div>
    </div>

    <div class="text-lg font-bold mt-5  bg-opacity-75 rounded max-w-max p-4 bg-black mt-3">
      8 & 9 November 2022 Amsterdam
    </div>
    <div>
      <a href="#agenda" on:click|preventDefault={scrollIntoView} class="btn btn-primary rounded-sm shadow px-8 mt-10">
        See programme
      </a>
    </div>

  </div>


</div>
