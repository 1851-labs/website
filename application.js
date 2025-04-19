// Application form functionality
function showApplicationForm() {
  // Create modal backdrop
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.style.position = 'fixed';
  backdrop.style.top = '0';
  backdrop.style.left = '0';
  backdrop.style.width = '100%';
  backdrop.style.height = '100%';
  backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  backdrop.style.zIndex = '1000';
  backdrop.style.display = 'flex';
  backdrop.style.justifyContent = 'center';
  backdrop.style.alignItems = 'center';
  
  // Create form container
  const formContainer = document.createElement('div');
  formContainer.className = 'application-form';
  formContainer.style.backgroundColor = '#fff';
  formContainer.style.padding = '25px';
  formContainer.style.borderRadius = '8px';
  formContainer.style.maxWidth = '450px';
  formContainer.style.width = '90%';
  formContainer.style.position = 'relative';
  formContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
  
  // Create close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '15px';
  closeButton.style.border = 'none';
  closeButton.style.background = 'none';
  closeButton.style.fontSize = '24px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.color = '#000';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(backdrop);
    document.body.style.overflow = 'auto';
  });
  
  // Create content
  const content = document.createElement('div');
  
  const title = document.createElement('h2');
  title.textContent = 'Join Our Crew';
  title.style.marginTop = '0';
  title.style.marginBottom = '15px';
  title.style.fontSize = '1.5rem';
  
  const description = document.createElement('p');
  description.innerHTML = 'To apply, please send an email to <strong>careers@1851labs.com</strong> with:';
  description.style.marginBottom = '15px';
  description.style.fontSize = '1rem';
  
  const list = document.createElement('ul');
  list.style.marginBottom = '20px';
  list.style.paddingLeft = '20px';
  
  const items = [
    'Your CV or resume',
    'LinkedIn profile (if available)',
    'A brief note on why you want to join our crew'
  ];
  
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    li.style.marginBottom = '8px';
    list.appendChild(li);
  });
  
  const emailButton = document.createElement('a');
  emailButton.href = 'mailto:careers@1851labs.com?subject=Application for 1851 Labs';
  emailButton.textContent = 'Email Us Now';
  emailButton.style.display = 'inline-block';
  emailButton.style.backgroundColor = '#000';
  emailButton.style.color = '#fff';
  emailButton.style.border = '2px solid #000';
  emailButton.style.padding = '10px 20px';
  emailButton.style.borderRadius = '6px';
  emailButton.style.cursor = 'pointer';
  emailButton.style.fontWeight = 'bold';
  emailButton.style.marginTop = '10px';
  emailButton.style.textDecoration = 'none';
  emailButton.style.width = '100%';
  emailButton.style.textAlign = 'center';
  emailButton.style.boxSizing = 'border-box';
  
  emailButton.addEventListener('mouseover', () => {
    emailButton.style.backgroundColor = '#fff';
    emailButton.style.color = '#000';
  });
  
  emailButton.addEventListener('mouseout', () => {
    emailButton.style.backgroundColor = '#000';
    emailButton.style.color = '#fff';
  });
  
  // Assemble content
  content.appendChild(title);
  content.appendChild(description);
  content.appendChild(list);
  content.appendChild(emailButton);
  
  // Assemble modal
  formContainer.appendChild(closeButton);
  formContainer.appendChild(content);
  backdrop.appendChild(formContainer);
  
  // Add to body
  document.body.appendChild(backdrop);
  
  // Prevent background scrolling
  document.body.style.overflow = 'hidden';
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      document.body.removeChild(backdrop);
      document.body.style.overflow = 'auto';
    }
  });
}

// Initialize application form triggers
document.addEventListener('DOMContentLoaded', function() {
  // Find all application buttons/links
  const applicationTriggers = document.querySelectorAll('.join, .apply-btn');
  
  // Add click event listeners
  applicationTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      showApplicationForm();
    });
  });
});
