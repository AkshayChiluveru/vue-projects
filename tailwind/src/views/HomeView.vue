<script setup lang="ts">


</script>

<template>
  <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div class="space-y-3 p-3 bg-slate-200 rounded-md">
    <div class="p-6 max-w-lg mx-auto bg-green-300 rounded-xl shadow-lg flex items-center space-x-8">
      <div class="shrink-0">
        <img
          class="h-12 w-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgELHAH7LTomcHcXgCO7f3GUEQ9Mx3lMlMPg&usqp=CAU"
          alt="ChitChat Logo"
        >
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-slate-500">You have a new message!</p>
      </div>
    </div>

    <div class=" px-8 max-w-lg mx-auto bg-green-300 rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        src="data:image/jpeg;base64,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"
        alt="Woman's Face"
      >
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            Erin Lindford
          </p>
          <p class="text-slate-500 font-medium">
            Product Engineer
          </p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      </div>
    </div>
    <button class="p-2 mx-auto text-white font-bold bg-blue-500 hover:bg-blue-700 hover:text-black rounded flex items-center ">Akshay</button>
    <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300 rounded-xl flex items-center mx-auto p-2">
      Save changes
    </button>

  
  </div>

  <div>
    <div class="relative inline-flex self-center mx-auto p-2">
        <select class="text-2xl font-bold rounded border-2 border-purple-700 text-gray-600 h-10 w-50 pl-4 pr-6 bg-white hover:border-gray-400 focus:outline-none appearance-none">
            <option>dash board</option>
            <option>settings</option>
            <option>Earnings</option>
            <option>button</option>
            <option>dropdown</option>
        </select>
    </div>
</div>

<div>
  <div class="flex items-center space-x-2 text-base">
    <h4 class="font-semibold text-slate-900">Contributors</h4>
    <span class="rounded-full bg-blue-300 px-2 py-1 text-xs font-semibold text-slate-700">204</span>
  </div>
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  </div>
  <div class="mt-3 text-sm font-medium">
    <a href="#" class="text-blue-500">+ 198 others</a>
  </div>
</div>

<!-- <div class="container columns-2 hover:columns-3 p-2 ">
  <img class="p-2 w-full aspect-video" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" />
  <img class="p-2 w-full aspect-square" src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" />
  <img class="p-2 w-full aspect-video" src="https://img.freepik.com/free-photo/breathtaking-shot-beautiful-stones-turquoise-water-lake-hills-background_181624-12847.jpg?w=2000" />
  <img class="p-2 w-full aspect-square" src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" />
  <img class="p-2 w-full aspect-video" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeTKrXeGgecGpLTBH929VCOhZfbQ74MsQvuaJ7WzR&s" />
  <img class="p-2 w-full aspect-square" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" />
  <img class="p-2 w-full aspect-video" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" />
  <img class="p-2 w-full aspect-square" src="https://i.pinimg.com/originals/9c/b0/70/9cb070d62dc738a0c3a1a408d68e4af5.jpg" />
  <img class="p-2 w-full aspect-video" src="https://media.istockphoto.com/photos/high-angle-view-of-a-lake-and-forest-picture-id1337232523?b=1&k=20&m=1337232523&s=170667a&w=0&h=ueU7jzT1l-Qs_i4HwtBHO00RLGwgnlzRRKcja79EOgo=" />
  <img class="p-2 w-full aspect-square" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" />
  <img class="p-2 w-full aspect-video" src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" />
  <img class="p-2 w-full aspect-square" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg" />
  
</div> -->

<div class="columns-2">
  <p >Well, let me tell you something, ...</p>
  <p>Sure, go ahead, laugh...</p>
  <p class="break-after-column">Maybe we can live without...</p>
  <p >Look. If you think this is...</p>
</div>

<span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
  Hello World
</span><br>
<span class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
  Hello<br>
  World
</span>
</div>

<div class="px-8 p-3 mt-3 mb-3 max-w-md mx-auto bg-green-300 rounded-xl shadow-lg sm:space-x-8">
  <div class="flex items-center ">
  <img class="rounded-full h-20 w-20 sm:mx-0 mx-auto block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkuP4A26vUkEZwYJL4zGV8KRxUbBmcX11Mdw&usqp=CAU">
  <div>
    <strong>Andrew Alfred</strong><br>
    <span>Technical advisor</span>
  </div>
</div>
</div>
<div class="mt-3 mb-4 flex -space-x-2 mx-3">
    <img class="hover:z-40 h-12 w-12 inline-block rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img class="z-30 h-12 w-12 inline-block rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img class="z-20 h-12 w-12 inline-block rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
    <img class="hover:z-10 h-12 w-12 inline-block rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
    <img class="z-0 h-12 w-12 inline-block rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  </div>
  <!-- <div class="flex flex-row mb-3">
    <div class="basis-1/4 hover:basis-1/2 bg-pink-500 rounded-md mx-1 text-center">11</div>
    <div class="basis-1/4 bg-pink-500  rounded-md mx-1 text-center">12</div>
    <div class="basis-1/2 bg-pink-500  rounded-md mx-1 text-center">13</div>
  </div> -->

  <!-- <div class="flex flex-col hover:flex-row">
    <div class="bg-pink-500  rounded-md mx-1 text-center">01</div>
  <div class="bg-pink-500  rounded-md mx-1 text-center">02</div>
  <div class="bg-pink-500  rounded-md mx-1 text-center">03</div>
</div> -->
<div class="flex flex-wrap hover:flex-wrap-reverse bg-blue-200 p-4 rounded-md mx-3">
  <div  class="bg-pink-500 basis-1/3 rounded-md mx-1 text-center">01</div>
  <div class="bg-pink-500 basis-1/3 rounded-md mx-1 text-center">02</div>
  <div class="bg-pink-500 basis-1/3 rounded-md mx-1 text-center">03</div>
</div>

<div class="grid grid-cols-6 gap-4 mt-4 bg-yellow-200 p-3 rounded-md mx-3">
  <div class="col-start-2 col-span-4 bg-slate-400 text-center rounded-md">01</div>
  <div class="col-start-1 col-end-3 bg-slate-400 text-center rounded-md">02</div>
  <div class="col-end-7 col-span-2 bg-slate-400 text-center rounded-md">03</div>
  <div class="col-start-1 col-end-7 bg-slate-400 text-center rounded-md">04</div>
</div>

<div class="grid grid-rows-3 mt-4 grid-flow-col gap-4 bg-blue-200 p-4 rounded-md mx-3">
  <div class="row-start-2 row-span-2 bg-slate-400 text-center rounded-md">01</div>
  <div class="row-end-3 row-span-2 bg-slate-400 text-center rounded-md">02</div>
  <div class="row-start-1 row-end-4 bg-slate-400 text-center rounded-md">03</div>
    <div class="row-start-1 row-end-2 bg-slate-400 text-center rounded-md">10</div>
    <div  class="row-end-4 row-span-1 bg-slate-400 text-center rounded-md"> 11</div>
</div>
</template>
