# Nasdaq Mobile Application React-Native

A cross-platform stock market mobile app built using React-Native (Expo) that displays all stocks listed in Nasdaq exchange with their ticker, name, and details.

<img align="center" src="./screenshots/nasdaq.gif?raw=true" width="200px" />
<br>
<br>

# Features

- Infinite List of stocks
- List is Lazy-Loaded
- Details page for each stock
- Search stocks (paginated)
- Stock stats and diagrams

# Project Directory

    .
    ├── assets                    # Static Assets
    ├── src                       # Source Code
    │   ├── Components            # Shared Components
    		└── __tests__         # Unit tests for each component
        ├── Api            	      # Api functions
        ├── Overmind              # Overmind states
        ├── Screens            	  # App main containers
        ├── Mocks            	  # Mock data
        ├── Hooks            	  # Custom hooks
        ├── Theme            	  # Theme config
        ├── Navigation            # Navigation files
        ├── types                 # Interfaces and types
    │   └── cypress               # E2E tests
    ├── package.json              # List of Packages used in the project
    ├── app.json                  # Configuring parts of your app
    ├── App.js                    # Starting point of the app
    └── README.md                 # Comprehensive desicription

# Preview App

1. Dowload Expo app on device:
   [App Store](https://apps.apple.com/us/app/expo-go/id982107779'), [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US')
2. Scan the following QR code:

![QR Code](https://firebasestorage.googleapis.com/v0/b/myfirstproject-5a8f5.appspot.com/o/expo-go-resized.svg?alt=media&token=b29b8a22-4de3-40c6-9e77-aed6bf6b993f)

# Setup instructions

### 1. Install dependencies

```sh
# Clone the example app repo
git clone https://github.com/shehabeldeenibrahim/NasdaqApp.git
cd NasdaqApp

# Install npm dependencies
npm install --global expo-cli
yarn
```

### 2. Run App Locally

1. Create `.env` file

```sh
# Create env file
cp .env
```

2. Add `APIKEY` and `BASE_URL`

3. Run `expo start`

# Tests

1. E2E with [Cypress](https://www.cypress.io/)

```sh
cd cypress
npx cypress open
```

2. Unit tests with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

```sh
yarn test
```

# Screenshots

<table align="center">
	<thead>
		<td>
			<h1 style="border-bottom-width: 0;">Explore</h1> 
		</td>
		<td>
			<h1 style="border-bottom-width: 0;">Search</h1> 
		</td>
		<td>
			<h1 style="border-bottom-width: 0;">Details</h1> 
		</td>
	</thead>
	<tr>
		<td>
			<img src="https://firebasestorage.googleapis.com/v0/b/myfirstproject-5a8f5.appspot.com/o/ExploreiOS.png?alt=media&token=4e20546d-93a9-422d-94ae-f427a1aa3c66"  width="200px"/>
		</td>
		<td>
			 <img width=200 src="https://firebasestorage.googleapis.com/v0/b/myfirstproject-5a8f5.appspot.com/o/SearchiOS.png?alt=media&token=06c2b5cc-0003-4147-9d57-8924c3fa1241" width="200px"/>
		<td>
			 <img width=200 src="https://firebasestorage.googleapis.com/v0/b/myfirstproject-5a8f5.appspot.com/o/DetailsiOS.png?alt=media&token=4bfa4ab2-4361-4536-b737-e2086b7ee55b" width="200px"/>
	</tr>
	
</table>

# Requirements

- [Expo](https://expo.io/)
- [Yarn](https://yarnpkg.com/)
- [React-Native-Elements](https://reactnativeelements.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest](https://jestjs.io)
- [Cypress](https://www.cypress.io/)
