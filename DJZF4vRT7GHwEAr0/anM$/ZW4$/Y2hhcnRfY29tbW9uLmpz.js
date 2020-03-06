(function (H) {
    function deferRender (proceed) {
        var series = this, 
            $renderTo = $(this.chart.container.parentNode);

        // It is appeared, render it
        if ($renderTo.is(':appeared') || !series.options.animation) {
            proceed.call(series);
            
        // It is not appeared, halt renering until appear
        } else  {
            $renderTo.appear(); // Initialize appear plugin
            $renderTo.on('appear', function () {
                proceed.call(series);
            });
        }
    };
    H.wrap(H.Series.prototype, 'render', deferRender);
}(Highcharts));

$(function () {
	Highcharts.setOptions({
		colors: ['#008ed3', '#8dc641', '#dc1779', '#df6400', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
		chart: {
			type: 'column',
			backgroundColor: "rgba(255, 255, 255, 0)",
			style: {
				fontFamily: "'Roboto', sans-serif"
			}
		},
		lang:{
			thousandsSep: ",",
			numericSymbols:null
		},
		title:{
			//x:20,
			style: {
				fontSize:'16px',
				textAlign:'center'
			}
		},
		subtitle: {
			//x:20,
			style: {
				fontSize:'14px',
				textAlign:'center'
			}
		},
		xAxis:{
		},
		yAxis:{
			labels: {
				enabled: false
			},
			gridLineColor: '#fff',
			title: {text: null}
		},
		plotOptions:{
			column: {
				//stacking: 'normal',
				pointPadding: 0,
				dataLabels: {
					enabled: true,
					crop: false,
					overflow: 'none',
					color: '#555',
					style: {
						textShadow: false 
					}
				}
				
			}
		},
		exporting:{enabled:!1},
		legend: {

		},
		tooltip: {
			enabled:false,
            shared: true
        },
		credits: {
			enabled: false
		}
	});
});

$(function () {
	
	//Operation monthly
	$('#opChart_m1').highcharts({
		colors:["#008ed3"],
        title: {
            text: 'Total Mobile Customers',
        },
        subtitle: {
            text: '(in thousands)',
        },
        xAxis: {
            categories: ['NOV 2019','DEC 2019','JAN 2020']
        },
        tooltip: {
			formatter: function() {
				return '<b>' + Highcharts.numberFormat(this.y, 0, '.') + '</b>';
			}
        },	
        series: [{
			showInLegend: false, 
            name: '',
            data: [946545,950277,949415],
			zIndex: 10
        }]
    });

	$('#opChart_m2').highcharts({
		colors:["#8dc641"],
        title: {
            text: '4G Customers',
        },
        subtitle: {
            text: '(in thousands)',
        },
        xAxis: {
            categories: ['NOV 2019','DEC 2019','JAN 2020']
        },
		yAxis: {
	        max: 730000
    	},
        tooltip: {
			formatter: function() {
				return '<b>' + Highcharts.numberFormat(this.y, 0, '.') + '</b>';
			}
        },	
        series: [{
			showInLegend: false, 
            name: '',
            data: [753029,758014,757844],
			zIndex: 10
        }]
    });
	
	$('#opChart_m3').highcharts({
		colors:["#dc1779"],
        title: {
            text: 'Wireline Broadband Customers',
        },
        subtitle: {
            text: '(in thousands)',
        },
        xAxis: {
            categories: ['NOV 2019','DEC 2019','JAN 2020']
        },

        tooltip: {
			formatter: function() {
				return '<b>' + Highcharts.numberFormat(this.y, 0, '.') + '</b>';
			}
        },	
        series: [{
			showInLegend: false, 
            name: '',
            data: [187650,187041,188271],
			zIndex: 10
        }]
    });
	
	//Operation quarterly
	$('#opChart_q1').highcharts({
		colors:["#008ed3"],
        title: {
            text: 'Total Mobile Customers',
        },
        subtitle: {
            text: '(in thousands)',
        },
        xAxis: {
            categories: ['2019 1Q','2019 2Q','2019 3Q']
        },

        tooltip: {
			formatter: function() {
				return '<b>' + Highcharts.numberFormat(this.y, 0, '.') + '</b>';
			}
        },	
        series: [{
			showInLegend: false, 
            name: '',
            data: [931393,935047,942030],
			zIndex: 10
        }]
    });
	
	$('#opChart_q2').highcharts({
		colors:["#8dc641"],
        title: {
            text: '4G Customers',
        },
        subtitle: {
            text: '(in thousands)',
        },
        xAxis: {
            categories: ['2019 1Q','2019 2Q','2019 3Q']
        },

        tooltip: {
			formatter: function() {
				return '<b>' + Highcharts.numberFormat(this.y, 0, '.') + '</b>';
			}
        },	
        series: [{
			showInLegend: false, 
            name: '',
            data: [723319,733779,746978],
			zIndex: 10
        }]
    });
	
	$('#opChart_q3').highcharts({
		colors:["#dc1779"],
        title: {
            text: 'Wireline Broadband Customers',
        },
        subtitle: {
            text: '(in thousands)',
        },
        xAxis: {
            categories: ['2019 1Q','2019 2Q','2019 3Q']
        },

        tooltip: {
			formatter: function() {
				return '<b>' + Highcharts.numberFormat(this.y, 0, '.') + '</b>';
			}
        },	
        series: [{
			showInLegend: false, 
            name: '',
            data: [167031,174893,185051],
			zIndex: 10
        }]
    });
	
	//Operation yearly
	$('#opChart_y1').highcharts({
		colors:["#008ed3"],
        title: {
            text: 'Total Mobile Customers',
        },
        subtitle: {
            text: '(in thousands)',
        },
        xAxis: {
            categories: ['2016','2017','2018']
        },

        tooltip: {
			formatter: function() {
				return '<b>' + Highcharts.numberFormat(this.y, 0, '.') + '</b>';
			}
        },	
        series: [{
			showInLegend: false, 
            name: '',
            data: [848898,887200,925069],
			zIndex: 10
        }]
    });
	
	$('#opChart_y2').highcharts({
		colors:["#8dc641"],
        title: {
            text: '4G Customers',
        },
        subtitle: {
            text: '(in thousands)',
        },
        xAxis: {
            categories: ['2016','2017','2018']
        },

        tooltip: {
			formatter: function() {
				return '<b>' + Highcharts.numberFormat(this.y, 0, '.') + '</b>';
			}
        },	
        series: [{
			showInLegend: false, 
            name: '',
            data: [535036,649507,712650],
			zIndex: 10
        }]
    });
	
	
	
});