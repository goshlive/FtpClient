function FtpClient() {}

/**
 * Upload a file to a FTP server
 *
 * @param file              The file to be uploaded to the server
 * @param url               The url of the ftp server
 * @param successCallback   The success callback
 * @param errorCallback     The error callback
 */
FtpClient.prototype.put = function(file, url, successCallback, errorCallback) {
	 return cordova.exec(successCallback, errorCallback, "FtpClient", "put", [file, url]);
};

/**
 * Download a file from a FTP server
 *
 * @param file              The file to be uploaded to the server
 * @param url               The url of the ftp server
 * @param successCallback   The success callback
 * @param errorCallback     The error callback
 */
FtpClient.prototype.get = function(file, url, successCallback, errorCallback) {
	 return cordova.exec(successCallback, errorCallback, "FtpClient", "get", [file, url]);
};

var ftpclient = new FtpClient();
module.exports = ftpclient;