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

        // Simulate "sending" network state
        btnSubmit.disabled = true;
        btnSubmit.textContent = 'Sending...';

        // Delay timer faking asynchronous API request
        setTimeout(() => {
            console.log(`--- ${formConfig.logTitle} ---`);
            console.log(data);
            console.log('Processed to Post Endpoint:', API_ENDPOINT);
            
            if (alertBox) {
                alertBox.textContent = 'Request sent successfully';
                alertBox.className = 'alert success';
            }
            
            btnSubmit.disabled = false;
            btnSubmit.textContent = originalBtnText;
            formElement.reset();
        }, 800);
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
});
