# Eventify Application

## Description
Eventify is a web application designed to manage and display events. It allows users to view registered events, check-in attendees, and display event summaries. The application is built using Angular and Angular Material for a consistent and responsive user interface.

## Features
- **Home Page**: Displays a list of registered events with a summary of each event.
- **Event Summary**: Shows detailed information about each event, including the number of registered attendees and the attendance percentage.
- **Check-In**: Allows users to check-in attendees by validating their ticket identifiers.
- **Multilingual Support**: Supports multiple languages for a better user experience.

## Technologies Used

### Angular
- **Angular CLI**: Used to generate components, services, and other Angular features.
- **Routing**: Configured using `@angular/router` to navigate between different pages like Home, Check-In, and Page Not Found.

### Angular Material
- **Installation**: Installed using `ng add @angular/material`.
- **Components Used**:
  - `MatToolbarModule` for the toolbar.
  - `MatCardModule` for displaying event summaries.
  - `MatGridListModule` for the grid layout of events.
  - `MatButtonModule` for buttons.
  - `MatFormFieldModule` and `MatInputModule` for form fields in the Check-In component.

### i18n (Internationalization)
- **ngx-translate**: Used for translating the application into multiple languages.
  - **Installation**: Installed using `npm install @ngx-translate/core @ngx-translate/http-loader`.
  - **Configuration**: Configured to load translation files from the `assets/i18n` directory.

## Author
- **Name**: Ely Rivaldo Cortez Flores
- **Code**: U202215313
