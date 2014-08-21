cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.plugin.datepicker/www/android/DatePicker.js",
        "id": "com.plugin.datepicker.DatePicker",
        "clobbers": [
            "datePicker"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.plugin.datepicker": "0.3.0",
    "org.apache.cordova.inappbrowser": "0.5.1"
}
// BOTTOM OF METADATA
});