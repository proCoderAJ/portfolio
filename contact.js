// Contact Page JavaScript - All in one file for easy setup

        document.addEventListener('DOMContentLoaded', function() {
            // Initialize all features
            initializeFormHandling();
            initializeInputEffects();
            initializeFloatingShapes();
            initializeScrollAnimations();
            initializeFormValidation();
        });

        // Form submission handler
        function initializeFormHandling() {
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', handleFormSubmit);
            }
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            
            const submitBtn = document.querySelector('.submit-btn');
            const btnText = document.querySelector('.btn-text');
            const loading = document.querySelector('.loading');
            const responseMessage = document.getElementById('responseMessage');
            
            // Get form data
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);
            
            // Validate form data
            if (!validateFormData(data)) {
                showMessage('Please fill in all required fields correctly.', 'error');
                return;
            }
            
            // Show loading state
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            loading.style.display = 'inline-block';
            responseMessage.style.display = 'none';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Reset button state
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                loading.style.display = 'none';
                
                // Show success message
                showMessage('Thank you for your message! I\'ll get back to you within 24 hours.', 'success');
                
                // Reset form
                e.target.reset();
                
                // Clear character counter
                const charCount = document.querySelector('.char-count');
                if (charCount) {
                    charCount.textContent = '0/500 characters';
                }
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    responseMessage.style.display = 'none';
                }, 5000);
                
            }, 2000);
        }

        // Validate form data
        function validateFormData(data) {
            const required = ['firstName', 'lastName', 'email', 'subject', 'message'];
            
            for (let field of required) {
                if (!data[field] || data[field].trim() === '') {
                    return false;
                }
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                return false;
            }
            
            return true;
        }

        // Show response message
        function showMessage(message, type) {
            const responseMessage = document.getElementById('responseMessage');
            responseMessage.className = `response-message ${type}`;
            responseMessage.textContent = message;
            responseMessage.style.display = 'block';
        }

        // Input focus effects
        function initializeInputEffects() {
            const inputs = document.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.style.transform = 'translateX(5px)';
                });
                
                input.addEventListener('blur', function() {
                    this.parentElement.style.transform = 'translateX(0)';
                });
            });
        }

        // Floating shapes animation
        function initializeFloatingShapes() {
            randomizeShapes();
            setInterval(randomizeShapes, 35000);
        }

        function randomizeShapes() {
            const shapes = document.querySelectorAll('.floating-shape');
            shapes.forEach(shape => {
                const randomTop = Math.random() * 100;
                const randomLeft = Math.random() * 100;
                const randomDelay = Math.random() * 25;
                
                shape.style.top = randomTop + '%';
                shape.style.left = randomLeft + '%';
                shape.style.animationDelay = randomDelay + 's';
            });
        }

        // Animate cards on scroll
        function initializeScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all cards
            document.querySelectorAll('.info-card, .contact-form').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(el);
            });
        }

        // Form validation with visual feedback
        function initializeFormValidation() {
            // Email validation
            const emailInput = document.getElementById('email');
            if (emailInput) {
                emailInput.addEventListener('input', function() {
                    const email = this.value;
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    
                    if (email && !emailRegex.test(email)) {
                        this.style.borderColor = '#FF4444';
                        this.style.boxShadow = '0 0 10px rgba(255, 68, 68, 0.3)';
                    } else {
                        this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        this.style.boxShadow = 'none';
                    }
                });
            }

            // Phone number formatting
            const phoneInput = document.getElementById('phone');
            if (phoneInput) {
                phoneInput.addEventListener('input', function() {
                    let value = this.value.replace(/\D/g, '');
                    if (value.length >= 10) {
                        // Format as Indian number
                        if (value.startsWith('91') && value.length === 12) {
                            value = value.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3');
                        } else if (value.length === 10) {
                            value = value.replace(/(\d{5})(\d{5})/, '$1 $2');
                        }
                    }
                    this.value = value;
                });
            }

            // Character count for message
            const messageInput = document.getElementById('message');
            if (messageInput) {
                messageInput.addEventListener('input', function() {
                    const maxLength = 500;
                    const currentLength = this.value.length;
                    
                    let charCount = document.querySelector('.char-count');
                    if (!charCount) {
                        charCount = document.createElement('div');
                        charCount.className = 'char-count';
                        this.parentElement.appendChild(charCount);
                    }
                    
                    charCount.textContent = `${currentLength}/${maxLength} characters`;
                    
                    if (currentLength > maxLength) {
                        charCount.style.color = '#FF4444';
                        this.style.borderColor = '#FF4444';
                    } else if (currentLength > maxLength * 0.8) {
                        charCount.style.color = '#FFD700';
                        this.style.borderColor = '#FFD700';
                    } else {
                        charCount.style.color = '#999';
                        this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }
                });
            }
        }

        // Parallax effect for background
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const shapes = document.querySelectorAll('.floating-shape');
            
            shapes.forEach((shape, index) => {
                const rate = (index + 1) * 0.1;
                shape.style.transform += ` translateY(${scrolled * rate}px)`;
            });
        });

        // Enhanced social link interactions
        document.addEventListener('DOMContentLoaded', function() {
            const socialLinks = document.querySelectorAll('.social-link');
            socialLinks.forEach(link => {
                link.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.1) rotate(5deg)';
                });
                
                link.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                });
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl/Cmd + Enter to submit form
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                const form = document.getElementById('contactForm');
                if (form && document.activeElement.form === form) {
                    e.preventDefault();
                    form.dispatchEvent(new Event('submit'));
                }
            }
            
            // Escape to clear form
            if (e.key === 'Escape') {
                const form = document.getElementById('contactForm');
                if (form && document.activeElement.form === form) {
                    if (confirm('Clear the form?')) {
                        form.reset();
                        const charCount = document.querySelector('.char-count');
                        if (charCount) {
                            charCount.textContent = '0/500 characters';
                        }
                    }
                }
            }
        });