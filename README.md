
Overview
This project is a simple shopping app built with React Native. It features a home screen displaying a list of products and a cart screen for managing items added to the cart. The app uses AsyncStorage for persisting the cart data across sessions.

Features
Product Listing: Displays a list of products on the home screen.
Add to Cart: Allows users to add products to the cart.
Remove from Cart: Allows users to remove products from the cart.
Persistent Storage: Uses AsyncStorage to save the cart state between app sessions.
Navigation: Utilizes React Navigation for navigating between the home and cart screens.
Design Choices
User Interface
Header: The header includes navigation icons, a logo, and a search icon, providing a familiar layout for users.
Product Grid: Products are displayed in a grid format for a clean and organized view.
Add to Cart Button: Each product has a button to add it to the cart, enhancing usability.
Cart Summary: The cart screen provides a summary of items, their prices, and the total cost.
Checkout Button: A clearly visible "Checkout" button at the bottom of the cart screen to proceed with the checkout process.
Data Storage
AsyncStorage:
Saving Cart Data: When items are added or removed from the cart, the updated cart is saved to AsyncStorage.
Loading Cart Data: On app launch, the cart data is loaded from AsyncStorage to maintain the state across sessions.
Implementation
HomeScreen Component
State Management: Uses useState to manage the cart state.
Effect Hook: Uses useEffect to load cart data from AsyncStorage when the component mounts.
Add to Cart: Adds a product to the cart if it is not already present, updates the state, and saves the new cart state to AsyncStorage.
CartScreen Component
State Management: Uses useState to manage the cart state.
Effect Hook: Uses useEffect to load cart data from AsyncStorage when the component mounts.
Remove from Cart: Removes a product from the cart, updates the state, and saves the new cart state to AsyncStorage.
Navigation
Stack Navigator: Utilizes a stack navigator for managing navigation between the home and cart screens.

screenshots
![2](https://github.com/Stephenamankwa/rn-assignment6-11039578/assets/160183785/d07e2f3e-86cb-4c2d-b45c-9b7929e19dbf)
![1](https://github.com/Stephenamankwa/rn-assignment6-11039578/assets/160183785/d1586992-f460-4970-994c-81c9d9ea70b7)

