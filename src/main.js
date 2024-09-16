async function CopyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Идентификатор скопирован в буфер обмена');
    } catch (err) {
        console.error('Не удалось скопировать идентификатор в буфер обмена: ', err);
    }
}


var metaIDField = document.getElementById("meta_id_field");
var metaIDCopyButton = document.getElementById("meta_id_copy_button");
var metaIDAttributeField = document.getElementById("meta_id_attribute_field");
var metaIDAttributeCopyButton = document.getElementById("meta_id_attribute_copy_button");
var button = document.getElementById("generate_button");



function OnGenerateButtonClick(target){
    let id = MetaID.Generate();
    metaIDField.value = id;
    metaIDAttributeField.value = '[MetaID("' + id + '")]';
}
function Copy(target)
{
    let elem = this;
    CopyToClipboard(elem.value);
}

button.addEventListener("click", OnGenerateButtonClick);
metaIDCopyButton.addEventListener("click", Copy.bind(metaIDField));
metaIDAttributeCopyButton.addEventListener("click", Copy.bind(metaIDAttributeField));