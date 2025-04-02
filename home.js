export function loadHome() {
    console.log('Home section loaded');

    // Remove any existing dynamic CSS
    const oldStyle = document.getElementById('dynamic-css');
    if (oldStyle) oldStyle.remove();

    // Inject CSS styles directly
    const style = document.createElement('style');
    style.id = 'dynamic-css';
    style.textContent = `
        /* Home Page Styles */
        .home-page-body {
            font-family: "Playfair Display", serif;
        }

        .header-text {
            text-align: center;
        }

        /* Center Text Styles */
        .home-center-text {
            position: absolute;
            top: 45%;
            left: 10%;
            color: aliceblue;
            font-size: 1.5rem;
            text-align: left;
        }

        .restaurant-name {
            font-family: "Great Vibes", serif;
            font-size: 2.5rem;
            color: aliceblue;
        }

        @media (max-width: 768px) {
            .home-center-text {
                top: 55%;
                left: 5%;
                right: 5%;
                width: 90%;
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);

    // Change content in the center text section
    const content = document.querySelector('.CenterText');
    content.className = 'home-center-text'; // Update class name
    content.innerHTML = `Welcome to <span class="restaurant-name">Restaurant99!</span> <br> 
                         Enjoy fresh flavors, warm hospitality, <br> and a dining experience made just for you.`;

    // Set body class for home page styling
    document.body.classList.add('home-page-body');
}