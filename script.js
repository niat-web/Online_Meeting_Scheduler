// script.js
 
 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 const body = document.body;
 
 darkModeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
  body.removeAttribute('data-theme');
  darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  } else {
  body.setAttribute('data-theme', 'dark');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  }
 });
 
 // Meeting Form
 const meetingForm = document.getElementById('meetingForm');
 const meetingTitleInput = document.getElementById('meetingTitle');
 const meetingDateInput = document.getElementById('meetingDate');
 const meetingTimeInput = document.getElementById('meetingTime');
 const meetingDurationInput = document.getElementById('meetingDuration');
 const meetingParticipantsInput = document.getElementById('meetingParticipants');
 const formNotification = document.getElementById('formNotification');
 
 meetingForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
 
  // Validate form inputs
  if (!meetingForm.checkValidity()) {
  meetingTitleInput.classList.add('is-invalid');
  meetingDateInput.classList.add('is-invalid');
  meetingTimeInput.classList.add('is-invalid');
  meetingDurationInput.classList.add('is-invalid');
  meetingParticipantsInput.classList.add('is-invalid');
  formNotification.className = 'error';
  formNotification.textContent = 'Please fill in all required fields.';
  return;
  }
 
  const title = meetingTitleInput.value;
  const date = meetingDateInput.value;
  const time = meetingTimeInput.value;
  const duration = meetingDurationInput.value;
  const participants = meetingParticipantsInput.value;
 
  console.log('Meeting Scheduled:', {
  title,
  date,
  time,
  duration,
  participants
  });
 
  displayMeeting(title, date, time, duration, participants);
  // Display success notification
  formNotification.className = 'success';
  formNotification.textContent = 'Meeting scheduled successfully!';
 
  // Clear input fields
  meetingTitleInput.value = '';
  meetingDateInput.value = '';
  meetingTimeInput.value = '';
  meetingDurationInput.value = '';
  meetingParticipantsInput.value = '';
 
  // Clear validation styling
  meetingTitleInput.classList.remove('is-invalid');
  meetingDateInput.classList.remove('is-invalid');
  meetingTimeInput.classList.remove('is-invalid');
  meetingDurationInput.classList.remove('is-invalid');
  meetingParticipantsInput.classList.remove('is-invalid');
 });
 
 // Timezone Checker
 const timezoneSelect = document.getElementById('timezoneSelect');
 const checkTimezoneButton = document.getElementById('checkTimezoneButton');
 const timezoneInfoDiv = document.getElementById('timezoneInfo');
 const refreshDataButton = document.getElementById('refreshDataButton');
 
 async function fetchData(url) {
  try {
  const response = await fetch(url);
  if (response.ok) {
  return await response.json();
  } else {
  return null;
  }
  } catch (error) {
  const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
  const proxyResponse = await fetch(proxyUrl);
  if (proxyResponse.ok) {
  return await proxyResponse.json();
  } else {
  return null;
  }
  }
 }
 function displayMeeting(title, date, time, duration, participants) {
    const meetingsContainer = document.getElementById('meetingsContainer');
    const meetingDiv = document.createElement('div');
    meetingDiv.classList.add('meeting-item');
    
    // Create and append meeting details to the div
    meetingDiv.innerHTML = `
      <h5>${title}</h5>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Duration:</strong> ${duration} minutes</p>
      <p><strong>Participants:</strong> ${participants}</p>
    `;
  
    meetingsContainer.appendChild(meetingDiv);
  }
  
 async function displayTimezoneInfo(selectedZone) {
  const apiKey = 'bd28475e30944940932583d09d86a5a3';
  const apiUrl = `https://api.ipgeolocation.io/timezone?apiKey=${apiKey}&tz=${selectedZone}`;
 
  const data = await fetchData(apiUrl);
 
  if (data) {
  const shuffledData = [data].sort(() => Math.random() - 0.5);
  const $timezone = shuffledData[0].timezone;
  const $date_time_ymd = shuffledData[0].date_time_ymd;
  const $date_time_txt = shuffledData[0].date_time_txt;
  const $time_12 = shuffledData[0].time_12;
  const $time_24 = shuffledData[0].time_24;
  timezoneInfoDiv.innerHTML = `
  <p><strong>Timezone:</strong> ${$timezone}</p>
  <p><strong>Date (YYYY-MM-DD):</strong> ${$date_time_ymd}</p>
  <p><strong>Date and Time (Text):</strong> ${$date_time_txt}</p>
  <p><strong>Time (12-hour):</strong> ${$time_12}</p>
  <p><strong>Time (24-hour):</strong> ${$time_24}</p>
  `;
  } else {
  timezoneInfoDiv.innerHTML = '<p>Error fetching timezone information.</p>';
  }
 }
 
 checkTimezoneButton.addEventListener('click', () => {
  const selectedZone = timezoneSelect.value;
  displayTimezoneInfo(selectedZone);
 });
 
 refreshDataButton.addEventListener('click', () => {
  const selectedZone = timezoneSelect.value;
  displayTimezoneInfo(selectedZone);
 });
 
 // Initialize with default timezone
 displayTimezoneInfo(timezoneSelect.value);