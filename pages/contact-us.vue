<template>
  <div>
    <Navbar />
    <CommonHero :image="cover" :page="$t('contact.contact_us')" />
    <CommonPageIntro
      :title="$t('contact.get_in_touch')"
      :paragraph="$t('contact.friendly_team_intro')"
    />

    <div class="flex w-full max-w-screen-xl mx-auto mb-6">
      <div
        class="grid grid-cols-1 gap-6 text-center sm:gap-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <div>
          <div
            class="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg"
          >
            <!-- Icon -->
            <svg aria-hidden="true" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="mt-4">
            <h3 class="text-xl font-bold text-gray-900">{{ $t('contact.company_info_title') }}</h3>
            <p class="mt-1 text-base font-normal text-gray-500" v-html="$t('contact.company_info_text')"></p>
          </div>
        </div>

        <div>
          <div class="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg">
            <!-- Icon -->
            <svg aria-hidden="true" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="mt-4">
            <h3 class="text-xl font-bold text-gray-900">{{ $t('contact.address_title') }}</h3>
            <p class="mt-1 text-base font-normal text-gray-500" v-html="$t('contact.address_text')"></p>
          </div>
        </div>

        <div class="hidden lg:block">
          <div class="inline-flex items-center justify-center w-16 h-16 mx-auto text-gray-500 bg-gray-100 rounded-lg">
            <!-- Icon -->
            <svg aria-hidden="true" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
          </div>
          <div class="mt-4">
            <h3 class="text-xl font-bold text-gray-900">{{ $t('contact.contact_section_title') }}</h3>
            <p class="mt-1 text-base font-normal text-gray-500">{{ $t('contact.contact_section_text') }}</p>
            <a href="mailto:info@silkride.co.uk" class="block mt-1 text-base font-semibold text-gray-900 hover:underline">info@silkride.co.uk</a>
            <a href="tel:+447512905514" class="block mt-1 text-base font-semibold text-gray-900 hover:underline">+44 7512 905514</a>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex flex-col space-y-6 items-center justify-center bg-white">
      <form class="w-full grid grid-cols md:grid-cols-2 max-w-screen-xl gap-6 py-8">
        <div class="h-18 flex flex-col space-y-2">
          <label for="name" class="text-lg font-medium text-gray-700">{{ $t('contact.first_name') }}</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="w-full p-2 border border-gray-300 rounded-sm h-full"
            :placeholder="$t('contact.first_name_placeholder')"
          />
        </div>
        <div class="h-18 flex flex-col space-y-2">
          <label for="lastName" class="text-lg font-medium text-gray-700">{{ $t('contact.last_name') }}</label>
          <input
            type="text"
            id="lastName"
            v-model="form.lastName"
            required
            class="w-full p-2 border border-gray-300 rounded-sm h-full"
            :placeholder="$t('contact.last_name_placeholder')"
          />
        </div>
        <div class="h-18 flex flex-col space-y-2">
          <label for="email" class="text-lg font-medium text-gray-700">{{ $t('contact.email') }}</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="w-full p-2 border border-gray-300 rounded-sm h-full"
            :placeholder="$t('contact.email')"
          />
        </div>
        <div class="h-18 flex flex-col space-y-2">
          <label for="phone" class="text-lg font-medium text-gray-700">{{ $t('contact.phone') }}</label>
          <input
            type="tel"
            id="phone"
            v-model="form.phone"
            required
            class="w-full p-2 border border-gray-300 rounded-sm h-full"
            :placeholder="$t('contact.phone_placeholder')"
          />
        </div>
        <div class="h-18 flex flex-col space-y-2 md:col-span-2">
          <label for="message" class="text-lg font-medium text-gray-700">{{ $t('contact.message') }}</label>
          <textarea
            rows="10"
            id="message"
            v-model="form.message"
            required
            class="w-full p-2 border border-gray-300 rounded-sm h-full"
            :placeholder="$t('contact.message_placeholder')"
          />
        </div>
        <div class="h-18 flex flex-col space-y-2 md:col-span-2 items-center justify-center">
          <button
            type="submit"
            class="flex px-6 py-3 items-center justify-center border border-black text-black text-xl hover:bg-gold hover:text-black"
          >
            {{ $t('contact.send_message') }}
          </button>
        </div>
      </form>
    </div>

    <Footer />
  </div>
</template>
<script setup>
import cover from "@/assets/images/covers/contactus.webp";
const form = ref({});
</script>