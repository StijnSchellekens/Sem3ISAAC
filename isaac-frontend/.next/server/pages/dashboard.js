"use strict";
(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./components/DashboardGraphs.js":
/*!***************************************!*\
  !*** ./components/DashboardGraphs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LineGraph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LineGraph */ "./components/LineGraph.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_helper_MeasurementEnum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/helper/MeasurementEnum */ "./components/helper/MeasurementEnum.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Andrei\\Sem3Isaac\\isaac-frontend\\components\\DashboardGraphs.js";




 // const ref = useRef();



const DashboardGraphs = ({
  data
}) => {
  const {
    0: measurement,
    1: setMeasurement
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_components_helper_MeasurementEnum__WEBPACK_IMPORTED_MODULE_4__.Measurement.TEMPERATURE); //  fetching data from json-server to be moved from file

  const graphChildRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  const graphData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      fill: true,
      label: 'This week',
      // filter to return an array with temps of current week
      data: getMeasurementArray(new Date()),
      backgroundColor: ['rgba(13, 99, 132, 0.3)'],
      borderColor: ['rgba(13, 99, 132, 1)'],
      borderWidth: 2
    }, {
      fill: false,
      label: 'Last week',
      data: getMeasurementArray(getLastWeekDate()),
      backgroundColor: ['rgba(146, 35, 168, 0.3)'],
      borderColor: ['rgba(146, 35, 168, 1)'],
      borderWidth: 2
    }]
  };

  function getLastWeekDate() {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date;
  }

  ;

  function getMeasurementArray(date) {
    const firstDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(date, {
      weekStartsOn: 1
    });
    const lastDay = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.endOfWeek)(date, {
      weekStartsOn: 1
    }); // get an array with entries of current week

    const currentWeekEntries = data.filter(obj => obj.dateTime >= firstDay && obj.dateTime <= lastDay); // used so Monday is first day of the week not Sunday

    function getDayExtended(date) {
      let day = date.getDay();

      if (day == 0) {
        return 6;
      }

      return --day;
    }

    ; // sum the temps for a day and create counter

    const average = [0, 0, 0, 0, 0, 0, 0];
    const counter = [0, 0, 0, 0, 0, 0, 0];

    if (measurement === _components_helper_MeasurementEnum__WEBPACK_IMPORTED_MODULE_4__.Measurement.TEMPERATURE) {
      currentWeekEntries.forEach(element => {
        const arrayIndex = getDayExtended(element.dateTime);
        average[arrayIndex] += element.temp;
        counter[arrayIndex]++;
      });
    } else if (measurement === _components_helper_MeasurementEnum__WEBPACK_IMPORTED_MODULE_4__.Measurement.HUMIDITY) {
      currentWeekEntries.forEach(element => {
        const arrayIndex = getDayExtended(element.dateTime);
        average[arrayIndex] += element.humidity;
        counter[arrayIndex]++;
      });
    } // calculate average


    for (let index = 0; index < average.length; index++) {
      average[index] /= counter[index];
      average[index] = average[index].toPrecision(3);
    }

    return average;
  }

  function updateDatasets() {
    setMeasurement((0,_components_helper_MeasurementEnum__WEBPACK_IMPORTED_MODULE_4__.nextMeasurement)(measurement));
    graphChildRef.current.updateGraph();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
      type: "button",
      value: "Switch",
      onClick: () => updateDatasets()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_LineGraph__WEBPACK_IMPORTED_MODULE_0__.default, {
      data: graphData,
      height: 300,
      title: measurement,
      ref: graphChildRef
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};

DashboardGraphs.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardGraphs);

/***/ }),

/***/ "./components/Gauge.js":
/*!*****************************!*\
  !*** ./components/Gauge.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-gauge-chart */ "react-gauge-chart");
/* harmony import */ var react_gauge_chart__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_gauge_chart__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ "@mui/material/Paper");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Andrei\\Sem3Isaac\\isaac-frontend\\components\\Gauge.js";

/* eslint-disable react/prop-types */



 // eslint-disable-next-line react/prop-types



const Gauge = ({
  name,
  data
}) => {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const chartStyle = {
    height: 240,
    width: 540
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    if (name === 'Temperature') {
      data = data.map(obj => obj.temp);
    } else {
      data = data.map(obj => obj.humidity);
    }

    const average = (await data.reduce((total, next) => total + next, 0)) / data.length;
    setValue(average / 100);
  }, []);

  const getFormatText = () => {
    if (name === 'Temperature') return '°C';
    return '%';
  };

  if (!value) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined);
  }

  const paperStyle = {
    height: 300,
    width: 500,
    textAlign: 'center'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
    sx: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_1___default()), {
      variant: "h6",
      noWrap: true,
      component: "div",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_gauge_chart__WEBPACK_IMPORTED_MODULE_2___default()), {
      style: chartStyle,
      id: "gauge-chart",
      colors: ['#009DDC', '#c12d3f'],
      arcWidth: 0.2,
      textColor: "#464A4F",
      needleColor: "black",
      needleBaseColor: "black",
      percent: value,
      arcsLength: [0.3, 0.5, 0.2],
      formatTextValue: val => val + getFormatText()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gauge);

/***/ }),

/***/ "./components/LineGraph.js":
/*!*********************************!*\
  !*** ./components/LineGraph.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Andrei\\Sem3Isaac\\isaac-frontend\\components\\LineGraph.js";




const Graph = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, ref) => {
  const graphRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => ({
    updateGraph() {
      graphRef.current.update();
    }

  }));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
      height: props.height,
      data: props.data,
      ref: graphRef,
      options: {
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: props.title
          }
        },
        elements: {
          line: {
            tension: 0.4 // may cause bizzare curves

          }
        }
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
});
Graph.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
Graph.propTypes = {
  height: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};
Graph.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
Graph.displayName = 'Graph';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);

/***/ }),

/***/ "./components/helper/MeasurementEnum.js":
/*!**********************************************!*\
  !*** ./components/helper/MeasurementEnum.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Measurement": () => (/* binding */ Measurement),
/* harmony export */   "nextMeasurement": () => (/* binding */ nextMeasurement)
/* harmony export */ });
const Measurement = Object.freeze({
  TEMPERATURE: 'Temperature(°C)',
  HUMIDITY: 'Humidity(%RH)'
});
function nextMeasurement(params) {
  if (params === Measurement.TEMPERATURE) {
    return Measurement.HUMIDITY;
  }

  if (params === Measurement.HUMIDITY) {
    return Measurement.TEMPERATURE;
  }

  return undefined;
}

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ "@mui/material/AppBar");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Toolbar */ "@mui/material/Toolbar");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "@mui/material/Typography");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Gauge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Gauge */ "./components/Gauge.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ "@mui/material/Grid");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_DashboardGraphs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DashboardGraphs */ "./components/DashboardGraphs.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Andrei\\Sem3Isaac\\isaac-frontend\\pages\\dashboard.js";








const drawerWidth = 240;

const Dashboard = () => {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    const res = await fetch('http://localhost:5000/entries');
    const rawData = await res.json();
    setData(await rawData.map(obj => {
      obj.dateTime = new Date(obj.dateTime);
      return obj;
    }));
  }, []);

  if (!data) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
      children: "...Loading"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined);
  }

  const generalStyle = {
    marginLeft: `${drawerWidth}px`
  };
  const dashBoardStyle = {
    width: `calc(100% - ${drawerWidth}px)`
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    style: generalStyle,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1___default()), {
      position: "fixed",
      color: "primary",
      style: dashBoardStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
          variant: "h6",
          noWrap: true,
          component: "div",
          children: "Dashboard"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
        item: true,
        xs: 12,
        lg: 6,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Gauge__WEBPACK_IMPORTED_MODULE_4__.default, {
          id: "graph-chart-temperature",
          name: "Temperature",
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
        item: true,
        xs: 12,
        lg: 6,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Gauge__WEBPACK_IMPORTED_MODULE_4__.default, {
          id: "graph-chart-humidity",
          name: "Humidity",
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {
        item: true,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_DashboardGraphs__WEBPACK_IMPORTED_MODULE_6__.default, {
          data: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-gauge-chart":
/*!************************************!*\
  !*** external "react-gauge-chart" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-gauge-chart");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQWY7QUFBbUIsVUFBRSxFQUFFLENBQXZCO0FBQUEsK0JBQ0UsOERBQUMsc0RBQUQ7QUFBTyxZQUFFLEVBQUMseUJBQVY7QUFBb0MsY0FBSSxFQUFDLGFBQXpDO0FBQXVELGNBQUksRUFBRXJHO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUUsOERBQUMsMkRBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFtQixVQUFFLEVBQUUsQ0FBdkI7QUFBQSwrQkFDRSw4REFBQyxzREFBRDtBQUFPLFlBQUUsRUFBQyxzQkFBVjtBQUFpQyxjQUFJLEVBQUMsVUFBdEM7QUFBaUQsY0FBSSxFQUFFQTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQU9FLDhEQUFDLDJEQUFEO0FBQU0sWUFBSSxNQUFWO0FBQVcsVUFBRSxFQUFFLEVBQWY7QUFBQSwrQkFDRSw4REFBQyxnRUFBRDtBQUFpQixjQUFJLEVBQUVBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTBCRCxDQXBERDs7QUFzREEsaUVBQWU2RixTQUFmOzs7Ozs7Ozs7O0FDaEVBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc2FhYy1mcm9udGVuZC8uL2NvbXBvbmVudHMvRGFzaGJvYXJkR3JhcGhzLmpzIiwid2VicGFjazovL2lzYWFjLWZyb250ZW5kLy4vY29tcG9uZW50cy9HYXVnZS5qcyIsIndlYnBhY2s6Ly9pc2FhYy1mcm9udGVuZC8uL2NvbXBvbmVudHMvTGluZUdyYXBoLmpzIiwid2VicGFjazovL2lzYWFjLWZyb250ZW5kLy4vY29tcG9uZW50cy9oZWxwZXIvTWVhc3VyZW1lbnRFbnVtLmpzIiwid2VicGFjazovL2lzYWFjLWZyb250ZW5kLy4vcGFnZXMvZGFzaGJvYXJkLmpzIiwid2VicGFjazovL2lzYWFjLWZyb250ZW5kL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9BcHBCYXJcIiIsIndlYnBhY2s6Ly9pc2FhYy1mcm9udGVuZC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiIiwid2VicGFjazovL2lzYWFjLWZyb250ZW5kL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9QYXBlclwiIiwid2VicGFjazovL2lzYWFjLWZyb250ZW5kL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vaXNhYWMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly9pc2FhYy1mcm9udGVuZC9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vaXNhYWMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vaXNhYWMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2lzYWFjLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtY2hhcnRqcy0yXCIiLCJ3ZWJwYWNrOi8vaXNhYWMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC1nYXVnZS1jaGFydFwiIiwid2VicGFjazovL2lzYWFjLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmVHcmFwaCBmcm9tICcuL0xpbmVHcmFwaCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtzdGFydE9mV2VlaywgZW5kT2ZXZWVrfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7XHJcbiAgTWVhc3VyZW1lbnQsIG5leHRNZWFzdXJlbWVudCxcclxufSBmcm9tICcuLi9jb21wb25lbnRzL2hlbHBlci9NZWFzdXJlbWVudEVudW0nO1xyXG5cclxuLy8gY29uc3QgcmVmID0gdXNlUmVmKCk7XHJcbmNvbnN0IERhc2hib2FyZEdyYXBocyA9ICh7ZGF0YX0pID0+IHtcclxuICBjb25zdCBbbWVhc3VyZW1lbnQsIHNldE1lYXN1cmVtZW50LFxyXG4gIF0gPSB1c2VTdGF0ZShNZWFzdXJlbWVudC5URU1QRVJBVFVSRSk7XHJcblxyXG4gIC8vICBmZXRjaGluZyBkYXRhIGZyb20ganNvbi1zZXJ2ZXIgdG8gYmUgbW92ZWQgZnJvbSBmaWxlXHJcblxyXG4gIGNvbnN0IGdyYXBoQ2hpbGRSZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGdyYXBoRGF0YSA9IHtcclxuICAgIGxhYmVsczogWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLFxyXG4gICAgICAnRnJpZGF5JywgJ1NhdHVyZGF5JywgJ1N1bmRheSddLFxyXG4gICAgZGF0YXNldHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdUaGlzIHdlZWsnLFxyXG4gICAgICAgIC8vIGZpbHRlciB0byByZXR1cm4gYW4gYXJyYXkgd2l0aCB0ZW1wcyBvZiBjdXJyZW50IHdlZWtcclxuICAgICAgICBkYXRhOiBnZXRNZWFzdXJlbWVudEFycmF5KG5ldyBEYXRlKCkpLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgJ3JnYmEoMTMsIDk5LCAxMzIsIDAuMyknLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IFtcclxuICAgICAgICAgICdyZ2JhKDEzLCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsOiAnTGFzdCB3ZWVrJyxcclxuICAgICAgICBkYXRhOiBnZXRNZWFzdXJlbWVudEFycmF5KGdldExhc3RXZWVrRGF0ZSgpKSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICdyZ2JhKDE0NiwgMzUsIDE2OCwgMC4zKScsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgJ3JnYmEoMTQ2LCAzNSwgMTY4LCAxKScsXHJcbiAgICAgICAgXSxcclxuICAgICAgICBib3JkZXJXaWR0aDogMixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gZ2V0TGFzdFdlZWtEYXRlKCkge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCktNyk7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRNZWFzdXJlbWVudEFycmF5KGRhdGUpIHtcclxuICAgIGNvbnN0IGZpcnN0RGF5ID0gc3RhcnRPZldlZWsoZGF0ZSwge3dlZWtTdGFydHNPbjogMX0pO1xyXG4gICAgY29uc3QgbGFzdERheSA9IGVuZE9mV2VlayhkYXRlLCB7d2Vla1N0YXJ0c09uOiAxfSk7XHJcblxyXG4gICAgLy8gZ2V0IGFuIGFycmF5IHdpdGggZW50cmllcyBvZiBjdXJyZW50IHdlZWtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWVrRW50cmllcyA9IGRhdGEuZmlsdGVyKChvYmopID0+XHJcbiAgICAgIG9iai5kYXRlVGltZSA+PSBmaXJzdERheSAmJiBvYmouZGF0ZVRpbWUgPD0gbGFzdERheSk7XHJcblxyXG4gICAgLy8gdXNlZCBzbyBNb25kYXkgaXMgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrIG5vdCBTdW5kYXlcclxuICAgIGZ1bmN0aW9uIGdldERheUV4dGVuZGVkKGRhdGUpIHtcclxuICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF5KCk7XHJcbiAgICAgIGlmIChkYXkgPT0gMCkge1xyXG4gICAgICAgIHJldHVybiA2O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAtLWRheTtcclxuICAgIH07XHJcbiAgICAvLyBzdW0gdGhlIHRlbXBzIGZvciBhIGRheSBhbmQgY3JlYXRlIGNvdW50ZXJcclxuICAgIGNvbnN0IGF2ZXJhZ2UgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICBjb25zdCBjb3VudGVyID0gWzAsIDAsIDAsIDAsIDAsIDAsIDBdO1xyXG5cclxuICAgIGlmIChtZWFzdXJlbWVudCA9PT0gTWVhc3VyZW1lbnQuVEVNUEVSQVRVUkUpIHtcclxuICAgICAgY3VycmVudFdlZWtFbnRyaWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBjb25zdCBhcnJheUluZGV4ID0gZ2V0RGF5RXh0ZW5kZWQoZWxlbWVudC5kYXRlVGltZSk7XHJcbiAgICAgICAgYXZlcmFnZVthcnJheUluZGV4XSArPSBlbGVtZW50LnRlbXA7XHJcbiAgICAgICAgY291bnRlclthcnJheUluZGV4XSsrO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobWVhc3VyZW1lbnQgPT09IE1lYXN1cmVtZW50LkhVTUlESVRZKSB7XHJcbiAgICAgIGN1cnJlbnRXZWVrRW50cmllcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXJyYXlJbmRleCA9IGdldERheUV4dGVuZGVkKGVsZW1lbnQuZGF0ZVRpbWUpO1xyXG4gICAgICAgIGF2ZXJhZ2VbYXJyYXlJbmRleF0gKz0gZWxlbWVudC5odW1pZGl0eTtcclxuICAgICAgICBjb3VudGVyW2FycmF5SW5kZXhdKys7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBhdmVyYWdlXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXZlcmFnZS5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgYXZlcmFnZVtpbmRleF0gLz0gY291bnRlcltpbmRleF07XHJcbiAgICAgIGF2ZXJhZ2VbaW5kZXhdID0gYXZlcmFnZVtpbmRleF0udG9QcmVjaXNpb24oMyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXZlcmFnZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZURhdGFzZXRzKCkge1xyXG4gICAgc2V0TWVhc3VyZW1lbnQobmV4dE1lYXN1cmVtZW50KG1lYXN1cmVtZW50KSk7XHJcbiAgICBncmFwaENoaWxkUmVmLmN1cnJlbnQudXBkYXRlR3JhcGgoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICB2YWx1ZT1cIlN3aXRjaFwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlRGF0YXNldHMoKX1cclxuICAgICAgLz5cclxuICAgICAgPExpbmVHcmFwaFxyXG4gICAgICAgIGRhdGE9e2dyYXBoRGF0YX1cclxuICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICB0aXRsZT17bWVhc3VyZW1lbnR9XHJcbiAgICAgICAgcmVmPXtncmFwaENoaWxkUmVmfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbkRhc2hib2FyZEdyYXBocy5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRHcmFwaHM7XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgR2F1Z2VDaGFydCBmcm9tICdyZWFjdC1nYXVnZS1jaGFydCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbXVpL21hdGVyaWFsL1BhcGVyJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXHJcbmNvbnN0IEdhdWdlID0gKHtuYW1lLCBkYXRhfSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGNoYXJ0U3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6IDI0MCxcclxuICAgIHdpZHRoOiA1NDAsXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgIGlmIChuYW1lID09PSAnVGVtcGVyYXR1cmUnKSB7XHJcbiAgICAgIGRhdGEgPSBkYXRhLm1hcCgob2JqKSA9PlxyXG4gICAgICAgIG9iai50ZW1wLFxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGF0YSA9IGRhdGEubWFwKChvYmopID0+XHJcbiAgICAgICAgb2JqLmh1bWlkaXR5LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYXZlcmFnZSA9IGF3YWl0IGRhdGEucmVkdWNlKCh0b3RhbCwgbmV4dCkgPT4gdG90YWwgK1xyXG4gICAgbmV4dCwgMCkgLyBkYXRhLmxlbmd0aDtcclxuICAgIHNldFZhbHVlKGF2ZXJhZ2UgLyAxMDApO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0Rm9ybWF0VGV4dCA9ICgpID0+IHtcclxuICAgIGlmIChuYW1lID09PSAnVGVtcGVyYXR1cmUnKSByZXR1cm4gJ8KwQyc7XHJcbiAgICByZXR1cm4gJyUnO1xyXG4gIH07XHJcblxyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcGVyU3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6IDMwMCxcclxuICAgIHdpZHRoOiA1MDAsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFwZXJcclxuICAgICAgc3g9e3BhcGVyU3R5bGV9XHJcbiAgICA+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcCBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICB7bmFtZX1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8R2F1Z2VDaGFydFxyXG4gICAgICAgIHN0eWxlPXtjaGFydFN0eWxlfVxyXG4gICAgICAgIGlkPVwiZ2F1Z2UtY2hhcnRcIlxyXG4gICAgICAgIGNvbG9ycz17WycjMDA5RERDJywgJyNjMTJkM2YnXX1cclxuICAgICAgICBhcmNXaWR0aD17MC4yfVxyXG4gICAgICAgIHRleHRDb2xvcj1cIiM0NjRBNEZcIlxyXG4gICAgICAgIG5lZWRsZUNvbG9yPVwiYmxhY2tcIlxyXG4gICAgICAgIG5lZWRsZUJhc2VDb2xvcj1cImJsYWNrXCJcclxuICAgICAgICBwZXJjZW50PXt2YWx1ZX1cclxuICAgICAgICBhcmNzTGVuZ3RoPXtbMC4zLCAwLjUsIDAuMl19XHJcbiAgICAgICAgZm9ybWF0VGV4dFZhbHVlPXsodmFsKSA9PiB2YWwrZ2V0Rm9ybWF0VGV4dCgpfVxyXG4gICAgICAvPlxyXG5cclxuICAgIDwvUGFwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhdWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHtMaW5lfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5cclxuY29uc3QgR3JhcGggPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3QgZ3JhcGhSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7XHJcbiAgICB1cGRhdGVHcmFwaCgpIHtcclxuICAgICAgZ3JhcGhSZWYuY3VycmVudC51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgfSkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGluZVxyXG4gICAgICAgIGhlaWdodD17cHJvcHMuaGVpZ2h0fVxyXG4gICAgICAgIGRhdGE9e3Byb3BzLmRhdGF9XHJcbiAgICAgICAgcmVmPXtncmFwaFJlZn1cclxuICAgICAgICBvcHRpb25zPSB7e1xyXG4gICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICB0ZXh0OiBwcm9wcy50aXRsZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBlbGVtZW50czoge1xyXG4gICAgICAgICAgICBsaW5lOiB7XHJcbiAgICAgICAgICAgICAgdGVuc2lvbjogMC40LCAvLyBtYXkgY2F1c2UgYml6emFyZSBjdXJ2ZXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59KTtcclxuXHJcbkdyYXBoLnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcbkdyYXBoLnByb3BUeXBlcyA9IHtcclxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxufTtcclxuR3JhcGgucHJvcFR5cGVzID0ge1xyXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcbkdyYXBoLmRpc3BsYXlOYW1lID0gJ0dyYXBoJztcclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XHJcblxyXG4iLCJleHBvcnQgY29uc3QgTWVhc3VyZW1lbnQgPSBPYmplY3QuZnJlZXplKHtcclxuICBURU1QRVJBVFVSRTogJ1RlbXBlcmF0dXJlKMKwQyknLFxyXG4gIEhVTUlESVRZOiAnSHVtaWRpdHkoJVJIKScsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5leHRNZWFzdXJlbWVudChwYXJhbXMpIHtcclxuICBpZiAocGFyYW1zID09PSBNZWFzdXJlbWVudC5URU1QRVJBVFVSRSkge1xyXG4gICAgcmV0dXJuIE1lYXN1cmVtZW50LkhVTUlESVRZO1xyXG4gIH1cclxuICBpZiAocGFyYW1zID09PSBNZWFzdXJlbWVudC5IVU1JRElUWSkge1xyXG4gICAgcmV0dXJuIE1lYXN1cmVtZW50LlRFTVBFUkFUVVJFO1xyXG4gIH1cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBHYXVnZSBmcm9tICcuLi9jb21wb25lbnRzL0dhdWdlJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG11aS9tYXRlcmlhbC9HcmlkJztcclxuaW1wb3J0IERhc2hib2FyZEdyYXBocyBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZEdyYXBocyc7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoIGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvZW50cmllcycpO1xyXG4gICAgY29uc3QgcmF3RGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgc2V0RGF0YShhd2FpdCByYXdEYXRhLm1hcCgob2JqKSA9PiB7XHJcbiAgICAgIG9iai5kYXRlVGltZSA9IG5ldyBEYXRlKG9iai5kYXRlVGltZSk7XHJcbiAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9KSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+Li4uTG9hZGluZzwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGdlbmVyYWxTdHlsZSA9IHtcclxuICAgIG1hcmdpbkxlZnQ6IGAke2RyYXdlcldpZHRofXB4YCxcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXNoQm9hcmRTdHlsZSA9IHtcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXtnZW5lcmFsU3R5bGV9PlxyXG4gICAgICA8QXBwQmFyXHJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBzdHlsZT17ZGFzaEJvYXJkU3R5bGV9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhcj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIG5vV3JhcCBjb21wb25lbnQ9XCJkaXZcIj5cclxuICAgICAgICAgICAgRGFzaGJvYXJkXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICA8R2F1Z2UgaWQ9XCJncmFwaC1jaGFydC10ZW1wZXJhdHVyZVwiIG5hbWU9XCJUZW1wZXJhdHVyZVwiIGRhdGE9e2RhdGF9Lz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs2fT5cclxuICAgICAgICAgIDxHYXVnZSBpZD1cImdyYXBoLWNoYXJ0LWh1bWlkaXR5XCIgbmFtZT1cIkh1bWlkaXR5XCIgZGF0YT17ZGF0YX0vPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkR3JhcGhzIGRhdGE9e2RhdGF9Lz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQXBwQmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvR3JpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1BhcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvVG9vbGJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGFydGpzLTJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ2F1Z2UtY2hhcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJMaW5lR3JhcGgiLCJQcm9wVHlwZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3RhcnRPZldlZWsiLCJlbmRPZldlZWsiLCJNZWFzdXJlbWVudCIsIm5leHRNZWFzdXJlbWVudCIsIkRhc2hib2FyZEdyYXBocyIsImRhdGEiLCJtZWFzdXJlbWVudCIsInNldE1lYXN1cmVtZW50IiwiVEVNUEVSQVRVUkUiLCJncmFwaENoaWxkUmVmIiwiZ3JhcGhEYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJmaWxsIiwibGFiZWwiLCJnZXRNZWFzdXJlbWVudEFycmF5IiwiRGF0ZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiYm9yZGVyV2lkdGgiLCJnZXRMYXN0V2Vla0RhdGUiLCJkYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJmaXJzdERheSIsIndlZWtTdGFydHNPbiIsImxhc3REYXkiLCJjdXJyZW50V2Vla0VudHJpZXMiLCJmaWx0ZXIiLCJvYmoiLCJkYXRlVGltZSIsImdldERheUV4dGVuZGVkIiwiZGF5IiwiZ2V0RGF5IiwiYXZlcmFnZSIsImNvdW50ZXIiLCJmb3JFYWNoIiwiZWxlbWVudCIsImFycmF5SW5kZXgiLCJ0ZW1wIiwiSFVNSURJVFkiLCJodW1pZGl0eSIsImluZGV4IiwibGVuZ3RoIiwidG9QcmVjaXNpb24iLCJ1cGRhdGVEYXRhc2V0cyIsImN1cnJlbnQiLCJ1cGRhdGVHcmFwaCIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsInVzZUVmZmVjdCIsIlR5cG9ncmFwaHkiLCJHYXVnZUNoYXJ0IiwiUGFwZXIiLCJHYXVnZSIsIm5hbWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2hhcnRTdHlsZSIsImhlaWdodCIsIndpZHRoIiwibWFwIiwicmVkdWNlIiwidG90YWwiLCJuZXh0IiwiZ2V0Rm9ybWF0VGV4dCIsInBhcGVyU3R5bGUiLCJ0ZXh0QWxpZ24iLCJ2YWwiLCJmb3J3YXJkUmVmIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsIkxpbmUiLCJHcmFwaCIsInByb3BzIiwicmVmIiwiZ3JhcGhSZWYiLCJ1cGRhdGUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicGx1Z2lucyIsInRpdGxlIiwiZGlzcGxheSIsInRleHQiLCJlbGVtZW50cyIsImxpbmUiLCJ0ZW5zaW9uIiwib2JqZWN0IiwibnVtYmVyIiwic3RyaW5nIiwiZGlzcGxheU5hbWUiLCJPYmplY3QiLCJmcmVlemUiLCJwYXJhbXMiLCJ1bmRlZmluZWQiLCJBcHBCYXIiLCJUb29sYmFyIiwiR3JpZCIsImRyYXdlcldpZHRoIiwiRGFzaGJvYXJkIiwic2V0RGF0YSIsInJlcyIsImZldGNoIiwicmF3RGF0YSIsImpzb24iLCJnZW5lcmFsU3R5bGUiLCJtYXJnaW5MZWZ0IiwiZGFzaEJvYXJkU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9