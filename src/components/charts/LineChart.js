import {
    Line,
    mixins
} from 'vue-chartjs'

export default {
    extends: Line,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'options'],
    data() {
        return {}
    },
    mounted() {
        this.renderChart(this.chartdata, this.options)
    }

}