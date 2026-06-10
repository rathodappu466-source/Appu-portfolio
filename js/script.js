// ── TYPEWRITER EFFECT ──
const roles = [
    'ML Engineer',
    'Full-Stack Developer',
    'Computer Vision Engineer',
    'Android + GenAI Developer',
    'Data Analytics Developer'
];
let ri = 0, ci = 0, del = false;
const el = document.getElementById('typed');

function type() {
    const w = roles[ri];
    if (!del) {
        el.textContent = w.slice(0, ++ci);
        if (ci === w.length) {
            del = true;
            setTimeout(type, 1900);
            return;
        }
    } else {
        el.textContent = w.slice(0, --ci);
        if (ci === 0) {
            del = false;
            ri = (ri + 1) % roles.length;
        }
    }
    setTimeout(type, del ? 42 : 85);
}
type();

// ── FADE IN ON SCROLL ──
const obs = new IntersectionObserver(entries => 
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
    }), 
    { threshold: 0.08 }
);
document.querySelectorAll('.fade').forEach(el => obs.observe(el));

// ── INJECT PHOTO ──
// Set the photo path to your actual image file
const photoPath = 'assets/images/IMG_9954.PNG';
const heroPhoto = document.getElementById('hero-photo');

// Load the photo
heroPhoto.src = photoPath;

// Fallback if image doesn't load
heroPhoto.onerror = function() {
    console.log('Photo not found at:', photoPath);
    console.log('Check the file path and name');
    // Use a subtle placeholder background
    heroPhoto.style.background = 'linear-gradient(135deg, rgba(99,179,237,0.3), rgba(99,102,241,0.3))';
    heroPhoto.style.minHeight = '400px';
};
