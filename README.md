# Construction and Repair Service Website

A comprehensive website for a construction and repair service company with enhanced contact features.

## Contact System Features

The website includes multiple ways for users to get in touch with the company:

1. **Contact Form** - Users can fill out a detailed contact form with name, email, phone, subject, and message.
2. **Callback Request** - Users can request a callback at their preferred time of day.
3. **Quick Contact Options** - Direct buttons for:
   - Calling the company's phone number
   - Sending an email
   - Connecting via WhatsApp with a pre-filled message

## Setup Instructions

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm run install-deps
   ```
3. Create a `.env` file in the backend directory with the following:
   ```
   PORT=5005
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   ```
   Note: For Gmail, you need to set up an "App Password" for security.

### Running the Application

#### On Windows:

Windows PowerShell doesn't support the `&&` operator for command chaining the same way as bash. Use one of these methods instead:

**Option 1:** Use the Windows batch file

```
npm run start-win
```

**Option 2:** Run backend and frontend in separate terminals

- Terminal 1: `npm run backend`
- Terminal 2: `npm run frontend`

**Option 3:** If you have PowerShell 7+, you can use:

```
npm run start
```

#### On macOS/Linux:

Run both frontend and backend simultaneously:

```
npm start
```

Or run them separately:

- Frontend: `npm run frontend`
- Backend: `npm run backend`

The frontend runs on port 3000, and the backend runs on port 5005.

## Troubleshooting

### Port Issues

If you see an error message about port 5003 or 5005 already being in use:

1. Find the process using the port:

   ```
   netstat -ano | findstr :5005
   ```

2. Kill the process:

   ```
   taskkill /PID <PID> /F
   ```

   Replace `<PID>` with the process ID found in step 1.

3. Try starting the server again.

### Email Sending Issues

If emails aren't being sent:

1. Check your `.env` file in the backend directory
2. For Gmail, ensure you're using an App Password, not your regular password
3. Check the console for error messages

## Environment Variables

### Backend

- `PORT`: Backend server port (default: 5005)
- `EMAIL_USER`: Email address for sending contact form messages
- `EMAIL_PASSWORD`: Email password or app password for authentication

## Email Configuration

The application uses Nodemailer with Gmail to send emails. For production, consider:

1. Using an email service provider like SendGrid or Mailgun
2. Setting up proper error handling and retries
3. Implementing email templates
