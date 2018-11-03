// 1.Создать страницу с одним внутренним скриптом и одним внешним.
// Перед началом кода, который будет в отдельном файле, написать осмысленный комментарий.
// Отформатировать следующий код. В коде допущена одна ошибка. Не хватает символа точка с запятой(;). Устраните ошибку.


function newFunction(win) {
    var params = {
        states: {
            url: "» /»",
            template: "«temlate.js»"
        }
    }

    function setStates(params) {
        if (win && !win.params) {
            win.params = params;
        }
    }
    setStates();
    console.log(params.states.template);
}
newFunction(window);

2.