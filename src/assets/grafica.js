Highcharts.setOptions({
  global: {
    useUTC: false
  }
});

Highcharts.chart('ganancias', {
  chart: {
    type: 'spline',
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {

        // set up the updating of the chart each second
        var series = this.series[0];
        setInterval(function () {
          var x = (new Date()).getTime(), // current time
          y = Math.random();
          series.addPoint([x, y], true, true);
        }, 1000);
      }
    }
  },
  title: {
    text: 'Flujo de efectivo'
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 150
  },
  yAxis: {
    title: {
      text: 'Dolares'
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
      Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
      Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: 'Pasajeros',
    data: (function () {
      // generate an array of random data
      var data = [],
      time = (new Date()).getTime(),
      i;

      for (i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())
  }]
});

Highcharts.chart('pasajeros1', {
  chart: {
    type: 'spline',
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {

        // set up the updating of the chart each second
        var series = this.series[0];
        setInterval(function () {
          var x = (new Date()).getTime(), // current time
          y = Math.random();
          series.addPoint([x, y], true, true);
        }, 1000);
      }
    }
  },
  title: {
    text: 'Pasajeros en los buses'
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 150
  },
  yAxis: {
    title: {
      text: 'Pasajeros'
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
      Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
      Highcharts.numberFormat(this.y, 2);
    }
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: 'Pasajeros',
    data: (function () {
      // generate an array of random data
      var data = [],
      time = (new Date()).getTime(),
      i;

      for (i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())
  }]
});

Highcharts.chart('historial1', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Total de Ganancias en la'
    },
    subtitle: {
        text: 'Semana'
    },
    xAxis: {
        categories: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    },
    yAxis: {
        title: {
            text: 'Dolares'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Mes: Diciembre',
        data: [7000, 6900, 9555, 8000, 6700, 0000]
    }]
});
Highcharts.chart('historial2', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Total Ganancias por'
    },
    subtitle: {
        text: 'Meses'
    },
    xAxis: {
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    },
    yAxis: {
        title: {
            text: 'Dolares'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: '2018',
        data: [70000, 69000, 95000, 14500, 18400, 21500, 25002, 26500, 23003, 18300, 13900, 96000]
    }, {
        name: '2017',
        data: [39000, 42000, 57000, 85000, 11900, 15200, 17000, 16000, 14002, 10300, 66000, 48000]
    }]
});
Highcharts.chart('historial3', {

  title: {
    text: 'Historial de Ganancias'
  },

  subtitle: {
    text: 'recolectado'
  },

  yAxis: {
    title: {
      text: 'Ganancias totales'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2017
    }
  },

  series: [{
    name: 'Ganancias Totales',
    data: [4393467, 5250377, 5717700, 6965800, 9703100, 11993100, 13713300, 15417575]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});