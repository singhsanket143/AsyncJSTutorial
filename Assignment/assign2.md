## Tasks:

Write three dummy functions without using promises and only using normal callbacks,
All three functions are dummy, you dont need actual implementation. 
These dummy functions are to just represent a delay. 
 -  Write a function to download data from a url
 -  Write a function to save that downloaded data in a file and return the filename
 -  Write a function to upload the file written in previous step to a newurl

```
function downloader(url, cb) {
    // write a dummy impl using setTimeout to show a delay 
}

function writeFile(data, cb) {
    // write a dummy impl using setTimeout to show a delay 
}

function uploadFile(fileName, newUrl, cb) {
     // write a dummy impl using setTimeout to show a delay 
}
```

- THe download should take say 4sec delay, filewrite should take 2sec delay, upload should take 3sec delay
- Write the above callbacks and use them in a manner that first download happens then writefile happens
and then upload happens