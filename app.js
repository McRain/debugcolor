Debug = {}

Debug.Log = function (msg) {
    console.log(`${new Date().toISOString()}\x1b[47m\x1b[30m [LOGS] \x1b[0m ${msg}`);
}

Debug.LogInfo = function (msg) {
    console.log(`${new Date().toISOString()}\x1b[46m\x1b[37m [INFO] \x1b[0m ${msg}`);
}

Debug.Info = function (msg) {
    console.log(`${new Date().toISOString()}\x1b[46m\x1b[37m [INFO] \x1b[0m ${msg}`);
}

Debug.LogWarn = function (msg) {
    console.log(`${new Date().toISOString()}\x1b[43m\x1b[30m [WARN] \x1b[0m ${msg}`);
}

Debug.Warn = function (msg) {
    console.log(`${new Date().toISOString()}\x1b[43m\x1b[30m [WARN] \x1b[0m ${msg}`);
}

Debug.LogError = function (msg) {
    console.log(`\x1b[41m\x1b[37m${new Date().toISOString()} [ERROR] \x1b[0m ${msg}`);
}

Debug.Error = function (msg) {
    console.log(`\x1b[41m\x1b[37m${new Date().toISOString()} [ERROR] \x1b[0m ${msg}`);
}