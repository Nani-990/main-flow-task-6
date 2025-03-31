# E-Commerce Application with JavaScript

This project is a simple e-commerce application built using HTML, CSS, and JavaScript. It fetches product data from the Fake Store API, allows users to filter and search products, and provides a shopping cart functionality.

## Features

-   **Product Display:** Fetches and displays products from the Fake Store API.
-   **Product Filtering:** Allows users to filter products by category (All, Men's clothing, Women's clothing, Jewellery, Electronics).
-   **Product Search:** Enables users to search for products by name.
-   **Shopping Cart:** Provides a shopping cart to add, remove, and manage products.
-   **Quantity Management:** Allows users to increase or decrease the quantity of items in the cart.
-   **Checkout:** Simulates a checkout process with a thank-you message.
-   **Responsive Design:** Uses media queries to ensure the application is responsive on various screen sizes.

## Technologies Used

-   **HTML:** For structuring the web page.
-   **CSS:** For styling the application and making it responsive.
-   **JavaScript:** For handling the application's logic, including data fetching, filtering, searching, and cart management.
-   **Fake Store API:** For fetching product data.
-   **Font Awesome:** For icons.
-   **Roboto Font (Google Fonts):** For consistent typography.

## Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [repository URL]
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd [project directory]
    ```

3.  **Open `index.html` in your web browser.**

## Project Structure

-   `index.html`: The main HTML file for the application.
-   `styles.css`: The CSS file for styling the application.
-   `index.js`: The JavaScript file containing the application's logic.

## JavaScript Logic Overview

-   **Data Fetching (`fetchProducts`):** Fetches product data from the Fake Store API and stores it in the `allProducts` array.
-   **Product Display (`displayProducts`):** Renders the product cards onto the webpage.
-   **Category Filtering (`filterCategories`):** Filters products based on the selected category.
-   **Product Search (`searchProduct`):** Filters products based on the user's search query.
-   **Cart Management (`addToCart`, `shoppingCart`, `increment`, `decrement`, `deleteCartItem`):** Manages the shopping cart functionality, including adding, removing, and updating product quantities.
-   **Modal Control (`openCart`, `closeCart`, `seeModal`, `closeModal`):** Handles the opening and closing of the shopping cart modal.
-   **Checkout (`checkout`):** Simulates the checkout process.

## CSS Styling

-   The CSS file (`styles.css`) styles the application's layout, product cards, shopping cart modal, and other elements.
-   Media queries are used to ensure the application is responsive on different screen sizes.

## Future Improvements

-   Implement a real backend for data storage and user authentication.
-   Add more advanced filtering and sorting options.
-   Improve the checkout process with payment integration.
-   Add user accounts and order history.
-   Enhance the UI/UX with more interactive elements.
-   Implement local storage to persist cart data.

## Author

[Your Name/GitHub Username]

## License

This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details. (If applicable)
