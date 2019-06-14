function post(path, params, callback) {

  // The rest of this code assumes you are not using a library.
  // It can be made less wordy if you use one.
  var formdata = new FormData()
  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      formdata.append(key, params[key]);
    }
  }
var request = new XMLHttpRequest();

        request.upload.addEventListener("progress",function (){$("#progressSpinner").show();});
        request.upload.addEventListener("load", function (){$("#progressSpinner").hide();});
        request.upload.addEventListener("error", function (){$("#progressSpinner").hide();});
        request.upload.addEventListener("abort", function (){$("#progressSpinner").hide();});
   
request.onreadystatechange = function() {
    if (this.readyState == 4) {
      console.log(this.responseText)      
      callback(this.responseText)
    }
    
  };
request.open("POST", path);
request.send(formdata);
}
/*post("https://storage.googleapis.com/jsondoc.online", {
  "key":"asdas",
  //"bucket":"jsondoc.online",
  //"content-Type":"multipart/form-data",
  "GoogleAccessId":"cloud-function@jsondoc.iam.gserviceaccount.com",
  //"acl":"public-read",
  "policy":"eyJleHBpcmF0aW9uIjoiMjAyMi0xMC0yNFQxODozMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W1siZXEiLCIka2V5IiwiYXNkYXMiXSx7ImJ1Y2tldCI6Impzb25kb2Mub25saW5lIn0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDI0XV19",
  "signature":"ojxAqnM2+51CT5Xk09+k2TtLkPZkrnXEZ25cpyGOTz7iM29sKi0UfX/oDXzqRy2x1P51uKr5rL2SxQWcmzJVLgbrDj0CrqV5BzSq0fmlFLW8c1YTAy8bp/PwgY4jlbM3FkKTg6yzS+uW0P6CiMLLNyIbq7Xo8frT/D0l5ZioM/JM8O+h7FAJVPQ65ufpFXyVLeH9PSq3gItrisS6YBzzPIsukw8REZv2tJ7IMh6q0S+NZPazR/sJJHKoMLUjGx797NBoXqm8PCeW/tRyRIXaW8A2DreerUYagUG4MxuQK2yJKkkJzymB6znEGsoMLV6YBhEEOf255naT0OnpYXPMxQ==",
  "file": new File(["asdasd"], "asdas",{type : 'application/json'})
})

<form action="https://storage.googleapis.com/jsondoc.online" method="post" enctype="multipart/form-data">
<input type="text" name="key" value="asdas">
<input type="hidden" name="bucket" value="jsondoc.online">
<!-- <input type="hidden" name="Content-Type" value="image/jpeg"> -->
<!--<input type="hidden" name="GoogleAccessId" value="1234567890123@developer.gserviceaccount.com"> -->
<!-- <input type="hidden" name="acl" value="bucket-owner-read"> -->
<!-- <input type="hidden" name="success_action_redirect" value="http://www.example.com/success_notification.html"> -->
<input type="hidden" name="policy" value="eyJleHBpcmF0aW9uIjoiMjAyMi0xMC0yNFQxODozMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W1siZXEiLCIka2V5IiwiYXNkYXMiXSx7ImJ1Y2tldCI6Impzb25kb2Mub25saW5lIn0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDI0XV19">
<input type="hidden" name="signature" value="ojxAqnM2+51CT5Xk09+k2TtLkPZkrnXEZ25cpyGOTz7iM29sKi0UfX/oDXzqRy2x1P51uKr5rL2SxQWcmzJVLgbrDj0CrqV5BzSq0fmlFLW8c1YTAy8bp/PwgY4jlbM3FkKTg6yzS+uW0P6CiMLLNyIbq7Xo8frT/D0l5ZioM/JM8O+h7FAJVPQ65ufpFXyVLeH9PSq3gItrisS6YBzzPIsukw8REZv2tJ7IMh6q0S+NZPazR/sJJHKoMLUjGx797NBoXqm8PCeW/tRyRIXaW8A2DreerUYagUG4MxuQK2yJKkkJzymB6znEGsoMLV6YBhEEOf255naT0OnpYXPMxQ==">

<input name="file" type="file">
<input type="submit" value="Upload">
</form> */