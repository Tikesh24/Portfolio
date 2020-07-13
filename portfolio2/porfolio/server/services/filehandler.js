const fs = require('fs');

//###################################User Data################

//1. User data 
readPageData = () =>{
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
    var contents = fs.readFileSync(__dirname+'/../app_data/feedback/feedback.json');
    return contents;
}

//3. Write feedback on files
writeDataOnFile = (data)=>{
    fs.writeFile(__dirname+'/../app_data/feedback/feedback.json',data,(err)=>{
        if (err) throw err;
    });
}


updateUserDataForm = (data)=>{
    if(Object.keys(data).length === 0){return false}
    var key = data['key'];
    var addData = data[key];
    var pageData = JSON.parse(readPageData());  
    pageData[key] = addData;
    fs.writeFile(__dirname+'/../app_data/user_data/page-data.json',JSON.stringify(pageData),(err)=>{
        if (err) {throw err; return false};
    });
    return true;
}

//######################################FeedBack##############



module.exports = {upDateFeedback,readPageData,updateUserDataForm,readDataFromFile}