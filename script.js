// ম্যানুয়ালি ব্যাংক, বিকাশ এবং নগদের রেট সেট করুন
const bankRate = 32.50; // ব্যাংক রেট
const bkashRate = 33.00; // বিকাশ রেট
const nagadRate = 32.80; // নগদ রেট

// Fetch Live Currency Rate
const fetchRate = async () => {
    const apiUrl = "https://api.exchangerate-api.com/v4/latest/SAR"; // Replace with your API
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const liveRate = data.rates.BDT; // SAR to BDT rate

        // লাইভ রেট এবং ব্যাংক/বিকাশ/নগদ রেট আপডেট করুন
        document.getElementById("rate").textContent = liveRate.toFixed(2) + " BDT";
        document.getElementById("bank-rate").textContent = bankRate.toFixed(2) + " BDT";
        document.getElementById("bkash-rate").textContent = bkashRate.toFixed(2) + " BDT";
        document.getElementById("nagad-rate").textContent = nagadRate.toFixed(2) + " BDT";
    } catch (error) {
        console.error("Error fetching rate:", error);
        document.getElementById("rate").textContent = "Error fetching rate.";
    }
};

// Call fetchRate every 10 seconds to update live rate
fetchRate();
setInterval(fetchRate, 10000);
