# Reserve Bus App

## Introduction

Reserve Bus is a web application that enables users to book bus tickets and manage their bookings seamlessly. This application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrates with Stripe for secure payment processing.

## Deployment

- [Frontend](https://reserve-48ilk5x4r-somya-bhardwajs-projects.vercel.app/)
- [Backend](https://bms-backend-7bjf.onrender.com)

## Usage

1. Visit the Reserve Bus App frontend at [https://reserve-48ilk5x4r-somya-bhardwajs-projects.vercel.app/](https://reserve-48ilk5x4r-somya-bhardwajs-projects.vercel.app/).
2. Browse available bus routes and select your preferred route.
3. Choose your departure date and time.
4. Select the number of seats you wish to book.
5. Proceed to checkout and make the payment using Stripe.
6. Upon successful payment, you will receive a booking confirmation along with your ticket details.

## Tech Stack

- **Client:** React.js, Bootstrap
- **Server:** Node.js, Express
- **Database:** MongoDB
- **Payment Gateway:** Stripe

## Frontend Dependencies

The frontend of this application utilizes the following dependencies:

- **axios**: A promise-based HTTP client for making requests to the backend.
- **bootstrap**: A popular CSS framework for creating responsive and stylish user interfaces.
- **notistack**: A notification library for displaying user-friendly messages.
- **react-bootstrap**: A library that combines React and Bootstrap components.
- **react-dom**: A package for rendering React components in the browser.
- **react-scripts**: A set of scripts and configuration for React applications.
- **react-toastify**: A toast notification library for React applications.

## Backend Dependencies

The backend of this application relies on the following dependencies:

- **express**: A fast and minimal web framework for Node.js.
- **mongoose**: An elegant MongoDB object modeling tool for Node.js.
- **stripe**: Stripe SDK for processing payments.

## Environment Variables

To run this project, you will need to set up the following environment variables in your `.env` file:

- `API_KEY`: Your MongoDB cluster connection key.
- `MONGODB_URI`: MongoDB live connection string.
- `MONGODB_URI_LOCAL`: MongoDB local connection string (for local development).
- `COLLECTION_NAME`: Name of the MongoDB collection.
- `NODE_ENV`: Set to `development` for local development or `production` for live deployment.
- `APP_PORT`: Port number for the backend server.
- `STRIPE_SECRET_KEY`: Stripe secret key for payment processing.

## Local Development

To run the application locally, follow these steps:

1. Clone the repository.
2. Navigate to the `client` directory and run `npm install`, then `npm start`.
3. Navigate to the `server` directory and run `npm install`, then `npm start`.

## API Reference

Base URL:

