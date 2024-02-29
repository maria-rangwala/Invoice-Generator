function onformSubmit(){
 var formData=readformData();
}
function readformData(){
    var formData={};
    formData["name"]=document.getElementById("name").value;
    formData["address"]=document.getElementById("address").value;
    formData["mobile"]=document.getElementById("mobile").value;
    formData["email"]=document.getElementById("email").value;
    formData["invoive-num"]=document.getElementById("invoive-num").value;
    formData["custom-id"]=document.getElementById("custom-id").value;
    formData["issue"]=document.getElementById("issue").value;
    formData["due"]=document.getElementById("due").value;
    formData["address1"]=document.getElementById("address1").value;
    formData["mobile1"]=document.getElementById("mobile1").value;
    formData["email1"]=document.getElementById("email1").value;
    formData["address2"]=document.getElementById("address2").value;
    formData["mobile2"]=document.getElementById("mobile2").value;
    formData["email2"]=document.getElementById("email2").value;
    return formData();
    formData[""]=document.getElementById("").value;

}