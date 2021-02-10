module.exports = {
    waitingLoop: async (object, func, delay)=>{
        function waitforme() { 
            return new Promise(resolve => { 
                setTimeout(() => { resolve('') }, delay)
            }) 
        } 
        async function printy() { 
            for (let i in object) { 
                await waitforme()
                func(i, object)
            } 
            console.log("Loop execution finished!"); 
        } 
        printy();
    }
}