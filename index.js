function generateQRcode() {
    let website = document.getElementById('website').value;
    console.log("Website entered:", website); // Logs the URL entered

    if (website) {
        let qrcode = document.getElementById('qrcode');
        qrcode.innerHTML = ""; // Clear any previous QR code

        // Logs to confirm QR code generation starts
        console.log("Generating QR code for:", website);

        new QRCode(qrcode, website); // Ensure "QRCode" is capitalized correctly
        document.getElementById('qrcode-container').style.display = "block";
    } else {
        alert("Please enter a valid URL");
        console.log("No URL entered or URL is invalid.");
    }
}


