<template>
  <footer class="bg-black text-white py-8">
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Footer Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div class="hidden md:block">
          <div class="flex space-x-2 items-center mb-4">
            <img src="/logo.svg" alt="Silk Ride Logo" class="h-12 w-12" />
            <h1 class="text-3xl font-semibold text-gold">SILK RIDE</h1>
          </div>
          <p class="text-gray-300">
            Experience first-class travel across the UK & Europe with our
            premium chauffeur services. Whether for business, leisure, or
            special events, we ensure comfort, reliability, and elegance on
            every journey
          </p>

          
        </div>
        <!-- Quick Links -->
        <div class="">
            <h3 class="text-lg font-bold mb-3">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <a href="/about" class="text-gray-400 hover:text-white">About Us</a>
              </li>

              <li>
                <a href="/fleet" class="text-gray-400 hover:text-white">Our Fleet</a>
              </li>
              <li>
                <a href="/services" class="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="/blog" class="text-gray-400 hover:text-white">Blog</a>
              </li>
             
            </ul>
          </div>
        <!-- Contact and Social Media -->
        <div class="">
          <h3 class="text-lg font-bold mb-3">Get in Touch</h3>
          <p class="text-gray-400">
            Phone: <a href="tel:+447512905514">+44 7512 905514</a>
          </p>
          <p class="text-gray-400">
            Email: <a href="mailto:info@silkride.co.uk">info@silkride.co.uk</a>
          </p>
          <div class="flex space-x-4 mt-4">
            <!-- Social Icons -->
            <a
              href="https://www.instagram.com/silkrideofficial?igsh=MXAxbDAwbXBrbTc2NA=="
              target="_blank"
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-white"
            >
              <i class="bx bxl-instagram bx-sm"></i>
            </a>

            <a href="#" class="text-gray-400 hover:text-white">
              <i class="bx bxl-facebook-circle bx-sm"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="bx bxl-linkedin-square bx-sm"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="bx bxl-whatsapp bx-sm"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="mt-8 text-center text-gray-400 flex justify-between items-center flex-col md:flex-row space-y-2 md:space-y-0">
        <p>&copy; 2025 Silk Ride. All rights reserved.</p>
        <ul class="flex space-x-4 ">
          <li>
                <a
                  href="/terms-of-service"
                  class="text-gray-400 hover:text-white"
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
    </div>
  </footer>
</template>

<script setup></script>
