window.onload = function () {
    var myAlert = document.getElementById('myAlert')
    console.log(myAlert)
    var bsAlert = new bootstrap.Alert(myAlert)

    let elem = document.querySelector('#testContent');
    let dataElem = document.getElementById('testData');
    let contElem = document.getElementById('testContent');
    console.log(dataElem.innerHTML);
    console.log(dataElem.textContent);
    contElem.innerHTML = dataElem.textContent

    var zz = new Vue({
        el: '#zz',
        data: {
            message: 'Привет, Vue.js!',
            isDanger: true,
            isSuccess: false,
            // app5Element: document.getElementById('app5')
        },
        // methods: {
        //     reverseMessage: function () {
        //         this.message = this.message.split('').reverse().join('')
        //         // console.log(this.message);
        //     }
        // }
    })

    var app6 = new Vue({
        el: '#app6',
        data: {
            isTerm1: true
        }
    })

    var app5 = new Vue({
        el: '#app5',
        methods: {
            reverseMessage: function () {
                zz.message = zz.message.split('').reverse().join('')
            },
            setDanger: function () {
                zz.isDanger = true
                zz.isSuccess = false
            },
            setSuccess: function () {
                zz.isDanger = false
                zz.isSuccess = true
            },
            toggle: function () {
                zz.isDanger = !zz.isDanger
                zz.isSuccess = !zz.isSuccess
            },
            toggle1: function () {
                app6.isTerm1 = !app6.isTerm1
            }
        }
    })

    var vm = new Vue({
        el: '#example',
        data: {
            message: 'Привет'
        },
        computed: {
            // геттер вычисляемого значения
            reversedMessage: function () {
                // `this` указывает на экземпляр vm
                return this.message.split('').reverse().join('')
            }
        }
    })

    console.log(window.location.pathname)
    app5.reverseMessage()
    console.log('bbb')
    console.log(app5.message)
    console.log(vm.reversedMessage) // => 'тевирП'
    vm.message = 'Пока'
    console.log(vm.reversedMessage) // => 'акоП'

    var example1 = new Vue({
        el: '#example-1',
        data: {
            counter: 0
        }
    })

    var example2 = new Vue({
        el: '#example-2',
        data: {
            items: [
                { message: 'Крокодил', clObj: {'bg-success':true}},
                { message: 'Джигурда', clObj: {'bg-danger':true}},
                { message: 'Сыр', clObj: {'bg-warning':true}},
            ]
        }
    })
};