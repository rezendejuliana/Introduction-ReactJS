import React from 'react';

const isArrayEmpty = (arr) => {
    if(arr !== undefined && arr !== null && arr.Lenght >0){
        return true;
    }
    else return false;

}

const dumpLogs = (message) => {
    console.log(message);

    //sends it to a tool for tracking
}

export{isArrayEmpty,dumpLogs}


