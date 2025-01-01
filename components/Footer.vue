<template>
  <footer class="bg-black text-white py-8">
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Footer Grid -->
      <div class="grid gap-8 md:grid-cols-3">
        <!-- Company Info -->
        <div>
          <div class="flex space-x-2 items-center mb-4">
            <img src="/logo.svg" alt="Silk Ride Logo" class="h-12 w-12" />
            <h1 class="text-3xl font-semibold text-gold">SILK RIDE</h1>
          </div>
          <p class="text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            accusamus ex molestiae cupiditate est velit aspernatur voluptatem!
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-bold mb-3">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="/terms-of-service" class="text-gray-400 hover:text-white"
                >Terms of Service</a
              >
            </li>
            <li>
              <a href="/privacy-policy" class="text-gray-400 hover:text-white"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="/faq" class="text-gray-400 hover:text-white">FAQ</a>
            </li>
          </ul>
        </div>

        <!-- Contact and Social Media -->
        <div>
          <h3 class="text-lg font-bold mb-3">Get in Touch</h3>
          <p class="text-gray-400">Phone: 44(123) 456-7890</p>
          <p class="text-gray-400">Email: info@silkride.co.uk</p>
          <div class="flex space-x-4 mt-4">
            <!-- Social Icons -->
            <a href="#" class="text-gray-400 hover:text-white">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-facebook"
              >
                <path
                  d="M8 9H5v3h3v7h3v-7h2.8l.2-3H11V7.8c0-.5.1-.7.8-.7H12V5.1c-.2 0-.8 0-1.5 0-1.6 0-3 1-3 3v2z"
                />
              </svg>
            </a>

            <a href="#" class="text-gray-400 hover:text-white">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-instagram"
              >
                <path
                  d="M7.5 1h5A6.5 6.5 0 0 1 19 7.5v5a6.5 6.5 0 0 1-6.5 6.5h-5A6.5 6.5 0 0 1 1 12.5v-5A6.5 6.5 0 0 1 7.5 1zm0 1A5.5 5.5 0 0 0 2 7.5v5A5.5 5.5 0 0 0 7.5 18h5a5.5 5.5 0 0 0 5.5-5.5v-5A5.5 5.5 0 0 0 12.5 2h-5zm0 8A3 3 0 1 0 10.5 8a3 3 0 0 0-3 3zm1 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm4.75-4.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-8 text-center text-gray-400">
        <p>&copy; 2024 Silk Ride. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
