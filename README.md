# Brewery Finder

## Overview

**Brewery Finder** is a simple React application that fetches brewery data from the [Open Brewery DB API](https://www.openbrewerydb.org/) and displays it in a user-friendly interface. This application helps users explore breweries across the United States, showing the brewery name, type, location, and a link to their respective websites.

## Features

- Displays a list of breweries with their name, type, location, and website links.
- Implements graceful error handling for failed API requests.
- Features a responsive UI that adjusts for different screen sizes.
- Clean and visually appealing design with hover effects on brewery cards.
- The app is built with React and uses Axios to fetch data from the Open Brewery DB API.

## Installation

To set up the project locally, follow the steps below:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/brewery-finder.git
    ```

2. **Navigate into the project directory**:

    ```bash
    cd brewery-finder
    ```

3. **Install the dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000` in your browser.

## Chosen API

This project uses the [Open Brewery DB API](https://www.openbrewerydb.org/), a free public API that provides information about breweries across the United States. The data includes:
- Brewery name
- Type of brewery (e.g., micro, brewpub, large, etc.)
- Location (city, state)
- Website URL

The application fetches data from the following endpoint:
- `https://api.openbrewerydb.org/breweries`

## Assumptions Made During Development

- The application fetches a list of breweries from the API. It handles errors gracefully if the API fails to respond.
- The app does not include a search or filter functionality due to the time constraint.
- Data fetching is done using Axios, and the component state is updated based on the API response.
- The layout is responsive, ensuring that the brewery cards adjust to different screen sizes.
- The app assumes the API provides an array of breweries in the response.

## Trade-offs and Limitations

- **Limited functionality**: The application currently does not implement advanced features like search or filtering due to time constraints.
- **No persistent state management**: The app does not use advanced state management libraries like Redux, focusing only on local state for simplicity.
- **Error handling**: Basic error messages are displayed when the API fails to load data, but no specific error types are handled.
- **Mobile responsiveness**: While the app is responsive, further improvements could be made to optimize the user experience on smaller screens.

## Code Structure

- **App.js**: The main React component responsible for fetching brewery data from the API and rendering it.
- **App.css**: Contains the styling for the main components, including grid layout for the brewery list and hover effects on the brewery cards.
- **index.css**: Includes global styles, such as resetting default browser styles and setting up base typography and body styling.
- **package.json**: Lists all project dependencies and configuration for running the project.
- **app.test.js**: A basic test file that checks if the app renders correctly.

## Testing

Basic testing is done using [React Testing Library](https://testing-library.com/). You can run the tests by executing the following command:

    npm test

Currently, the test checks for the basic rendering of the app, but you can expand the tests to cover more features like data fetching, error handling, and UI rendering.

## How to Contribute

Feel free to fork the repository and submit pull requests. If you encounter any bugs or want to suggest new features, please open an issue on the [GitHub repository page](https://github.com/your-username/brewery-finder).

## Future Improvements

- Add search and filtering functionality to allow users to search for breweries by type, name, or location.
- Implement pagination or infinite scroll to improve performance when dealing with a large number of breweries.
- Add more comprehensive tests, especially for edge cases and API failure scenarios.
- Improve error handling to show more specific error messages and retry logic for failed API requests.

