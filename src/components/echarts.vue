<template>
    <div id="myChart" :style="{width: '600px', height: '400px'}"></div>
</template>
<script>
import echarts from "echarts";
export default {
    name: "hello",
    data() {
        return {
            msg: "Welcome to Your Vue.js App"
        };
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(
                document.getElementById("myChart")
            );
            // 绘制图表
            myChart.setOption({
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "9月", "9月", "10月", "11月", "12月"],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: "#999999"
                        }
                    }
                },
                yAxis: {
                    type: "value",
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                      lineStyle: {
                            color: 'rgba(0, 0, 0, 0.08)',
                            width: 0.7,
                            type: 'solid'
                        }
                    },
                    min: 8000000,
                    max: 13203434
                },
                
                grid: {
                    left: 160
                },
                
                tooltip: {
                    show: true,
                    trigger: 'item',
                    confine: true,
                    mousemove: {
                        type: 'line'
                    },
                    triggerOn: 'mousemove',
                    formatter: params => {
                        // ${params.dataIndex <= this.leftWidth ? this.leftYear : this.rightYear}年
                        return `<p>${params.name}</p><p>黑名单</p><p>${params.value}名</p>`;
                    }
                },
                dataZoom: [
                    {
                        zoomLock: true,
                        type: 'inside',
                        start: 60,
                        end: 100
                    }
                ],
                series: [
                    {
                        data: [9323434, 9323434, 9013434, 9323434, 12903434, 9323434, 13203434, 9013434, 9323434, 9323434, 9323434, 13203434],
                        type: "line",
                        areaStyle: {
                            color: {
                                type: "linear",
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(54,179,116,1)" // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(54,179,116,0)" // 100% 处的颜色
                                    }
                                ],
                                global: false // 缺省为 false
                            }
                        },
                        lineStyle: {
                            color: "#36B374",
                            width: 2
                        },
                        itemStyle: {
                            color: "#fff", // 拐点颜色
                            borderColor: "rgba(54,179,116,1)",
                            borderWidth: 1
                        },
                        label: {
                            show: true,
                            position: "top",
                            color: "rgba(54,179,116,1)",
                            // rotate: 30
                        },

                        symbolSize: 8 // 拐点大小
                    }
                ]
            });
        }
    }
};
</script>