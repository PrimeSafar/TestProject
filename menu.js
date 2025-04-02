export function loadMenu() {
  console.log('Menu section loaded');

  // Remove any existing dynamic CSS link
  const oldLink = document.getElementById('dynamic-css');
  if (oldLink) oldLink.remove();

  // Inject CSS styles directly
  const style = document.createElement('style');
  style.id = 'dynamic-css';
  style.textContent = `
    /* Menu Page Styles */
    .menu-page-body {
      font-family: "Playfair Display", serif;
      background-color: rgb(248, 248, 248);
      background-image: none;
    }
    
    .menu-title {
      font-family: "Great Vibes", serif;
      position: absolute;
      top: 15%;
      color: black;
      font-size: 4rem;
      padding-top: 1%;
      height: 75%;
      width: 100%;
      left: 0%;
      text-align: center;
      background-color: rgb(233, 230, 230);
    }
    
    .menu-item {
      width: 400px;
      padding-left: 1%;
      height: 200px;
      font-size: 3rem;
      display: flex;
      margin: 20px;
    }
    
    .menu-item-image {
      width: 125px;
      height: 125px;
      border-radius: 50%;
      margin-top: 15px;
      margin-left: 8px;
    }
    
    .menu-item-title {
      font-family: "Playfair Display", serif;
      font-size: 1.8rem;
      padding-top: 15px;
      padding-right: 10px;
      font-weight: 600;
      text-align: start;
      padding-left: 7%;
      padding-bottom: 2%;
    }
    
    .menu-item-price {
      font-size: 2.2rem;
      text-align: start;
      padding-left: 7%;
      color: rgb(202, 114, 0);
    }
    
    .menu-item-description {
      font-family: "Playfair Display", serif;
      font-size: 0.9rem;
      padding-left: 5px;
    }
    
    .spaghetti-image {
      width: 128px;
      height: 128px;
      border-radius: 100%;
      margin-top: 15px;
    }
    
    .spaghetti-title {
      font-family: "Playfair Display", serif;
      font-size: 1.6rem;
      padding-top: 15px;
      padding-right: 10px;
      font-weight: 600;
      text-align: start;
      padding-left: 7%;
      padding-bottom: 2%;
    }
    
    .menu-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 20px;
    }
    
    .menu-content {
      display: flex;
      flex-direction: column;
    }
    
    @media (max-width: 768px) {
      .menu-title {
        top: 20%;
        font-size: 3rem;
        padding-top: 20px;
        height: auto;
      }
    
      .menu-wrapper {
        flex-direction: column;
        align-items: center;
      }
    
      .menu-item {
        width: 90%;
        margin-bottom: 30px;
        height: auto;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    
      .menu-item-image, .spaghetti-image {
        margin: 15px auto;
      }
    
      .menu-item-title, .spaghetti-title {
        text-align: center;
        padding-left: 0;
      }
    
      .menu-item-price {
        text-align: center;
        padding-left: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Change content in the center text section
  const content = document.querySelector('.CenterText');
  content.innerHTML = '<div class="menu-title">The Menu</div>';

  // Create wrapper div for menu items
  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menu-wrapper');

  // Create Menu Items
  const menuItems = [
    // Pizzas
    {
      type: 'pizza',
      title: 'American Pizza',
      price: '9$',
      description: '"Fresh veggies, and melted cheese on a crispy crust."',
      image: '/src/photo/pizza1-removebg-preview.png',
      class: 'pizza-image'
    },
    {
      type: 'pizza',
      title: 'Italian Pizza',
      price: '12$',
      description: '"Fresh veggies, savory black olives, mushrooms, and melted cheese."',
      image: '/src/photo/pizza2-removebg-preview.png',
      class: 'pizza-image'
    },
    {
      type: 'pizza',
      title: 'Seafood Pizza',
      price: '15$',
      description: '"A delicious combination of shrimp, mussels, and cheese."',
      image: '/src/photo/pizza3-removebg-preview.png',
      class: 'pizza-image'
    },
    // Spaghetti
    {
      type: 'spaghetti',
      title: 'Spaghetti Marinara',
      price: '10$',
      description: '"Classic spaghetti with marinara sauce and herbs."',
      image: '/src/photo/sp1.png',
      class: 'spaghetti-image'
    },
    {
      type: 'spaghetti',
      title: 'Spaghetti Bolognese',
      price: '13$',
      description: '"A creamy carbonara sauce with crispy pancetta."',
      image: '/src/photo/sp2.png',
      class: 'spaghetti-image'
    },
    {
      type: 'spaghetti',
      title: 'Spaghetti Carbonara',
      price: '14$',
      description: '"Spaghetti with rich meat sauce and herbs."',
      image: '/src/photo/spagitywithmeat-removebg-preview.png',
      class: 'spaghetti-image'
    }
  ];

  // Create and append menu items
  menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    img.classList.add(item.type === 'pizza' ? 'menu-item-image' : 'spaghetti-image');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('menu-content');

    const title = document.createElement('div');
    title.classList.add(item.type === 'pizza' ? 'menu-item-title' : 'spaghetti-title');
    title.textContent = item.title;

    const price = document.createElement('div');
    price.classList.add('menu-item-price');
    price.textContent = `Price ${item.price}`;

    const description = document.createElement('div');
    description.classList.add('menu-item-description');
    description.textContent = item.description;

    contentDiv.appendChild(title);
    contentDiv.appendChild(price);
    contentDiv.appendChild(description);

    menuItem.appendChild(contentDiv);
    menuItem.appendChild(img);

    menuWrapper.appendChild(menuItem);
  });

  // Add the menuWrapper to the content section
  content.appendChild(menuWrapper);

  // Set body class for menu page styling
  document.body.classList.add('menu-page-body');
}