$(document).ready(() => {
    const data = {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                label: 'Weekly Sales',
                data: [50, 30, 20],
                backgroundColor: ['#00953B', '#ebdb4b', '#eb4b4b'],
                borderColor: ['#00953B', '#ebdb4b', '#eb4b4b'],
                borderWidth: 1,
            },
        ],
    };

    // config
    const config = {
        type: 'pie',
        data,
        options: {},
    };
    // render init block
    const myChart = new Chart(document.getElementById('myChart'), config);
    const buttonSetting = document.querySelector('.setting');
    const button = document.querySelector('.content_setting_none');
    const ok = document.querySelector('.ok');
    const alert = document.querySelector('.alert');
    const submit = document.querySelector('.submit');
    let d = 0;
    const handleDisplay = () => {
        if (d % 2 === 0) {
            d++;
            button.classList.add('content_setting_block');
        } else {
            button.classList.remove('content_setting_block');
            d--;
        }
    };
    const handleSubmit = () => {
        alert.classList.add('none_alert');
    };
    const handleRemoveSubmit = () => {
        alert.classList.remove('none_alert');
    };
    const delete_cookie = () => {
        document.cookie = 'userId' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'idCourses' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };
    buttonSetting.onclick = handleDisplay;
    ok.onclick = handleSubmit;
    submit.onclick = handleRemoveSubmit;

    const logOut = document.querySelector('.link_logout');

    logOut.onclick = delete_cookie;
});
