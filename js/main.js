document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.getElementById('contactForm');
    const phoneRegex = /^[+]?[0-9]{7,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Remove default HTML5 validation native popups to use custom UI
    if (bookingForm) bookingForm.setAttribute('novalidate', true);
    if (contactForm) contactForm.setAttribute('novalidate', true);

    function normalizePhoneInput(raw) {
        if (!raw) return '';
        // Keep only digits, plus allow one leading +
        const hasLeadingPlus = raw.trim().startsWith('+');
        const digits = raw.replace(/\D/g, '');
        return `${hasLeadingPlus ? '+' : ''}${digits}`;
    }

    function attachPhoneInputGuard(inputId) {
        const input = document.getElementById(inputId);
        if (!input) return;
        input.addEventListener('input', () => {
            const normalized = normalizePhoneInput(input.value);
            if (input.value !== normalized) input.value = normalized;
        });
        input.addEventListener('blur', () => {
            input.value = normalizePhoneInput(input.value.trim());
        });
    }

    attachPhoneInputGuard('phone');
    attachPhoneInputGuard('contactPhone');

    function ensureErrorElement(input) {
        const group = input?.closest('.form-group');
        if (!group) return null;
        let el = group.querySelector('.error-msg');
        if (!el) {
            el = document.createElement('div');
            el.className = 'error-msg';
            group.appendChild(el);
        }
        return el;
    }

    function setFieldError(input, message) {
        if (!input) return;
        const group = input.closest('.form-group');
        if (!group) return;
        group.classList.add('error');
        const err = ensureErrorElement(input);
        if (err) err.textContent = message;
    }

    function clearFieldErrors(formElement) {
        const formGroups = formElement.querySelectorAll('.form-group');
        formGroups.forEach(group => group.classList.remove('error'));
    }

    function showSuccessPopup(message) {
        const existing = document.getElementById('global-success-popup');
        if (existing) existing.remove();

        const popup = document.createElement('div');
        popup.id = 'global-success-popup';
        popup.className = 'success-popup';
        popup.innerHTML = `
            <button class="success-popup-close" aria-label="Close" type="button">×</button>
            <div class="success-popup-title">Success</div>
            <div class="success-popup-message">${message}</div>
        `;
        document.body.appendChild(popup);

        const close = () => popup.remove();
        popup.querySelector('.success-popup-close')?.addEventListener('click', close);
        setTimeout(close, 2500);
    }

    function handleSubmission(event, formElement, formConfig) {
        event.preventDefault();
        
        const alertBox = formConfig.alertElement;
        const btnSubmit = formElement.querySelector('.btn-submit');
        const originalBtnText = btnSubmit.textContent;

        // Clear previous states
        clearFieldErrors(formElement);
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
                setFieldError(input, 'This field is required');
            }
        });

        // Name validation (required + min 2 chars)
        const nameInput = document.getElementById(formConfig.nameId);
        if (nameInput) {
            const val = nameInput.value.trim();
            if (!val) {
                isValid = false;
                setFieldError(nameInput, 'Name is required');
            } else if (val.length < 2) {
                isValid = false;
                setFieldError(nameInput, 'Name must be at least 2 characters');
            }
        }

        // Flexible Phone vs Email Check
        const phoneInput = document.getElementById(formConfig.phoneId);
        const emailInput = document.getElementById(formConfig.emailId);
        
        const hasPhone = phoneInput && phoneInput.value.trim();
        const hasEmail = emailInput && emailInput.value.trim();

        if (!hasPhone && !hasEmail) {
            isValid = false;
            // Highlight both inputs dynamically advising the requirement
            if (phoneInput) {
                setFieldError(phoneInput, 'Please provide a phone number or email');
            }
            if (emailInput) {
                setFieldError(emailInput, 'Please provide a phone number or email');
            }
        }

        // Phone validation
        if (hasPhone && phoneInput) {
            const phoneVal = phoneInput.value.trim();
            if (!phoneRegex.test(phoneVal)) {
                isValid = false;
                setFieldError(phoneInput, 'Phone must be 7-15 digits (optional + at start)');
            }
        }

        // Email validation
        if (hasEmail) {
            const emailVal = emailInput.value.trim();
            if (!emailRegex.test(emailVal)) {
                isValid = false;
                setFieldError(emailInput, 'Please enter a valid email format');
            }
        }

        // Message validation for contact
        if (formConfig.messageId) {
            const msgInput = document.getElementById(formConfig.messageId);
            const msg = msgInput?.value?.trim() || '';
            if (!msg) {
                isValid = false;
                setFieldError(msgInput, 'Message is required');
            } else if (msg.length < 5) {
                isValid = false;
                setFieldError(msgInput, 'Message must be at least 5 characters');
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
        btnSubmit.textContent = 'Wait...';

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

        async function sendToBackend() {
            btnSubmit.textContent = 'Sending...';
            try {
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
                    showSuccessPopup(formConfig.successMessage);
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

        if (formConfig.logTitle.includes('Booking')) {
            showConfirmationModal(payload, sendToBackend, () => {
                btnSubmit.disabled = false;
                btnSubmit.textContent = originalBtnText;
            });
        } else {
            sendToBackend();
        }
    }

    function showConfirmationModal(payload, onConfirm, onCancel) {
        // Create modal container dynamically
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0'; overlay.style.left = '0';
        overlay.style.width = '100%'; overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '99999';
        overlay.style.backdropFilter = 'blur(4px)';

        const modal = document.createElement('div');
        modal.style.backgroundColor = '#fff';
        modal.style.padding = '30px';
        modal.style.borderRadius = '12px';
        modal.style.maxWidth = '450px';
        modal.style.width = '90%';
        modal.style.boxShadow = '0 10px 40px rgba(0,0,0,0.3)';
        modal.style.fontFamily = 'inherit';

        let html = '<h3 style="margin-top:0; color: #d4af37; border-bottom: 2px solid #f0f0f0; padding-bottom: 15px; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 1px;">Confirm Booking Details</h3>';
        html += '<div style="font-size: 15px; line-height: 1.8; color: #333; margin-bottom: 25px;">';
        html += `<p style="margin: 5px 0;"><strong>Passenger:</strong> ${payload.name || ''}</p>`;
        if (payload.phone) html += `<p style="margin: 5px 0;"><strong>Phone:</strong> ${payload.phone}</p>`;
        if (payload.email) html += `<p style="margin: 5px 0;"><strong>Email:</strong> ${payload.email}</p>`;
        html += `<p style="margin: 5px 0;"><strong>Service:</strong> <span style="text-transform: capitalize;">${payload.serviceType || 'Standard'}</span></p>`;
        html += `<p style="margin: 5px 0;"><strong>Date & Time:</strong> ${payload.date} at ${payload.time}</p>`;
        html += `<div style="background: #f9f9f9; padding: 12px; border-radius: 8px; margin-top: 12px; border-left: 4px solid #d4af37;">`;
        html += `<p style="margin: 0 0 8px 0;"><strong>Pickup:</strong> ${payload.pickup}</p>`;
        html += `<p style="margin: 0;"><strong>Dropoff:</strong> ${payload.dropoff}</p>`;
        html += `</div>`;
        html += '</div>';

        html += '<div style="display: flex; gap: 12px; justify-content: flex-end;">';
        html += '<button id="modal-cancel" style="padding: 10px 20px; border: none; background: #e0e0e0; border-radius: 6px; cursor: pointer; color: #333; font-weight: bold; transition: background 0.2s;">Edit Details</button>';
        html += '<button id="modal-confirm" style="padding: 10px 20px; border: none; background: #d4af37; border-radius: 6px; cursor: pointer; color: #1a1a1a; font-weight: bold; transition: background 0.2s; box-shadow: 0 2px 6px rgba(212,175,55,0.3);">Submit Booking</button>';
        html += '</div>';

        modal.innerHTML = html;
        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        document.getElementById('modal-cancel').addEventListener('click', () => {
            document.body.removeChild(overlay);
            if (onCancel) onCancel();
        });

        document.getElementById('modal-confirm').addEventListener('click', () => {
            const btn = document.getElementById('modal-confirm');
            btn.textContent = 'Sending...';
            btn.style.opacity = '0.7';
            btn.disabled = true;
            document.body.removeChild(overlay);
            if (onConfirm) onConfirm();
        });
    }

    // Attach listeners
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            handleSubmission(e, bookingForm, {
                alertElement: document.getElementById('booking-alert'),
                requiredFields: ['fullName', 'pickup', 'dropoff', 'date', 'time', 'serviceType'],
                nameId: 'fullName',
                phoneId: 'phone',
                emailId: 'email',
                logTitle: 'Booking Request Compiled',
                successMessage: 'Booking request sent successfully!'
            });
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            handleSubmission(e, contactForm, {
                alertElement: document.getElementById('contact-alert'),
                requiredFields: ['contactName', 'contactMessage'],
                nameId: 'contactName',
                phoneId: 'contactPhone',
                emailId: 'contactEmail',
                messageId: 'contactMessage',
                logTitle: 'Contact Profile Compiled',
                successMessage: 'Message sent!'
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
        reviewForm.setAttribute('novalidate', true);
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
            const reviewNameInput = document.getElementById('reviewName');
            const reviewMessageInput = document.getElementById('reviewMessage');
            const reviewCodeInput = document.getElementById('reviewCode');

            clearFieldErrors(reviewForm);

            if (!name || !message || !rating || !reviewCode) {
                setReviewAlert('error', 'Please fill out all required fields.');
                if (!name) setFieldError(reviewNameInput, 'Name is required');
                if (!message) setFieldError(reviewMessageInput, 'Message is required');
                if (!reviewCode) setFieldError(reviewCodeInput, 'Review code is required');
                return;
            }

            if (name.length < 2) {
                setReviewAlert('error', 'Please correct highlighted fields.');
                setFieldError(reviewNameInput, 'Name must be at least 2 characters');
                return;
            }

            if (message.length < 5) {
                setReviewAlert('error', 'Please correct highlighted fields.');
                setFieldError(reviewMessageInput, 'Message must be at least 5 characters');
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
                    showSuccessPopup('Review submitted!');
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
