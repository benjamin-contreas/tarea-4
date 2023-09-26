// Function to expand the image
function expandImage(imageSrc) {
    const expandedImage = document.getElementById('expanded-image');
    expandedImage.src = imageSrc;
    document.getElementById('expanded-image-overlay').style.display = 'flex';
}

// Function to close the expanded image
function closeExpandedImage() {
    document.getElementById('expanded-image-overlay').style.display = 'none';
}