//
// openFileTerminal Test API
// NOTE: Would be part of {FileSystem} API if added
// @ZippyMagician
//

function apiLockFile() {
    this.openFileTerminal = function(err) {
        <%#lockFile.Run.RunC()%> ;
        window.onerror = err(error);
    }
}
