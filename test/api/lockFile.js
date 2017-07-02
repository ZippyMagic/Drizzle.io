//
// Lock File Test API
// NOTE: Would be part of {FileSystem} API if added
// @ZippyMagician
//

function apiLockFile() {
    this.lockFile = function(err) {
        <%#lockFile.Run.RunC()%> ;
        window.onerror = err(error);
    }
    this.unlockFile = function(err) {
        <%#unlockFile.Run.RunC()%> ;
        window.onerror = err(error);
    }
}
