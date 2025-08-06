<template>
  <div>
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative min-h-[70vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <!-- Breadcrumb -->
          <nav class="flex items-center space-x-2 text-sm mb-6 opacity-80">
            <NuxtLink to="/" class="hover:text-gold transition-colors">Home</NuxtLink>
            <i class="bx bx-chevron-right"></i>
            <NuxtLink to="/blog" class="hover:text-gold transition-colors">Blog</NuxtLink>
            <i class="bx bx-chevron-right"></i>
            <span class="text-gold">{{ article.title }}</span>
          </nav>

          <!-- Category Badge -->
          <div class="mb-4">
            <span class="bg-gold text-black px-4 py-2 rounded-full text-sm font-bold">
              {{ article.category }}
            </span>
          </div>
          
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-6">
            {{ article.title }}
          </h1>
          
          <!-- Article Meta -->
          <div class="flex flex-wrap items-center gap-6 mb-8">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                <i class="bx bx-user text-black text-xl"></i>
              </div>
              <div>
                <p class="font-medium">{{ article.author || 'Silk Ride Team' }}</p>
                <p class="text-sm opacity-75">Travel Expert</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4 text-sm">
              <div class="flex items-center space-x-2">
                <i class="bx bx-calendar text-gold"></i>
                <time :datetime="article.date">{{ formatDate(article.date) }}</time>
              </div>
              <div class="flex items-center space-x-2">
                <i class="bx bx-time-five text-gold"></i>
                <span>{{ article.readTime || '5 min read' }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="bx bx-show text-gold"></i>
                <span>{{ article.views || '1.2K' }} views</span>
              </div>
            </div>
          </div>
          
          <p class="text-lg sm:text-xl md:text-2xl font-light opacity-90 leading-relaxed">
            {{ article.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article class="py-16">
      <div class="max-w-4xl mx-auto px-6">
        <!-- Tags -->
        <div v-if="article.tags && article.tags.length" class="flex flex-wrap gap-2 mb-8">
          <span 
            v-for="tag in article.tags" 
            :key="tag"
            class="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full hover:bg-gold hover:text-black transition-colors duration-200"
          >
            #{{ tag }}
          </span>
        </div>
        
        <!-- Article Body -->
        <div class="prose prose-lg prose-gray max-w-none">
          <!-- Dynamic content based on article slug -->
          <div v-if="article.slug === 'benefits-of-hiring-a-chauffeur'">
            <h2>Why Choose Professional Chauffeur Services?</h2>
            <p>In today's fast-paced world, luxury travel isn't just about comfort—it's about efficiency, safety, and peace of mind. Professional chauffeur services have evolved far beyond simple transportation, offering a comprehensive travel experience that transforms how you move through your day.</p>
            
            <h3>1. Unmatched Professional Expertise</h3>
            <p>Our chauffeurs undergo extensive training in defensive driving, customer service, and local knowledge. They're not just drivers—they're travel professionals who understand the nuances of luxury service and business requirements.</p>
            <ul>
              <li>Comprehensive background checks and certification</li>
              <li>Advanced defensive driving training</li>
              <li>Extensive local area knowledge</li>
              <li>Professional appearance and etiquette</li>
            </ul>

            <h3>2. Time Efficiency and Productivity</h3>
            <p>Transform travel time into productive time. While your chauffeur handles navigation and traffic, you can focus on what matters most—whether that's preparing for meetings, making calls, or simply relaxing.</p>
            
            <blockquote>
              <p>"The average executive spends 54 minutes per day in traffic. With a professional chauffeur, that becomes 54 minutes of productivity or relaxation."</p>
            </blockquote>

            <h3>3. Premium Vehicle Fleet</h3>
            <p>Our luxury vehicle fleet includes the latest models from Mercedes-Benz, BMW, and Audi, all maintained to the highest standards with premium amenities:</p>
            <ul>
              <li>Climate control and premium leather seating</li>
              <li>Wi-Fi connectivity and charging stations</li>
              <li>Privacy glass and sound insulation</li>
              <li>Complimentary refreshments and newspapers</li>
            </ul>

            <h3>4. Stress-Free Travel Experience</h3>
            <p>Eliminate the stress of driving in unfamiliar areas, finding parking, or dealing with traffic. Our chauffeurs handle all the logistics, allowing you to arrive refreshed and ready.</p>

            <h3>5. Enhanced Safety and Security</h3>
            <p>Professional chauffeur services prioritize your safety with regular vehicle maintenance, GPS tracking, and experienced drivers who know how to handle various road conditions and situations.</p>
          </div>

          <div v-else-if="article.slug === 'vip-airport-transfers-london-guide'">
            <h2>The Ultimate Guide to VIP Airport Transfers in London</h2>
            <p>London's airports handle over 150 million passengers annually, making efficient and comfortable transfers essential for travelers. Our comprehensive guide covers everything you need to know about luxury airport transfers in the UK's capital.</p>
            
            <h3>London's Major Airports</h3>
            <h4>Heathrow Airport (LHR)</h4>
            <p>The world's second-busiest airport by international passenger traffic, Heathrow is located 23 miles west of Central London. Our luxury transfers from Heathrow typically take 45-75 minutes depending on traffic and destination.</p>
            
            <h4>Gatwick Airport (LGW)</h4>
            <p>Located 30 miles south of London, Gatwick serves as a major hub for both business and leisure travelers. Transfer times to Central London range from 60-90 minutes via our premium chauffeur services.</p>
            
            <h4>Stansted Airport (STN)</h4>
            <p>Situated 42 miles northeast of London, Stansted is the UK's fourth busiest airport. Our luxury vehicles can reach Central London in approximately 60-90 minutes.</p>
            
            <h4>Luton Airport (LTN)</h4>
            <p>Located 35 miles north of London, Luton Airport serves both domestic and international flights. Transfer times to the city center typically range from 50-80 minutes.</p>

            <h3>What Makes Our VIP Service Different?</h3>
            <ul>
              <li><strong>Meet & Greet Service:</strong> Your chauffeur will meet you at arrivals with a personalized name board</li>
              <li><strong>Flight Monitoring:</strong> We track your flight to adjust pickup times for delays</li>
              <li><strong>Complimentary Wait Time:</strong> 60 minutes for international flights, 45 minutes for domestic</li>
              <li><strong>Premium Vehicle Selection:</strong> Choose from our fleet of luxury sedans and SUVs</li>
              <li><strong>24/7 Customer Support:</strong> Round-the-clock assistance for any requirements</li>
            </ul>

            <h3>Booking Your VIP Transfer</h3>
            <p>Booking is simple through our online platform or by calling our dedicated booking team. We recommend booking at least 24 hours in advance for domestic flights and 48 hours for international arrivals.</p>

            <h3>Corporate and Group Solutions</h3>
            <p>We offer specialized services for corporate travelers and groups, including multiple vehicle coordination, executive meeting facilitation, and customized billing solutions.</p>
          </div>

          <div v-else-if="article.slug === 'executive-chauffeur-business-travel'">
            <h2>Elevating Business Travel with Executive Chauffeur Services</h2>
            <p>In the competitive world of business, every detail matters. Executive chauffeur services aren't just about transportation—they're about making a statement, maximizing productivity, and ensuring you arrive at your destination ready to succeed.</p>
            
            <h3>The Business Advantage</h3>
            <p>Professional image is crucial in business. Arriving in a luxury vehicle with a professional chauffeur immediately sets the tone for successful meetings and negotiations. It demonstrates attention to detail, success, and reliability—qualities that clients and partners notice.</p>
            
            <h3>Productivity on the Move</h3>
            <p>Transform your commute into a mobile office. With Wi-Fi connectivity, privacy glass, and a quiet environment, you can:</p>
            <ul>
              <li>Prepare for presentations and meetings</li>
              <li>Conduct confidential phone calls</li>
              <li>Review documents and contracts</li>
              <li>Respond to emails without distractions</li>
              <li>Practice presentations or rehearse pitches</li>
            </ul>
            
            <blockquote>
              <p>"Time is money in business. Our executive chauffeur service ensures you never waste a moment in transit."</p>
            </blockquote>

            <h3>Corporate Event Solutions</h3>
            <p>From board meetings to client entertainment, we provide comprehensive transportation solutions for corporate events:</p>
            <ul>
              <li>Multiple vehicle coordination for large groups</li>
              <li>VIP client pickup and drop-off services</li>
              <li>Airport transfers for visiting executives</li>
              <li>Roadshow and conference transportation</li>
              <li>Corporate hospitality event support</li>
            </ul>

            <h3>Expense Management</h3>
            <p>Our corporate billing solutions make expense management simple with detailed invoicing, monthly statements, and integration with your company's accounting systems. Track all transportation expenses in one place.</p>

            <h3>Reliability You Can Count On</h3>
            <p>Business schedules are tight, and delays can be costly. Our executive chauffeur service guarantees punctuality with flight monitoring, traffic optimization, and contingency planning to ensure you're never late for important meetings.</p>
          </div>

          <div v-else-if="article.slug === 'london-luxury-day-tours-hidden-gems'">
            <h2>Discovering London's Best-Kept Secrets</h2>
            <p>Beyond the iconic landmarks lies a London few tourists ever experience. Our luxury day tours reveal hidden gems, secret gardens, and exclusive venues that showcase the city's true character and rich history.</p>
            
            <h3>The Secret Gardens of London</h3>
            <p>London is home to numerous hidden gardens and green spaces that offer tranquil escapes from the bustling city:</p>
            <ul>
              <li><strong>The Garden at 120 Fenchurch Street:</strong> A stunning rooftop garden with panoramic city views</li>
              <li><strong>Postman's Park:</strong> A peaceful memorial garden commemorating heroic sacrifices</li>
              <li><strong>The Barbican Conservatory:</strong> A tropical oasis in the heart of the city</li>
              <li><strong>Gray's Inn Gardens:</strong> Historic gardens dating back to the 14th century</li>
            </ul>

            <h3>Exclusive Cultural Experiences</h3>
            <p>Access venues and experiences typically reserved for locals or members:</p>
            <ul>
              <li>Private viewings at exclusive galleries</li>
              <li>Behind-the-scenes tours of historic theaters</li>
              <li>Members-only clubs and dining experiences</li>
              <li>Private guided tours of royal residences</li>
              <li>Exclusive wine tastings and culinary experiences</li>
            </ul>

            <blockquote>
              <p>"London reveals its secrets to those who know where to look. Our local expertise opens doors that remain closed to ordinary tourists."</p>
            </blockquote>

            <h3>Historic London Mysteries</h3>
            <p>Explore the darker side of London's history with visits to:</p>
            <ul>
              <li>The Roman Amphitheatre beneath the Guildhall</li>
              <li>Medieval crypts and ancient burial grounds</li>
              <li>Secret tunnels and wartime bunkers</li>
              <li>Historic pubs with centuries-old stories</li>
              <li>Jack the Ripper's Victorian London</li>
            </ul>

            <h3>Luxury Shopping Secrets</h3>
            <p>Discover exclusive boutiques, vintage shops, and artisan workshops off the beaten path. Our chauffeurs know the best places for unique finds, from Savile Row tailors to antique markets in hidden courtyards.</p>

            <h3>Culinary Hidden Gems</h3>
            <p>Experience London's incredible food scene beyond famous restaurants. We'll take you to:</p>
            <ul>
              <li>Secret supper clubs in converted warehouses</li>
              <li>Family-run establishments with century-old recipes</li>
              <li>Hidden speakeasies and prohibition-era bars</li>
              <li>Artisan food markets and specialty producers</li>
            </ul>
          </div>

          <div v-else-if="article.slug === 'wedding-chauffeur-services-perfect-day'">
            <h2>Making Your Wedding Day Transportation Perfect</h2>
            <p>Your wedding day should be flawless from start to finish. Professional wedding chauffeur services ensure that transportation is one less thing to worry about, allowing you to focus on celebrating your special day.</p>
            
            <h3>Bridal Arrival in Style</h3>
            <p>Make a grand entrance that matches the significance of your day. Our luxury wedding vehicles include:</p>
            <ul>
              <li>Classic Rolls-Royce and Bentley models</li>
              <li>Modern luxury sedans with elegant styling</li>
              <li>Vintage cars for themed weddings</li>
              <li>Spacious vehicles to accommodate full bridal gowns</li>
            </ul>

            <h3>Stress-Free Wedding Party Transportation</h3>
            <p>Coordinate transportation for your entire wedding party with military precision:</p>
            <ul>
              <li>Synchronized arrivals at the ceremony venue</li>
              <li>Group transportation for bridesmaids and groomsmen</li>
              <li>VIP transport for parents and special guests</li>
              <li>Backup vehicles for unexpected needs</li>
            </ul>

            <blockquote>
              <p>"A wedding chauffeur doesn't just drive—they're part of your wedding team, ensuring every moment runs smoothly."</p>
            </blockquote>

            <h3>Photo Opportunity Coordination</h3>
            <p>Your chauffeur can coordinate with your photographer to create stunning shots:</p>
            <ul>
              <li>Positioning vehicles for optimal photo opportunities</li>
              <li>Timing arrivals for perfect lighting</li>
              <li>Providing props like umbrellas for weather protection</li>
              <li>Creating dramatic backdrops with luxury vehicles</li>
            </ul>

            <h3>Guest Transportation Solutions</h3>
            <p>Ensure your guests arrive safely and on time with our comprehensive guest transportation services:</p>
            <ul>
              <li>Shuttle services from hotels to venues</li>
              <li>Airport transfers for out-of-town guests</li>
              <li>Evening transportation to prevent drink-driving</li>
              <li>Elderly or disabled guest assistance</li>
            </ul>

            <h3>The Perfect Getaway</h3>
            <p>End your celebration with a romantic departure. Whether heading to your honeymoon or simply home, leave in style with rose petals, champagne, and the perfect send-off from your guests.</p>

            <h3>Planning and Coordination</h3>
            <p>Our wedding specialists work with you months in advance to create a detailed transportation timeline, ensuring every aspect is perfectly coordinated with your wedding planner and venue.</p>
          </div>

          <div v-else-if="article.slug === 'heathrow-airport-transfer-terminal-guide'">
            <h2>Mastering Heathrow Airport Transfers</h2>
            <p>Heathrow Airport is one of the world's busiest international airports, serving over 80 million passengers annually. Navigating its five terminals and surrounding roads can be challenging, but our comprehensive guide ensures smooth luxury transfers every time.</p>
            
            <h3>Understanding Heathrow's Terminal Layout</h3>
            <h4>Terminal 2 - The Queen's Terminal</h4>
            <p>Home to Star Alliance airlines including United Airlines, Lufthansa, and Air Canada. Our chauffeurs use the dedicated pickup area on the arrivals level, with easy access to the M25 for onward journeys.</p>
            
            <h4>Terminal 3</h4>
            <p>Serving primarily Oneworld alliance airlines including British Airways long-haul flights, American Airlines, and Cathay Pacific. The pickup point is clearly marked, with covered waiting areas for passenger comfort.</p>
            
            <h4>Terminal 4</h4>
            <p>Located south of the main airport complex, Terminal 4 serves airlines like KLM, Air France, and Emirates. Allow extra time for transfers as it requires crossing the airport perimeter.</p>
            
            <h4>Terminal 5</h4>
            <p>British Airways' flagship terminal, exclusively serving BA and Iberia flights. The most modern terminal with excellent facilities and efficient pickup arrangements.</p>

            <h3>Optimal Pickup Strategies</h3>
            <p>Our experienced chauffeurs employ proven strategies for efficient Heathrow pickups:</p>
            <ul>
              <li><strong>Flight Tracking:</strong> Real-time monitoring of arrival times and gate assignments</li>
              <li><strong>Terminal Positioning:</strong> Pre-positioning in the correct terminal based on airline and flight details</li>
              <li><strong>Traffic Analysis:</strong> Using advanced route planning to avoid congestion</li>
              <li><strong>Alternative Routes:</strong> Knowledge of back roads and shortcuts for peak times</li>
            </ul>

            <blockquote>
              <p>"Heathrow handles 1,300 flights daily. Our local expertise ensures you're met on time, every time."</p>
            </blockquote>

            <h3>Best Routes to Central London</h3>
            <p>Multiple route options depending on destination and traffic conditions:</p>
            <ul>
              <li><strong>M4 Corridor:</strong> Fastest route to West London, Kensington, and Chelsea</li>
              <li><strong>A4/Great West Road:</strong> Scenic route through Chiswick and Hammersmith</li>
              <li><strong>M25/M40:</strong> Best for North West London and avoiding city center</li>
              <li><strong>A40/Westway:</strong> Direct route to Paddington and Marylebone areas</li>
            </ul>

            <h3>Peak Time Considerations</h3>
            <p>Heathrow experiences varying traffic patterns throughout the day:</p>
            <ul>
              <li><strong>Morning Rush (7-9 AM):</strong> Heavy inbound traffic to London</li>
              <li><strong>Evening Rush (5-7 PM):</strong> Congestion leaving London</li>
              <li><strong>Friday Afternoons:</strong> Increased leisure travel</li>
              <li><strong>Sunday Evenings:</strong> Business travelers returning</li>
            </ul>

            <h3>Premium Services Available</h3>
            <p>Enhance your Heathrow transfer experience with our premium add-ons:</p>
            <ul>
              <li>Meet and Greet with personal name boards</li>
              <li>Porter assistance for luggage handling</li>
              <li>Fast-track immigration services</li>
              <li>Complimentary refreshments in the vehicle</li>
              <li>Wi-Fi and device charging facilities</li>
            </ul>
          </div>

          <div v-else>
            <!-- Generic article content for remaining articles -->
            <h2>Professional Travel Excellence</h2>
            <p>This article explores the various aspects of luxury travel and professional chauffeur services, providing insights into how premium transportation can enhance your travel experience.</p>
            
            <h3>Key Benefits</h3>
            <p>Professional chauffeur services offer numerous advantages for both business and leisure travelers, from enhanced comfort and safety to improved productivity and stress reduction.</p>
            
            <ul>
              <li>Professional, experienced drivers</li>
              <li>Luxury vehicle fleet</li>
              <li>24/7 customer support</li>
              <li>Flexible scheduling options</li>
              <li>Corporate billing solutions</li>
            </ul>
            
            <h3>Service Excellence</h3>
            <p>Our commitment to service excellence ensures that every journey meets the highest standards of luxury and professionalism, making your travel experience memorable for all the right reasons.</p>
            
            <blockquote>
              <p>"Excellence is not a skill, it's an attitude that we bring to every journey."</p>
            </blockquote>
            
            <h3>Getting Started</h3>
            <p>Ready to experience the difference that professional chauffeur services can make? Contact us today to discuss your requirements and discover how we can enhance your travel experience.</p>
          </div>
        </div>
        
        <!-- Share Section -->
        <div class="border-t border-gray-200 pt-8 mt-12">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-lg font-semibold text-black mb-2">Share this article</h3>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-gold transition-colors">
                  <i class="bx bxl-twitter text-xl"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-gold transition-colors">
                  <i class="bx bxl-facebook text-xl"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-gold transition-colors">
                  <i class="bx bxl-linkedin text-xl"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-gold transition-colors">
                  <i class="bx bx-envelope text-xl"></i>
                </a>
              </div>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-500">Published on</p>
              <p class="font-medium">{{ formatDate(article.date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Author Bio -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-4xl mx-auto px-6">
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <div class="flex items-start space-x-6">
            <div class="w-20 h-20 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
              <i class="bx bx-user text-black text-2xl"></i>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-black mb-2">{{ article.author || 'Silk Ride Team' }}</h3>
              <p class="text-gold font-medium mb-3">Travel & Transportation Expert</p>
              <p class="text-gray-600 leading-relaxed">
                With years of experience in luxury travel and professional transportation services, our team of experts shares insights and tips to enhance your travel experience. From airport transfers to destination tours, we're passionate about delivering exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="py-16">
      <div class="max-w-screen-xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-heading font-bold text-black mb-4">Related Articles</h2>
          <p class="text-gray-600">Continue exploring our luxury travel insights</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article
            v-for="relatedArticle in relatedArticles"
            :key="relatedArticle.id"
            class="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div class="relative overflow-hidden aspect-[16/10]">
              <img
                :src="relatedArticle.image"
                :alt="relatedArticle.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div class="absolute top-4 left-4">
                <span class="bg-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                  {{ relatedArticle.category }}
                </span>
              </div>
            </div>
            
            <div class="p-6">
              <div class="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                <i class="bx bx-calendar text-gold"></i>
                <time :datetime="relatedArticle.date">{{ formatDate(relatedArticle.date) }}</time>
              </div>
              
              <h3 class="text-lg font-bold text-black mb-3 line-clamp-2 group-hover:text-gold transition-colors duration-200">
                <NuxtLink :to="`/blog/${relatedArticle.slug}`">
                  {{ relatedArticle.title }}
                </NuxtLink>
              </h3>
              
              <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                {{ relatedArticle.description }}
              </p>
              
              <NuxtLink
                :to="`/blog/${relatedArticle.slug}`"
                class="inline-flex items-center space-x-1 text-gold hover:text-yellow-600 font-medium text-sm transition-colors duration-200"
              >
                <span>Read More</span>
                <i class="bx bx-right-arrow-alt"></i>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-black to-gray-800 text-white py-16">
      <div class="max-w-screen-xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">Experience Luxury Travel</h2>
        <p class="text-xl mb-8 opacity-90">
          Ready to experience the premium service described in this article?
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/booking"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Your Journey
          </NuxtLink>
          <a
            href="tel:+447512905514"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            <i class="bx bx-phone mr-2"></i>
            Call +44 7512 905514
          </a>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import placeHolder from "~/assets/images/womanpassenger.webp"

// Get the route parameter
const route = useRoute()
const slug = route.params.slug

// Blog posts data (same as in index.vue)
const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Benefits of Hiring a Professional Chauffeur Service',
    description: 'Discover how professional chauffeurs elevate your travel experience with luxury, safety, and convenience for business and leisure trips.',
    image: placeHolder,
    date: '2025-01-15',
    slug: 'benefits-of-hiring-a-chauffeur',
    category: 'Luxury Travel',
    readTime: '6 min read',
    author: 'Silk Ride Team',
    tags: ['chauffeur-service', 'luxury-travel', 'business-travel', 'convenience'],
    views: '2.1K'
  },
  {
    id: 2,
    title: 'Complete Guide to VIP Airport Transfers in London',
    description: 'Everything you need to know about luxury airport pickups, from booking to arrival - make your journey seamless with our comprehensive guide.',
    image: placeHolder,
    date: '2025-01-12',
    slug: 'vip-airport-transfers-london-guide',
    category: 'Airport Transfers',
    readTime: '8 min read',
    author: 'Silk Ride Team',
    tags: ['airport-transfers', 'heathrow', 'gatwick', 'vip-service'],
    views: '1.8K'
  },
  {
    id: 3,
    title: 'Business Travel Excellence: Executive Chauffeur Services',
    description: 'How executive chauffeur services enhance productivity and professional image for business travelers and corporate events.',
    image: placeHolder,
    date: '2025-01-10',
    slug: 'executive-chauffeur-business-travel',
    category: 'Business Travel',
    readTime: '5 min read',
    author: 'Silk Ride Team',
    tags: ['executive-travel', 'business-chauffeur', 'corporate-services', 'productivity'],
    views: '1.5K'
  },
  {
    id: 4,
    title: 'Hidden Gems of London: Luxury Day Tours',
    description: 'Explore London\'s secret attractions and exclusive experiences with our curated luxury day tours and chauffeur-guided adventures.',
    image: placeHolder,
    date: '2025-01-08',
    slug: 'london-luxury-day-tours-hidden-gems',
    category: 'London Destinations',
    readTime: '10 min read',
    author: 'Silk Ride Team',
    tags: ['london-tours', 'luxury-experiences', 'hidden-gems', 'sightseeing'],
    views: '3.2K'
  }
]

// Find the current article
const article = computed(() => {
  const found = blogPosts.find(post => post.slug === slug)
  if (!found) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }
  return found
})

// Get related articles (same category, excluding current)
const relatedArticles = computed(() => {
  return blogPosts
    .filter(post => post.category === article.value.category && post.id !== article.value.id)
    .slice(0, 3)
})

// SEO setup
useSeo('blogPost', {
  title: article.value.title,
  description: article.value.description
})

// Format date function
const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

// Structured data for article
useSchemaOrg([
  defineArticle({
    headline: article.value.title,
    description: article.value.description,
    image: article.value.image,
    datePublished: article.value.date,
    dateModified: article.value.date,
    author: [
      {
        '@type': 'Person',
        name: article.value.author || 'Silk Ride Team'
      }
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Silk Ride',
      url: 'https://silkride.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://silkride.co.uk/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://silkride.co.uk/blog/${article.value.slug}`
    }
  })
])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose {
  color: #374151;
}

.prose h2 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #111827;
}

.prose h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #111827;
}

.prose h4 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.75rem;
  color: #111827;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.prose ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose blockquote {
  border-left: 4px solid #D97706;
  padding-left: 1rem;
  margin: 2rem 0;
  font-style: italic;
  background: #FEF3C7;
  padding: 1rem;
  border-radius: 0.5rem;
}

.prose blockquote p {
  margin-bottom: 0;
  color: #92400E;
}

.prose strong {
  font-weight: 600;
  color: #111827;
}
</style>