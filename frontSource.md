here is exaple of the front

# 🎨 PHASE 2 — UI/UX STRUCTURE (USING YOUR TEMPLATE)

## 🎯 Goal

Turn your template into a **real business website** by adding the right sections, content, and flow.

---

## 🏠 1. HOME PAGE (Most important page)

### ✅ Must-have sections (in order)

### 🔹 Hero Section (Top)

* Big headline:

  > “Premium Limo & Transportation Services in Georgia”
* Subtext:

  > “Reliable, luxury rides for airport, weddings, and events”
* Buttons:

  * **Book Now**
  * **Request Quote**

---

### 🔹 Services Preview

* Show:

  * Airport transfer
  * Wedding
  * Prom
  * Dinner
  * Events
* Each with:

  * Icon/image
  * Short description

---

### 🔹 Why Choose Us

* 3–4 points:

  * Professional drivers
  * On-time service
  * Luxury vehicles
  * Available same-day & scheduled

---

### 🔹 Booking CTA (Call-To-Action)

* Section with button:

  > “Book your ride today”
* Link to booking page

---

### 🔹 Testimonials (if available)

* 2–3 sample reviews

---

### 🔹 Contact CTA

* Phone number
* Quick contact button

---

## 🚗 2. SERVICES PAGE

### ✅ Must-have sections

### 🔹 Services List (Detailed)

Each service:

* Title (Airport, Wedding, etc.)
* Short description
* Optional image

---

### 🔹 How It Works

Simple steps:

1. Book online
2. We contact you
3. Ride confirmed

---

### 🔹 CTA Section

* “Book Now” button again

---

## 📅 3. BOOKING PAGE (CORE FEATURE 🔥)

### ✅ Must-have fields

### 🔹 Booking Form

* Full Name
* Phone Number
* Pickup Location
* Drop-off Location
* Date
* Time ✅ (important for calendar)
* Service Type (dropdown)

---

### 🔹 Submit Button

* “Request Booking”

---

### 🔹 UX details (important)

* Required field validation
* Success message:

  > “We will contact you shortly”

---

## 💬 4. CONTACT PAGE

### ✅ Must-have sections

### 🔹 Contact Form

* Name
* Phone
* Message

---

### 🔹 Business Info

* Phone number
* Service area (Georgia)

---

### 🔹 Optional

* Google Maps embed

---

## 📝 5. QUOTE REQUEST (can be separate or combined)

### Option A (simple)

👉 Same as booking form

### Option B

👉 Add button:

* “Request Quote”

---

## ⭐ 6. REVIEWS / TESTIMONIALS PAGE

### ✅ Must-have

* Customer name
* Message
* Rating (optional)

---

## 🔐 7. ADMIN DASHBOARD (Simple UI)

(No need to overdesign — keep it clean)

### ✅ Must-have sections

### 🔹 Bookings List

* Name
* Phone
* Date & Time
* Service
* Status

---

### 🔹 Actions

* Confirm
* Complete
* Delete (optional)

---

### 🔹 Calendar View (simple version)

* Group bookings by date

---

### 🔹 Google Calendar Button

* “Add to Google Calendar”

---

## 🔁 8. NAVIGATION (IMPORTANT)

Make sure your navbar includes:

* Home
* Services
* Booking
* Contact

👉 Keep it simple — no clutter

---

## 📱 9. RESPONSIVENESS (CRITICAL)

Make sure:

* Forms work on mobile
* Buttons are clickable
* Text is readable

---

## ⚡ CRITICAL vs OPTIONAL (Phase 2)

### 🔴 MUST HAVE

* Booking form
* Clear CTA buttons
* Services display
* Navigation

### 🟡 IMPORTANT

* Testimonials
* Contact info

### 🟢 OPTIONAL

* Animations
* Fancy transitions

---

## 🧠 Real-world advice

Don’t just “place sections” — make sure:

* Every page has a purpose
* Every section pushes user to **book or contact**

👉 This is what makes it a **real business website**

---

## ✅ PHASE 2 DONE

Now you have:

* ✔ Exact sections to add
* ✔ Clear structure
* ✔ No guessing

---
<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Book Your Journey | Atladdis Transportation Service LLC</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Noto+Serif:ital,wght@0,400;0,700;1,400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-tertiary-container": "#254188",
              "inverse-surface": "#e5e2e1",
              "surface": "#131313",
              "tertiary": "#bfcdff",
              "surface-container": "#201f1f",
              "secondary": "#eac249",
              "primary-fixed": "#ffe088",
              "outline": "#99907c",
              "error-container": "#93000a",
              "tertiary-fixed-dim": "#b4c5ff",
              "primary-container": "#d4af37",
              "error": "#ffb4ab",
              "surface-bright": "#393939",
              "primary-fixed-dim": "#e9c349",
              "on-surface": "#e5e2e1",
              "on-tertiary-fixed": "#00174b",
              "on-secondary-fixed": "#241a00",
              "surface-dim": "#131313",
              "outline-variant": "#4d4635",
              "secondary-fixed-dim": "#eac249",
              "inverse-primary": "#735c00",
              "surface-container-low": "#1c1b1b",
              "on-primary-container": "#554300",
              "on-secondary": "#3d2f00",
              "on-background": "#e5e2e1",
              "on-primary": "#3c2f00",
              "surface-container-high": "#2a2a2a",
              "on-primary-fixed": "#241a00",
              "secondary-fixed": "#ffe08b",
              "on-error": "#690005",
              "on-error-container": "#ffdad6",
              "primary": "#f2ca50",
              "surface-container-lowest": "#0e0e0e",
              "secondary-container": "#b08c10",
              "surface-container-highest": "#353534",
              "on-tertiary-fixed-variant": "#27438a",
              "tertiary-fixed": "#dbe1ff",
              "on-secondary-container": "#352800",
              "on-primary-fixed-variant": "#574500",
              "on-surface-variant": "#d0c5af",
              "surface-tint": "#e9c349",
              "inverse-on-surface": "#313030",
              "background": "#131313",
              "tertiary-container": "#97b0ff",
              "on-secondary-fixed-variant": "#584400",
              "surface-variant": "#353534",
              "on-tertiary": "#082b72"
            },
            fontFamily: {
              "headline": ["Noto Serif"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(19, 19, 19, 0.7);
            backdrop-filter: blur(20px);
        }
        input:focus {
            outline: none !important;
            border-bottom-color: #f2ca50 !important;
            box-shadow: none !important;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
<!-- TopNavBar Navigation Shell -->
<nav class="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl shadow-2xl shadow-black/60 flex justify-between items-center px-8 py-6 max-w-full mx-auto">
<div class="text-2xl font-serif italic text-[#D4AF37] tracking-widest uppercase">Atladdis</div>
<!-- Desktop Links -->
<div class="hidden md:flex items-center gap-10">
<a class="font-['Inter'] text-sm tracking-widest uppercase text-[#e5e2e1] hover:text-[#f2ca50] transition-colors" href="../home_atladdis_transportation/code.html">Home</a>
<a class="font-['Inter'] text-sm tracking-widest uppercase text-[#e5e2e1] hover:text-[#f2ca50] transition-colors" href="../services_atladdis_transportation/code.html">Services</a>
<a class="font-['Inter'] text-sm tracking-widest uppercase text-[#e5e2e1] hover:text-[#f2ca50] transition-colors" href="#">Fleet</a>
<a class="font-['Inter'] text-sm tracking-widest uppercase text-[#e5e2e1] hover:text-[#f2ca50] transition-colors" href="#">About</a>
<a class="font-['Inter'] text-sm tracking-widest uppercase text-[#e5e2e1] hover:text-[#f2ca50] transition-colors" href="#">Contact</a>
</div>
<div class="flex items-center gap-4">
<button class="hidden lg:block text-[#e5e2e1] hover:opacity-80 transition-all duration-300 font-label text-xs uppercase tracking-[0.2em]">Request Quote</button>
<a href="../book_now_atladdis_transportation/code.html" class="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-xs uppercase tracking-[0.2em] px-6 py-3 rounded-sm scale-95 active:scale-90 transition-transform inline-block">Book Now</a>
</div>
</nav>
<main class="pt-24 lg:pt-32">
<!-- Hero Section -->
<section class="relative h-[409px] md:h-[512px] flex items-center justify-center overflow-hidden px-8">
<div class="absolute inset-0 z-0">
<img class="w-full h-full object-cover opacity-40 grayscale" data-alt="luxury black limousine parked in front of a modern architectural building with dramatic evening lighting and deep shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt__GMPAWu0HLUr0ErlsCbnOOdQkOpUWK94Q9Uhx0Ky5lks_vXLF3OVk-soh6EGIRAJgAso__VPg7LZeac2budzetGbk7LPpmrHsTWQwoEduPgrsPNQAeIeDLbeNbI08f8ni5sqmfghZMfO6_ma8_HwZEv6yN410w80tetPxdxJsNIhwmMkpRE8LvutzeRzngy4uqTwaa4grhIFndad_iQYlqSkdLkqZkq46EUwBNd_NBgWoYlsDPINEDbCMFA24_xlVsHUzc9XCw"/>
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
</div>
<div class="relative z-10 text-center max-w-4xl">
<span class="text-primary font-label text-xs uppercase tracking-[0.4em] mb-4 block">Reservation Portal</span>
<h1 class="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6">Book Your Journey</h1>
<div class="h-px w-24 bg-primary mx-auto opacity-50"></div>
</div>
</section>
<!-- Booking & Quote Section -->
<section class="max-w-7xl mx-auto px-6 md:px-12 pb-32">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<!-- Main Booking Form (Asymmetric larger column) -->
<div class="lg:col-span-8 space-y-12">
<div class="bg-surface-container-low p-8 md:p-12 shadow-2xl relative overflow-hidden">
<!-- Decorative element -->
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 -mr-16 -mt-16 rounded-full blur-3xl"></div>
<form class="space-y-12">
<!-- Step 1: Personal -->
<div class="space-y-8">
<div class="flex items-center gap-4">
<span class="font-headline italic text-2xl text-primary/40">01</span>
<h2 class="font-headline text-2xl text-on-surface">Client Particulars</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="relative group">
<label class="font-label text-[10px] uppercase tracking-widest text-outline mb-2 block group-focus-within:text-primary transition-colors">Full Name</label>
<input class="w-full bg-surface-container-highest border-b border-outline/20 px-0 py-3 text-on-surface placeholder:text-outline/40" placeholder="Johnathan Sterling" type="text"/>
</div>
<div class="relative group">
<label class="font-label text-[10px] uppercase tracking-widest text-outline mb-2 block group-focus-within:text-primary transition-colors">Email Address</label>
<input class="w-full bg-surface-container-highest border-b border-outline/20 px-0 py-3 text-on-surface placeholder:text-outline/40" placeholder="sterling@example.com" type="email"/>
</div>
<div class="relative group md:col-span-2">
<label class="font-label text-[10px] uppercase tracking-widest text-outline mb-2 block group-focus-within:text-primary transition-colors">Phone Number</label>
<input class="w-full bg-surface-container-highest border-b border-outline/20 px-0 py-3 text-on-surface placeholder:text-outline/40" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
</div>
<!-- Step 2: Itinerary -->
<div class="space-y-8">
<div class="flex items-center gap-4">
<span class="font-headline italic text-2xl text-primary/40">02</span>
<h2 class="font-headline text-2xl text-on-surface">Itinerary Details</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="md:col-span-2 relative group">
<label class="font-label text-[10px] uppercase tracking-widest text-outline mb-2 block group-focus-within:text-primary transition-colors">Pickup Location</label>
<input class="w-full bg-surface-container-highest border-b border-outline/20 px-0 py-3 text-on-surface placeholder:text-outline/40" placeholder="Hotel, Airport, or Residential Address" type="text"/>
</div>
<div class="md:col-span-2 relative group">
<label class="font-label text-[10px] uppercase tracking-widest text-outline mb-2 block group-focus-within:text-primary transition-colors">Drop-off Location</label>
<input class="w-full bg-surface-container-highest border-b border-outline/20 px-0 py-3 text-on-surface placeholder:text-outline/40" placeholder="Final Destination" type="text"/>
</div>
<div class="relative group">
<label class="font-label text-[10px] uppercase tracking-widest text-outline mb-2 block group-focus-within:text-primary transition-colors">Date</label>
<input class="w-full bg-surface-container-highest border-b border-outline/20 px-0 py-3 text-on-surface" type="date"/>
</div>
<div class="relative group">
<label class="font-label text-[10px] uppercase tracking-widest text-outline mb-2 block group-focus-within:text-primary transition-colors">Time</label>
<input class="w-full bg-surface-container-highest border-b border-outline/20 px-0 py-3 text-on-surface" type="time"/>
</div>
<div class="relative group md:col-span-2">
<label class="font-label text-[10px] uppercase tracking-widest text-outline mb-2 block group-focus-within:text-primary transition-colors">Number of Passengers</label>
<select class="w-full bg-surface-container-highest border-b border-outline/20 px-0 py-3 text-on-surface appearance-none focus:ring-0">
<option>1 Passenger</option>
<option>2 Passengers</option>
<option>3-4 Passengers</option>
<option>5-7 Passengers</option>
<option>Large Group (8+)</option>
</select>
</div>
</div>
</div>
<!-- Step 3: Fleet Selection -->
<div class="space-y-8">
<div class="flex items-center gap-4">
<span class="font-headline italic text-2xl text-primary/40">03</span>
<h2 class="font-headline text-2xl text-on-surface">Vehicle Preference</h2>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<!-- Selection Card -->
<label class="relative cursor-pointer group">
<input checked="" class="peer sr-only" name="vehicle" type="radio"/>
<div class="bg-surface-container p-6 border border-transparent peer-checked:border-primary transition-all duration-300">
<span class="material-symbols-outlined text-primary mb-4" style="font-variation-settings: 'FILL' 1;">directions_car</span>
<p class="font-label text-[10px] uppercase tracking-widest text-on-surface">Luxury Sedan</p>
</div>
</label>
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="vehicle" type="radio"/>
<div class="bg-surface-container p-6 border border-transparent peer-checked:border-primary transition-all duration-300">
<span class="material-symbols-outlined text-outline group-hover:text-primary mb-4">airport_shuttle</span>
<p class="font-label text-[10px] uppercase tracking-widest text-on-surface">Executive SUV</p>
</div>
</label>
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="vehicle" type="radio"/>
<div class="bg-surface-container p-6 border border-transparent peer-checked:border-primary transition-all duration-300">
<span class="material-symbols-outlined text-outline group-hover:text-primary mb-4">airport_shuttle</span>
<p class="font-label text-[10px] uppercase tracking-widest text-on-surface">Limousine</p>
</div>
</label>
</div>
</div>
<div class="pt-8">
<button class="w-full py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-sm uppercase tracking-[0.3em] font-bold shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all" type="submit">
                                    Confirm Reservation
                                </button>
</div>
</form>
</div>
</div>
<!-- Sidebar Content (Asymmetric smaller column) -->
<aside class="lg:col-span-4 space-y-12">
<!-- Request a Quote -->
<div class="bg-surface-container-high p-8 space-y-6">
<h3 class="font-headline text-xl text-on-surface">Custom Quotation</h3>
<p class="text-sm text-outline leading-relaxed font-light">For special events, long-distance travel, or corporate fleet requirements, please describe your needs below.</p>
<textarea class="w-full bg-surface-container-lowest border-b border-outline/20 px-0 py-3 text-on-surface placeholder:text-outline/40 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us more about your requirements..." rows="4"></textarea>
<button class="w-full py-4 border border-outline-variant text-primary font-label text-xs uppercase tracking-widest hover:bg-primary/5 transition-colors">
                            Submit Inquiry
                        </button>
</div>
<!-- Trust Indicators -->
<div class="space-y-8 px-4">
<div class="flex items-start gap-5">
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">verified_user</span>
<div>
<h4 class="font-label text-xs uppercase tracking-widest text-on-surface mb-1">Secure Booking</h4>
<p class="text-[12px] text-outline leading-relaxed">End-to-end encryption for your personal and payment data.</p>
</div>
</div>
<div class="flex items-start gap-5">
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">badge</span>
<div>
<h4 class="font-label text-xs uppercase tracking-widest text-on-surface mb-1">Professional Drivers</h4>
<p class="text-[12px] text-outline leading-relaxed">Vetted, uniformed chauffeurs with expert local knowledge.</p>
</div>
</div>
<div class="flex items-start gap-5">
<span class="material-symbols-outlined text-primary text-3xl" style="font-variation-settings: 'FILL' 1;">shield</span>
<div>
<h4 class="font-label text-xs uppercase tracking-widest text-on-surface mb-1">Safe Travel</h4>
<p class="text-[12px] text-outline leading-relaxed">Rigorous vehicle maintenance and sanitization protocols.</p>
</div>
</div>
</div>
<!-- Featured Image Card -->
<div class="group overflow-hidden bg-surface-container-low">
<div class="aspect-[4/5] overflow-hidden">
<img class="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" data-alt="interior of a luxury vehicle featuring leather seating and ambient lighting with a view of city lights through the window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCte_o2JXlPGy08CidZUo4dFxJ_DDM8SLiAUwOqX-7rRF6PdSz0dENEyEHSvI33cAQN8VY0mJOugt3Uhm5v9evD_GzSVWQdsxRmNXOxLw_oUSdHh1GSd2lOi2FJeXs-ab_BKFi_Tg6Q64m8fCxRemiFRAGHMfoVtRToKTLot4KowcKiXWPkkL3gJe-PXSqri0E7zMK-MQDsuVkmNqnBXPbRkLSMTpZTFheW4iK7XxioLGxV5XjTA20qMSR7H5rUVQIBdaFoBzWmT0Q"/>
</div>
<div class="p-6">
<p class="font-headline italic text-on-surface mb-2">The Golden Standard</p>
<p class="text-xs text-outline font-light">Experience the height of executive transportation with our flagship fleet.</p>
</div>
</div>
</aside>
</div>
</section>
</main>
<!-- Footer Shell -->
<footer class="bg-[#0e0e0e] w-full py-20 px-12 border-t border-[#4d4635]/20 mt-20">
<div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
<div class="md:col-span-1">
<div class="text-xl font-serif text-[#D4AF37] mb-6 tracking-widest uppercase">Atladdis</div>
<p class="text-sm text-outline leading-relaxed font-light mb-8 max-w-xs">Elevating the standard of luxury transportation through precision, discretion, and world-class service.</p>
</div>
<div class="space-y-4">
<h4 class="font-['Inter'] text-sm tracking-widest uppercase text-[#D4AF37] mb-6">Service Area</h4>
<ul class="space-y-3">
<li><a class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c] hover:text-[#e5e2e1] transition-colors duration-500" href="#">New York Metro</a></li>
<li><a class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c] hover:text-[#e5e2e1] transition-colors duration-500" href="#">New Jersey</a></li>
<li><a class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c] hover:text-[#e5e2e1] transition-colors duration-500" href="#">Connecticut</a></li>
</ul>
</div>
<div class="space-y-4">
<h4 class="font-['Inter'] text-sm tracking-widest uppercase text-[#D4AF37] mb-6">Experience</h4>
<ul class="space-y-3">
<li><a class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c] hover:text-[#e5e2e1] transition-colors duration-500" href="#">Our Fleet</a></li>
<li><a class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c] hover:text-[#e5e2e1] transition-colors duration-500" href="#">Member Portal</a></li>
<li><a class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c] hover:text-[#e5e2e1] transition-colors duration-500" href="#">Corporate Accounts</a></li>
</ul>
</div>
<div class="space-y-4">
<h4 class="font-['Inter'] text-sm tracking-widest uppercase text-[#D4AF37] mb-6">Legal</h4>
<ul class="space-y-3">
<li><a class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c] hover:text-[#e5e2e1] transition-colors duration-500" href="#">Privacy Policy</a></li>
<li><a class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c] hover:text-[#e5e2e1] transition-colors duration-500" href="#">Terms of Service</a></li>
<li><a class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c] hover:text-[#e5e2e1] transition-colors duration-500" href="#">Chauffeur Login</a></li>
</ul>
</div>
</div>
<div class="max-w-7xl mx-auto pt-16 mt-16 border-t border-[#4d4635]/10 flex flex-col md:flex-row justify-between items-center gap-6">
<p class="font-['Inter'] text-[10px] tracking-[0.2em] uppercase text-[#99907c]">© 2024 Atladdis Transportation Service LLC. All Rights Reserved.</p>
<div class="flex gap-8">
<span class="material-symbols-outlined text-[#99907c] cursor-pointer hover:text-[#D4AF37] transition-colors">public</span>
<span class="material-symbols-outlined text-[#99907c] cursor-pointer hover:text-[#D4AF37] transition-colors">distance</span>
<span class="material-symbols-outlined text-[#99907c] cursor-pointer hover:text-[#D4AF37] transition-colors">support_agent</span>
</div>
</div>
</footer>
</body></html>

<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=800, initial-scale=1.0" name="viewport"/>
<title>Atladdis | Premium Transportation Service</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&amp;family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "on-tertiary-container": "#254188",
              "inverse-surface": "#e5e2e1",
              "surface": "#131313",
              "tertiary": "#bfcdff",
              "surface-container": "#201f1f",
              "secondary": "#eac249",
              "primary-fixed": "#ffe088",
              "outline": "#99907c",
              "error-container": "#93000a",
              "tertiary-fixed-dim": "#b4c5ff",
              "primary-container": "#d4af37",
              "error": "#ffb4ab",
              "surface-bright": "#393939",
              "primary-fixed-dim": "#e9c349",
              "on-surface": "#e5e2e1",
              "on-tertiary-fixed": "#00174b",
              "on-secondary-fixed": "#241a00",
              "surface-dim": "#131313",
              "outline-variant": "#4d4635",
              "secondary-fixed-dim": "#eac249",
              "inverse-primary": "#735c00",
              "surface-container-low": "#1c1b1b",
              "on-primary-container": "#554300",
              "on-secondary": "#3d2f00",
              "on-background": "#e5e2e1",
              "on-primary": "#3c2f00",
              "surface-container-high": "#2a2a2a",
              "on-primary-fixed": "#241a00",
              "secondary-fixed": "#ffe08b",
              "on-error": "#690005",
              "on-error-container": "#ffdad6",
              "primary": "#f2ca50",
              "surface-container-lowest": "#0e0e0e",
              "secondary-container": "#b08c10",
              "surface-container-highest": "#353534",
              "on-tertiary-fixed-variant": "#27438a",
              "tertiary-fixed": "#dbe1ff",
              "on-secondary-container": "#352800",
              "on-primary-fixed-variant": "#574500",
              "on-surface-variant": "#d0c5af",
              "surface-tint": "#e9c349",
              "inverse-on-surface": "#313030",
              "background": "#131313",
              "tertiary-container": "#97b0ff",
              "on-secondary-fixed-variant": "#584400",
              "surface-variant": "#353534",
              "on-tertiary": "#082b72"
            },
            fontFamily: {
              "headline": ["Noto Serif"],
              "body": ["Inter"],
              "label": ["Inter"]
            },
            borderRadius: {"DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
            background: rgba(19, 19, 19, 0.7);
            backdrop-filter: blur(20px);
        }
        .gold-gradient {
            background: linear-gradient(135deg, #f2ca50 0%, #d4af37 100%);
        }
        .hero-mask {
            mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body selection:bg-primary/30">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl shadow-2xl shadow-black/60">
<div class="flex justify-between items-center px-8 py-6 max-w-full mx-auto">
<div class="text-2xl font-serif italic text-[#D4AF37] tracking-widest uppercase">Atladdis</div>
<div class="hidden md:flex items-center gap-10">
<a class="font-['Noto_Serif'] font-bold tracking-tight text-[#f2ca50] border-b-2 border-[#D4AF37] pb-1" href="../home_atladdis_transportation/code.html">Home</a>
<a class="font-['Noto_Serif'] font-bold tracking-tight text-[#e5e2e1] hover:text-[#f2ca50] transition-colors" href="../services_atladdis_transportation/code.html">Services</a>
<a class="font-['Noto_Serif'] font-bold tracking-tight text-[#e5e2e1] hover:text-[#f2ca50] transition-colors" href="#">Fleet</a>
<a class="font-['Noto_Serif'] font-bold tracking-tight text-[#e5e2e1] hover:text-[#f2ca50] transition-colors" href="#">About</a>
<a class="font-['Noto_Serif'] font-bold tracking-tight text-[#e5e2e1] hover:text-[#f2ca50] transition-colors" href="#">Contact</a>
</div>
<div class="flex items-center gap-4">
<button class="hidden lg:block text-[#e5e2e1] hover:opacity-80 transition-all duration-300 text-sm tracking-widest uppercase">Request Quote</button>
<a href="../book_now_atladdis_transportation/code.html" class="gold-gradient text-on-primary px-6 py-2 font-bold rounded-sm scale-95 active:scale-90 transition-transform shadow-lg shadow-primary/10 inline-block">Book Now</a>
</div>
</div>
</nav>
<!-- Hero Section -->
<header class="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
<div class="absolute inset-0 z-0">
<img alt="Luxury black sedan" class="w-full h-full object-cover opacity-60 hero-mask" data-alt="cinematic close-up of a sleek black luxury sedan parked at night under soft urban streetlights with deep shadows and metallic reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC75YdA8vSYxX1M7aptpGBLzgCV686wdQA3rj3Dpwgx7PYPBxAda0vaSFYt7Jge4-jzbSWBLu3YeoE0DPv4tQdzNzlgKWpLfIXqWP6RUmrgF0Yw6bRf2X-wyjzKsBzyKjSHXVm8a5wANw3uBkzHWIlb5GfO-Eztn5MUDjaWfncsYg2QqebjIIooIXrRNiHfLvfiF-cDmjNAmPc65U6_wyfhEH2VKAWMsnknIz5oOaOXRBMEDdLZcd5ne934Ws44EzWC9tFUPQ1EjmE"/>
</div>
<div class="relative z-10 px-8 md:px-24 max-w-4xl">
<p class="text-primary font-label text-sm tracking-[0.3em] uppercase mb-4">Elite Chauffeur Service</p>
<h1 class="text-5xl md:text-7xl font-headline font-bold text-on-surface leading-tight mb-8 tracking-tighter">
                Premium Transportation <br/><span class="italic font-normal text-outline-variant">You Can Trust</span>
</h1>
<div class="flex flex-wrap gap-6">
<a href="../book_now_atladdis_transportation/code.html" class="gold-gradient text-on-primary px-10 py-4 font-bold rounded-sm hover:shadow-[0_0_20px_rgba(242,202,80,0.3)] transition-all inline-block">Book Now</a>
<button class="border border-outline-variant/30 text-on-surface px-10 py-4 font-bold rounded-sm hover:bg-surface-container-high transition-all backdrop-blur-sm">Request a Quote</button>
</div>
</div>
</header>
<!-- Booking Form Section -->
<section class="relative -mt-24 z-20 px-8">
<div class="max-w-6xl mx-auto glass-panel p-8 md:p-12 shadow-2xl rounded-sm border-t border-outline-variant/10">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div class="space-y-2">
<label class="block text-xs font-label uppercase tracking-widest text-outline">Full Name</label>
<input class="w-full bg-surface-container-highest border-0 border-b border-outline/30 focus:border-primary focus:ring-0 text-on-surface py-3 placeholder:text-outline/50 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-xs font-label uppercase tracking-widest text-outline">Pickup Location</label>
<input class="w-full bg-surface-container-highest border-0 border-b border-outline/30 focus:border-primary focus:ring-0 text-on-surface py-3 placeholder:text-outline/50 transition-colors" placeholder="Hotel or Residence" type="text"/>
</div>
<div class="space-y-2">
<label class="block text-xs font-label uppercase tracking-widest text-outline">Preferred Date</label>
<input class="w-full bg-surface-container-highest border-0 border-b border-outline/30 focus:border-primary focus:ring-0 text-on-surface py-3 transition-colors" type="date"/>
</div>
<div class="flex items-end">
<button class="w-full gold-gradient text-on-primary py-4 font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-opacity">Check Availability</button>
</div>
</div>
</div>
</section>
<!-- Services Grid -->
<section class="py-32 px-8 max-w-7xl mx-auto">
<div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div class="max-w-xl">
<h2 class="text-4xl md:text-5xl font-headline font-bold mb-6">Bespoke Travel <br/>Tailored To You</h2>
<p class="text-outline-variant leading-relaxed">Experience a new standard of private travel. From seamless airport transfers to grand wedding arrivals, we ensure every detail is handled with absolute precision.</p>
</div>
<a class="text-primary font-bold tracking-widest uppercase text-sm border-b border-primary/30 pb-2 hover:border-primary transition-all" href="../services_atladdis_transportation/code.html">View All Services</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Airport -->
<div class="group relative aspect-[3/4] overflow-hidden bg-surface-container-low p-8 flex flex-col justify-end transition-all hover:bg-surface-container-high">
<span class="material-symbols-outlined text-4xl text-primary mb-6 transition-transform group-hover:-translate-y-2">flight_takeoff</span>
<h3 class="text-2xl font-headline font-bold mb-2">Airport Transportation</h3>
<p class="text-sm text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">Punctual, stress-free transfers to and from all major regional hubs.</p>
</div>
<!-- Wedding -->
<div class="group relative aspect-[3/4] overflow-hidden bg-surface-container-low p-8 flex flex-col justify-end transition-all hover:bg-surface-container-high">
<span class="material-symbols-outlined text-4xl text-primary mb-6 transition-transform group-hover:-translate-y-2">favorite</span>
<h3 class="text-2xl font-headline font-bold mb-2">Wedding Services</h3>
<p class="text-sm text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">Elegant arrivals for your most significant moments.</p>
</div>
<!-- Prom -->
<div class="group relative aspect-[3/4] overflow-hidden bg-surface-container-low p-8 flex flex-col justify-end transition-all hover:bg-surface-container-high">
<span class="material-symbols-outlined text-4xl text-primary mb-6 transition-transform group-hover:-translate-y-2">celebration</span>
<h3 class="text-2xl font-headline font-bold mb-2">Prom Transportation</h3>
<p class="text-sm text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">Safe, stylish, and memorable rides for students.</p>
</div>
<!-- Event -->
<div class="group relative aspect-[3/4] overflow-hidden bg-surface-container-low p-8 flex flex-col justify-end transition-all hover:bg-surface-container-high">
<span class="material-symbols-outlined text-4xl text-primary mb-6 transition-transform group-hover:-translate-y-2">restaurant</span>
<h3 class="text-2xl font-headline font-bold mb-2">Dinner &amp; Events</h3>
<p class="text-sm text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500">Discrete chauffeur service for evening outings and corporate galas.</p>
</div>
</div>
</section>
<!-- Why Choose Us -->
<section class="bg-surface-container-lowest py-32">
<div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div class="relative">
<div class="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
<img alt="Professional chauffeur" class="relative z-10 w-full h-[600px] object-cover rounded-sm shadow-2xl" data-alt="sharp close-up of a professional chauffeur in a black suit opening a car door with white gloved hand, soft focus background of city lights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCERZBrlX2nGfYsBExuJquXAv52DsPe_u7Npa6ick-mjbPpM4-LSluE0LIWkrzuTtsvG3KK0ReNzjjqRu_LrGOmG4er79eVZpXxqjG3YTE3Jn3cnVIfvmRMIoNaRkAdD-Jsq4IYxOWOcSvNYfn--hc-P1PIGXYh-P5Mq-6BwmLEs8mwaevTowU5umWjWJOI7n9wlpp-gkd8p84Tt2kI1HEneu2yXuVhpGN63zTfEQ-IVG29PH4gO6djuEPdjy3bUslnQ1yJqJlQijo"/>
<div class="absolute bottom-10 right-10 z-20 glass-panel p-8 max-w-xs">
<p class="text-primary font-headline italic text-2xl">"Our commitment to your time is absolute."</p>
</div>
</div>
<div>
<h2 class="text-4xl md:text-5xl font-headline font-bold mb-12">Unwavering Standards</h2>
<div class="space-y-12">
<div class="flex gap-6">
<span class="text-primary font-headline text-3xl opacity-30">01</span>
<div>
<h4 class="text-xl font-bold mb-2 tracking-tight">Reliable Service</h4>
<p class="text-outline-variant leading-relaxed">Our logistics team monitors every trip in real-time, ensuring a seamless experience regardless of traffic or flight delays.</p>
</div>
</div>
<div class="flex gap-6">
<span class="text-primary font-headline text-3xl opacity-30">02</span>
<div>
<h4 class="text-xl font-bold mb-2 tracking-tight">Professional Drivers</h4>
<p class="text-outline-variant leading-relaxed">Vetted, trained, and discrete. Our chauffeurs are more than just drivers; they are your personal concierge on the road.</p>
</div>
</div>
<div class="flex gap-6">
<span class="text-primary font-headline text-3xl opacity-30">03</span>
<div>
<h4 class="text-xl font-bold mb-2 tracking-tight">Luxury Vehicles</h4>
<p class="text-outline-variant leading-relaxed">A pristine fleet of late-model sedans and SUVs, maintained to the highest mechanical and aesthetic standards.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Pricing Section -->
<section class="py-32 px-8 max-w-7xl mx-auto">
<div class="text-center mb-20">
<h2 class="text-4xl font-headline font-bold mb-4">Transparent Pricing</h2>
<p class="text-outline-variant max-w-2xl mx-auto">No hidden fees. No surprises. Just premium service with clear, upfront costs.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div class="bg-surface-container p-12 rounded-sm border-l-4 border-primary">
<h3 class="text-2xl font-headline font-bold mb-6">Fixed Rate</h3>
<p class="text-outline-variant mb-8 leading-relaxed">Predictable pricing for common routes and airport transfers. Perfect for business travelers and scheduled events.</p>
<div class="text-primary font-bold tracking-widest uppercase text-sm">Best for regularity</div>
</div>
<div class="bg-surface-container p-12 rounded-sm">
<h3 class="text-2xl font-headline font-bold mb-6">Distance Based</h3>
<p class="text-outline-variant mb-8 leading-relaxed">Tailored pricing for long-distance journeys or multi-stop itineraries. You only pay for the miles and time you use.</p>
<div class="text-primary font-bold tracking-widest uppercase text-sm">Best for custom routes</div>
</div>
</div>
</section>
<!-- Reviews Section -->
<section class="py-32 bg-surface-container-low">
<div class="max-w-7xl mx-auto px-8">
<div class="grid grid-cols-1 md:grid-cols-3 gap-12">
<div class="space-y-6">
<div class="flex gap-1 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-xl font-headline italic leading-relaxed text-on-surface">"The punctuality and professionalism were unmatched. It's the only service I use for my executive team's travel."</p>
<div>
<p class="font-bold text-sm tracking-widest uppercase">David Richardson</p>
<p class="text-xs text-outline tracking-widest uppercase">CEO, TechCore Inc.</p>
</div>
</div>
<div class="space-y-6 md:mt-12">
<div class="flex gap-1 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-xl font-headline italic leading-relaxed text-on-surface">"Atladdis made our wedding day logistics flawless. The vehicle was pristine and the driver was incredibly courteous."</p>
<div>
<p class="font-bold text-sm tracking-widest uppercase">Elena Martinez</p>
<p class="text-xs text-outline tracking-widest uppercase">Private Client</p>
</div>
</div>
<div class="space-y-6">
<div class="flex gap-1 text-primary">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
<p class="text-xl font-headline italic leading-relaxed text-on-surface">"Reliable, discrete, and comfortable. Everything you want in a professional chauffeur service."</p>
<div>
<p class="font-bold text-sm tracking-widest uppercase">Marcus Thorne</p>
<p class="text-xs text-outline tracking-widest uppercase">Managing Director</p>
</div>
</div>
</div>
</div>
</section>
<!-- Contact Section -->
<section class="py-32 px-8">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
<div>
<h2 class="text-4xl md:text-5xl font-headline font-bold mb-8">Speak With Our <br/>Concierge</h2>
<p class="text-outline-variant mb-12 text-lg">Have a specific request or need a custom quote? Our team is available 24/7 to assist you.</p>
<div class="space-y-8">
<div class="flex items-center gap-6">
<div class="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">call</span>
</div>
<div>
<p class="text-xs font-label uppercase tracking-widest text-outline">Phone</p>
<p class="text-xl font-headline">+1 (555) 123-4567</p>
</div>
</div>
<div class="flex items-center gap-6">
<div class="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">mail</span>
</div>
<div>
<p class="text-xs font-label uppercase tracking-widest text-outline">Email</p>
<p class="text-xl font-headline">concierge@atladdis.com</p>
</div>
</div>
</div>
</div>
<div class="bg-surface-container-high p-8 md:p-12 rounded-sm shadow-xl">
<form class="space-y-6">
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<input class="w-full bg-surface-container-highest border-0 border-b border-outline/20 focus:border-primary focus:ring-0 text-on-surface py-4 px-0" placeholder="Name" type="text"/>
<input class="w-full bg-surface-container-highest border-0 border-b border-outline/20 focus:border-primary focus:ring-0 text-on-surface py-4 px-0" placeholder="Email" type="email"/>
</div>
<input class="w-full bg-surface-container-highest border-0 border-b border-outline/20 focus:border-primary focus:ring-0 text-on-surface py-4 px-0" placeholder="Subject" type="text"/>
<textarea class="w-full bg-surface-container-highest border-0 border-b border-outline/20 focus:border-primary focus:ring-0 text-on-surface py-4 px-0 resize-none" placeholder="Your Message" rows="4"></textarea>
<button class="w-full gold-gradient text-on-primary py-4 font-bold uppercase tracking-widest text-sm shadow-lg shadow-primary/5">Send Message</button>
</form>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-[#0e0e0e]">
<div class="w-full py-20 px-12 border-t border-[#4d4635]/20">
<div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
<div>
<div class="text-xl font-serif text-[#D4AF37] mb-4 uppercase">Atladdis</div>
<p class="text-[#99907c] text-sm leading-relaxed mb-6">Redefining luxury transportation through precision, punctuality, and unparalleled chauffeur expertise.</p>
<div class="flex gap-4">
<a class="text-[#99907c] hover:text-[#f2ca50] transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>
<a class="text-[#99907c] hover:text-[#f2ca50] transition-colors" href="#"><span class="material-symbols-outlined">share</span></a>
<a class="text-[#99907c] hover:text-[#f2ca50] transition-colors" href="#"><span class="material-symbols-outlined">distance</span></a>
</div>
</div>
<div>
<h4 class="font-['Inter'] text-sm tracking-widest uppercase text-[#D4AF37] mb-8">Navigation</h4>
<ul class="space-y-4 font-['Inter'] text-sm tracking-widest uppercase">
<li><a class="text-[#99907c] hover:text-[#e5e2e1] transition-colors" href="../home_atladdis_transportation/code.html">Home</a></li>
<li><a class="text-[#99907c] hover:text-[#e5e2e1] transition-colors" href="../services_atladdis_transportation/code.html">Services</a></li>
<li><a class="text-[#99907c] hover:text-[#e5e2e1] transition-colors" href="#">Fleet</a></li>
<li><a class="text-[#99907c] hover:text-[#e5e2e1] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 class="font-['Inter'] text-sm tracking-widest uppercase text-[#D4AF37] mb-8">Legal</h4>
<ul class="space-y-4 font-['Inter'] text-sm tracking-widest uppercase">
<li><a class="text-[#99907c] hover:text-[#e5e2e1] transition-colors" href="#">Privacy Policy</a></li>
<li><a class="text-[#99907c] hover:text-[#e5e2e1] transition-colors" href="#">Terms of Service</a></li>
<li><a class="text-[#99907c] hover:text-[#e5e2e1] transition-colors" href="#">Chauffeur Login</a></li>
<li><a class="text-[#99907c] hover:text-[#e5e2e1] transition-colors" href="#">Sitemap</a></li>
</ul>
</div>
<div>
<h4 class="font-['Inter'] text-sm tracking-widest uppercase text-[#D4AF37] mb-8">Newsletter</h4>
<p class="text-[#99907c] text-xs mb-4">Subscribe for exclusive travel insights and fleet updates.</p>
<div class="flex">
<input class="bg-surface-container-highest border-0 focus:ring-0 text-sm py-3 px-4 w-full" placeholder="Email Address" type="email"/>
<button class="bg-[#D4AF37] text-on-primary px-4 hover:opacity-80 transition-opacity">
<span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
<div class="max-w-7xl mx-auto mt-20 pt-8 border-t border-outline-variant/10 text-center">
<p class="font-['Inter'] text-sm tracking-widest uppercase text-[#99907c]">© 2024 Atladdis Transportation Service LLC. All Rights Reserved.</p>
</div>
</div>
</footer>
</body></html>