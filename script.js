// ===== LIBRARY MANAGEMENT SYSTEM - JAVASCRIPT =====

// === PAGE SWITCHING ===
function showPage(pageName) {
  // Itago lahat ng pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active-page');
  });
  
  // Tanggalin ang active sa lahat ng link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  
  // Ipakita ang napiling page
  document.getElementById(pageName).classList.add('active-page');
  
  // Gawing active ang napiling link
  document.querySelectorAll([data-page="${pageName}"]).forEach(link => {
    link.classList.add('active');
  });
  
  // Palitan ang title sa itaas
  const titles = {
    dashboard: ['Dashboard', 'Welcome back, Administrator'],
    books: ['Books', 'Manage physical library books and inventory.'],
    members: ['Members', 'Manage library members and subscriptions.'],
    borrowings: ['Borrowing Records', 'Track book loans, returns, and due dates.'],
    digital: ['Digital Assets', 'Manage ebooks, documents, videos, and other digital media.'],
    fines: ['Fines & Payments', 'Monitor overdue fines and payment records.']
  };
  
  document.getElementById('pageTitle').textContent = titles[pageName][0];
  document.getElementById('pageSubtitle').textContent = titles[pageName][1];
}

// === MODAL CONTROLS ===
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'flex';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.style.display = 'none';
}

// === SIDEBAR CLICKS ===
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');
    if (page) showPage(page);
  });
});

// === ADD BOOK FORM ===
const addForm = document.getElementById('addBookForm');
if (addForm) {
  addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('bookTitle')?.value;
    const author = document.getElementById('bookAuthor')?.value;
    
    alert(✅ Book Added!\n\nTitle: ${title}\nAuthor: ${author});
    
    this.reset();
    closeModal('addBookModal');
  });
}

console.log('✅ Library System — Ready!');