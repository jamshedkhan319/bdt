// ব্যাংক, বিকাশ এবং নগদের রেট ম্যানুয়ালি সেট করুন
const bankRate = 31.70; // ব্যাংক রেট
const bkashRate = 32.50; // বিকাশ রেট
const nagadRate = 31.00; // নগদ রেট

// লাইভ রেট আনুন এবং আপডেট করুন
const fetchRate = async () => {
    const apiUrl = "https://api.exchangerate-api.com/v4/latest/SAR"; // Replace with your API
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const liveRate = data.rates.BDT; // SAR to BDT rate

        document.getElementById("rate").textContent = liveRate.toFixed(2) + " BDT";
        calculateRates();
    } catch (error) {
        console.error("Error fetching rate:", error);
        document.getElementById("rate").textContent = "Error fetching rate.";
    }
};

// রেট হিসাব করুন এবং ফলাফল আপডেট করুন
const calculateRates = () => {
    const riyalAmount = parseFloat(document.getElementById("riyal-input").value);

    if (!isNaN(riyalAmount) && riyalAmount > 0) {
        const bankResult = (riyalAmount * bankRate).toFixed(2);
        const bkashResult = (riyalAmount * bkashRate).toFixed(2);
        const nagadResult = (riyalAmount * nagadRate).toFixed(2);

        document.getElementById("bank-result").querySelector("span").textContent = `Bank: ${bankResult} BDT`;
        document.getElementById("bkash-result").querySelector("span").textContent = `Bkash: ${bkashResult} BDT`;
        document.getElementById("nagad-result").querySelector("span").textContent = `Nagad: ${nagadResult} BDT`;
    } else {
        document.getElementById("bank-result").querySelector("span").textContent = "Bank: -- BDT";
        document.getElementById("bkash-result").querySelector("span").textContent = "Bkash: -- BDT";
        document.getElementById("nagad-result").querySelector("span").textContent = "Nagad: -- BDT";
    }
};

// Fetch live rate every 10 seconds
fetchRate();
setInterval(fetchRate, 10000);
