const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
    // remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to the current/active tab
    this.classList.add('tab-border')
    // Grab the content item and show it
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');

}

// Helper Functions
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    })
}

function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    })
}

// Constantly listen to the clicks
tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
})