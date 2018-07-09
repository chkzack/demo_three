function createDiv(width, height, top, left, bottom, right, html) {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    if(!isNaN( width )){
        div.style.width = width+'px';
    }
    if(!isNaN( height )){
        div.style.height = height+'px';
    }
    div.style.zIndex = 999;
    div.style.overflow='hidden';
    if(top!=0)div.style.top = top+'px';
    if(left!=0)div.style.left = left+'px';
    if(bottom!=0)div.style.bottom = bottom+'px';
    if(right!=0)div.style.right = right+'px';
    div.innerHTML = html;
    container.appendChild( div );
}

function createMessageTable(){
    var message = '';
    message += '<div id="messageBox" class="messagebox"><h2>当前存储状况：<span id="close" style="float: right;color: #fe0000;display: block" onclick="$(this).parent().parent().hide();">X</span></h2>';
    message += '<table><thead>';
    message += '<tr><td>类目</td><td>库存数量</td><td>录入时间</td><td>负责人</td></tr>';
    message += '</thead>';
    message += '<tbody id="tbody">';
    message += '<tr><td>华为P20</td><td>300</td><td>2017-11-01</td><td>张三</td></tr>';
    message += '<tr><td>小米8</td><td>500</td><td>2017-11-24</td><td>李四</td></tr>';
    message += '<tr><td>OPPO10</td><td>130</td><td>2017-11-01</td><td>张三</td></tr>';
    message += '<tr><td>苹果iphoneX</td><td>250</td><td>2017-11-11</td><td>张三</td></tr>';
    message += '<tr><td>三星Galaxy7</td><td>143</td><td>2017-11-24</td><td>李四</td></tr>';
    message += '</tbody></table></div>';
    return message;
}

function changeData(){
    var random = 3*Math.random() >> 0;
    var dataList = JSONDATA[random];
    $("#tbody").empty();
    var trs = "";
    for(var i=0;i<dataList.length;i++){
        trs += "<tr><td>"+dataList[i].name+"</td><td>"+dataList[i].mount+"</td><td>"+dataList[i].date+"</td><td>"+dataList[i].incharge+"</td></tr>";
    }
    $("#tbody").append(trs);
}

function createInfoDiv( name ){
    var info = '';
    info += '<div id="infoBox" class="messagebox"><h2>当前仓库信息：<span id="close" style="float: right;color: #fe0000;display: block" onclick="$(this).parent().parent().hide();">X</span></h2>';
    info += '<div id="content">';
    //info += '<br><br>';
    info += genInfo( name );
    info += '</div>';
    return info;
}

function changeInfo( name ){
    $("#content").empty();
    var info = "";
    // info += "<br><br>";
    info += genInfo( name );
    $("#content").append(info);
}

function genInfo( name ){
    var info = "";
    if( name == "base" ){
        info += "<br>仓库总览：<br>";
        info += "&nbsp;&nbsp;可容纳量：<strong style='color:#22ff88'>10000</strong><br>";
        info += "&nbsp;&nbsp;当前使用率：<strong style='color:#22ff88'>40%</strong><br>";
    }
    if(name == "camera"){
        info += "当前摄像头工作状态：<br>";
        info += "&nbsp;&nbsp;<strong style='color:#22ff88'>正常</strong><br>";
        info += "当前摄像头清晰度：<br>";
        info += "&nbsp;&nbsp;<strong style='color:#22ff88'>标清</strong><br>";
    }
    if(name == "alarm"){
        info += "烟雾警报器状态：<br>";
        info += "&nbsp;&nbsp;<strong style='color:#22ff88'>正常</strong><br>";
        info += "当前室内空气中CO2浓度：<br>";
        info += "&nbsp;&nbsp;500ppm&nbsp;&nbsp;<strong style='color:#22ff88'>正常</strong><br>";
    }
    if(name == "button"){
        info += "门禁工作状态：<br>";
        info += "&nbsp;&nbsp;<strong style='color:#22ff88'>正常</strong><br>";
        info += "库房门当前状态<br>";
        info += "&nbsp;&nbsp;<strong style='color:#22ff88'>关闭</strong><br>";
    }
    return info;
}

function initCharts(){
    var charts = echarts.init(document.getElementById("charts"));
    option = {
        title : {
            text: '当前仓库使用情况',
            x: 'center',
            top: '10%',
            textStyle: {
                color : '#cccccc',
                fontFamily: 'sans-serif',
                fontSize: 18
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} <br/> {c} ({d}%)"
        },
        color: ["#3080df", "#6adfa0"],
        series : [
            {
                name: '使用情况',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:400, name:'已使用'},
                    {value:600, name:'未使用'}
                ],
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                lableLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 10,
                        shadowOffsetX: 1
                    },
                    emphasis: {
                        shadowBlur: 20,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    charts.setOption(option);
}