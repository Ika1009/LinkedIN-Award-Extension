chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "toggleAwards") {
        if (message.hide) {
            hideAwards();
        } else {
            showAwards();
        }
    }
});

function hideAwards() {
    // Replace this with the appropriate selector logic for LinkedIn awards
    const awards = document.querySelectorAll('.award-class-or-whatever');
    awards.forEach(award => award.style.display = 'none');
}

function showAwards() {
    // Replace this with the appropriate selector logic for LinkedIn awards
    const awards = document.querySelectorAll('.award-class-or-whatever');
    awards.forEach(award => award.style.display = 'block');
}
