<script>
  export let event
</script>

<div class="flex gap-3 mt-2 py-3 px-2 bg-blue-600 hover:bg-blue-800 hover:bg-opacity-10 bg-opacity-10">
    <div class="text-sm w-[120px] text-gray-400">{event.time}</div>
    <div class="text-lg w-full">{event.activity}</div>
</div>
