document.addEventListener('DOMContentLoaded', function() {
    const toggleAwardsCheckbox = document.getElementById('toggleAwards');

    // Retrieve the current state from storage and set checkbox accordingly
    chrome.storage.local.get('hideAwards', function(data) {
        toggleAwardsCheckbox.checked = data.hideAwards;
    });

    // Save the new state and send a message to background script
    toggleAwardsCheckbox.addEventListener('change', function() {
        chrome.storage.local.set({ hideAwards: toggleAwardsCheckbox.checked }, function() {
            if(chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
            } else {
                chrome.runtime.sendMessage({
                    action: "toggleAwards",
                    hide: toggleAwardsCheckbox.checked
                });
            }
        });
    });
});
