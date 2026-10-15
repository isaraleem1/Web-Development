let todo=[];
let req=prompt("please enter your request");
while(true){
    
    if(req=="add"){
        let task=prompt("enter the task you want to add");
        todo.push(task)
        console.log("task added");
    }
    else if(req=="list"){
        console.log("----------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------------");

    }
    else if(req=="quit"){
        console.log("Quiting todo...");
        break;
    }
    else if(req=="delete"){
        idx=Number(prompt("enter the task index which you want to delete"));
         todo.splice(idx,1);
        console.log("task deleted...");
    }
    else{
        console.log("Invalid request...")
    }
    req=prompt("please enter your request");
}