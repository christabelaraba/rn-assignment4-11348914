# rn-assignment4-11348914

## Project Overview

This project aims to recreate a UI mockup for a job application interface. The application includes a login screen, a home screen displaying user information, and sections for popular and featured job cards. The application is styled to closely match the provided UI design and uses custom components throughout.

## Features

- **Login Screen**: Users can enter their name and email, which are then passed to the home screen upon pressing login.
- **Home Screen**: Displays the user's name and email.
- **Job Cards**: Functional components for displaying popular and featured job cards.
- **Styling**: The application is styled to match the provided UI mockup.

## Components

### 1. **LoginScreen**
- **Usage**: Allows users to input their name and email.
- **Functionality**: On pressing the login button, navigates to the HomeScreen with the user's name and email as props.

### 2. **HomeScreen**
- **Usage**: Displays the user's name and email.
- **Functionality**: Receives the user's name and email from the LoginScreen and displays them. Contains sections for PopularJobs and FeaturedJobs.

### 3. **JobCard**
- **Usage**: A functional component for displaying job details.
- **Props**: Accepts card details such as id, name, company, salary, companyLogo, and location.
- **Functionality**: Used to render job cards in both PopularJobs and FeaturedJobs sections.

### 4. **PopularJobs**
- **Usage**: Displays a list of popular job cards.
- **Functionality**: Contains at least 8 different job cards, using the JobCard component.

### 5. **FeaturedJobs**
- **Usage**: Displays a list of featured job cards.
- **Functionality**: Contains at least 8 different job cards, using the JobCard component.

## Screenshots
<img src="https://i.ibb.co/P53TCW2/Screenshot-20240619-233551.jpg" width="380"/>
<img src="https://i.ibb.co/pzgYw0P/Screenshot-20240619-233055.jpg" width="380"/>


---
### Student Id
11348914
