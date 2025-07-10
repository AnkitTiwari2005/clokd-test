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
            ${!isFree ? `
            <div class="details">
                <div>📚 ${event.title}</div>
                <div>👨‍🏫 ${event.faculty}</div>
                <div>🏫 ${event.location}</div>
            </div>
            ` : '<div class="details">No current class</div>'}
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
    
    if (!friend.timetable[today]) {
        return { status: 'free', event: null };
    }
    
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    for (const event of friend.timetable[today]) {
        const [startHour, startMinute] = event.start.split(':').map(Number);
        const [endHour, endMinute] = event.end.split(':').map(Number);
        
        const startTime = startHour * 100 + startMinute;
        const endTime = endHour * 100 + endMinute;
        
        if (currentTime >= startTime && currentTime < endTime) {
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
    
    // Set alias input
    aliasInput.value = aliases[friendId] || '';
    aliasInput.placeholder = `Set nickname for ${friend.name.split(' ')[0]}`;
    
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
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
    if (!friend.timetable[today]) return 'No classes today';
    
    // Find next free period
    for (const event of friend.timetable[today]) {
        const [startHour, startMinute] = event.start.split(':').map(Number);
        const startTime = startHour * 100 + startMinute;
        
        if (startTime > currentTime && event.type === 'Break') {
            return `${event.start} - ${event.end}`;
        }
    }
    
    return 'No more classes today';
}

function renderTimetable(friend) {
    timetable.innerHTML = '';
    const now = new Date();
    const dayIndex = now.getDay();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[dayIndex];
    const currentTime = now.getHours() * 100 + now.getMinutes();
    
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
        
        const [startHour, startMinute] = event.start.split(':').map(Number);
        const startTime = startHour * 100 + startMinute;
        const [endHour, endMinute] = event.end.split(':').map(Number);
        const endTime = endHour * 100 + endMinute;
        
        // Check if current event
        if (currentTime >= startTime && currentTime < endTime) {
            item.classList.add('current');
        }
        // Check if past event
        else if (currentTime >= endTime) {
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
    // Create a timeline for the day (9am to 5pm)
    const timeline = Array(480).fill(0); // 8 hours * 60 minutes = 480 minutes
    const startHour = 9; // 9am
    
    // Mark busy times for each friend
    friendIds.forEach(id => {
        const friend = friends.find(f => f.id === id);
        if (!friend || !friend.timetable[day]) return;
        
        friend.timetable[day].forEach(event => {
            if (event.type === 'Class') {
                const [startHourStr, startMinuteStr] = event.start.split(':');
                const [endHourStr, endMinuteStr] = event.end.split(':');
                
                const startTime = (parseInt(startHourStr) - startHour) * 60 + parseInt(startMinuteStr);
                const endTime = (parseInt(endHourStr) - startHour) * 60 + parseInt(endMinuteStr);
                
                // Mark the busy period
                for (let i = startTime; i < endTime && i < timeline.length; i++) {
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
                    const startTime = formatTime(slotStart, startHour);
                    const endTime = formatTime(i, startHour);
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
            const startTime = formatTime(slotStart, startHour);
            const endTime = formatTime(timeline.length, startHour);
            commonSlots.push({
                start: startTime,
                end: endTime,
                duration: duration
            });
        }
    }
    
    return commonSlots;
}

function formatTime(minutes, startHour) {
    const totalMinutes = minutes;
    const hours = Math.floor(totalMinutes / 60) + startHour;
    const mins = totalMinutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
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
    backBtn.addEventListener('click', closeModalHandler);
    
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
        
        // Clear input after save
        aliasInput.value = '';
        
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