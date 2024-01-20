function downloader(url, cb) {
    // Anyone who wants to download something first and then execute something else 
    // can use this function. 
    console.log("Started downloading from", url);
    setTimeout(() => {
        console.log("Download completed");
        // with the downloaded content, whatever you want to do you can do
        let downloadedData = "Dummy content";
        cb(downloadedData); // cb -> any callback
    }, 4000);
}

function writeFile(data, cb) {
    console.log("Started writing data", data);
    setTimeout(() => {
        console.log("Writing completed");
        // with the written content, whatever you want to do you can do
        let fileName = "Dummy.txt";
        cb(fileName); // cb -> any callback
    }, 2000);
}

function uploadFile(fileName, newUrl, cb) {
    console.log("Started uploading file", fileName, "on the url", newUrl);
    setTimeout(() => {
        console.log("Upload completed");
        // with the uploaded content, whatever you want to do you can do
        let uploadResponse = "SUCESSS";
        cb(uploadResponse); // cb -> any callback
    }, 3000);
}


// let's start

console.log("Starting the program")
downloader("www.google.com", (downloadedData) => {
    writeFile(downloadedData, (fileName) => {
        uploadFile(fileName, "www.drive.google.com", (uploadResponse) => {
            console.log("Status of upload", uploadResponse);
        })
    })
})