# Christmas List App
![Thumbnail](public/img/thumbnail.png)

Link to project: (https://christmaslist-1wf8.onrender.com/)


## How It's Made:
Tech used: EJS, CSS, JavaScript, Node.js, Passport.js, MongoDB

This app implements a Christmas list management system with authentication. It uses Node.js for the backend and Express.js for routing. Passport.js handles authentication (login and signup). Templates are rendered with EJS, and data persistence is managed through MongoDB. Flash messages are used to provide feedback to the user.

Key Routes:
Authentication: Login, signup, and account unlinking.
Profile Management: Authenticated users can manage their Christmas list (CRUD operations).
Christmas List CRUD: Add, update, delete, and toggle "purchased" status for items.



## Optimizations

Input Validation:
- Ensures item names are provided and item links are valid.
- Implements flash messages for error handling and feedback.
Database Queries:
- Uses findOneAndUpdate with upsert for efficiency in toggling purchased status.
Code Structure:
- Middleware (isLoggedIn) ensures routes requiring authentication are protected.

## Lessons Learned

- Importance of Middleware: Effective use of middleware simplifies authentication and ensures security.
- Flash Messages Improve UX: Real-time feedback helps guide user interactions and error handling.
- Database Error Handling: Proper handling of database issues prevents app crashes and enhances reliability.

## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `node server.js`
2. Navigate to `localhost:8080`

## Credit

Modified from Scotch.io's auth tutorial
