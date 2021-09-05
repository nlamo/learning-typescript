const message = "Hello world!";

let messageOutput = (message : string | null) => {
    return "What you just said was this : \n\n" + message
}

console.log(messageOutput(message))