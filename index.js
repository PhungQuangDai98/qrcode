function generateQRCode() {
	let website = document.getElementById("website").value;
	if (website) {
		let qrCodeContainer = document.getElementById("qrcode");
		qrCodeContainer.innerHTML = "";
		new QRCode(qrCodeContainer, website);
		document.getElementById("qrcode-container").style.display = "block";
	} else {
		alert("Please enter a valid URL");
	}
}
