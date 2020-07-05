const fs = require('fs');

//###################################User Data################

//1. User data 
readPageData = () =>{
    console.log("Reading file")
    var contents = fs.readFileSync(__dirname+'/../app_data/user_data/page-data.json');
    return contents;
}

//###################################User Data################

//######################################FeedBack##############

//1. Update function to read and wirte feedback
upDateFeedback = (data)=>{
    var fileContent = JSON.parse(readDataFromFile());
    fileContent.push(data);
    writeDataOnFile(JSON.stringify(fileContent));
}

//2. Read feedback files 
readDataFromFile = ()=> {
    console.log("Reading file")
    var contents = fs.readFileSync(__dirname+'/../app_data/feedback/feedback.json');
    console.log(JSON.parse(contents))
    return contents;
}

//3. Write feedback on files
writeDataOnFile = (data)=>{
    console.log(data)
    fs.writeFile(__dirname+'/../app_data/feedback/feedback.json',data,(err)=>{
        if (err) throw err;
        console.log("file saved")
    });
}

//######################################FeedBack##############



module.exports = {upDateFeedback,readPageData}