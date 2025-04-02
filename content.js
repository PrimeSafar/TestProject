export function loadContent() {
    console.log('Contact Us section loaded');

    // Remove any existing dynamic CSS
    const oldStyle = document.getElementById('dynamic-css');
    if (oldStyle) oldStyle.remove();

    // Inject CSS styles directly
    const style = document.createElement('style');
    style.id = 'dynamic-css';
    style.textContent = `
        /* Contact Page Styles */
        .contact-page-body {
            background-image: url(/src/photo/logoimg.jpg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            height: 100%;
        }

        .contact-container {
            position: absolute;
            top: 39px;
            width: 100%;
        }

        .contact-us {
            font-family: 'Roboto', sans-serif;
            max-width: 900px;
            margin: 40px auto;
            padding: 40px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        .contact-us h2 {
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .contact-us p {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 30px;
        }

        .contact-details {
            display: flex;
            justify-content: space-around;
            margin-bottom: 30px;
        }

        .contact-item {
            font-size: 1.1rem;
            color: #333;
        }

        .contact-item h3 {
            font-size: 1.3rem;
            font-weight: 600;
            color: #e67e22;
            margin-bottom: 5px;
        }

        .contact-item p {
            font-size: 1rem;
            color: #777;
        }

        .contact-item a {
            color: #e67e22;
            text-decoration: none;
            font-weight: bold;
        }

        .contact-item a:hover {
            text-decoration: underline;
            color: #d35400;
        }

        /* Form Styles */
        .contact-form {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            width: 100%;
        }

        .form-group {
            display: flex;
            flex-direction: column;
        }

        .form-label {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 8px;
            color: #333;
        }

        .form-input,
        .form-textarea {
            padding: 10px;
            font-size: 1rem;
            border: 2px solid #ccc;
            border-radius: 8px;
            outline: none;
            transition: border-color 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
            border-color: #e67e22;
        }

        .form-textarea {
            resize: horizontal;
            min-height: 30px;
        }

        .submit-button {
            width: 400px;
            margin: 30px;
            height: 50px;
            background-color: #e67e22;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.2rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .submit-button:hover {
            background-color: #d35400;
        }

        .submit-button:active {
            background-color: #c0392b;
        }

        /* Responsive Styles */
        @media (min-width: 768px) {
            .contact-details {
                flex-direction: row;
                justify-content: space-between;
            }
            .contact-form {
                grid-template-columns: 1fr 1fr;
                gap: 30px;
            }
        }

        @media (max-width: 768px) {
            .contact-us {
                padding: 20px;
                margin: 20px auto;
                width: 90%;
            }

            .contact-us h2 {
                font-size: 1.8rem;
            }

            .contact-details {
                flex-direction: column;
                gap: 20px;
            }

            .contact-item {
                margin-bottom: 15px;
            }

            .contact-form {
                grid-template-columns: 1fr;
            }

            .submit-button {
                width: 100%;
                margin: 20px 0;
            }

            .contact-container {
                top: 20px;
                position: relative;
            }
        }
    `;
    document.head.appendChild(style);

    // Change content in the center text section
    const content = document.querySelector('.CenterText');
    content.className = 'contact-container';
    content.innerHTML = '';

    // Create the contact us form dynamically
    const contactForm = document.createElement('div');
    contactForm.classList.add('contact-us');
    
    // Contact Us Form Header
    const header = document.createElement('h2');
    header.innerText = 'Wed Love to Hear from You!';
    contactForm.appendChild(header);
    
    const infoText = document.createElement('p');
    infoText.innerText = 'Whether you have a question, want to make a reservation, or just want to share your experience, feel free to reach out.';
    contactForm.appendChild(infoText);
    
    // Contact details section
    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');

    const emailItem = document.createElement('div');
    emailItem.classList.add('contact-item');
    emailItem.innerHTML = `<h3>Email:</h3><p><a href="mailto:info@restaurant99.com">info@restaurant99.com</a></p>`;
    contactDetails.appendChild(emailItem);

    const phoneItem = document.createElement('div');
    phoneItem.classList.add('contact-item');
    phoneItem.innerHTML = `<h3>Phone:</h3><p><a href="tel:+1234567890">+1 (234) 567-890</a></p>`;
    contactDetails.appendChild(phoneItem);

    const locationItem = document.createElement('div');
    locationItem.classList.add('contact-item');
    locationItem.innerHTML = `<h3>Location:</h3><p>Restaurant99, 123 Flavor Street, City, Country, 56789</p>`;
    contactDetails.appendChild(locationItem);

    contactForm.appendChild(contactDetails);

    // Contact form
    const form = document.createElement('form');
    form.classList.add('contact-form');
    form.action = '/submit_contact';
    form.method = 'POST';
    
    const nameGroup = document.createElement('div');
    nameGroup.classList.add('form-group');
    nameGroup.innerHTML = `<label class="form-label" for="name">Your Name:</label>
                          <input class="form-input" type="text" id="name" name="name" required>`;
    form.appendChild(nameGroup);

    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');
    emailGroup.innerHTML = `<label class="form-label" for="email">Your Email:</label>
                           <input class="form-input" type="email" id="email" name="email" required>`;
    form.appendChild(emailGroup);

    const messageGroup = document.createElement('div');
    messageGroup.classList.add('form-group');
    messageGroup.innerHTML = `<label class="form-label" for="message">Message:</label>
                              <textarea class="form-textarea" id="message" name="message" required></textarea>`;
    form.appendChild(messageGroup);

    const submitButton = document.createElement('button');
    submitButton.classList.add('submit-button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Send Message';
    form.appendChild(submitButton);

    contactForm.appendChild(form);

    // Append the Contact Us form to the content
    content.appendChild(contactForm);

    // Set body class for contact page styling
    document.body.classList.add('contact-page-body');
}