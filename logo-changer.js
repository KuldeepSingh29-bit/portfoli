// Image Changer Script

document.addEventListener('DOMContentLoaded', function() {
    // Logo elements
    const logoImage = document.getElementById('logoImage');
    const changeLogoBtn = document.getElementById('changeLogo');
    const logoFileInput = document.getElementById('logoFileInput');

    // Profile elements
    const profileImage = document.getElementById('profileImage');
    const changeProfileBtn = document.getElementById('changeProfile');
    const profileFileInput = document.getElementById('profileFileInput');

    // Add click event to the change logo button
    changeLogoBtn.addEventListener('click', function() {
        logoFileInput.click();
    });

    // Add click event to the change profile button
    changeProfileBtn.addEventListener('click', function() {
        profileFileInput.click();
    });

    // Handle logo file selection
    logoFileInput.addEventListener('change', function(event) {
        handleImageChange(event, logoImage, 'customLogo', 'लोगो सफलतापूर्वक बदल दिया गया है!');
    });

    // Handle profile file selection
    profileFileInput.addEventListener('change', function(event) {
        handleImageChange(event, profileImage, 'customProfile', 'प्रोफाइल फोटो सफलतापूर्वक बदल दिया गया है!');
    });

    // Function to handle image change
    function handleImageChange(event, imageElement, storageKey, successMessage) {
        const file = event.target.files[0];
        
        if (file) {
            // Check if the file is an image
            if (!file.type.match('image.*')) {
                alert('कृपया केवल इमेज फाइल चुनें!');
                return;
            }

            // Create a FileReader to read the image
            const reader = new FileReader();
            
            // Set up the FileReader onload event
            reader.onload = function(loadEvent) {
                // Update the image source
                imageElement.src = loadEvent.target.result;
                
                // Store the image in localStorage for persistence
                localStorage.setItem(storageKey, loadEvent.target.result);
                
                // Show success message
                alert(successMessage);
            };
            
            // Read the file as a data URL
            reader.readAsDataURL(file);
        }
    }

    // Load saved images on page load
    const savedLogo = localStorage.getItem('customLogo');
    if (savedLogo) {
        logoImage.src = savedLogo;
    }

    const savedProfile = localStorage.getItem('customProfile');
    if (savedProfile) {
        profileImage.src = savedProfile;
    }
});