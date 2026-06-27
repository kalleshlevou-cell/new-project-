class ApiError extends Error {
    constructor(
        statusCode, 
        message,
        errors = [],
        statck = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.errors = this.errors;
        this.data = null;
        this.message = message;
        this.success = false;

        if(statck) {
            this.stack = statck;
        }else{
            Error.captureStackTrace(this,this.constructor)
        }

    }}

    export{ApiError}