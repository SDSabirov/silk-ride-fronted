<template>
    <form
    @submit.prevent="handleSubmit"
    class="max-w-screen-xl mx-auto p-6 bg-white w-full"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Name -->
      <div class="mb-4 h-14">
        <label for="name" class="block text-lg font-medium text-gray-700"
          >Name</label
        >
        <input
          type="text"
          id="name"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="John"
        />
      </div>
      <!-- Name -->
      <div class="mb-4 h-14">
        <label for="surname" class="block text-lg font-medium text-gray-700"
          >Surname</label
        >
        <input
          type="text"
          id="surname"
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Doe"
        />
      </div>

      <!-- Phone -->
      <div class="mb-4 h-14">
        <label for="phone" class="block text-lg font-medium text-gray-700"
          >Contact Number</label
        >
        <input
          type="text"
          id="phone"
          
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="+44 123456789"
        />
      </div>
      
      <!-- email -->
      <div class="mb-4 h-14">
        <label for="email" class="block text-lg font-medium text-gray-700"
          >Email</label
        >
        <input
          type="text"
          id="email"
          
          required
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="example@mail.com"
        />
      </div>

      <!-- Special Requests-->
      <div class="mb-4 h-18 md:col-span-2">
        <label
          for="specialRequests"
          class="block text-lg font-medium text-gray-700"
          >Additional  Information</label
        >
        <textarea
          id="specialRequests"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-sm h-full"
          placeholder="Any additional requirements or requests"
        ></textarea>
      </div> 
     
    </div>
    
  </form>
</template>