function t969_init(recid) {
    var rec = document.getElementById('rec' + recid);
    if (!rec)
        return;
    var branches = rec.querySelector('.t969');
    var tildaCopy = document.querySelector('#tildacopy');
    if (!tildaCopy)
        return;
    window.addEventListener('scroll', function() {
        if (window.innerHeight + window.pageYOffset + 70 >= document.body.offsetHeight) {
            var offsetBottom = 70 - (document.body.offsetHeight - (window.innerHeight + window.pageYOffset));
            branches.style.bottom = offsetBottom + 'px'
        } else {
            branches.style.bottom = '0px'
        }
    })
}
function t970_init(recid) {
    var rec = document.querySelector('#rec' + recid);
    if (!rec)
        return;
    var widget = rec.querySelector('.t970');
    var closeButton = rec.querySelector('.t970__btn-close');
    var mainCheckbox = rec.querySelector('#ny-widget-checkbox');
    if (!widget)
        return;
    closeButton.addEventListener('click', function() {
        if (widget.getAttribute('data-nywidget-hide') === 'yes') {
            widget.style.display = 'none'
        } else {
            mainCheckbox.checked = !1
        }
    })
}
