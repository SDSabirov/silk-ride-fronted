<template>
  <div>
    <Navbar />
    
    <CommonHero 
      :image="cover" 
      :page="$t('contact.contact_us')"
      :subtitle="$t('contact.heroSubtitle')"
      :showTrustBadges="false"
    />

    <!-- Contact Introduction -->
    <section class="py-16">
      <div class="max-w-screen-2xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {{ $t('contact.get_in_touch') }}
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {{ $t('contact.friendly_team_intro') }}
          </p>
        </div>

        <!-- Contact Methods -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <!-- Phone -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bx bx-phone text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('contact.phone_title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('contact.phone_description') }}</p>
            <a 
              href="tel:+447512905514" 
              class="text-gold font-semibold hover:text-gold/80 transition-colors text-lg"
            >
              +44 7512 905514
            </a>
          </div>

          <!-- Email -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bx bx-envelope text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('contact.email_title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('contact.email_description') }}</p>
            <a 
              href="mailto:info@silkride.co.uk" 
              class="text-gold font-semibold hover:text-gold/80 transition-colors text-lg"
            >
              info@silkride.co.uk
            </a>
          </div>

          <!-- WhatsApp -->
          <div class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="bx bxl-whatsapp text-white text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('contact.whatsapp_title') }}</h3>
            <p class="text-gray-600 mb-4">{{ $t('contact.whatsapp_description') }}</p>
            <a
              href="https://wa.me/447512905514?text=Hello,%20I'd%20like%20to%20request%20a%20chauffeur%20service."
              target="_blank"
              rel="noopener noreferrer"
              class="text-gold font-semibold hover:text-gold/80 transition-colors text-lg"
            >
              {{ $t('contact.message_us') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-screen-2xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Form -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('contact.send_message_title') }}</h3>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.first_name') }}
                  </label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    :placeholder="$t('contact.first_name_placeholder')"
                  />
                </div>
                
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.last_name') }}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    v-model="form.lastName"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                    :placeholder="$t('contact.last_name_placeholder')"
                  />
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.email') }}
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                  :placeholder="$t('contact.email')"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.phone') }}
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                  :placeholder="$t('contact.phone_placeholder')"
                />
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.service_type') }}
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                >
                  <option value="">{{ $t('contact.select_service') }}</option>
                  <option value="airport-transfer">{{ $t('contact.services.airport') }}</option>
                  <option value="corporate-travel">{{ $t('contact.services.corporate') }}</option>
                  <option value="wedding">{{ $t('contact.services.wedding') }}</option>
                  <option value="hourly-hire">{{ $t('contact.services.hourly') }}</option>
                  <option value="long-distance">{{ $t('contact.services.longDistance') }}</option>
                  <option value="other">{{ $t('contact.services.other') }}</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.message') }}
                </label>
                <textarea
                  rows="6"
                  id="message"
                  v-model="form.message"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-colors"
                  :placeholder="$t('contact.message_placeholder')"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-gold text-black font-semibold py-4 px-6 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">{{ $t('contact.send_message') }}</span>
                <span v-else class="flex items-center justify-center">
                  <i class="bx bx-loader-alt animate-spin mr-2"></i>
                  {{ $t('contact.sending') }}
                </span>
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Business Hours -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-6">{{ $t('contact.business_hours.title') }}</h3>
              <div class="space-y-4">
                <div class="flex justify-between">
                  <span class="text-gray-600">{{ $t('contact.business_hours.everyday') }}</span>
                  <span class="font-medium">{{ $t('contact.business_hours.available') }}</span>
                </div>
                <div class="border-t pt-4">
                  <p class="text-sm text-gray-600">{{ $t('contact.business_hours.note') }}</p>
                </div>
              </div>
            </div>

            <!-- Service Areas -->
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-xl font-semibold mb-6">{{ $t('contact.service_areas.title') }}</h3>
              <div class="space-y-3">
                <div class="flex items-start">
                  <i class="bx bx-check text-gold mr-3 mt-1"></i>
                  <span class="text-gray-600">{{ $t('contact.service_areas.london') }}</span>
                </div>
                <div class="flex items-start">
                  <i class="bx bx-check text-gold mr-3 mt-1"></i>
                  <span class="text-gray-600">{{ $t('contact.service_areas.airports') }}</span>
                </div>
                <div class="flex items-start">
                  <i class="bx bx-check text-gold mr-3 mt-1"></i>
                  <span class="text-gray-600">{{ $t('contact.service_areas.uk') }}</span>
                </div>
                <div class="flex items-start">
                  <i class="bx bx-check text-gold mr-3 mt-1"></i>
                  <span class="text-gray-600">{{ $t('contact.service_areas.europe') }}</span>
                </div>
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="bg-gold/10 p-8 rounded-lg border border-gold/20">
              <h3 class="text-xl font-semibold mb-4 text-gold">{{ $t('contact.emergency.title') }}</h3>
              <p class="text-gray-700 mb-4">{{ $t('contact.emergency.description') }}</p>
              <a 
                href="tel:+447512905514" 
                class="inline-flex items-center bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
              >
                <i class="bx bx-phone mr-2"></i>
                {{ $t('contact.emergency.call_now') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
<script setup>
import { useSeo } from '~/utils/useSeo'
import { useAnalytics } from '~/composables/useAnalytics'
import { useEngagement } from '~/composables/useEngagement'

const cover = "/images/covers/contactus.webp"
const { trackLead } = useAnalytics()

// Initialize engagement tracking for this page
useEngagement()

const form = ref({
  name: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

const isSubmitting = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate the submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Track lead conversion
    trackLead({
      form_type: 'contact_page_form',
      form_location: 'contact_page',
      service_type: form.value.service || 'not_specified'
    })

    // Reset form after successful submission
    form.value = {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };

    // You could show a success message here
    alert('Message sent successfully! We will get back to you soon.');

  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error sending your message. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};

useSeo('contactPage')
</script>