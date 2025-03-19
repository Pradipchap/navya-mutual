# Simple Mutual Fund System - React Native

This project is a simple React Native application that allows users to create mutual fund schemes and purchase units of those schemes.

## Features

-   **Create a Scheme:** Users can create new mutual fund schemes by providing the scheme name, initial price per unit, and minimum investment amount.
-   **Purchase Units:** Users can purchase units of existing schemes by specifying the investment amount. The application calculates the number of units purchased based on the price per unit.
-   **View Schemes & Investments:** Users can view a list of all created schemes and details of their purchased units for each scheme.

## Tech Stack

-   React Native (Expo)
-   React Navigation
-   Zustand for state management
-   json-server for server side and data storage
-   TypeScript

## Setup and Run

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```
3. **Create Project in expo**

`copy the projectId and paste it in expo.extra.eas.projectId   of the app.json`

4.  **Create Development build for your device or simulator**

[docs to create development build](https://docs.expo.dev/develop/development-builds/create-a-build/)

5. **Install the development build on your device or simulator**

6.  **Start the Expo development server:**

    ```bash
    npx expo start
    ```

7. **Start the json-server**

```
npm run server

```
8. **Use single command to run app and server**

```
npm run dev
```

9.  **Run the app:**

    -   Scan the QR code with the Expo Go app on your mobile device.
    -   Or, run the app in an emulator by pressing `a` (Android) or `i` (iOS) in the terminal.

## Project Structure

-   `assets/`: Contains images and other static assets.
-   `components/`: Reusable UI components.
-   `store/`: State management using zustand store.
-   `_layout.tsx`: Main application entry point.
-   `app.json`: Expo configuration file.
-   `package.json`: Project dependencies.
-   `tsconfig.json`: TypeScript configuration file.
-   `README.md`: Project documentation.
-    `hooks/` : Custom hooks

## State Management

The application utilizes zustand  for state management. The `store/` provides functions to create schemes, purchase units, and access scheme data.


## Navigation

React Navigation is used to handle navigation between screens.
Folder Structure wise navigation is handled by `@react-navigation/native` like in Next JS.

## Additional Features implemented

-   **Form Validation:** Basic form validation is implemented to ensure that required fields are filled and input values are valid.
-   **Investment Distribution Chart:** A simple pie chart is added to the Scheme Details screen to visualize the investment distribution.
-   **Dummy API Layer:** A dummy API layer using json-server or Axios with mock data has been added. See the `api` folder for more details.

## Future Improvements

-   Implement more robust error handling.
-   Add user authentication.
-   Enhance the UI/UX with more polished designs.
-   Add test cases.
