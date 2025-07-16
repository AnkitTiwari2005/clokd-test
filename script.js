// DOM Elements
const dashboard = document.getElementById('dashboard');
const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');
const backBtn = document.getElementById('back-btn');
const detailName = document.getElementById('detail-name');
const callBtn = document.getElementById('call-btn');
const aliasInput = document.getElementById('alias-input');
const saveAlias = document.getElementById('save-alias');
const currentStatusText = document.getElementById('current-status-text');
const nextFreeText = document.getElementById('next-free-text');
const timetable = document.getElementById('timetable');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const commonSlotBtn = document.getElementById('common-slot-btn');
const commonSlotModal = document.getElementById('common-slot-modal');
const closeCommonModal = document.getElementById('close-common-modal');
const friendsSelectContainer = document.getElementById('friends-select-container');
const daySelect = document.getElementById('day-select');
const calculateBtn = document.getElementById('calculate-btn');
const resultsContainer = document.getElementById('results');

// State
let currentFriendId = null;
const aliases = JSON.parse(localStorage.getItem('clokd_aliases')) || {};
const theme = localStorage.getItem('clokd_theme') || 'light';
let lastStatus = {}; // Track last known status for notifications
let backPressCount = 0; // Track back button presses
let backPressTimer = null; // Timer for back button double press

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme
  applyTheme(theme);

  // Render dashboard
  renderDashboard();

  // Setup event listeners
  setupEventListeners();

  // Initialize status tracking
  friends.forEach(friend => {
    const { status } = getCurrentStatus(friend);
    lastStatus[friend.id] = status;
  });

  // Check for status changes every 30 seconds
  setInterval(checkForStatusChanges, 30000);
});

// Theme Functions
function applyTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  themeIcon.src = `assets/icons/${themeName === 'dark' ? 'sun' : 'moon'}.svg`;
  localStorage.setItem('clokd_theme', themeName);
}

// Helper function to parse time string to minutes since midnight
function parseTimeToMinutes(timeStr) {
  if (!timeStr) return 0;
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);

  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  return hours * 60 + minutes;
}

// Helper function to format minutes since midnight to "h:mm AM/PM"
function formatMinutesToTime(minutes) {
  let hours = Math.floor(minutes / 60);
  let mins = minutes % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${hours}:${mins.toString().padStart(2, '0')} ${period}`;
}

// Get next class for a friend
function getNextClass(friend) {
  const now = new Date();
  const dayIndex = now.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[dayIndex];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (!friend.timetable[today]) return null;

  for (const event of friend.timetable[today]) {
    const startMinutes = parseTimeToMinutes(event.start);
    
    // Skip breaks and events that have already ended
    if (event.type === 'Class' && startMinutes > currentMinutes) {
      return {
        title: event.title,
        location: event.location,
        start: event.start,
        faculty: event.faculty
      };
    }
  }
  
  return null; // No next class found
}

// Dashboard Rendering
function renderDashboard() {
  dashboard.innerHTML = '';

  friends.forEach(friend => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.friendId = friend.id;

    // Get current status
    const { status, event } = getCurrentStatus(friend);
    const isFree = status === 'free';
    const nextClass = getNextClass(friend);

    if (isFree) {
      card.classList.add('free');
    } else {
      card.classList.add('in-class');
    }

    // Use alias if available
    const displayName = aliases[friend.id] || friend.name;

    card.innerHTML = `
      <div class="card-header">
        <h2>${displayName}</h2>
        <a href="tel:${friend.phone.replace(/\s/g, '')}" class="card-call-btn">
          <img src="assets/icons/phone.svg" alt="Call">
        </a>
      </div>
      <div class="status ${status}">
        ${isFree ? '🟢 Free' : '🔴 In Class'}
      </div>
      <div class="details">
        ${!isFree ? `
          <div>📚 ${event.title}</div>
          <div>🏫 ${event.location}</div>
        ` : '<div>No current class</div>'}
        ${nextClass ? `
          <div class="next-class">
            <div>⏭️ Next: ${nextClass.title}</div>
            <div>🏫 ${nextClass.location} at ${nextClass.start}</div>
          </div>
        ` : ''}
      </div>
    `;

    card.addEventListener('click', (e) => {
      // Only open detail if not clicking on call button
      if (!e.target.closest('.card-call-btn')) {
        openFriendDetail(friend.id);
      }
    });

    dashboard.appendChild(card);
  });
}

function getCurrentStatus(friend) {
  const now = new Date();
  const dayIndex = now.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[dayIndex];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (!friend.timetable[today]) {
    return { status: 'free', event: null };
  }

  for (const event of friend.timetable[today]) {
    const startMinutes = parseTimeToMinutes(event.start);
    const endMinutes = parseTimeToMinutes(event.end);

    if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
      return {
        status: event.type === 'Break' ? 'free' : 'in-class',
        event
      };
    }
  }

  return { status: 'free', event: null };
}

// Friend Detail Functions
function openFriendDetail(friendId) {
  currentFriendId = friendId;
  const friend = friends.find(f => f.id === friendId);

  // Set friend name and phone
  const displayName = aliases[friendId] || friend.name;
  detailName.textContent = displayName;
  callBtn.href = `tel:${friend.phone.replace(/\s/g, '')}`;

  // Set alias input (only show placeholder)
  aliasInput.value = '';
  aliasInput.placeholder = aliases[friendId] 
    ? `Set nickname for ${aliases[friendId]}` 
    : `Set nickname for ${friend.name.split(' ')[0]}`;

  // Update status
  updateFriendStatus(friend);

  // Render timetable
  renderTimetable(friend);

  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Scroll to top
  modal.scrollTo(0, 0);
}

function updateFriendStatus(friend) {
  const { status, event } = getCurrentStatus(friend);

  currentStatusText.textContent = status === 'free'
    ? '🟢 Currently free'
    : `🔴 In class: ${event.title}`;

  nextFreeText.textContent = getNextFreeTime(friend);
}

function getNextFreeTime(friend) {
  const now = new Date();
  const dayIndex = now.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[dayIndex];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  if (!friend.timetable[today]) return 'No classes today';

  // Find next free period
  for (const event of friend.timetable[today]) {
    const startMinutes = parseTimeToMinutes(event.start);
    const endMinutes = parseTimeToMinutes(event.end);
    if (currentMinutes > 985) {
    return 'No more classes today';
    }
    if (startMinutes > currentMinutes && event.type === 'Break') {
      return `${event.start} - ${event.end}`;
    }
  }

  return 'After 4:25 PM';
}

function renderTimetable(friend) {
  timetable.innerHTML = '';
  const now = new Date();
  const dayIndex = now.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[dayIndex];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // Add day header
  const dayHeader = document.createElement('h3');
  dayHeader.className = 'timetable-heading';
  dayHeader.textContent = "Today's Schedule";
  timetable.appendChild(dayHeader);

  if (!friend.timetable[today]) {
    const noClasses = document.createElement('p');
    noClasses.textContent = 'No classes scheduled for today';
    noClasses.classList.add('no-classes');
    timetable.appendChild(noClasses);
    return;
  }

  friend.timetable[today].forEach(event => {
    const item = document.createElement('div');
    item.className = 'timetable-item';

    const startMinutes = parseTimeToMinutes(event.start);
    const endMinutes = parseTimeToMinutes(event.end);

    // Check if current event
    if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
      item.classList.add('current');
    }
    // Check if past event
    else if (currentMinutes >= endMinutes) {
      item.classList.add('past');
    }

    // Determine event type class
    const eventTypeClass = event.type === 'Class' ? 'class' :
                          event.type === 'Break' ? 'break' : '';

    // Format details
    const detailsHTML = event.type === 'Break'
      ? `<strong>${event.title}</strong>`
      : `<strong>${event.title}</strong>
         <div>${event.faculty} • ${event.location}</div>`;

    item.innerHTML = `
      <div class="time">${event.start} - ${event.end}</div>
      <div class="event-details">
        ${detailsHTML}
      </div>
      <div class="event-type ${eventTypeClass}">
        ${event.type}
      </div>
    `;

    timetable.appendChild(item);
  });
}

// Common Free Slot Functions
function renderFriendsSelector() {
  friendsSelectContainer.innerHTML = '';

  friends.forEach(friend => {
    const div = document.createElement('div');
    div.className = 'friend-selector';

    const displayName = aliases[friend.id] || friend.name;
    const { status } = getCurrentStatus(friend);

    div.innerHTML = `
      <input type="checkbox" id="friend-${friend.id}" value="${friend.id}">
      <label for="friend-${friend.id}" class="${status}">
        <span class="status-indicator ${status}"></span>
        ${displayName}
      </label>
    `;

    friendsSelectContainer.appendChild(div);
  });
}

function calculateCommonFreeSlots() {
  const selectedFriendIds = [];
  document.querySelectorAll('#friends-select-container input:checked').forEach(checkbox => {
    selectedFriendIds.push(parseInt(checkbox.value));
  });

  if (selectedFriendIds.length < 2) {
    resultsContainer.innerHTML = '<p class="no-results">Please select at least 2 friends</p>';
    return;
  }

  const day = daySelect.value;
  const commonSlots = getCommonFreeSlots(selectedFriendIds, day);

  if (commonSlots.length === 0) {
    resultsContainer.innerHTML = '<p class="no-results">No common free time found</p>';
    return;
  }

  let html = '<div class="slots-container">';
  commonSlots.forEach(slot => {
    html += `
      <div class="time-slot">
        <span class="slot-time">${slot.start} - ${slot.end}</span>
        <span class="slot-duration">${slot.duration} min</span>
      </div>
    `;
  });
  html += '</div>';

  resultsContainer.innerHTML = html;
}

function getCommonFreeSlots(friendIds, day) {
  const startMinute = 9 * 60; // 9am = 540 minutes
  const endMinute = 17 * 60; // 5pm = 1020 minutes
  const timelineLength = endMinute - startMinute; // 480 minutes
  const timeline = Array(timelineLength).fill(0);

  // Mark busy times for each friend
  friendIds.forEach(id => {
    const friend = friends.find(f => f.id === id);
    if (!friend || !friend.timetable[day]) return;

    friend.timetable[day].forEach(event => {
      if (event.type === 'Class') {
        const eventStart = parseTimeToMinutes(event.start);
        const eventEnd = parseTimeToMinutes(event.end);

        // Only consider events within our timeline (9am-5pm)
        if (eventEnd <= startMinute || eventStart >= endMinute) return;

        // Calculate timeline indices
        const startIndex = Math.max(eventStart, startMinute) - startMinute;
        const endIndex = Math.min(eventEnd, endMinute) - startMinute;

        // Mark the busy period
        for (let i = startIndex; i < endIndex && i < timeline.length; i++) {
          timeline[i]++;
        }
      }
    });
  });

  // Find common free slots (where all friends are free)
  const commonSlots = [];
  let inSlot = false;
  let slotStart = 0;
  const totalFriends = friendIds.length;

  for (let i = 0; i < timeline.length; i++) {
    if (timeline[i] === 0) { // All friends free at this minute
      if (!inSlot) {
        inSlot = true;
        slotStart = i;
      }
    } else {
      if (inSlot) {
        inSlot = false;
        const duration = i - slotStart;
        if (duration >= 15) { // Only show slots of 15+ minutes
          const startTime = formatMinutesToTime(slotStart + startMinute);
          const endTime = formatMinutesToTime(i + startMinute);
          commonSlots.push({
            start: startTime,
            end: endTime,
            duration: duration
          });
        }
      }
    }
  }

  // Handle slot ending at end of day
  if (inSlot) {
    const duration = timeline.length - slotStart;
    if (duration >= 15) {
      const startTime = formatMinutesToTime(slotStart + startMinute);
      const endTime = formatMinutesToTime(timeline.length + startMinute);
      commonSlots.push({
        start: startTime,
        end: endTime,
        duration: duration
      });
    }
  }

  return commonSlots;
}

// Status Change Notifications
function checkForStatusChanges() {
  friends.forEach(friend => {
    const { status } = getCurrentStatus(friend);
    const prevStatus = lastStatus[friend.id];

    if (prevStatus === 'in-class' && status === 'free') {
      showFreeNotification(friend);
    }

    lastStatus[friend.id] = status;
  });
}

function showFreeNotification(friend) {
  const displayName = aliases[friend.id] || friend.name;
  const notification = document.createElement('div');
  notification.className = 'notification free';
  notification.innerHTML = `
    <span class="notification-icon">🎉</span>
    <div class="notification-content">
      <strong>${displayName} is now free!</strong>
      <p>You can call or message them</p>
    </div>
  `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateY(0)';
    notification.style.opacity = '1';
  }, 10);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateY(-100%)';
    notification.style.opacity = '0';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// Show toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'notification';
  toast.innerHTML = `
    <div class="notification-content">
      <p>${message}</p>
    </div>
  `;

  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.style.transform = 'translateY(0)';
    toast.style.opacity = '1';
  }, 10);

  // Auto-remove after 2 seconds
  setTimeout(() => {
    toast.style.transform = 'translateY(-100%)';
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2000);
}

// Handle back button
function handleBackButton() {
  // If modal is open, close it and reset counter
  if (modal.classList.contains('active')) {
    closeModalHandler();
    backPressCount = 0;
    return;
  }
  
  // If common slot modal is open, close it and reset counter
  if (commonSlotModal.classList.contains('active')) {
    commonSlotModal.classList.remove('active');
    document.body.style.overflow = '';
    backPressCount = 0;
    return;
  }
  
  // Increment back press count
  backPressCount++;
  
  if (backPressCount === 1) {
    // First press - show toast
    showToast('Press back again to exit');
    
    // Set timer to reset counter
    backPressTimer = setTimeout(() => {
      backPressCount = 0;
    }, 2000);
  } else if (backPressCount === 2) {
    // Second press - exit
    clearTimeout(backPressTimer);
    window.close(); // For mobile apps
    window.history.back(); // For browsers
  }
}

// Event Handlers
function setupEventListeners() {
  // Theme toggle
  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'light'
      : 'dark';
    applyTheme(newTheme);
  });

  // Modal close
  closeModal.addEventListener('click', closeModalHandler);

  // Back button
  backBtn.addEventListener('click', () => {
    closeModalHandler();
    backPressCount = 0;
  });

  // Save alias
  saveAlias.addEventListener('click', () => {
    if (!currentFriendId) return;

    const newAlias = aliasInput.value.trim();
    if (newAlias) {
      aliases[currentFriendId] = newAlias;
    } else {
      delete aliases[currentFriendId];
    }

    localStorage.setItem('clokd_aliases', JSON.stringify(aliases));
    detailName.textContent = newAlias || friends.find(f => f.id === currentFriendId).name;
    aliasInput.value = '';
    // Update placeholder instead of clearing input
    aliasInput.placeholder = newAlias 
      ? `Set nickname for ${newAlias}` 
      : `Set nickname for ${friends.find(f => f.id === currentFriendId).name.split(' ')[0]}`;

    renderDashboard();

    // Show confirmation
    const button = saveAlias;
    const originalHTML = button.innerHTML;
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>';
    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 2000);
  });

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModalHandler();
    }
  });

  // Enter key for alias input
  aliasInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      saveAlias.click();
    }
  });

  // Prevent zoom on double-tap
  document.addEventListener('dblclick', e => {
    e.preventDefault();
  }, { passive: false });

  // Common free slot button
  commonSlotBtn.addEventListener('click', () => {
    renderFriendsSelector();
    commonSlotModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close common slot modal
  closeCommonModal.addEventListener('click', () => {
    commonSlotModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Calculate common free slots
  calculateBtn.addEventListener('click', calculateCommonFreeSlots);

  // Close common slot modal when clicking outside
  commonSlotModal.addEventListener('click', (e) => {
    if (e.target === commonSlotModal) {
      commonSlotModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Back button handler
  document.addEventListener('backbutton', handleBackButton, false);
  window.addEventListener('popstate', handleBackButton);
}

function closeModalHandler() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Mobile viewport height fix
function setAppHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setAppHeight);
setAppHeight();