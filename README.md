# ReactJS "Login with Passkey" template

This repository is a template that uses [Pangea AuthN](https://l.pangea.cloud/6YIN6PM) to enable Passkey based authentication in < 2mins

## Setup Instructions

### Step 1: Create an account on [pangea.cloud](https://console.pangea.cloud/?utm_source=github&utm_medium=react-authn-passkeys-template) and copy tokens into `.env.local` file
After signing up for a Pangea account, copy the `.env.example` template `.env.local` by running the following command in your terminal
```bash
cp .env.example .env.local
```
Open up the `.env.local` file and paste in the appropriate tokens from the Pangea AuthN service dashboard
```
REACT_APP_LOGIN_URL="<YOUR_PROJECT_HOSTED_LOGIN_URL>"
REACT_APP_CLIENT_TOKEN="<YOUR_PROJECT_CLIENT_TOKEN>"
REACT_APP_PANGEA_DOMAIN="<YOUR_PANGEA_DOMAIN>"
```

### Step 2: Add Authorized Redirect and enable Passkeys Auth Method in Pangea console
Since we’re using a React SPA (single page application), we need to add an authorized redirect, so that Pangea’s AuthN hosted pages can successfully redirect us back to the http://localhost:3000/ when a user is done authenticating.

First, let’s go under `General > Redirect (Callback) Settings` and add `http://localhost:3000/` as a redirect and save it.

Then, enable Passkeys. Go to `Single Sign On > Passkeys` and enable it. Optionally you can choose to enable fallback authentication options based on your desired user experience.

Here’s a quick video on how you can enable it in [Pangea console settings](https://youtu.be/M2kPx1WteEE).

### Step 3: Run dev server
Install the required npm packages
```
npm install
# or
yarn install
```
Start dev server
```
npm run dev
```

## Watch in Action ✨
![Login with Passkeys demo](./misc/passkey-demo.gif)

To understand the inner workings of this app, refer to this [blog](https://pangea.cloud/blog/add-passkeys-to-reactjs-in-2mins/?utm_source=github&utm_medium=reactjs-passkeys-readme).

## Deploy
<!-- Deploy with Vercel button -->
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpangeacyber%2Freact-authn-passkeys-template&env=REACT_APP_LOGIN_URL,REACT_APP_CLIENT_TOKEN,REACT_APP_PANGEA_DOMAIN&envDescription=To%20get%20the%20following%20environment%20variables%2C%20signup%20for%20a%20free%20Pangea%20account%20at%20https%3A%2F%2Fl.pangea.cloud%2F6YIN6PM%20and%20grab%20your%20tokens%20from%20AuthN%20%3E%20Overview%20%3E%20Tokens&envLink=https%3A%2F%2Fl.pangea.cloud%2F6YIN6PM&demo-title=ReactJS%20%2B%20Pangea%20AuthN%20%22Login%20with%20Passkey%22%20Template&demo-description=Add%20Pangea%20AuthN%20%22Login%20with%20Passkey%22%20in%20%3C%202mins%20with%20this%20template.)
