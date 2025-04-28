# Unalive - Life Tracker

Unalive is a React-based web application that visualizes your life expectancy in an engaging and interactive way. It calculates the time you have left to live based on your birthdate and life expectancy, and presents it in various formats such as progress bars, clocks, calendars, and summaries. Learnt how to build this with the help of [Smoljame's React tutorial](https://www.youtube.com/@Smoljames).

---

## Features

- **Hero Section**: Displays your remaining weeks and a progress bar from birth to death.
- **Clocks**: Visualizes time left in different units (years, months, weeks, days, hours, minutes).
- **Calendar**: Represents your life as a grid of dots, where each dot is a week.
- **Summary**: Provides a summary of your life expectancy and expected year of death.
- **Form Modal**: Allows you to input or update your name, birthdate, and life expectancy.
- **Dynamic Updates**: Recalculates time left every second.
- **Local Storage**: Saves your data locally for persistence.

```
first/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Clocks.jsx
│   │   ├── Form.jsx
│   │   ├── Hero.jsx
│   │   ├── Portal.jsx
│   │   └── Summary.jsx
│   ├── layouts/
│   │   ├── Layout.jsx
│   │   └── Calendar.jsx
│   ├── utils/
│   │   └── index.js
│   ├── App.jsx
│   └── main.jsx
├── index.css
├── fanta.css
└── vite.config.js
```


Components: 
1. Layout:- 
Provides a consistent structure with a header, main content, and footer.
2. Hero:-
Displays the user's remaining weeks and a progress bar.
3. Clocks:-
Visualizes time left in different units using circular clocks.
4. Calendar:-
Represents life expectancy as a grid of dots, where each dot is a week.
5. Summary:-
Summarizes the user's life expectancy and expected year of death.
6. Form:-
A modal form for updating user details (name, birthdate, life expectancy).
7. Portal:-
Renders the modal outside the main DOM hierarchy using React Portals.


Technologies Used:-
1. React
2. Vite
3. JavaScript (ES6+)
4. CSS
5. Font Awesome
6. HTML
