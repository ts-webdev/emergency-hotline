// Utilities functions
function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

// heart btn functionality 
const heartButtons = document.getElementsByClassName('heart-btn');
for (const heartBtn of heartButtons) {
    heartBtn.addEventListener('click', function () {
        const totalCount = Number(getElement('heart-count').innerText) + 1;
        getElement('heart-count').innerText = totalCount;
    })
}

// call btn functionality
const callButtons = document.getElementsByClassName('call-btn');
for (const callBtn of callButtons) {
    callBtn.addEventListener('click', function () {
        if (getElement('coin-count').innerText >= 20) {

            const serviceTitle = callBtn.parentElement.parentElement.childNodes[3].innerText;
            const serviceSubTitle = callBtn.parentElement.parentElement.childNodes[5].innerText;
            const callNumber = callBtn.parentElement.parentElement.childNodes[7].innerText;
            const realTime = new Date().toLocaleTimeString();
            alert(`Calling ${serviceSubTitle} ${callNumber}...`)

            // set Coin
            const newCoin = Number(getElement('coin-count').innerText) - 20;
            getElement('coin-count').innerText = newCoin;

            // set history
            const historyDiv = document.createElement('div');
            historyDiv.innerHTML = `
                    <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                        <div>
                            <h3>${serviceTitle}</h3>
                            <p>${callNumber}</p>
                        </div>
                        <p>${realTime}</p>
                    </div>
            `
            getElement('history-container').appendChild(historyDiv)
        }

        else {
            alert('আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে')
        }


    })
}