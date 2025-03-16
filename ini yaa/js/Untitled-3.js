document.getElementById("yes-btn").addEventListener("click", function () {
    document.getElementById("response-message").innerText = "Terima kasih! Aku akan berusaha menjadi lebih baik.";
    document.getElementById("response-message").style.color = "#28a745";
});

document.getElementById("no-btn").addEventListener("click", function () {
    document.getElementById("response-message").innerText = "Aku mengerti... Tapi aku akan tetap berusaha memperbaiki kesalahanku.";
    document.getElementById("response-message").style.color = "#dc3545";
});
