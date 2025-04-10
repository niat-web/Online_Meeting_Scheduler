```markdown
# Online_Meeting_Scheduler

## Objective
The Online Meeting Scheduler is a web application designed to facilitate the scheduling of meetings by allowing users to input meeting details such as title, date, time, duration, and participants. It incorporates a dark mode toggle for improved user experience and includes a timezone checker that utilizes the `ipgeolocation.io` API to display detailed timezone information. The application is built using HTML, CSS, and JavaScript.

## Output
<iframe src="https://github.com/niat-web/Online_Meeting_Scheduler" height="1000" width="300" title="Online_Meeting_Scheduler"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript, Font Awesome (for icons), `ipgeolocation.io` API

## Features to Implement
- Dark mode toggle functionality.
- Meeting scheduling form with input validation.
- Display scheduled meeting details.

## UI Enhancements
- Improve the visual appearance of meeting details display.
- Add error handling for API requests and display user-friendly messages.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement dark mode toggle | The website's theme should toggle between dark and light mode when the user clicks the dark mode toggle button. |
| Create meeting form and input validation | A form should be created to collect meeting details. Form should validate all inputs and display error messages if necessary.|
| Implement timezone checker | The application should fetch and display timezone information based on the user's selected timezone using the `ipgeolocation.io` API. |
| Display scheduled meetings | Meeting details should be displayed below the form when a valid form has been sent |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| Event Listeners | Used to handle click events for the dark mode toggle, form submission, and timezone check button. |
| DOM Manipulation | Used to dynamically update the content of the webpage, including changing the theme and displaying timezone information. |
| Asynchronous JavaScript and XML (AJAX) | Used to fetch timezone data from the `ipgeolocation.io` API. |
| Form validation | Input validation using Javascript's `checkValidity()` and the setting of class names to prompt error messages |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| `ipgeolocation.io` | `/timezone` | Retrieves timezone information based on the provided timezone ID. |
```