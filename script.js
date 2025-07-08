
// DOM Elements
const dashboard = document.getElementById('dashboard');
const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');
const detailName = document.getElementById('detail-name');
const callBtn = document.getElementById('call-btn');
const aliasInput = document.getElementById('alias-input');
const saveAlias = document.getElementById('save-alias');
const currentStatusText = document.getElementById('current-status-text');
const nextFreeText = document.getElementById('next-free-text');
const timetable = document.getElementById('timetable');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// State
let currentFriendId = null;
const aliases = JSON.parse(localStorage.getItem('clokd_aliases')) || {};
const theme = localStorage.getItem('clokd_theme') || 'light';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme
    applyTheme(theme);
    
    // Render dashboard
    renderDashboard();
    
    // Setup event listeners
    setupEventListeners();
    
    // Security measures
    applySecurityMeasures();
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
            <h2>${displayName}</h2>
            <div class="status ${status}">
                ${isFree ? '🟢 Free' : '🔴 In Class'}
            </div>
            ${!isFree ? `
                <div class="details">
                    <div>📚 ${event.title}</div>
                    <div>👨‍🏫 ${event.faculty}</div>
                    <div>🏫 ${event.location}</div>
                </div>
            ` : ''}
        `;
        
        card.addEventListener('click', () => openFriendDetail(friend.id));
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
    
    // Update status
    updateFriendStatus(friend);
    
    // Render timetable
    renderTimetable(friend);
    
    // Show modal
    modal.classList.add('active');
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
    
    if (!friend.timetable[today]) {
        timetable.innerHTML = '<p>No classes scheduled for today</p>';
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
        
        item.innerHTML = `
            <div class="time">${event.start} - ${event.end}</div>
            <div class="event-details">
                <strong>${event.title}</strong>
                <div>${event.faculty} • ${event.location}</div>
            </div>
            <div class="event-type ${event.type === 'Class' ? 'class' : ''}">
                ${event.type}
            </div>
        `;
        
        timetable.appendChild(item);
    });
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
    closeModal.addEventListener('click', () => {
        modal.classList.remove('active');
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
        renderDashboard();
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

// Security Measures
function applySecurityMeasures() {
    // Disable context menu
    document.addEventListener('contextmenu', e => e.preventDefault());
    
    // Block common dev tools shortcuts
    document.addEventListener('keydown', e => {
        // Block F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||
            (e.ctrlKey && e.key === 'u')
        ) {
            e.preventDefault();
        }
    });
    
    // Anti-debugging (basic)
    const consoleOpen = () => {
        document.body.innerHTML = '<h1>Access restricted</h1>';
        window.location.reload();
    };
    
    setInterval(() => {
        const before = new Date().getTime();
        debugger;
        const after = new Date().getTime();
        if (after - before > 100) consoleOpen();
    }, 1000);
}