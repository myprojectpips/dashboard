$(document).ready(function () {
    // Gunakan ID pada button switch mode anda
    // Dan tulis ID nya pada function dibawah
    // Misalkan pada button untuk switch mode anda id="switchMode"
    // Anda tulis "switchMode" dibawah dengan tambahan tanda pagar

    darkmode('#darkmode', '#bodyDarkmode');
});

function darkmode(btnTarget, bodyTarget) {
    // Jika menemukan key "theme" value darkmode
    // Maka darkmode = true, artinya darkmode hidup
    if (localStorage.getItem('theme')) {
        $('#icon-darkmode').addClass('fa-sun').removeClass('fa-moon');

        // Background
        $('.bg-darkmode').toggleClass('bg-dm');
        $('.bg-white_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-white');
        $('.bg-primary_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-primary');
        $('.bg-dark_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-dark');
        $('.bg-secondary_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-secondary');
        $('.bg-light_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-light');
        $('.bg-info_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-info');
        $('.bg-warning_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-warning');
        $('.bg-danger_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-danger');

        // Foreground
        $('.fg-darkmode').toggleClass('fg-dm txt-dm');
        $('.bg-white_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-white');
        $('.bg-primary_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-primary');
        $('.bg-dark_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-dark');
        $('.bg-secondary_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-secondary');
        $('.bg-light_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-light');
        $('.bg-info_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-info');
        $('.bg-warning_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-warning');
        $('.bg-danger_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-danger');

        // Text
        $('.text-darkmode').toggleClass('txt-dm');
        $('.text-white_text-darkmode').toggleClass('txt-dm').toggleClass('text-white');
        $('.text-primary_text-darkmode').toggleClass('txt-dm').toggleClass('text-primary');
        $('.text-dark_text-darkmode').toggleClass('txt-dm').toggleClass('text-dark');
        $('.text-secondary_text-darkmode').toggleClass('txt-dm').toggleClass('text-secondary');
        $('.text-light_text-darkmode').toggleClass('txt-dm').toggleClass('text-light');
        $('.text-info_text-darkmode').toggleClass('txt-dm').toggleClass('text-info');
        $('.text-warning_text-darkmode').toggleClass('txt-dm').toggleClass('text-warning');
        $('.text-danger_text-darkmode').toggleClass('txt-dm').toggleClass('text-danger');

        // Button Darkmode Grey
        $('.btn-darkmode-grey').toggleClass('btn-dm-grey');
        $('.btn-white_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-white');
        $('.btn-primary_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-primary');
        $('.btn-dark_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-dark');
        $('.btn-secondary_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-secondary');
        $('.btn-light_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-light');
        $('.btn-info_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-info');
        $('.btn-warning_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-warning');
        $('.btn-danger_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-danger');

        // Button Darkmode Default
        $('.btn-darkmode').toggleClass('btn-dm');
        $('.btn-white_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-white');
        $('.btn-primary_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-primary');
        $('.btn-dark_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-dark');
        $('.btn-secondary_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-secondary');
        $('.btn-light_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-light');
        $('.btn-info_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-info');
        $('.btn-warning_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-warning');
        $('.btn-danger_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-danger');

        // Input Form
        $('.input-darkmode').toggleClass('input-dm');
        $('.bg-white_input-darkmode').toggleClass('input-dm').toggleClass('bg-white');
        $('.bg-primary_input-darkmode').toggleClass('input-dm').toggleClass('bg-primary');
        $('.bg-dark_input-darkmode').toggleClass('input-dm').toggleClass('bg-dark');
        $('.bg-secondary_input-darkmode').toggleClass('input-dm').toggleClass('bg-secondary');
        $('.bg-light_input-darkmode').toggleClass('input-dm').toggleClass('bg-light');
        $('.bg-info_input-darkmode').toggleClass('input-dm').toggleClass('bg-info');
        $('.bg-warning_input-darkmode').toggleClass('input-dm').toggleClass('bg-warning');
        $('.bg-danger_input-darkmode').toggleClass('input-dm').toggleClass('bg-danger');

        // Border
        $('.border-darkmode').toggleClass('border-dm');
        $('.border-white_border-darkmode').toggleClass('border-dm').toggleClass('border border-white');
        $('.border-primary_border-darkmode').toggleClass('border-dm').toggleClass('border border-primary');
        $('.border-dark_border-darkmode').toggleClass('border-dm').toggleClass('border border-dark');
        $('.border-secondary_border-darkmode').toggleClass('border-dm').toggleClass('border border-secondary');
        $('.border-light_border-darkmode').toggleClass('border-dm').toggleClass('border border-light');
        $('.border-info_border-darkmode').toggleClass('border-dm').toggleClass('border border-info');
        $('.border-warning_border-darkmode').toggleClass('border-dm').toggleClass('border border-warning');
        $('.border-danger_border-darkmode').toggleClass('border-dm').toggleClass('border border-danger');

        // Table
        $('.table-darkmode').toggleClass('table-dm');

        // Link
        $('.link-darkmode').toggleClass('link-dm');
    }




    // Kondisi jika button switch ditekan
    $(btnTarget).click(function () {

        // Background
        $('.bg-darkmode').toggleClass('bg-dm');
        $('.bg-white_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-white');
        $('.bg-primary_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-primary');
        $('.bg-dark_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-dark');
        $('.bg-secondary_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-secondary');
        $('.bg-light_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-light');
        $('.bg-info_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-info');
        $('.bg-warning_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-warning');
        $('.bg-danger_bg-darkmode').toggleClass('bg-dm').toggleClass('bg-danger');

        // Foreground
        $('.fg-darkmode').toggleClass('fg-dm txt-dm');
        $('.bg-white_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-white');
        $('.bg-primary_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-primary');
        $('.bg-dark_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-dark');
        $('.bg-secondary_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-secondary');
        $('.bg-light_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-light');
        $('.bg-info_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-info');
        $('.bg-warning_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-warning');
        $('.bg-danger_fg-darkmode').toggleClass('fg-dm txt-dm').toggleClass('bg-danger');

        // Text
        $('.text-darkmode').toggleClass('txt-dm');
        $('.text-white_text-darkmode').toggleClass('txt-dm').toggleClass('text-white');
        $('.text-primary_text-darkmode').toggleClass('txt-dm').toggleClass('text-primary');
        $('.text-dark_text-darkmode').toggleClass('txt-dm').toggleClass('text-dark');
        $('.text-secondary_text-darkmode').toggleClass('txt-dm').toggleClass('text-secondary');
        $('.text-light_text-darkmode').toggleClass('txt-dm').toggleClass('text-light');
        $('.text-info_text-darkmode').toggleClass('txt-dm').toggleClass('text-info');
        $('.text-warning_text-darkmode').toggleClass('txt-dm').toggleClass('text-warning');
        $('.text-danger_text-darkmode').toggleClass('txt-dm').toggleClass('text-danger');

        // Button Darkmode Grey
        $('.btn-darkmode-grey').toggleClass('btn-dm-grey');
        $('.btn-white_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-white');
        $('.btn-primary_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-primary');
        $('.btn-dark_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-dark');
        $('.btn-secondary_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-secondary');
        $('.btn-light_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-light');
        $('.btn-info_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-info');
        $('.btn-warning_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-warning');
        $('.btn-danger_btn-darkmode-grey').toggleClass('btn-dm-grey').toggleClass('btn-danger');

        // Button Darkmode Default
        $('.btn-darkmode').toggleClass('btn-dm');
        $('.btn-white_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-white');
        $('.btn-primary_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-primary');
        $('.btn-dark_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-dark');
        $('.btn-secondary_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-secondary');
        $('.btn-light_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-light');
        $('.btn-info_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-info');
        $('.btn-warning_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-warning');
        $('.btn-danger_btn-darkmode').toggleClass('btn-dm').toggleClass('btn-danger');

        // Input Form
        $('.input-darkmode').toggleClass('input-dm');
        $('.bg-white_input-darkmode').toggleClass('input-dm').toggleClass('bg-white');
        $('.bg-primary_input-darkmode').toggleClass('input-dm').toggleClass('bg-primary');
        $('.bg-dark_input-darkmode').toggleClass('input-dm').toggleClass('bg-dark');
        $('.bg-secondary_input-darkmode').toggleClass('input-dm').toggleClass('bg-secondary');
        $('.bg-light_input-darkmode').toggleClass('input-dm').toggleClass('bg-light');
        $('.bg-info_input-darkmode').toggleClass('input-dm').toggleClass('bg-info');
        $('.bg-warning_input-darkmode').toggleClass('input-dm').toggleClass('bg-warning');
        $('.bg-danger_input-darkmode').toggleClass('input-dm').toggleClass('bg-danger');

        // Border
        $('.border-darkmode').toggleClass('border-dm');
        $('.border-white_border-darkmode').toggleClass('border-dm').toggleClass('border border-white');
        $('.border-primary_border-darkmode').toggleClass('border-dm').toggleClass('border border-primary');
        $('.border-dark_border-darkmode').toggleClass('border-dm').toggleClass('border border-dark');
        $('.border-secondary_border-darkmode').toggleClass('border-dm').toggleClass('border border-secondary');
        $('.border-light_border-darkmode').toggleClass('border-dm').toggleClass('border border-light');
        $('.border-info_border-darkmode').toggleClass('border-dm').toggleClass('border border-info');
        $('.border-warning_border-darkmode').toggleClass('border-dm').toggleClass('border border-warning');
        $('.border-danger_border-darkmode').toggleClass('border-dm').toggleClass('border border-danger');

        // Table
        $('.table-darkmode').toggleClass('table-dm');

        // Link
        $('.link-darkmode').toggleClass('link-dm');

        // Jika pada class .bg-darkmode sudah memiliki class bg-dm
        // Maka akan membuat key "theme" dengan value "darkmode"
        // Pada localstorage
        if ($(bodyTarget).hasClass('bg-dm')) {
            $('#icon-darkmode').addClass('fa-sun').removeClass('fa-moon');
            localStorage.setItem('theme', 'darkmode');
        }else{
            // Jika tidak maka akan menghapus key "theme"
            $('#icon-darkmode').addClass('fa-moon').removeClass('fa-sun');
            localStorage.removeItem('theme');
        }
    });
}