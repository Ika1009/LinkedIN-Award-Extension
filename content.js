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
    console.log("hide");
    // Call adBlock to hide posts with certain keywords
    adBlock(true);
}

function showAwards() {
    console.log("show");

    // Call adBlock to unhide posts hidden by adBlock
    adBlock(false);
}

function adBlock(hide){
    // Get all elements with class "feed-shared-update-v2__description-wrapper"
    const posts = document.querySelectorAll('.scaffold-finite-scroll__content .feed-shared-update-v2__description-wrapper');
    
    // Iterate through each description wrapper
    posts.forEach(wrapper => {
        // Get the text content of the description wrapper
        const description = wrapper.textContent;

        // Check if any of the keywords exist in the description
        const containsKeyword = keywords.some(keyword => description.includes(keyword))

        if (containsKeyword) {
            let parent = wrapper.parentElement;
            while (parent && !parent.classList.contains('feed-shared-update-v2')) {
                parent = parent.parentElement;
            }

            if (parent) {
                parent.style.display = hide ? 'none' : 'block';
                console.log("ONE HIDDEN");
            }
        }
    });
}

let keywords = ["Delighted", "Honored", "Grateful", "Humbled1", "Excited", "Thankful", "Proud", "Excited", "Privilege", "Recognition", "Achievement", "Thrilled", "Effectiveness", "Impact", "Results", "awards", "award", "nomination", "nominated", "Chuffed", "Over the moon", "Thrilled to bits", "Thrilled to announce", "I am honored and humbled", "This is a dream come true", "I am so grateful", "I couldn't have done it without", "This is a team effort", "I am proud of what we've accomplished", "This is a reflection of all our hard work", "I am honored to be awarded the","I am grateful for this recognitio","I am humbled to receive this award","I am proud of what we have accomplished together","This award is a testament to the hard work and dedication of my team","This award is a dream come true","I am committed to using this award to make a positive impact","I am excited to continue to work hard and make a difference","I am inspired by this award and I am motivated to do even better","Cannes Lions International Festival of Creativity","The Effie Awards","The One Show","The D&AD Awards", "The Webby Awards", "The Clio Awards", "The A' Design Award and Competition", "ICADS", "ADCN", "San", "the lovies", "The Epica Awards", "The ANDY Awards", "FWA Awards award", "​​The AIGA Awards", "The Type Directors Club Awards"];

