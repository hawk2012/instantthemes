// IT Tech Theme JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileToggle = document.createElement('button');
    mobileToggle.classList.add('mobile-menu-toggle');
    mobileToggle.innerHTML = '☰';
    mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Add mobile menu toggle for responsive design
        const navContainer = navbar.querySelector('ul');
        if (navContainer) {
            mobileToggle.addEventListener('click', function() {
                navContainer.classList.toggle('mobile-menu-open');
            });
            
            // For mobile devices, prepend the toggle button
            if (window.innerWidth <= 768) {
                navbar.insertBefore(mobileToggle, navbar.firstChild);
            }
            
            // Handle window resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    navContainer.classList.remove('mobile-menu-open');
                    if (mobileToggle.parentNode) {
                        mobileToggle.parentNode.removeChild(mobileToggle);
                    }
                } else {
                    if (!mobileToggle.parentNode) {
                        navbar.insertBefore(mobileToggle, navbar.firstChild);
                    }
                }
            });
        }
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize any code blocks with syntax highlighting if a library is present
    initializeCodeBlocks();

    // Add any form validation or enhancement
    initializeForms();
});

// Function to initialize code blocks (for syntax highlighting)
function initializeCodeBlocks() {
    // Add a copy button to pre elements
    document.querySelectorAll('pre').forEach(pre => {
        const copyButton = document.createElement('button');
        copyButton.classList.add('copy-button');
        copyButton.textContent = 'Copy';
        copyButton.setAttribute('aria-label', 'Copy code to clipboard');
        
        // Style the copy button
        Object.assign(copyButton.style, {
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '4px 8px',
            fontSize: '0.8em',
            backgroundColor: '#555',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            cursor: 'pointer'
        });
        
        copyButton.addEventListener('click', function() {
            const code = pre.querySelector('code');
            if (code) {
                navigator.clipboard.writeText(code.textContent).then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                });
            }
        });
        
        pre.style.position = 'relative';
        pre.appendChild(copyButton);
    });
}

// Function to initialize forms with additional validation or features
function initializeForms() {
    // Add input validation or enhancement
    document.querySelectorAll('form').forEach(form => {
        // Example: Add real-time validation to inputs
        form.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
        
        // Handle form submission
        form.addEventListener('submit', function(e) {
            let isValid = true;
            
            // Validate all fields in the form
            form.querySelectorAll('input, textarea, select').forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                showFormError(form, 'Please correct the errors in the form.');
            }
        });
    });
}

// Validate a single form field
function validateField(field) {
    // Remove previous error classes
    field.classList.remove('error');
    
    // Get the field wrapper or parent to show error
    const fieldWrapper = field.closest('.form-group') || field.parentNode;
    
    // Remove previous error message
    const existingError = fieldWrapper.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    let isValid = true;
    let errorMessage = '';
    
    // Required field validation
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required.';
    }
    // Email validation
    else if (field.type === 'email' && field.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
            isValid = false;
            errorMessage = 'Please enter a valid email address.';
        }
    }
    
    if (!isValid) {
        field.classList.add('error');
        
        // Create error message element
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.style.color = '#dc3545';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        errorElement.textContent = errorMessage;
        
        fieldWrapper.appendChild(errorElement);
    }
    
    return isValid;
}

// Show form-level error message
function showFormError(form, message) {
    // Remove previous form errors
    const existingFormError = form.querySelector('.form-error');
    if (existingFormError) {
        existingFormError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('form-error', 'alert', 'alert-danger');
    errorDiv.textContent = message;
    
    // Insert at the beginning of the form
    form.insertBefore(errorDiv, form.firstChild);
    
    // Scroll to the error
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Utility function to check if element is in viewport (for animations)
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}