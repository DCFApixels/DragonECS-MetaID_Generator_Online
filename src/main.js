


var metaIDField = document.getElementById("meta_id_field");
var metaIDAttributeField = document.getElementById("meta_id_attribute_field");
var button = document.getElementById("generate_button");



function OnGenerateButtonClick(target){
    let id = MetaID.Generate();
    metaIDField.value = id;
    metaIDAttributeField.value = '[MetaID("' + id + '")]';
}

button.addEventListener("click", OnGenerateButtonClick);