window.setValue = function (event) {
    cti.store.variables.v_time = document.querySelector('input[id="'+event.id+'"]').value;
    cti.utils.updatePage();
} 