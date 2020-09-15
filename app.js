// /usr/local/bin/node

function hello() {
    setTimeout(() => {
        console.log("hello world")
    }, 1000);
}

function call(fun) {
    fun();
}
call(hello);