var clock = new Vue({
    el: "#time",
    data: {
        hour: "",
        minute: "",
        second: ""
    },
    methods: {
        setClock() {
            var date = new Date();
            this.hour = date.getHours();
            this.minute = date.getMinutes();
            this.second = date.getSeconds();
        }
    },
    mounted() {
        //設定更新間隔(方法, 間隔時間(ms))
        setInterval(this.setClock, 1000);
    }
});