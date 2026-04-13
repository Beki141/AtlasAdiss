document.addEventListener('DOMContentLoaded', () => {
    // API endpoint placeholder
    const API_ENDPOINT = '/api/submissions';

    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('contactForm');

    // Remove default HTML5 validation native popups to use custom UI
    if (bookingForm) bookingForm.setAttribute('novalidate', true);
    if (contactForm) contactForm.setAttribute('novalidate', true);

    function handleSubmission(event, formElement, formConfig) {
        event.preventDefault();
        
        const alertBox = formConfig.alertElement;
        const btnSubmit = formElement.querySelector('.btn-submit');
        const originalBtnText = btnSubmit.textContent;

        // Clear previous states
        const formGroups = formElement.querySelectorAll('.form-group');
        formGroups.forEach(group => group.classList.remove('error'));
        if (alertBox) {
            alertBox.className = 'alert hidden';
            alertBox.textContent = '';
        }

        let isValid = true;
        const formData = new FormData(formElement);
        const data = Object.fromEntries(formData.entries());

        // Validate Strictly Required Fields
        formConfig.requiredFields.forEach(field => {
            const input = document.getElementById(field);
            if (input && !input.value.trim()) {
                isValid = false;
                input.closest('.form-group').classList.add('error');
            }
        });

        // Flexible Phone vs Email Check
        const phoneInput = document.getElementById(formConfig.phoneId);
        const emailInput = document.getElementById(formConfig.emailId);
        
        const hasPhone = phoneInput && phoneInput.value.trim();
        const hasEmail = emailInput && emailInput.value.trim();

        if (!hasPhone && !hasEmail) {
            isValid = false;
            // Highlight both inputs dynamically advising the requirement
            if (phoneInput) {
                const phoneError = phoneInput.closest('.form-group').querySelector('.error-msg');
                if (phoneError) phoneError.textContent = "Please provide a phone number or email";
                phoneInput.closest('.form-group').classList.add('error');
            }
            if (emailInput) {
                const emailError = emailInput.closest('.form-group').querySelector('.error-msg');
                if (emailError) emailError.textContent = "Please provide a phone number or email";
                emailInput.closest('.form-group').classList.add('error');
            }
        }

        // Basic Formatting verification for the Email 
        if (hasEmail) {
            const emailVal = emailInput.value.trim();
            if (!emailVal.includes('@') || !emailVal.includes('.')) {
                isValid = false;
                emailInput.closest('.form-group').classList.add('error');
                const emailError = emailInput.closest('.form-group').querySelector('.error-msg');
                if (emailError) emailError.textContent = "Please enter a valid email format";
            }
        }

        if (!isValid) {
            if (alertBox) {
                alertBox.textContent = 'Please fill out all required fields correctly.';
                alertBox.className = 'alert error';
            }
            return;
        }

        // Set UI loading state
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'Sending...';

        async function sendToBackend() {
            try {
                let endpoint = '';
                let payload = {};

                // Map HTML input names to Backend expected names
                if (formConfig.logTitle.includes('Booking')) {
                    endpoint = 'http://localhost:5000/api/book';
                    payload = {
                        name: data.fullName,
                        phone: data.phone,
                        email: data.email,
                        pickup: data.pickup,
                        dropoff: data.dropoff,
                        date: data.date,
                        time: data.time,
                        serviceType: data.serviceType
                    };
                } else if (formConfig.logTitle.includes('Contact')) {
                    endpoint = 'http://localhost:5000/api/contact';
                    payload = {
                        name: data.contactName,
                        phone: data.contactPhone,
                        email: data.contactEmail,
                        message: data.contactMessage
                    };
                }

                console.log(`Sending to ${endpoint}...`, payload);

                // Execute real POST request
                const response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    if (alertBox) {
                        alertBox.textContent = 'Request sent successfully!';
                        alertBox.className = 'alert success';
                    }
                    formElement.reset();
                } else {
                    const result = await response.json();
                    if (alertBox) {
                        alertBox.textContent = result.error || 'Failed to submit. Please try again.';
                        alertBox.className = 'alert error';
                    }
                }
            } catch (error) {
                console.error("Submission failed:", error);
                if (alertBox) {
                    alertBox.textContent = 'Network error. Ensure the backend server is running.';
                    alertBox.className = 'alert error';
                }
            } finally {
                btnSubmit.disabled = false;
                btnSubmit.textContent = originalBtnText;
            }
        }

        sendToBackend();
    }

    // Attach listeners
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            handleSubmission(e, bookingForm, {
                alertElement: document.getElementById('booking-alert'),
                requiredFields: ['fullName', 'pickup', 'dropoff', 'date', 'time', 'serviceType'],
                phoneId: 'phone',
                emailId: 'email',
                logTitle: 'Booking Request Compiled'
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            handleSubmission(e, contactForm, {
                alertElement: document.getElementById('contact-alert'),
                requiredFields: ['contactName', 'contactMessage'],
                phoneId: 'contactPhone',
                emailId: 'contactEmail',
                logTitle: 'Contact Profile Compiled'
            });
        });
    }

    // --- REVIEWS (Customer) ---
    const reviewsGrid = document.getElementById('reviewsGrid');
    const openReviewModalBtn = document.getElementById('openReviewModalBtn');
    const reviewModal = document.getElementById('reviewModal');
    const closeReviewModalBtn = document.getElementById('closeReviewModalBtn');
    const reviewForm = document.getElementById('reviewForm');
    const reviewAlert = document.getElementById('review-alert');
    const reviewSubmitBtn = document.getElementById('reviewSubmitBtn');
    const reviewRatingValue = document.getElementById('reviewRatingValue');
    const ratingStarsEls = Array.from(document.querySelectorAll('.rating-star'));

    const setReviewAlert = (type, text) => {
        if (!reviewAlert) return;
        reviewAlert.textContent = text || '';
        reviewAlert.className = `alert ${type}`;
    };

    function escapeHtml(str) {
        return String(str ?? '')
            .replaceAll('&', '&amp;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;')
            .replaceAll('"', '&quot;')
            .replaceAll("'", '&#039;');
    }

    function ratingStars(rating) {
        const r = Math.max(1, Math.min(5, Number(rating) || 0));
        return '★'.repeat(r) + '☆'.repeat(5 - r);
    }

    function initials(name) {
        const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
        const a = parts[0]?.[0] || 'A';
        const b = parts[1]?.[0] || parts[0]?.[1] || 'A';
        return (a + b).toUpperCase();
    }

    async function loadApprovedReviews() {
        if (!reviewsGrid) return;
        try {
            const res = await fetch('http://localhost:5000/api/reviews');
            const data = await res.json();
            if (!res.ok || !Array.isArray(data)) throw new Error('bad_response');

            if (data.length === 0) {
                reviewsGrid.innerHTML = `
                  <div class="testimonial-card-premium">
                    <div class="quote-icon">"</div>
                    <div class="stars">★★★★★</div>
                    <p class="quote">No reviews yet. Be the first to share your experience.</p>
                    <div class="client-info">
                      <div class="client-avatar">AA</div>
                      <div class="client-name">- AtlasAdiss</div>
                    </div>
                  </div>
                `;
                return;
            }

            reviewsGrid.innerHTML = data.map((rev) => {
                const safeName = escapeHtml(rev.name);
                const safeMsg = escapeHtml(rev.message);
                const stars = ratingStars(rev.rating);
                return `
                  <div class="testimonial-card-premium">
                    <div class="quote-icon">"</div>
                    <div class="stars">${stars}</div>
                    <p class="quote">"${safeMsg}"</p>
                    <div class="client-info">
                      <div class="client-avatar">${escapeHtml(initials(rev.name))}</div>
                      <div class="client-name">- ${safeName}</div>
                    </div>
                  </div>
                `;
            }).join('');
        } catch (e) {
            reviewsGrid.innerHTML = `
              <div class="testimonial-card-premium">
                <div class="quote-icon">"</div>
                <div class="stars">★★★★★</div>
                <p class="quote">Failed to load reviews. Please try again later.</p>
                <div class="client-info">
                  <div class="client-avatar">AA</div>
                  <div class="client-name">- AtlasAdiss</div>
                </div>
              </div>
            `;
        }
    }

    function openReviewModal() {
        if (!reviewModal) return;
        reviewModal.classList.remove('hidden');
        setReviewAlert('hidden', '');
        if (reviewRatingValue) reviewRatingValue.value = '';
        ratingStarsEls.forEach((el) => {
            el.classList.remove('is-on');
            el.setAttribute('aria-checked', 'false');
        });
        setTimeout(() => document.getElementById('reviewName')?.focus(), 0);
    }

    function closeReviewModal() {
        if (!reviewModal) return;
        reviewModal.classList.add('hidden');
        setReviewAlert('hidden', '');
    }

    if (openReviewModalBtn) openReviewModalBtn.addEventListener('click', openReviewModal);
    if (closeReviewModalBtn) closeReviewModalBtn.addEventListener('click', closeReviewModal);
    if (reviewModal) {
        reviewModal.addEventListener('click', (e) => {
            if (e.target === reviewModal) closeReviewModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !reviewModal.classList.contains('hidden')) closeReviewModal();
        });
    }

    if (reviewForm) {
        if (ratingStarsEls.length && reviewRatingValue) {
            const setRating = (val) => {
                const v = Number(val);
                if (!Number.isFinite(v) || v < 1 || v > 5) return;
                reviewRatingValue.value = String(v);
                ratingStarsEls.forEach((btn) => {
                    const on = Number(btn.dataset.value) <= v;
                    btn.classList.toggle('is-on', on);
                    btn.setAttribute('aria-checked', String(Number(btn.dataset.value) === v));
                });
            };

            ratingStarsEls.forEach((btn) => {
                btn.addEventListener('click', () => setRating(btn.dataset.value));
                btn.addEventListener('keydown', (e) => {
                    const current = Number(reviewRatingValue.value || 0) || 0;
                    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                        e.preventDefault();
                        setRating(Math.min(5, current + 1));
                    }
                    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                        e.preventDefault();
                        setRating(Math.max(1, current - 1));
                    }
                    if (e.key === 'Home') { e.preventDefault(); setRating(1); }
                    if (e.key === 'End') { e.preventDefault(); setRating(5); }
                });
            });
        }

        reviewForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('reviewName')?.value?.trim();
            const message = document.getElementById('reviewMessage')?.value?.trim();
            const rating = reviewRatingValue?.value;
            const reviewCode = document.getElementById('reviewCode')?.value?.trim();

            if (!name || !message || !rating || !reviewCode) {
                setReviewAlert('error', 'Please fill out all required fields.');
                return;
            }

            reviewSubmitBtn.disabled = true;
            const originalText = reviewSubmitBtn.textContent;
            reviewSubmitBtn.textContent = 'Submitting...';
            setReviewAlert('hidden', '');

            try {
                const res = await fetch('http://localhost:5000/api/review', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, message, rating, reviewCode })
                });
                const data = await res.json().catch(() => ({}));

                if (res.ok) {
                    setReviewAlert('success', data.message || 'Thank you for your review! We’ve received it.');
                    reviewForm.reset();
                    if (reviewRatingValue) reviewRatingValue.value = '';
                    ratingStarsEls.forEach((el) => {
                        el.classList.remove('is-on');
                        el.setAttribute('aria-checked', 'false');
                    });
                    await loadApprovedReviews();
                } else {
                    setReviewAlert('error', data.error || 'Failed to submit review. Please try again.');
                }
            } catch (err) {
                setReviewAlert('error', 'Network error. Ensure the backend server is running.');
            } finally {
                reviewSubmitBtn.disabled = false;
                reviewSubmitBtn.textContent = originalText;
            }
        });
    }

    loadApprovedReviews();
});
