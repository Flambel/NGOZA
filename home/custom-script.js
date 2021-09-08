jQuery(document).ready(function() {
    jQuery('no-link').click(function(){
        return "javascript:void(0)";
    });
	jQuery("input[type=text],input[type=email]").attr('maxlength','150');
});