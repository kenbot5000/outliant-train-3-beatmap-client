import {
    Doughnut,
    mixins
} from 'vue-chartjs'

export default {
    extends: Doughnut,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    data() {
        return {}
    },
    mounted() {
        this.renderChart(this.chartdata, this.options)
    }

}