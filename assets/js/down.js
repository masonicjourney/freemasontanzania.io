document.getElementById("downloadBtn").addEventListener("click", function() {
    // Replace 'path_to_your_pdf' with the actual path to your PDF file
    var pdfUrl = 'https://masonicfomu.netlify.app/Journey.Form.pdf';

    // Create an anchor element
    var link = document.createElement('a');
    link.href = pdfUrl;

    // Set the download attribute and filename
    link.download = 'Journey.Form.pdf';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger the click event
    link.click();

    // Clean up
    document.body.removeChild(link);
});