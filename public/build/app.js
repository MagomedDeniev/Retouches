(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.scss":
/*!*****************************!*\
  !*** ./assets/css/app.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ "./assets/css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootswatch/dist/lux/bootstrap.min.css */ "./node_modules/bootswatch/dist/lux/bootstrap.min.css");
/* harmony import */ var bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootswatch_dist_lux_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.scss in this case)

 // Awesome fonts

__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js"); // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

global.$ = global.jQuery = $; // Bootstrap js

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js"); // Chosen


__webpack_require__(/*! ../js/chosen-js/chosen.jquery */ "./assets/js/chosen-js/chosen.jquery.js");

$('select').chosen({
  allow_single_deselect: true
}); // Enable tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
  });
}); // Image on change

if (document.querySelector('.custom-file-input')) {
  document.querySelector('.custom-file-input').onchange = function (event) {
    var reader = new FileReader();

    reader.onload = function () {
      $('#output-content').css('display', 'inherit');
      var output = document.getElementById('output-image');
      output.src = reader.result;
    };

    reader.readAsDataURL(event.target.files[0]);
  };
} // // Auto close alerts
// $(".alert").fadeTo(3000, 500).slideUp(500, function(){
//     $(".alert").slideUp(500);
// });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./assets/js/chosen-js/chosen.jquery.js":
/*!**********************************************!*\
  !*** ./assets/js/chosen-js/chosen.jquery.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

(function () {
  var $,
      AbstractChosen,
      Chosen,
      SelectParser,
      bind = function bind(fn, me) {
    return function () {
      return fn.apply(me, arguments);
    };
  },
      extend = function extend(child, parent) {
    for (var key in parent) {
      if (hasProp.call(parent, key)) child[key] = parent[key];
    }

    function ctor() {
      this.constructor = child;
    }

    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
    child.__super__ = parent.prototype;
    return child;
  },
      hasProp = {}.hasOwnProperty;

  SelectParser = function () {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function (child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function (group) {
      var group_position, i, len, option, ref, results1;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: group.label,
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className
      });
      ref = group.childNodes;
      results1 = [];

      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        results1.push(this.add_option(option, group_position, group.disabled));
      }

      return results1;
    };

    SelectParser.prototype.add_option = function (option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }

          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label: group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }

        return this.options_index += 1;
      }
    };

    return SelectParser;
  }();

  SelectParser.select_to_array = function (select) {
    var child, i, len, parser, ref;
    parser = new SelectParser();
    ref = select.childNodes;

    for (i = 0, len = ref.length; i < len; i++) {
      child = ref[i];
      parser.add_node(child);
    }

    return parser.parsed;
  };

  AbstractChosen = function () {
    function AbstractChosen(form_field, options1) {
      this.form_field = form_field;
      this.options = options1 != null ? options1 : {};
      this.label_click_handler = bind(this.label_click_handler, this);

      if (!AbstractChosen.browser_is_supported()) {
        return;
      }

      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }

    AbstractChosen.prototype.set_default_values = function () {
      this.click_test_action = function (_this) {
        return function (evt) {
          return _this.test_active_click(evt);
        };
      }(this);

      this.activate_action = function (_this) {
        return function (evt) {
          return _this.activate_field(evt);
        };
      }(this);

      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className);
      this.allow_single_deselect = this.options.allow_single_deselect != null && this.form_field.options[0] != null && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
      this.case_sensitive_search = this.options.case_sensitive_search || false;
      return this.hide_results_on_select = this.options.hide_results_on_select != null ? this.options.hide_results_on_select : true;
    };

    AbstractChosen.prototype.set_default_text = function () {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }

      this.default_text = this.escape_html(this.default_text);
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.choice_label = function (item) {
      if (this.include_group_label_in_selected && item.group_label != null) {
        return "<b class='group-name'>" + this.escape_html(item.group_label) + "</b>" + item.html;
      } else {
        return item.html;
      }
    };

    AbstractChosen.prototype.mouse_enter = function () {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function () {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function (evt) {
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout(function (_this) {
            return function () {
              return _this.container_mousedown();
            };
          }(this), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function (evt) {
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout(function (_this) {
          return function () {
            return _this.blur_test();
          };
        }(this), 100);
      }
    };

    AbstractChosen.prototype.label_click_handler = function (evt) {
      if (this.is_multiple) {
        return this.container_mousedown(evt);
      } else {
        return this.activate_field();
      }
    };

    AbstractChosen.prototype.results_option_build = function (options) {
      var content, data, data_content, i, len, ref, shown_results;
      content = '';
      shown_results = 0;
      ref = this.results_data;

      for (i = 0, len = ref.length; i < len; i++) {
        data = ref[i];
        data_content = '';

        if (data.group) {
          data_content = this.result_add_group(data);
        } else {
          data_content = this.result_add_option(data);
        }

        if (data_content !== '') {
          shown_results++;
          content += data_content;
        }

        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }

        if (shown_results >= this.max_shown_results) {
          break;
        }
      }

      return content;
    };

    AbstractChosen.prototype.result_add_option = function (option) {
      var classes, option_el;

      if (!option.search_match) {
        return '';
      }

      if (!this.include_option_in_results(option)) {
        return '';
      }

      classes = [];

      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }

      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }

      if (option.selected) {
        classes.push("result-selected");
      }

      if (option.group_array_index != null) {
        classes.push("group-option");
      }

      if (option.classes !== "") {
        classes.push(option.classes);
      }

      option_el = document.createElement("li");
      option_el.className = classes.join(" ");

      if (option.style) {
        option_el.style.cssText = option.style;
      }

      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.highlighted_html || option.html;

      if (option.title) {
        option_el.title = option.title;
      }

      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function (group) {
      var classes, group_el;

      if (!(group.search_match || group.group_match)) {
        return '';
      }

      if (!(group.active_options > 0)) {
        return '';
      }

      classes = [];
      classes.push("group-result");

      if (group.classes) {
        classes.push(group.classes);
      }

      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML = group.highlighted_html || this.escape_html(group.label);

      if (group.title) {
        group_el.title = group.title;
      }

      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function () {
      this.set_default_text();

      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }

      this.result_clear_highlight();
      this.results_build();

      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function () {
      var i, len, ref, result, results1;
      ref = this.results_data;
      results1 = [];

      for (i = 0, len = ref.length; i < len; i++) {
        result = ref[i];

        if (result.selected) {
          results1.push(result.selected = false);
        } else {
          results1.push(void 0);
        }
      }

      return results1;
    };

    AbstractChosen.prototype.results_toggle = function () {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function (evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function (options) {
      var escapedQuery, fix, i, len, option, prefix, query, ref, regex, results, results_group, search_match, startpos, suffix, text;
      this.no_results_clear();
      results = 0;
      query = this.get_search_text();
      escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regex = this.get_search_regex(escapedQuery);
      ref = this.results_data;

      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];
        option.search_match = false;
        results_group = null;
        search_match = null;
        option.highlighted_html = '';

        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }

          if (option.group_array_index != null && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];

            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }

            results_group.active_options += 1;
          }

          text = option.group ? option.label : option.text;

          if (!(option.group && !this.group_search)) {
            search_match = this.search_string_match(text, regex);
            option.search_match = search_match != null;

            if (option.search_match && !option.group) {
              results += 1;
            }

            if (option.search_match) {
              if (query.length) {
                startpos = search_match.index;
                prefix = text.slice(0, startpos);
                fix = text.slice(startpos, startpos + query.length);
                suffix = text.slice(startpos + query.length);
                option.highlighted_html = this.escape_html(prefix) + "<em>" + this.escape_html(fix) + "</em>" + this.escape_html(suffix);
              }

              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if (option.group_array_index != null && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }

      this.result_clear_highlight();

      if (results < 1 && query.length) {
        this.update_results_content("");
        return this.no_results(query);
      } else {
        this.update_results_content(this.results_option_build());

        if (!(options != null ? options.skip_highlight : void 0)) {
          return this.winnow_results_set_highlight();
        }
      }
    };

    AbstractChosen.prototype.get_search_regex = function (escaped_search_string) {
      var regex_flag, regex_string;
      regex_string = this.search_contains ? escaped_search_string : "(^|\\s|\\b)" + escaped_search_string + "[^\\s]*";

      if (!(this.enable_split_word_search || this.search_contains)) {
        regex_string = "^" + regex_string;
      }

      regex_flag = this.case_sensitive_search ? "" : "i";
      return new RegExp(regex_string, regex_flag);
    };

    AbstractChosen.prototype.search_string_match = function (search_string, regex) {
      var match;
      match = regex.exec(search_string);

      if (!this.search_contains && (match != null ? match[1] : void 0)) {
        match.index += 1;
      }

      return match;
    };

    AbstractChosen.prototype.choices_count = function () {
      var i, len, option, ref;

      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }

      this.selected_option_count = 0;
      ref = this.form_field.options;

      for (i = 0, len = ref.length; i < len; i++) {
        option = ref[i];

        if (option.selected) {
          this.selected_option_count += 1;
        }
      }

      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function (evt) {
      evt.preventDefault();
      this.activate_field();

      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keydown_checker = function (evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();

      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }

      switch (stroke) {
        case 8:
          this.backstroke_length = this.get_search_field_value().length;
          break;

        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }

          this.mouse_on_container = false;
          break;

        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }

          break;

        case 27:
          if (this.results_showing) {
            evt.preventDefault();
          }

          break;

        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }

          break;

        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;

        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    AbstractChosen.prototype.keyup_checker = function (evt) {
      var ref, stroke;
      stroke = (ref = evt.which) != null ? ref : evt.keyCode;
      this.search_field_scale();

      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            this.results_search();
          }

          break;

        case 13:
          evt.preventDefault();

          if (this.results_showing) {
            this.result_select(evt);
          }

          break;

        case 27:
          if (this.results_showing) {
            this.results_hide();
          }

          break;

        case 9:
        case 16:
        case 17:
        case 18:
        case 38:
        case 40:
        case 91:
          break;

        default:
          this.results_search();
          break;
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function (evt) {
      if (this.is_disabled) {
        return;
      }

      return setTimeout(function (_this) {
        return function () {
          return _this.results_search();
        };
      }(this), 50);
    };

    AbstractChosen.prototype.container_width = function () {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function (option) {
      if (this.is_multiple && !this.display_selected_options && option.selected) {
        return false;
      }

      if (!this.display_disabled_options && option.disabled) {
        return false;
      }

      if (option.empty) {
        return false;
      }

      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function (evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function (evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function (evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function (element) {
      var tmp;

      if (element.outerHTML) {
        return element.outerHTML;
      }

      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.prototype.get_single_html = function () {
      return "<a class=\"chosen-single chosen-default\">\n  <span>" + this.default_text + "</span>\n  <div><b></b></div>\n</a>\n<div class=\"chosen-drop\">\n  <div class=\"chosen-search\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" />\n  </div>\n  <ul class=\"chosen-results\"></ul>\n</div>";
    };

    AbstractChosen.prototype.get_multi_html = function () {
      return "<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" value=\"" + this.default_text + "\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";
    };

    AbstractChosen.prototype.get_no_results_html = function (terms) {
      return "<li class=\"no-results\">\n  " + this.results_none_found + " <span>" + this.escape_html(terms) + "</span>\n</li>";
    };

    AbstractChosen.browser_is_supported = function () {
      if ("Microsoft Internet Explorer" === window.navigator.appName) {
        return document.documentMode >= 8;
      }

      if (/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent)) {
        return false;
      }

      return true;
    };

    AbstractChosen.default_multiple_text = "Sélectionnez les options";
    AbstractChosen.default_single_text = "Select an Option";
    AbstractChosen.default_no_result_text = "No results match";
    return AbstractChosen;
  }();

  $ = jQuery;
  $.fn.extend({
    chosen: function chosen(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }

      return this.each(function (input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');

        if (options === 'destroy') {
          if (chosen instanceof Chosen) {
            chosen.destroy();
          }

          return;
        }

        if (!(chosen instanceof Chosen)) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = function (superClass) {
    extend(Chosen, superClass);

    function Chosen() {
      return Chosen.__super__.constructor.apply(this, arguments);
    }

    Chosen.prototype.setup = function () {
      this.form_field_jq = $(this.form_field);
      return this.current_selectedIndex = this.form_field.selectedIndex;
    };

    Chosen.prototype.set_up_html = function () {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));

      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }

      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }

      container_props = {
        'class': container_classes.join(' '),
        'title': this.form_field.title
      };

      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }

      this.container = $("<div />", container_props);
      this.container.width(this.container_width());

      if (this.is_multiple) {
        this.container.html(this.get_multi_html());
      } else {
        this.container.html(this.get_single_html());
      }

      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();

      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }

      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();
    };

    Chosen.prototype.on_ready = function () {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function () {
      this.container.on('touchstart.chosen', function (_this) {
        return function (evt) {
          _this.container_mousedown(evt);
        };
      }(this));
      this.container.on('touchend.chosen', function (_this) {
        return function (evt) {
          _this.container_mouseup(evt);
        };
      }(this));
      this.container.on('mousedown.chosen', function (_this) {
        return function (evt) {
          _this.container_mousedown(evt);
        };
      }(this));
      this.container.on('mouseup.chosen', function (_this) {
        return function (evt) {
          _this.container_mouseup(evt);
        };
      }(this));
      this.container.on('mouseenter.chosen', function (_this) {
        return function (evt) {
          _this.mouse_enter(evt);
        };
      }(this));
      this.container.on('mouseleave.chosen', function (_this) {
        return function (evt) {
          _this.mouse_leave(evt);
        };
      }(this));
      this.search_results.on('mouseup.chosen', function (_this) {
        return function (evt) {
          _this.search_results_mouseup(evt);
        };
      }(this));
      this.search_results.on('mouseover.chosen', function (_this) {
        return function (evt) {
          _this.search_results_mouseover(evt);
        };
      }(this));
      this.search_results.on('mouseout.chosen', function (_this) {
        return function (evt) {
          _this.search_results_mouseout(evt);
        };
      }(this));
      this.search_results.on('mousewheel.chosen DOMMouseScroll.chosen', function (_this) {
        return function (evt) {
          _this.search_results_mousewheel(evt);
        };
      }(this));
      this.search_results.on('touchstart.chosen', function (_this) {
        return function (evt) {
          _this.search_results_touchstart(evt);
        };
      }(this));
      this.search_results.on('touchmove.chosen', function (_this) {
        return function (evt) {
          _this.search_results_touchmove(evt);
        };
      }(this));
      this.search_results.on('touchend.chosen', function (_this) {
        return function (evt) {
          _this.search_results_touchend(evt);
        };
      }(this));
      this.form_field_jq.on("chosen:updated.chosen", function (_this) {
        return function (evt) {
          _this.results_update_field(evt);
        };
      }(this));
      this.form_field_jq.on("chosen:activate.chosen", function (_this) {
        return function (evt) {
          _this.activate_field(evt);
        };
      }(this));
      this.form_field_jq.on("chosen:open.chosen", function (_this) {
        return function (evt) {
          _this.container_mousedown(evt);
        };
      }(this));
      this.form_field_jq.on("chosen:close.chosen", function (_this) {
        return function (evt) {
          _this.close_field(evt);
        };
      }(this));
      this.search_field.on('blur.chosen', function (_this) {
        return function (evt) {
          _this.input_blur(evt);
        };
      }(this));
      this.search_field.on('keyup.chosen', function (_this) {
        return function (evt) {
          _this.keyup_checker(evt);
        };
      }(this));
      this.search_field.on('keydown.chosen', function (_this) {
        return function (evt) {
          _this.keydown_checker(evt);
        };
      }(this));
      this.search_field.on('focus.chosen', function (_this) {
        return function (evt) {
          _this.input_focus(evt);
        };
      }(this));
      this.search_field.on('cut.chosen', function (_this) {
        return function (evt) {
          _this.clipboard_event_checker(evt);
        };
      }(this));
      this.search_field.on('paste.chosen', function (_this) {
        return function (evt) {
          _this.clipboard_event_checker(evt);
        };
      }(this));

      if (this.is_multiple) {
        return this.search_choices.on('click.chosen', function (_this) {
          return function (evt) {
            _this.choices_click(evt);
          };
        }(this));
      } else {
        return this.container.on('click.chosen', function (evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function () {
      $(this.container[0].ownerDocument).off('click.chosen', this.click_test_action);

      if (this.form_field_label.length > 0) {
        this.form_field_label.off('click.chosen');
      }

      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }

      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function () {
      this.is_disabled = this.form_field.disabled || this.form_field_jq.parents('fieldset').is(':disabled');
      this.container.toggleClass('chosen-disabled', this.is_disabled);
      this.search_field[0].disabled = this.is_disabled;

      if (!this.is_multiple) {
        this.selected_item.off('focus.chosen', this.activate_field);
      }

      if (this.is_disabled) {
        return this.close_field();
      } else if (!this.is_multiple) {
        return this.selected_item.on('focus.chosen', this.activate_field);
      }
    };

    Chosen.prototype.container_mousedown = function (evt) {
      var ref;

      if (this.is_disabled) {
        return;
      }

      if (evt && ((ref = evt.type) === 'mousedown' || ref === 'touchstart') && !this.results_showing) {
        evt.preventDefault();
      }

      if (!(evt != null && $(evt.target).hasClass("search-choice-close"))) {
        if (!this.active_field) {
          if (this.is_multiple) {
            this.search_field.val("");
          }

          $(this.container[0].ownerDocument).on('click.chosen', this.click_test_action);
          this.results_show();
        } else if (!this.is_multiple && evt && ($(evt.target)[0] === this.selected_item[0] || $(evt.target).parents("a.chosen-single").length)) {
          evt.preventDefault();
          this.results_toggle();
        }

        return this.activate_field();
      }
    };

    Chosen.prototype.container_mouseup = function (evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function (evt) {
      var delta;

      if (evt.originalEvent) {
        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }

      if (delta != null) {
        evt.preventDefault();

        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }

        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function (evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function () {
      $(this.container[0].ownerDocument).off("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      this.search_field_scale();
      return this.search_field.blur();
    };

    Chosen.prototype.activate_field = function () {
      if (this.is_disabled) {
        return;
      }

      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function (evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');

      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function () {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);

      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else {
        this.single_set_selected_text();

        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }

      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function (el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;

      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();

        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop(high_bottom - maxHeight > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function () {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }

      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function () {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }

      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.get_search_field_value());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function (content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function () {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }

      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function (el) {
      var ti;

      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function () {
      this.form_field_label = this.form_field_jq.parents("label");

      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }

      if (this.form_field_label.length > 0) {
        return this.form_field_label.on('click.chosen', this.label_click_handler);
      }
    };

    Chosen.prototype.show_search_field_default = function () {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function (evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();

      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function (evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();

      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function (evt) {
      if ($(evt.target).hasClass("active-result") || $(evt.target).parents('.active-result').first()) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function (item) {
      var choice, close_link;
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + this.choice_label(item) + "</span>");

      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.on('click.chosen', function (_this) {
          return function (evt) {
            return _this.choice_destroy_link_click(evt);
          };
        }(this));
        choice.append(close_link);
      }

      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function (evt) {
      evt.preventDefault();
      evt.stopPropagation();

      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function (link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        if (this.active_field) {
          this.search_field.focus();
        } else {
          this.show_search_field_default();
        }

        if (this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1) {
          this.results_hide();
        }

        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function () {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.trigger_form_field_change();

      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function () {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function (evt) {
      var high, item;

      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();

        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }

        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }

        high.addClass("result-selected");
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;

        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(this.choice_label(item));
        }

        if (this.is_multiple && (!this.hide_results_on_select || evt.metaKey || evt.ctrlKey)) {
          if (evt.metaKey || evt.ctrlKey) {
            this.winnow_results({
              skip_highlight: true
            });
          } else {
            this.search_field.val("");
            this.winnow_results();
          }
        } else {
          this.results_hide();
          this.show_search_field_default();
        }

        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.trigger_form_field_change({
            selected: this.form_field.options[item.options_index].value
          });
        }

        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function (text) {
      if (text == null) {
        text = this.default_text;
      }

      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }

      return this.selected_item.find("span").html(text);
    };

    Chosen.prototype.result_deselect = function (pos) {
      var result_data;
      result_data = this.results_data[pos];

      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();

        if (this.results_showing) {
          this.winnow_results();
        }

        this.trigger_form_field_change({
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function () {
      if (!this.allow_single_deselect) {
        return;
      }

      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }

      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_field_value = function () {
      return this.search_field.val();
    };

    Chosen.prototype.get_search_text = function () {
      return $.trim(this.get_search_field_value());
    };

    Chosen.prototype.escape_html = function (text) {
      return $('<div/>').text(text).html();
    };

    Chosen.prototype.winnow_results_set_highlight = function () {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();

      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function (terms) {
      var no_results_html;
      no_results_html = this.get_no_results_html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function () {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function () {
      var next_sib;

      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();

        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function () {
      var prev_sibs;

      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");

        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }

          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function () {
      var next_available_destroy;

      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();

        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;

          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function () {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }

      return this.pending_backstroke = null;
    };

    Chosen.prototype.search_field_scale = function () {
      var div, i, len, style, style_block, styles, width;

      if (!this.is_multiple) {
        return;
      }

      style_block = {
        position: 'absolute',
        left: '-1000px',
        top: '-1000px',
        display: 'none',
        whiteSpace: 'pre'
      };
      styles = ['fontSize', 'fontStyle', 'fontWeight', 'fontFamily', 'lineHeight', 'textTransform', 'letterSpacing'];

      for (i = 0, len = styles.length; i < len; i++) {
        style = styles[i];
        style_block[style] = this.search_field.css(style);
      }

      div = $('<div />').css(style_block);
      div.text(this.get_search_field_value());
      $('body').append(div);
      width = div.width() + 25;
      div.remove();

      if (this.container.is(':visible')) {
        width = Math.min(this.container.outerWidth() - 10, width);
      }

      return this.search_field.width(width);
    };

    Chosen.prototype.trigger_form_field_change = function (extra) {
      this.form_field_jq.trigger("input", extra);
      return this.form_field_jq.trigger("change", extra);
    };

    return Chosen;
  }(AbstractChosen);
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2Nob3Nlbi1qcy9jaG9zZW4uanF1ZXJ5LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiZ2xvYmFsIiwialF1ZXJ5IiwiY2hvc2VuIiwiYWxsb3dfc2luZ2xlX2Rlc2VsZWN0IiwidG9vbHRpcCIsInRyaWdnZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvbmNoYW5nZSIsImV2ZW50IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImNzcyIsIm91dHB1dCIsImdldEVsZW1lbnRCeUlkIiwic3JjIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInRhcmdldCIsImZpbGVzIiwiQWJzdHJhY3RDaG9zZW4iLCJDaG9zZW4iLCJTZWxlY3RQYXJzZXIiLCJiaW5kIiwiZm4iLCJtZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiZXh0ZW5kIiwiY2hpbGQiLCJwYXJlbnQiLCJrZXkiLCJoYXNQcm9wIiwiY2FsbCIsImN0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9fc3VwZXJfXyIsImhhc093blByb3BlcnR5Iiwib3B0aW9uc19pbmRleCIsInBhcnNlZCIsImFkZF9ub2RlIiwibm9kZU5hbWUiLCJ0b1VwcGVyQ2FzZSIsImFkZF9ncm91cCIsImFkZF9vcHRpb24iLCJncm91cCIsImdyb3VwX3Bvc2l0aW9uIiwiaSIsImxlbiIsIm9wdGlvbiIsInJlZiIsInJlc3VsdHMxIiwibGVuZ3RoIiwicHVzaCIsImFycmF5X2luZGV4IiwibGFiZWwiLCJ0aXRsZSIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsImdyb3VwX2Rpc2FibGVkIiwidGV4dCIsInZhbHVlIiwiaHRtbCIsImlubmVySFRNTCIsInNlbGVjdGVkIiwiZ3JvdXBfYXJyYXlfaW5kZXgiLCJncm91cF9sYWJlbCIsInN0eWxlIiwiY3NzVGV4dCIsImVtcHR5Iiwic2VsZWN0X3RvX2FycmF5Iiwic2VsZWN0IiwicGFyc2VyIiwiZm9ybV9maWVsZCIsIm9wdGlvbnMxIiwib3B0aW9ucyIsImxhYmVsX2NsaWNrX2hhbmRsZXIiLCJicm93c2VyX2lzX3N1cHBvcnRlZCIsImlzX211bHRpcGxlIiwibXVsdGlwbGUiLCJzZXRfZGVmYXVsdF90ZXh0Iiwic2V0X2RlZmF1bHRfdmFsdWVzIiwic2V0dXAiLCJzZXRfdXBfaHRtbCIsInJlZ2lzdGVyX29ic2VydmVycyIsIm9uX3JlYWR5IiwiY2xpY2tfdGVzdF9hY3Rpb24iLCJfdGhpcyIsImV2dCIsInRlc3RfYWN0aXZlX2NsaWNrIiwiYWN0aXZhdGVfYWN0aW9uIiwiYWN0aXZhdGVfZmllbGQiLCJhY3RpdmVfZmllbGQiLCJtb3VzZV9vbl9jb250YWluZXIiLCJyZXN1bHRzX3Nob3dpbmciLCJyZXN1bHRfaGlnaGxpZ2h0ZWQiLCJpc19ydGwiLCJydGwiLCJ0ZXN0IiwiZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkIiwiZGlzYWJsZV9zZWFyY2giLCJlbmFibGVfc3BsaXRfd29yZF9zZWFyY2giLCJncm91cF9zZWFyY2giLCJzZWFyY2hfY29udGFpbnMiLCJzaW5nbGVfYmFja3N0cm9rZV9kZWxldGUiLCJtYXhfc2VsZWN0ZWRfb3B0aW9ucyIsIkluZmluaXR5IiwiaW5oZXJpdF9zZWxlY3RfY2xhc3NlcyIsImRpc3BsYXlfc2VsZWN0ZWRfb3B0aW9ucyIsImRpc3BsYXlfZGlzYWJsZWRfb3B0aW9ucyIsImluY2x1ZGVfZ3JvdXBfbGFiZWxfaW5fc2VsZWN0ZWQiLCJtYXhfc2hvd25fcmVzdWx0cyIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwiY2FzZV9zZW5zaXRpdmVfc2VhcmNoIiwiaGlkZV9yZXN1bHRzX29uX3NlbGVjdCIsImdldEF0dHJpYnV0ZSIsImRlZmF1bHRfdGV4dCIsInBsYWNlaG9sZGVyX3RleHRfbXVsdGlwbGUiLCJwbGFjZWhvbGRlcl90ZXh0IiwiZGVmYXVsdF9tdWx0aXBsZV90ZXh0IiwicGxhY2Vob2xkZXJfdGV4dF9zaW5nbGUiLCJkZWZhdWx0X3NpbmdsZV90ZXh0IiwiZXNjYXBlX2h0bWwiLCJyZXN1bHRzX25vbmVfZm91bmQiLCJub19yZXN1bHRzX3RleHQiLCJkZWZhdWx0X25vX3Jlc3VsdF90ZXh0IiwiY2hvaWNlX2xhYmVsIiwiaXRlbSIsIm1vdXNlX2VudGVyIiwibW91c2VfbGVhdmUiLCJpbnB1dF9mb2N1cyIsInNldFRpbWVvdXQiLCJjb250YWluZXJfbW91c2Vkb3duIiwiaW5wdXRfYmx1ciIsImJsdXJfdGVzdCIsInJlc3VsdHNfb3B0aW9uX2J1aWxkIiwiY29udGVudCIsImRhdGEiLCJkYXRhX2NvbnRlbnQiLCJzaG93bl9yZXN1bHRzIiwicmVzdWx0c19kYXRhIiwicmVzdWx0X2FkZF9ncm91cCIsInJlc3VsdF9hZGRfb3B0aW9uIiwiZmlyc3QiLCJjaG9pY2VfYnVpbGQiLCJzaW5nbGVfc2V0X3NlbGVjdGVkX3RleHQiLCJvcHRpb25fZWwiLCJzZWFyY2hfbWF0Y2giLCJpbmNsdWRlX29wdGlvbl9pbl9yZXN1bHRzIiwiY3JlYXRlRWxlbWVudCIsImpvaW4iLCJzZXRBdHRyaWJ1dGUiLCJoaWdobGlnaHRlZF9odG1sIiwib3V0ZXJIVE1MIiwiZ3JvdXBfZWwiLCJncm91cF9tYXRjaCIsImFjdGl2ZV9vcHRpb25zIiwicmVzdWx0c191cGRhdGVfZmllbGQiLCJyZXN1bHRzX3Jlc2V0X2NsZWFudXAiLCJyZXN1bHRfY2xlYXJfaGlnaGxpZ2h0IiwicmVzdWx0c19idWlsZCIsIndpbm5vd19yZXN1bHRzIiwicmVzZXRfc2luZ2xlX3NlbGVjdF9vcHRpb25zIiwicmVzdWx0c190b2dnbGUiLCJyZXN1bHRzX2hpZGUiLCJyZXN1bHRzX3Nob3ciLCJyZXN1bHRzX3NlYXJjaCIsImVzY2FwZWRRdWVyeSIsImZpeCIsInByZWZpeCIsInF1ZXJ5IiwicmVnZXgiLCJyZXN1bHRzIiwicmVzdWx0c19ncm91cCIsInN0YXJ0cG9zIiwic3VmZml4Iiwibm9fcmVzdWx0c19jbGVhciIsImdldF9zZWFyY2hfdGV4dCIsInJlcGxhY2UiLCJnZXRfc2VhcmNoX3JlZ2V4Iiwic2VhcmNoX3N0cmluZ19tYXRjaCIsImluZGV4Iiwic2xpY2UiLCJ1cGRhdGVfcmVzdWx0c19jb250ZW50Iiwibm9fcmVzdWx0cyIsInNraXBfaGlnaGxpZ2h0Iiwid2lubm93X3Jlc3VsdHNfc2V0X2hpZ2hsaWdodCIsImVzY2FwZWRfc2VhcmNoX3N0cmluZyIsInJlZ2V4X2ZsYWciLCJyZWdleF9zdHJpbmciLCJSZWdFeHAiLCJzZWFyY2hfc3RyaW5nIiwibWF0Y2giLCJleGVjIiwiY2hvaWNlc19jb3VudCIsInNlbGVjdGVkX29wdGlvbl9jb3VudCIsImNob2ljZXNfY2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImlzX2Rpc2FibGVkIiwia2V5ZG93bl9jaGVja2VyIiwic3Ryb2tlIiwid2hpY2giLCJrZXlDb2RlIiwic2VhcmNoX2ZpZWxkX3NjYWxlIiwicGVuZGluZ19iYWNrc3Ryb2tlIiwiY2xlYXJfYmFja3N0cm9rZSIsImJhY2tzdHJva2VfbGVuZ3RoIiwiZ2V0X3NlYXJjaF9maWVsZF92YWx1ZSIsInJlc3VsdF9zZWxlY3QiLCJrZXl1cF9hcnJvdyIsImtleWRvd25fYXJyb3ciLCJrZXl1cF9jaGVja2VyIiwia2V5ZG93bl9iYWNrc3Ryb2tlIiwiY2xpcGJvYXJkX2V2ZW50X2NoZWNrZXIiLCJjb250YWluZXJfd2lkdGgiLCJ3aWR0aCIsIm9mZnNldFdpZHRoIiwic2VhcmNoX3Jlc3VsdHNfdG91Y2hzdGFydCIsInRvdWNoX3N0YXJ0ZWQiLCJzZWFyY2hfcmVzdWx0c19tb3VzZW92ZXIiLCJzZWFyY2hfcmVzdWx0c190b3VjaG1vdmUiLCJzZWFyY2hfcmVzdWx0c19tb3VzZW91dCIsInNlYXJjaF9yZXN1bHRzX3RvdWNoZW5kIiwic2VhcmNoX3Jlc3VsdHNfbW91c2V1cCIsImVsZW1lbnQiLCJ0bXAiLCJhcHBlbmRDaGlsZCIsImdldF9zaW5nbGVfaHRtbCIsImdldF9tdWx0aV9odG1sIiwiZ2V0X25vX3Jlc3VsdHNfaHRtbCIsInRlcm1zIiwid2luZG93IiwibmF2aWdhdG9yIiwiYXBwTmFtZSIsImRvY3VtZW50TW9kZSIsInVzZXJBZ2VudCIsImVhY2giLCJpbnB1dF9maWVsZCIsIiR0aGlzIiwiZGVzdHJveSIsInN1cGVyQ2xhc3MiLCJmb3JtX2ZpZWxkX2pxIiwiY3VycmVudF9zZWxlY3RlZEluZGV4Iiwic2VsZWN0ZWRJbmRleCIsImNvbnRhaW5lcl9jbGFzc2VzIiwiY29udGFpbmVyX3Byb3BzIiwiaWQiLCJjb250YWluZXIiLCJoaWRlIiwiYWZ0ZXIiLCJkcm9wZG93biIsImZpbmQiLCJzZWFyY2hfZmllbGQiLCJzZWFyY2hfcmVzdWx0cyIsInNlYXJjaF9ub19yZXN1bHRzIiwic2VhcmNoX2Nob2ljZXMiLCJzZWFyY2hfY29udGFpbmVyIiwic2VsZWN0ZWRfaXRlbSIsInNldF90YWJfaW5kZXgiLCJzZXRfbGFiZWxfYmVoYXZpb3IiLCJvbiIsImNvbnRhaW5lcl9tb3VzZXVwIiwic2VhcmNoX3Jlc3VsdHNfbW91c2V3aGVlbCIsImNsb3NlX2ZpZWxkIiwib3duZXJEb2N1bWVudCIsIm9mZiIsImZvcm1fZmllbGRfbGFiZWwiLCJ0YWJJbmRleCIsInJlbW92ZSIsInJlbW92ZURhdGEiLCJzaG93Iiwic2VhcmNoX2ZpZWxkX2Rpc2FibGVkIiwicGFyZW50cyIsImlzIiwidG9nZ2xlQ2xhc3MiLCJ0eXBlIiwiaGFzQ2xhc3MiLCJ2YWwiLCJyZXN1bHRzX3Jlc2V0IiwiZGVsdGEiLCJvcmlnaW5hbEV2ZW50IiwiZGVsdGFZIiwid2hlZWxEZWx0YSIsImRldGFpbCIsInNjcm9sbFRvcCIsInJlbW92ZUNsYXNzIiwic2hvd19zZWFyY2hfZmllbGRfZGVmYXVsdCIsImJsdXIiLCJhZGRDbGFzcyIsImZvY3VzIiwiYWN0aXZlX2NvbnRhaW5lciIsImNsb3Nlc3QiLCJwYXJzaW5nIiwicmVhZE9ubHkiLCJyZXN1bHRfZG9faGlnaGxpZ2h0IiwiZWwiLCJoaWdoX2JvdHRvbSIsImhpZ2hfdG9wIiwibWF4SGVpZ2h0IiwidmlzaWJsZV9ib3R0b20iLCJ2aXNpYmxlX3RvcCIsInJlc3VsdF9oaWdobGlnaHQiLCJwYXJzZUludCIsInBvc2l0aW9uIiwidG9wIiwib3V0ZXJIZWlnaHQiLCJ0aSIsImNob2ljZSIsImNsb3NlX2xpbmsiLCJjaG9pY2VfZGVzdHJveV9saW5rX2NsaWNrIiwiYXBwZW5kIiwiYmVmb3JlIiwic3RvcFByb3BhZ2F0aW9uIiwiY2hvaWNlX2Rlc3Ryb3kiLCJsaW5rIiwicmVzdWx0X2Rlc2VsZWN0IiwidHJpZ2dlcl9mb3JtX2ZpZWxkX2NoYW5nZSIsImhpZ2giLCJtZXRhS2V5IiwiY3RybEtleSIsInNpbmdsZV9kZXNlbGVjdF9jb250cm9sX2J1aWxkIiwicG9zIiwicmVzdWx0X2RhdGEiLCJkZXNlbGVjdGVkIiwidHJpbSIsImRvX2hpZ2giLCJzZWxlY3RlZF9yZXN1bHRzIiwibm9fcmVzdWx0c19odG1sIiwibmV4dF9zaWIiLCJuZXh0QWxsIiwicHJldl9zaWJzIiwicHJldkFsbCIsIm5leHRfYXZhaWxhYmxlX2Rlc3Ryb3kiLCJzaWJsaW5ncyIsImxhc3QiLCJkaXYiLCJzdHlsZV9ibG9jayIsInN0eWxlcyIsImxlZnQiLCJkaXNwbGF5Iiwid2hpdGVTcGFjZSIsIk1hdGgiLCJtaW4iLCJvdXRlcldpZHRoIiwiZXh0cmEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0FBQ0E7Q0FHQTs7QUFDQUEsbUJBQU8sQ0FBQyxtSEFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHVHQUFELENBQVAsQyxDQUVBO0FBQ0E7OztBQUNBLElBQUlDLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFmOztBQUNBRSxNQUFNLENBQUNELENBQVAsR0FBV0MsTUFBTSxDQUFDQyxNQUFQLEdBQWdCRixDQUEz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c0JORCxjQXZzQk0sQ0FBVDtBQXlzQkQsQ0FsMENELEVBazBDR2EsSUFsMENILENBazBDUSxJQWwwQ1IsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5zY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vY3NzL2FwcC5zY3NzJztcbmltcG9ydCBcImJvb3Rzd2F0Y2gvZGlzdC9sdXgvYm9vdHN0cmFwLm1pbi5jc3NcIjtcblxuLy8gQXdlc29tZSBmb250c1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJyk7XG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9qcy9hbGwuanMnKTtcblxuLy8gTmVlZCBqUXVlcnk/IEluc3RhbGwgaXQgd2l0aCBcInlhcm4gYWRkIGpxdWVyeVwiLCB0aGVuIHVuY29tbWVudCB0byBpbXBvcnQgaXQuXG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xubGV0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbmdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbi8vIEJvb3RzdHJhcCBqc1xucmVxdWlyZSgnYm9vdHN0cmFwJyk7XG5cbi8vIENob3NlblxucmVxdWlyZSgnLi4vanMvY2hvc2VuLWpzL2Nob3Nlbi5qcXVlcnknKTtcbiQoJ3NlbGVjdCcpLmNob3Nlbih7YWxsb3dfc2luZ2xlX2Rlc2VsZWN0OiB0cnVlfSk7XG5cbi8vIEVuYWJsZSB0b29sdGlwXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJdJykudG9vbHRpcCh7XG4gICAgICAgIHRyaWdnZXIgOiAnaG92ZXInXG4gICAgfSlcbn0pO1xuXG4vLyBJbWFnZSBvbiBjaGFuZ2VcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLWZpbGUtaW5wdXQnKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tZmlsZS1pbnB1dCcpLm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAkKCcjb3V0cHV0LWNvbnRlbnQnKS5jc3MoJ2Rpc3BsYXknLCAoJ2luaGVyaXQnKSk7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0LWltYWdlJyk7XG4gICAgICAgICAgICBvdXRwdXQuc3JjID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICB9O1xufVxuXG4vLyAvLyBBdXRvIGNsb3NlIGFsZXJ0c1xuLy8gJChcIi5hbGVydFwiKS5mYWRlVG8oMzAwMCwgNTAwKS5zbGlkZVVwKDUwMCwgZnVuY3Rpb24oKXtcbi8vICAgICAkKFwiLmFsZXJ0XCIpLnNsaWRlVXAoNTAwKTtcbi8vIH0pO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgJCwgQWJzdHJhY3RDaG9zZW4sIENob3NlbiwgU2VsZWN0UGFyc2VyLFxuICAgIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICAgIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbiAgU2VsZWN0UGFyc2VyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFNlbGVjdFBhcnNlcigpIHtcbiAgICAgIHRoaXMub3B0aW9uc19pbmRleCA9IDA7XG4gICAgICB0aGlzLnBhcnNlZCA9IFtdO1xuICAgIH1cblxuICAgIFNlbGVjdFBhcnNlci5wcm90b3R5cGUuYWRkX25vZGUgPSBmdW5jdGlvbihjaGlsZCkge1xuICAgICAgaWYgKGNoaWxkLm5vZGVOYW1lLnRvVXBwZXJDYXNlKCkgPT09IFwiT1BUR1JPVVBcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRfZ3JvdXAoY2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkX29wdGlvbihjaGlsZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIFNlbGVjdFBhcnNlci5wcm90b3R5cGUuYWRkX2dyb3VwID0gZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgIHZhciBncm91cF9wb3NpdGlvbiwgaSwgbGVuLCBvcHRpb24sIHJlZiwgcmVzdWx0czE7XG4gICAgICBncm91cF9wb3NpdGlvbiA9IHRoaXMucGFyc2VkLmxlbmd0aDtcbiAgICAgIHRoaXMucGFyc2VkLnB1c2goe1xuICAgICAgICBhcnJheV9pbmRleDogZ3JvdXBfcG9zaXRpb24sXG4gICAgICAgIGdyb3VwOiB0cnVlLFxuICAgICAgICBsYWJlbDogZ3JvdXAubGFiZWwsXG4gICAgICAgIHRpdGxlOiBncm91cC50aXRsZSA/IGdyb3VwLnRpdGxlIDogdm9pZCAwLFxuICAgICAgICBjaGlsZHJlbjogMCxcbiAgICAgICAgZGlzYWJsZWQ6IGdyb3VwLmRpc2FibGVkLFxuICAgICAgICBjbGFzc2VzOiBncm91cC5jbGFzc05hbWVcbiAgICAgIH0pO1xuICAgICAgcmVmID0gZ3JvdXAuY2hpbGROb2RlcztcbiAgICAgIHJlc3VsdHMxID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgb3B0aW9uID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzMS5wdXNoKHRoaXMuYWRkX29wdGlvbihvcHRpb24sIGdyb3VwX3Bvc2l0aW9uLCBncm91cC5kaXNhYmxlZCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHMxO1xuICAgIH07XG5cbiAgICBTZWxlY3RQYXJzZXIucHJvdG90eXBlLmFkZF9vcHRpb24gPSBmdW5jdGlvbihvcHRpb24sIGdyb3VwX3Bvc2l0aW9uLCBncm91cF9kaXNhYmxlZCkge1xuICAgICAgaWYgKG9wdGlvbi5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSBcIk9QVElPTlwiKSB7XG4gICAgICAgIGlmIChvcHRpb24udGV4dCAhPT0gXCJcIikge1xuICAgICAgICAgIGlmIChncm91cF9wb3NpdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcnNlZFtncm91cF9wb3NpdGlvbl0uY2hpbGRyZW4gKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wYXJzZWQucHVzaCh7XG4gICAgICAgICAgICBhcnJheV9pbmRleDogdGhpcy5wYXJzZWQubGVuZ3RoLFxuICAgICAgICAgICAgb3B0aW9uc19pbmRleDogdGhpcy5vcHRpb25zX2luZGV4LFxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIHRleHQ6IG9wdGlvbi50ZXh0LFxuICAgICAgICAgICAgaHRtbDogb3B0aW9uLmlubmVySFRNTCxcbiAgICAgICAgICAgIHRpdGxlOiBvcHRpb24udGl0bGUgPyBvcHRpb24udGl0bGUgOiB2b2lkIDAsXG4gICAgICAgICAgICBzZWxlY3RlZDogb3B0aW9uLnNlbGVjdGVkLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGdyb3VwX2Rpc2FibGVkID09PSB0cnVlID8gZ3JvdXBfZGlzYWJsZWQgOiBvcHRpb24uZGlzYWJsZWQsXG4gICAgICAgICAgICBncm91cF9hcnJheV9pbmRleDogZ3JvdXBfcG9zaXRpb24sXG4gICAgICAgICAgICBncm91cF9sYWJlbDogZ3JvdXBfcG9zaXRpb24gIT0gbnVsbCA/IHRoaXMucGFyc2VkW2dyb3VwX3Bvc2l0aW9uXS5sYWJlbCA6IG51bGwsXG4gICAgICAgICAgICBjbGFzc2VzOiBvcHRpb24uY2xhc3NOYW1lLFxuICAgICAgICAgICAgc3R5bGU6IG9wdGlvbi5zdHlsZS5jc3NUZXh0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wYXJzZWQucHVzaCh7XG4gICAgICAgICAgICBhcnJheV9pbmRleDogdGhpcy5wYXJzZWQubGVuZ3RoLFxuICAgICAgICAgICAgb3B0aW9uc19pbmRleDogdGhpcy5vcHRpb25zX2luZGV4LFxuICAgICAgICAgICAgZW1wdHk6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zX2luZGV4ICs9IDE7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBTZWxlY3RQYXJzZXI7XG5cbiAgfSkoKTtcblxuICBTZWxlY3RQYXJzZXIuc2VsZWN0X3RvX2FycmF5ID0gZnVuY3Rpb24oc2VsZWN0KSB7XG4gICAgdmFyIGNoaWxkLCBpLCBsZW4sIHBhcnNlciwgcmVmO1xuICAgIHBhcnNlciA9IG5ldyBTZWxlY3RQYXJzZXIoKTtcbiAgICByZWYgPSBzZWxlY3QuY2hpbGROb2RlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNoaWxkID0gcmVmW2ldO1xuICAgICAgcGFyc2VyLmFkZF9ub2RlKGNoaWxkKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlci5wYXJzZWQ7XG4gIH07XG5cbiAgQWJzdHJhY3RDaG9zZW4gPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQWJzdHJhY3RDaG9zZW4oZm9ybV9maWVsZCwgb3B0aW9uczEpIHtcbiAgICAgIHRoaXMuZm9ybV9maWVsZCA9IGZvcm1fZmllbGQ7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zMSAhPSBudWxsID8gb3B0aW9uczEgOiB7fTtcbiAgICAgIHRoaXMubGFiZWxfY2xpY2tfaGFuZGxlciA9IGJpbmQodGhpcy5sYWJlbF9jbGlja19oYW5kbGVyLCB0aGlzKTtcbiAgICAgIGlmICghQWJzdHJhY3RDaG9zZW4uYnJvd3Nlcl9pc19zdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmlzX211bHRpcGxlID0gdGhpcy5mb3JtX2ZpZWxkLm11bHRpcGxlO1xuICAgICAgdGhpcy5zZXRfZGVmYXVsdF90ZXh0KCk7XG4gICAgICB0aGlzLnNldF9kZWZhdWx0X3ZhbHVlcygpO1xuICAgICAgdGhpcy5zZXR1cCgpO1xuICAgICAgdGhpcy5zZXRfdXBfaHRtbCgpO1xuICAgICAgdGhpcy5yZWdpc3Rlcl9vYnNlcnZlcnMoKTtcbiAgICAgIHRoaXMub25fcmVhZHkoKTtcbiAgICB9XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUuc2V0X2RlZmF1bHRfdmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmNsaWNrX3Rlc3RfYWN0aW9uID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMudGVzdF9hY3RpdmVfY2xpY2soZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpO1xuICAgICAgdGhpcy5hY3RpdmF0ZV9hY3Rpb24gPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5hY3RpdmF0ZV9maWVsZChldnQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgICB0aGlzLmFjdGl2ZV9maWVsZCA9IGZhbHNlO1xuICAgICAgdGhpcy5tb3VzZV9vbl9jb250YWluZXIgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVzdWx0c19zaG93aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc3VsdF9oaWdobGlnaHRlZCA9IG51bGw7XG4gICAgICB0aGlzLmlzX3J0bCA9IHRoaXMub3B0aW9ucy5ydGwgfHwgL1xcYmNob3Nlbi1ydGxcXGIvLnRlc3QodGhpcy5mb3JtX2ZpZWxkLmNsYXNzTmFtZSk7XG4gICAgICB0aGlzLmFsbG93X3NpbmdsZV9kZXNlbGVjdCA9ICh0aGlzLm9wdGlvbnMuYWxsb3dfc2luZ2xlX2Rlc2VsZWN0ICE9IG51bGwpICYmICh0aGlzLmZvcm1fZmllbGQub3B0aW9uc1swXSAhPSBudWxsKSAmJiB0aGlzLmZvcm1fZmllbGQub3B0aW9uc1swXS50ZXh0ID09PSBcIlwiID8gdGhpcy5vcHRpb25zLmFsbG93X3NpbmdsZV9kZXNlbGVjdCA6IGZhbHNlO1xuICAgICAgdGhpcy5kaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQgPSB0aGlzLm9wdGlvbnMuZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkIHx8IDA7XG4gICAgICB0aGlzLmRpc2FibGVfc2VhcmNoID0gdGhpcy5vcHRpb25zLmRpc2FibGVfc2VhcmNoIHx8IGZhbHNlO1xuICAgICAgdGhpcy5lbmFibGVfc3BsaXRfd29yZF9zZWFyY2ggPSB0aGlzLm9wdGlvbnMuZW5hYmxlX3NwbGl0X3dvcmRfc2VhcmNoICE9IG51bGwgPyB0aGlzLm9wdGlvbnMuZW5hYmxlX3NwbGl0X3dvcmRfc2VhcmNoIDogdHJ1ZTtcbiAgICAgIHRoaXMuZ3JvdXBfc2VhcmNoID0gdGhpcy5vcHRpb25zLmdyb3VwX3NlYXJjaCAhPSBudWxsID8gdGhpcy5vcHRpb25zLmdyb3VwX3NlYXJjaCA6IHRydWU7XG4gICAgICB0aGlzLnNlYXJjaF9jb250YWlucyA9IHRoaXMub3B0aW9ucy5zZWFyY2hfY29udGFpbnMgfHwgZmFsc2U7XG4gICAgICB0aGlzLnNpbmdsZV9iYWNrc3Ryb2tlX2RlbGV0ZSA9IHRoaXMub3B0aW9ucy5zaW5nbGVfYmFja3N0cm9rZV9kZWxldGUgIT0gbnVsbCA/IHRoaXMub3B0aW9ucy5zaW5nbGVfYmFja3N0cm9rZV9kZWxldGUgOiB0cnVlO1xuICAgICAgdGhpcy5tYXhfc2VsZWN0ZWRfb3B0aW9ucyA9IHRoaXMub3B0aW9ucy5tYXhfc2VsZWN0ZWRfb3B0aW9ucyB8fCBJbmZpbml0eTtcbiAgICAgIHRoaXMuaW5oZXJpdF9zZWxlY3RfY2xhc3NlcyA9IHRoaXMub3B0aW9ucy5pbmhlcml0X3NlbGVjdF9jbGFzc2VzIHx8IGZhbHNlO1xuICAgICAgdGhpcy5kaXNwbGF5X3NlbGVjdGVkX29wdGlvbnMgPSB0aGlzLm9wdGlvbnMuZGlzcGxheV9zZWxlY3RlZF9vcHRpb25zICE9IG51bGwgPyB0aGlzLm9wdGlvbnMuZGlzcGxheV9zZWxlY3RlZF9vcHRpb25zIDogdHJ1ZTtcbiAgICAgIHRoaXMuZGlzcGxheV9kaXNhYmxlZF9vcHRpb25zID0gdGhpcy5vcHRpb25zLmRpc3BsYXlfZGlzYWJsZWRfb3B0aW9ucyAhPSBudWxsID8gdGhpcy5vcHRpb25zLmRpc3BsYXlfZGlzYWJsZWRfb3B0aW9ucyA6IHRydWU7XG4gICAgICB0aGlzLmluY2x1ZGVfZ3JvdXBfbGFiZWxfaW5fc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnMuaW5jbHVkZV9ncm91cF9sYWJlbF9pbl9zZWxlY3RlZCB8fCBmYWxzZTtcbiAgICAgIHRoaXMubWF4X3Nob3duX3Jlc3VsdHMgPSB0aGlzLm9wdGlvbnMubWF4X3Nob3duX3Jlc3VsdHMgfHwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuICAgICAgdGhpcy5jYXNlX3NlbnNpdGl2ZV9zZWFyY2ggPSB0aGlzLm9wdGlvbnMuY2FzZV9zZW5zaXRpdmVfc2VhcmNoIHx8IGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZV9yZXN1bHRzX29uX3NlbGVjdCA9IHRoaXMub3B0aW9ucy5oaWRlX3Jlc3VsdHNfb25fc2VsZWN0ICE9IG51bGwgPyB0aGlzLm9wdGlvbnMuaGlkZV9yZXN1bHRzX29uX3NlbGVjdCA6IHRydWU7XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5zZXRfZGVmYXVsdF90ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5mb3JtX2ZpZWxkLmdldEF0dHJpYnV0ZShcImRhdGEtcGxhY2Vob2xkZXJcIikpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0X3RleHQgPSB0aGlzLmZvcm1fZmllbGQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wbGFjZWhvbGRlclwiKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc19tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLmRlZmF1bHRfdGV4dCA9IHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlcl90ZXh0X211bHRpcGxlIHx8IHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlcl90ZXh0IHx8IEFic3RyYWN0Q2hvc2VuLmRlZmF1bHRfbXVsdGlwbGVfdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVmYXVsdF90ZXh0ID0gdGhpcy5vcHRpb25zLnBsYWNlaG9sZGVyX3RleHRfc2luZ2xlIHx8IHRoaXMub3B0aW9ucy5wbGFjZWhvbGRlcl90ZXh0IHx8IEFic3RyYWN0Q2hvc2VuLmRlZmF1bHRfc2luZ2xlX3RleHQ7XG4gICAgICB9XG4gICAgICB0aGlzLmRlZmF1bHRfdGV4dCA9IHRoaXMuZXNjYXBlX2h0bWwodGhpcy5kZWZhdWx0X3RleHQpO1xuICAgICAgcmV0dXJuIHRoaXMucmVzdWx0c19ub25lX2ZvdW5kID0gdGhpcy5mb3JtX2ZpZWxkLmdldEF0dHJpYnV0ZShcImRhdGEtbm9fcmVzdWx0c190ZXh0XCIpIHx8IHRoaXMub3B0aW9ucy5ub19yZXN1bHRzX3RleHQgfHwgQWJzdHJhY3RDaG9zZW4uZGVmYXVsdF9ub19yZXN1bHRfdGV4dDtcbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLmNob2ljZV9sYWJlbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmICh0aGlzLmluY2x1ZGVfZ3JvdXBfbGFiZWxfaW5fc2VsZWN0ZWQgJiYgKGl0ZW0uZ3JvdXBfbGFiZWwgIT0gbnVsbCkpIHtcbiAgICAgICAgcmV0dXJuIFwiPGIgY2xhc3M9J2dyb3VwLW5hbWUnPlwiICsgKHRoaXMuZXNjYXBlX2h0bWwoaXRlbS5ncm91cF9sYWJlbCkpICsgXCI8L2I+XCIgKyBpdGVtLmh0bWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gaXRlbS5odG1sO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUubW91c2VfZW50ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLm1vdXNlX29uX2NvbnRhaW5lciA9IHRydWU7XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5tb3VzZV9sZWF2ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMubW91c2Vfb25fY29udGFpbmVyID0gZmFsc2U7XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5pbnB1dF9mb2N1cyA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgaWYgKHRoaXMuaXNfbXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjdGl2ZV9maWVsZCkge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRhaW5lcl9tb3VzZWRvd24oKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkodGhpcykpLCA1MCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVfZmllbGQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmF0ZV9maWVsZCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5pbnB1dF9ibHVyID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBpZiAoIXRoaXMubW91c2Vfb25fY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlX2ZpZWxkID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYmx1cl90ZXN0KCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpLCAxMDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUubGFiZWxfY2xpY2tfaGFuZGxlciA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgaWYgKHRoaXMuaXNfbXVsdGlwbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyX21vdXNlZG93bihldnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZhdGVfZmllbGQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLnJlc3VsdHNfb3B0aW9uX2J1aWxkID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGNvbnRlbnQsIGRhdGEsIGRhdGFfY29udGVudCwgaSwgbGVuLCByZWYsIHNob3duX3Jlc3VsdHM7XG4gICAgICBjb250ZW50ID0gJyc7XG4gICAgICBzaG93bl9yZXN1bHRzID0gMDtcbiAgICAgIHJlZiA9IHRoaXMucmVzdWx0c19kYXRhO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGRhdGEgPSByZWZbaV07XG4gICAgICAgIGRhdGFfY29udGVudCA9ICcnO1xuICAgICAgICBpZiAoZGF0YS5ncm91cCkge1xuICAgICAgICAgIGRhdGFfY29udGVudCA9IHRoaXMucmVzdWx0X2FkZF9ncm91cChkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXRhX2NvbnRlbnQgPSB0aGlzLnJlc3VsdF9hZGRfb3B0aW9uKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhX2NvbnRlbnQgIT09ICcnKSB7XG4gICAgICAgICAgc2hvd25fcmVzdWx0cysrO1xuICAgICAgICAgIGNvbnRlbnQgKz0gZGF0YV9jb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zICE9IG51bGwgPyBvcHRpb25zLmZpcnN0IDogdm9pZCAwKSB7XG4gICAgICAgICAgaWYgKGRhdGEuc2VsZWN0ZWQgJiYgdGhpcy5pc19tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VfYnVpbGQoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChkYXRhLnNlbGVjdGVkICYmICF0aGlzLmlzX211bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnNpbmdsZV9zZXRfc2VsZWN0ZWRfdGV4dCh0aGlzLmNob2ljZV9sYWJlbChkYXRhKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaG93bl9yZXN1bHRzID49IHRoaXMubWF4X3Nob3duX3Jlc3VsdHMpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5yZXN1bHRfYWRkX29wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xuICAgICAgdmFyIGNsYXNzZXMsIG9wdGlvbl9lbDtcbiAgICAgIGlmICghb3B0aW9uLnNlYXJjaF9tYXRjaCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaW5jbHVkZV9vcHRpb25faW5fcmVzdWx0cyhvcHRpb24pKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGNsYXNzZXMgPSBbXTtcbiAgICAgIGlmICghb3B0aW9uLmRpc2FibGVkICYmICEob3B0aW9uLnNlbGVjdGVkICYmIHRoaXMuaXNfbXVsdGlwbGUpKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChcImFjdGl2ZS1yZXN1bHRcIik7XG4gICAgICB9XG4gICAgICBpZiAob3B0aW9uLmRpc2FibGVkICYmICEob3B0aW9uLnNlbGVjdGVkICYmIHRoaXMuaXNfbXVsdGlwbGUpKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChcImRpc2FibGVkLXJlc3VsdFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKFwicmVzdWx0LXNlbGVjdGVkXCIpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbi5ncm91cF9hcnJheV9pbmRleCAhPSBudWxsKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChcImdyb3VwLW9wdGlvblwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb24uY2xhc3NlcyAhPT0gXCJcIikge1xuICAgICAgICBjbGFzc2VzLnB1c2gob3B0aW9uLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgb3B0aW9uX2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgb3B0aW9uX2VsLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbihcIiBcIik7XG4gICAgICBpZiAob3B0aW9uLnN0eWxlKSB7XG4gICAgICAgIG9wdGlvbl9lbC5zdHlsZS5jc3NUZXh0ID0gb3B0aW9uLnN0eWxlO1xuICAgICAgfVxuICAgICAgb3B0aW9uX2VsLnNldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uLWFycmF5LWluZGV4XCIsIG9wdGlvbi5hcnJheV9pbmRleCk7XG4gICAgICBvcHRpb25fZWwuaW5uZXJIVE1MID0gb3B0aW9uLmhpZ2hsaWdodGVkX2h0bWwgfHwgb3B0aW9uLmh0bWw7XG4gICAgICBpZiAob3B0aW9uLnRpdGxlKSB7XG4gICAgICAgIG9wdGlvbl9lbC50aXRsZSA9IG9wdGlvbi50aXRsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLm91dGVySFRNTChvcHRpb25fZWwpO1xuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUucmVzdWx0X2FkZF9ncm91cCA9IGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICB2YXIgY2xhc3NlcywgZ3JvdXBfZWw7XG4gICAgICBpZiAoIShncm91cC5zZWFyY2hfbWF0Y2ggfHwgZ3JvdXAuZ3JvdXBfbWF0Y2gpKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIGlmICghKGdyb3VwLmFjdGl2ZV9vcHRpb25zID4gMCkpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgY2xhc3NlcyA9IFtdO1xuICAgICAgY2xhc3Nlcy5wdXNoKFwiZ3JvdXAtcmVzdWx0XCIpO1xuICAgICAgaWYgKGdyb3VwLmNsYXNzZXMpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGdyb3VwLmNsYXNzZXMpO1xuICAgICAgfVxuICAgICAgZ3JvdXBfZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBncm91cF9lbC5jbGFzc05hbWUgPSBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICAgICAgZ3JvdXBfZWwuaW5uZXJIVE1MID0gZ3JvdXAuaGlnaGxpZ2h0ZWRfaHRtbCB8fCB0aGlzLmVzY2FwZV9odG1sKGdyb3VwLmxhYmVsKTtcbiAgICAgIGlmIChncm91cC50aXRsZSkge1xuICAgICAgICBncm91cF9lbC50aXRsZSA9IGdyb3VwLnRpdGxlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMub3V0ZXJIVE1MKGdyb3VwX2VsKTtcbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLnJlc3VsdHNfdXBkYXRlX2ZpZWxkID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldF9kZWZhdWx0X3RleHQoKTtcbiAgICAgIGlmICghdGhpcy5pc19tdWx0aXBsZSkge1xuICAgICAgICB0aGlzLnJlc3VsdHNfcmVzZXRfY2xlYW51cCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXN1bHRfY2xlYXJfaGlnaGxpZ2h0KCk7XG4gICAgICB0aGlzLnJlc3VsdHNfYnVpbGQoKTtcbiAgICAgIGlmICh0aGlzLnJlc3VsdHNfc2hvd2luZykge1xuICAgICAgICByZXR1cm4gdGhpcy53aW5ub3dfcmVzdWx0cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUucmVzZXRfc2luZ2xlX3NlbGVjdF9vcHRpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaSwgbGVuLCByZWYsIHJlc3VsdCwgcmVzdWx0czE7XG4gICAgICByZWYgPSB0aGlzLnJlc3VsdHNfZGF0YTtcbiAgICAgIHJlc3VsdHMxID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVmW2ldO1xuICAgICAgICBpZiAocmVzdWx0LnNlbGVjdGVkKSB7XG4gICAgICAgICAgcmVzdWx0czEucHVzaChyZXN1bHQuc2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0czEucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0czE7XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5yZXN1bHRzX3RvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMucmVzdWx0c19zaG93aW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHNfaGlkZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0c19zaG93KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5yZXN1bHRzX3NlYXJjaCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgaWYgKHRoaXMucmVzdWx0c19zaG93aW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLndpbm5vd19yZXN1bHRzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzX3Nob3coKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLndpbm5vd19yZXN1bHRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgdmFyIGVzY2FwZWRRdWVyeSwgZml4LCBpLCBsZW4sIG9wdGlvbiwgcHJlZml4LCBxdWVyeSwgcmVmLCByZWdleCwgcmVzdWx0cywgcmVzdWx0c19ncm91cCwgc2VhcmNoX21hdGNoLCBzdGFydHBvcywgc3VmZml4LCB0ZXh0O1xuICAgICAgdGhpcy5ub19yZXN1bHRzX2NsZWFyKCk7XG4gICAgICByZXN1bHRzID0gMDtcbiAgICAgIHF1ZXJ5ID0gdGhpcy5nZXRfc2VhcmNoX3RleHQoKTtcbiAgICAgIGVzY2FwZWRRdWVyeSA9IHF1ZXJ5LnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uLFxcXFxeJHwjXFxzXS9nLCBcIlxcXFwkJlwiKTtcbiAgICAgIHJlZ2V4ID0gdGhpcy5nZXRfc2VhcmNoX3JlZ2V4KGVzY2FwZWRRdWVyeSk7XG4gICAgICByZWYgPSB0aGlzLnJlc3VsdHNfZGF0YTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBvcHRpb24gPSByZWZbaV07XG4gICAgICAgIG9wdGlvbi5zZWFyY2hfbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgcmVzdWx0c19ncm91cCA9IG51bGw7XG4gICAgICAgIHNlYXJjaF9tYXRjaCA9IG51bGw7XG4gICAgICAgIG9wdGlvbi5oaWdobGlnaHRlZF9odG1sID0gJyc7XG4gICAgICAgIGlmICh0aGlzLmluY2x1ZGVfb3B0aW9uX2luX3Jlc3VsdHMob3B0aW9uKSkge1xuICAgICAgICAgIGlmIChvcHRpb24uZ3JvdXApIHtcbiAgICAgICAgICAgIG9wdGlvbi5ncm91cF9tYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgb3B0aW9uLmFjdGl2ZV9vcHRpb25zID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKChvcHRpb24uZ3JvdXBfYXJyYXlfaW5kZXggIT0gbnVsbCkgJiYgdGhpcy5yZXN1bHRzX2RhdGFbb3B0aW9uLmdyb3VwX2FycmF5X2luZGV4XSkge1xuICAgICAgICAgICAgcmVzdWx0c19ncm91cCA9IHRoaXMucmVzdWx0c19kYXRhW29wdGlvbi5ncm91cF9hcnJheV9pbmRleF07XG4gICAgICAgICAgICBpZiAocmVzdWx0c19ncm91cC5hY3RpdmVfb3B0aW9ucyA9PT0gMCAmJiByZXN1bHRzX2dyb3VwLnNlYXJjaF9tYXRjaCkge1xuICAgICAgICAgICAgICByZXN1bHRzICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRzX2dyb3VwLmFjdGl2ZV9vcHRpb25zICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHQgPSBvcHRpb24uZ3JvdXAgPyBvcHRpb24ubGFiZWwgOiBvcHRpb24udGV4dDtcbiAgICAgICAgICBpZiAoIShvcHRpb24uZ3JvdXAgJiYgIXRoaXMuZ3JvdXBfc2VhcmNoKSkge1xuICAgICAgICAgICAgc2VhcmNoX21hdGNoID0gdGhpcy5zZWFyY2hfc3RyaW5nX21hdGNoKHRleHQsIHJlZ2V4KTtcbiAgICAgICAgICAgIG9wdGlvbi5zZWFyY2hfbWF0Y2ggPSBzZWFyY2hfbWF0Y2ggIT0gbnVsbDtcbiAgICAgICAgICAgIGlmIChvcHRpb24uc2VhcmNoX21hdGNoICYmICFvcHRpb24uZ3JvdXApIHtcbiAgICAgICAgICAgICAgcmVzdWx0cyArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbi5zZWFyY2hfbWF0Y2gpIHtcbiAgICAgICAgICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0cG9zID0gc2VhcmNoX21hdGNoLmluZGV4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IHRleHQuc2xpY2UoMCwgc3RhcnRwb3MpO1xuICAgICAgICAgICAgICAgIGZpeCA9IHRleHQuc2xpY2Uoc3RhcnRwb3MsIHN0YXJ0cG9zICsgcXVlcnkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBzdWZmaXggPSB0ZXh0LnNsaWNlKHN0YXJ0cG9zICsgcXVlcnkubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBvcHRpb24uaGlnaGxpZ2h0ZWRfaHRtbCA9ICh0aGlzLmVzY2FwZV9odG1sKHByZWZpeCkpICsgXCI8ZW0+XCIgKyAodGhpcy5lc2NhcGVfaHRtbChmaXgpKSArIFwiPC9lbT5cIiArICh0aGlzLmVzY2FwZV9odG1sKHN1ZmZpeCkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChyZXN1bHRzX2dyb3VwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRzX2dyb3VwLmdyb3VwX21hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICgob3B0aW9uLmdyb3VwX2FycmF5X2luZGV4ICE9IG51bGwpICYmIHRoaXMucmVzdWx0c19kYXRhW29wdGlvbi5ncm91cF9hcnJheV9pbmRleF0uc2VhcmNoX21hdGNoKSB7XG4gICAgICAgICAgICAgIG9wdGlvbi5zZWFyY2hfbWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5yZXN1bHRfY2xlYXJfaGlnaGxpZ2h0KCk7XG4gICAgICBpZiAocmVzdWx0cyA8IDEgJiYgcXVlcnkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlX3Jlc3VsdHNfY29udGVudChcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9fcmVzdWx0cyhxdWVyeSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZV9yZXN1bHRzX2NvbnRlbnQodGhpcy5yZXN1bHRzX29wdGlvbl9idWlsZCgpKTtcbiAgICAgICAgaWYgKCEob3B0aW9ucyAhPSBudWxsID8gb3B0aW9ucy5za2lwX2hpZ2hsaWdodCA6IHZvaWQgMCkpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy53aW5ub3dfcmVzdWx0c19zZXRfaGlnaGxpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLmdldF9zZWFyY2hfcmVnZXggPSBmdW5jdGlvbihlc2NhcGVkX3NlYXJjaF9zdHJpbmcpIHtcbiAgICAgIHZhciByZWdleF9mbGFnLCByZWdleF9zdHJpbmc7XG4gICAgICByZWdleF9zdHJpbmcgPSB0aGlzLnNlYXJjaF9jb250YWlucyA/IGVzY2FwZWRfc2VhcmNoX3N0cmluZyA6IFwiKF58XFxcXHN8XFxcXGIpXCIgKyBlc2NhcGVkX3NlYXJjaF9zdHJpbmcgKyBcIlteXFxcXHNdKlwiO1xuICAgICAgaWYgKCEodGhpcy5lbmFibGVfc3BsaXRfd29yZF9zZWFyY2ggfHwgdGhpcy5zZWFyY2hfY29udGFpbnMpKSB7XG4gICAgICAgIHJlZ2V4X3N0cmluZyA9IFwiXlwiICsgcmVnZXhfc3RyaW5nO1xuICAgICAgfVxuICAgICAgcmVnZXhfZmxhZyA9IHRoaXMuY2FzZV9zZW5zaXRpdmVfc2VhcmNoID8gXCJcIiA6IFwiaVwiO1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhfc3RyaW5nLCByZWdleF9mbGFnKTtcbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLnNlYXJjaF9zdHJpbmdfbWF0Y2ggPSBmdW5jdGlvbihzZWFyY2hfc3RyaW5nLCByZWdleCkge1xuICAgICAgdmFyIG1hdGNoO1xuICAgICAgbWF0Y2ggPSByZWdleC5leGVjKHNlYXJjaF9zdHJpbmcpO1xuICAgICAgaWYgKCF0aGlzLnNlYXJjaF9jb250YWlucyAmJiAobWF0Y2ggIT0gbnVsbCA/IG1hdGNoWzFdIDogdm9pZCAwKSkge1xuICAgICAgICBtYXRjaC5pbmRleCArPSAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUuY2hvaWNlc19jb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGksIGxlbiwgb3B0aW9uLCByZWY7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZF9vcHRpb25fY291bnQgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZF9vcHRpb25fY291bnQ7XG4gICAgICB9XG4gICAgICB0aGlzLnNlbGVjdGVkX29wdGlvbl9jb3VudCA9IDA7XG4gICAgICByZWYgPSB0aGlzLmZvcm1fZmllbGQub3B0aW9ucztcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBvcHRpb24gPSByZWZbaV07XG4gICAgICAgIGlmIChvcHRpb24uc2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkX29wdGlvbl9jb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZF9vcHRpb25fY291bnQ7XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5jaG9pY2VzX2NsaWNrID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuYWN0aXZhdGVfZmllbGQoKTtcbiAgICAgIGlmICghKHRoaXMucmVzdWx0c19zaG93aW5nIHx8IHRoaXMuaXNfZGlzYWJsZWQpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHNfc2hvdygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUua2V5ZG93bl9jaGVja2VyID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICB2YXIgcmVmLCBzdHJva2U7XG4gICAgICBzdHJva2UgPSAocmVmID0gZXZ0LndoaWNoKSAhPSBudWxsID8gcmVmIDogZXZ0LmtleUNvZGU7XG4gICAgICB0aGlzLnNlYXJjaF9maWVsZF9zY2FsZSgpO1xuICAgICAgaWYgKHN0cm9rZSAhPT0gOCAmJiB0aGlzLnBlbmRpbmdfYmFja3N0cm9rZSkge1xuICAgICAgICB0aGlzLmNsZWFyX2JhY2tzdHJva2UoKTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoc3Ryb2tlKSB7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICB0aGlzLmJhY2tzdHJva2VfbGVuZ3RoID0gdGhpcy5nZXRfc2VhcmNoX2ZpZWxkX3ZhbHVlKCkubGVuZ3RoO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgaWYgKHRoaXMucmVzdWx0c19zaG93aW5nICYmICF0aGlzLmlzX211bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdF9zZWxlY3QoZXZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tb3VzZV9vbl9jb250YWluZXIgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICBpZiAodGhpcy5yZXN1bHRzX3Nob3dpbmcpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICBpZiAodGhpcy5yZXN1bHRzX3Nob3dpbmcpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICBpZiAodGhpcy5kaXNhYmxlX3NlYXJjaCkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMua2V5dXBfYXJyb3coKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLmtleWRvd25fYXJyb3coKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLmtleXVwX2NoZWNrZXIgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIHZhciByZWYsIHN0cm9rZTtcbiAgICAgIHN0cm9rZSA9IChyZWYgPSBldnQud2hpY2gpICE9IG51bGwgPyByZWYgOiBldnQua2V5Q29kZTtcbiAgICAgIHRoaXMuc2VhcmNoX2ZpZWxkX3NjYWxlKCk7XG4gICAgICBzd2l0Y2ggKHN0cm9rZSkge1xuICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgaWYgKHRoaXMuaXNfbXVsdGlwbGUgJiYgdGhpcy5iYWNrc3Ryb2tlX2xlbmd0aCA8IDEgJiYgdGhpcy5jaG9pY2VzX2NvdW50KCkgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmtleWRvd25fYmFja3N0cm9rZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMucGVuZGluZ19iYWNrc3Ryb2tlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdF9jbGVhcl9oaWdobGlnaHQoKTtcbiAgICAgICAgICAgIHRoaXMucmVzdWx0c19zZWFyY2goKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKHRoaXMucmVzdWx0c19zaG93aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdF9zZWxlY3QoZXZ0KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgaWYgKHRoaXMucmVzdWx0c19zaG93aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnJlc3VsdHNfaGlkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICBjYXNlIDE2OlxuICAgICAgICBjYXNlIDE3OlxuICAgICAgICBjYXNlIDE4OlxuICAgICAgICBjYXNlIDM4OlxuICAgICAgICBjYXNlIDQwOlxuICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMucmVzdWx0c19zZWFyY2goKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLmNsaXBib2FyZF9ldmVudF9jaGVja2VyID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBpZiAodGhpcy5pc19kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gc2V0VGltZW91dCgoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucmVzdWx0c19zZWFyY2goKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKSwgNTApO1xuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUuY29udGFpbmVyX3dpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLndpZHRoICE9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy53aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1fZmllbGQub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5pbmNsdWRlX29wdGlvbl9pbl9yZXN1bHRzID0gZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICBpZiAodGhpcy5pc19tdWx0aXBsZSAmJiAoIXRoaXMuZGlzcGxheV9zZWxlY3RlZF9vcHRpb25zICYmIG9wdGlvbi5zZWxlY3RlZCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmRpc3BsYXlfZGlzYWJsZWRfb3B0aW9ucyAmJiBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbi5lbXB0eSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLnNlYXJjaF9yZXN1bHRzX3RvdWNoc3RhcnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIHRoaXMudG91Y2hfc3RhcnRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hfcmVzdWx0c19tb3VzZW92ZXIoZXZ0KTtcbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLnNlYXJjaF9yZXN1bHRzX3RvdWNobW92ZSA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgdGhpcy50b3VjaF9zdGFydGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hfcmVzdWx0c19tb3VzZW91dChldnQpO1xuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUuc2VhcmNoX3Jlc3VsdHNfdG91Y2hlbmQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIGlmICh0aGlzLnRvdWNoX3N0YXJ0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoX3Jlc3VsdHNfbW91c2V1cChldnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUub3V0ZXJIVE1MID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgdmFyIHRtcDtcbiAgICAgIGlmIChlbGVtZW50Lm91dGVySFRNTCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5vdXRlckhUTUw7XG4gICAgICB9XG4gICAgICB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG1wLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIHRtcC5pbm5lckhUTUw7XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLnByb3RvdHlwZS5nZXRfc2luZ2xlX2h0bWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcIjxhIGNsYXNzPVxcXCJjaG9zZW4tc2luZ2xlIGNob3Nlbi1kZWZhdWx0XFxcIj5cXG4gIDxzcGFuPlwiICsgdGhpcy5kZWZhdWx0X3RleHQgKyBcIjwvc3Bhbj5cXG4gIDxkaXY+PGI+PC9iPjwvZGl2PlxcbjwvYT5cXG48ZGl2IGNsYXNzPVxcXCJjaG9zZW4tZHJvcFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjaG9zZW4tc2VhcmNoXFxcIj5cXG4gICAgPGlucHV0IGNsYXNzPVxcXCJjaG9zZW4tc2VhcmNoLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgLz5cXG4gIDwvZGl2PlxcbiAgPHVsIGNsYXNzPVxcXCJjaG9zZW4tcmVzdWx0c1xcXCI+PC91bD5cXG48L2Rpdj5cIjtcbiAgICB9O1xuXG4gICAgQWJzdHJhY3RDaG9zZW4ucHJvdG90eXBlLmdldF9tdWx0aV9odG1sID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCI8dWwgY2xhc3M9XFxcImNob3Nlbi1jaG9pY2VzXFxcIj5cXG4gIDxsaSBjbGFzcz1cXFwic2VhcmNoLWZpZWxkXFxcIj5cXG4gICAgPGlucHV0IGNsYXNzPVxcXCJjaG9zZW4tc2VhcmNoLWlucHV0XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgdmFsdWU9XFxcIlwiICsgdGhpcy5kZWZhdWx0X3RleHQgKyBcIlxcXCIgLz5cXG4gIDwvbGk+XFxuPC91bD5cXG48ZGl2IGNsYXNzPVxcXCJjaG9zZW4tZHJvcFxcXCI+XFxuICA8dWwgY2xhc3M9XFxcImNob3Nlbi1yZXN1bHRzXFxcIj48L3VsPlxcbjwvZGl2PlwiO1xuICAgIH07XG5cbiAgICBBYnN0cmFjdENob3Nlbi5wcm90b3R5cGUuZ2V0X25vX3Jlc3VsdHNfaHRtbCA9IGZ1bmN0aW9uKHRlcm1zKSB7XG4gICAgICByZXR1cm4gXCI8bGkgY2xhc3M9XFxcIm5vLXJlc3VsdHNcXFwiPlxcbiAgXCIgKyB0aGlzLnJlc3VsdHNfbm9uZV9mb3VuZCArIFwiIDxzcGFuPlwiICsgKHRoaXMuZXNjYXBlX2h0bWwodGVybXMpKSArIFwiPC9zcGFuPlxcbjwvbGk+XCI7XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLmJyb3dzZXJfaXNfc3VwcG9ydGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoXCJNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXJcIiA9PT0gd2luZG93Lm5hdmlnYXRvci5hcHBOYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudE1vZGUgPj0gODtcbiAgICAgIH1cbiAgICAgIGlmICgvaVAob2R8aG9uZSkvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSB8fCAvSUVNb2JpbGUvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSB8fCAvV2luZG93cyBQaG9uZS9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHx8IC9CbGFja0JlcnJ5L2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgL0JCMTAvaS50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSB8fCAvQW5kcm9pZC4qTW9iaWxlL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIEFic3RyYWN0Q2hvc2VuLmRlZmF1bHRfbXVsdGlwbGVfdGV4dCA9IFwiU8OpbGVjdGlvbm5leiBsZXMgb3B0aW9uc1wiO1xuXG4gICAgQWJzdHJhY3RDaG9zZW4uZGVmYXVsdF9zaW5nbGVfdGV4dCA9IFwiU2VsZWN0IGFuIE9wdGlvblwiO1xuXG4gICAgQWJzdHJhY3RDaG9zZW4uZGVmYXVsdF9ub19yZXN1bHRfdGV4dCA9IFwiTm8gcmVzdWx0cyBtYXRjaFwiO1xuXG4gICAgcmV0dXJuIEFic3RyYWN0Q2hvc2VuO1xuXG4gIH0pKCk7XG5cbiAgJCA9IGpRdWVyeTtcblxuICAkLmZuLmV4dGVuZCh7XG4gICAgY2hvc2VuOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICBpZiAoIUFic3RyYWN0Q2hvc2VuLmJyb3dzZXJfaXNfc3VwcG9ydGVkKCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGlucHV0X2ZpZWxkKSB7XG4gICAgICAgIHZhciAkdGhpcywgY2hvc2VuO1xuICAgICAgICAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgIGNob3NlbiA9ICR0aGlzLmRhdGEoJ2Nob3NlbicpO1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gJ2Rlc3Ryb3knKSB7XG4gICAgICAgICAgaWYgKGNob3NlbiBpbnN0YW5jZW9mIENob3Nlbikge1xuICAgICAgICAgICAgY2hvc2VuLmRlc3Ryb3koKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGNob3NlbiBpbnN0YW5jZW9mIENob3NlbikpIHtcbiAgICAgICAgICAkdGhpcy5kYXRhKCdjaG9zZW4nLCBuZXcgQ2hvc2VuKHRoaXMsIG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBDaG9zZW4gPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICAgIGV4dGVuZChDaG9zZW4sIHN1cGVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gQ2hvc2VuKCkge1xuICAgICAgcmV0dXJuIENob3Nlbi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLnNldHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmZvcm1fZmllbGRfanEgPSAkKHRoaXMuZm9ybV9maWVsZCk7XG4gICAgICByZXR1cm4gdGhpcy5jdXJyZW50X3NlbGVjdGVkSW5kZXggPSB0aGlzLmZvcm1fZmllbGQuc2VsZWN0ZWRJbmRleDtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5zZXRfdXBfaHRtbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbnRhaW5lcl9jbGFzc2VzLCBjb250YWluZXJfcHJvcHM7XG4gICAgICBjb250YWluZXJfY2xhc3NlcyA9IFtcImNob3Nlbi1jb250YWluZXJcIl07XG4gICAgICBjb250YWluZXJfY2xhc3Nlcy5wdXNoKFwiY2hvc2VuLWNvbnRhaW5lci1cIiArICh0aGlzLmlzX211bHRpcGxlID8gXCJtdWx0aVwiIDogXCJzaW5nbGVcIikpO1xuICAgICAgaWYgKHRoaXMuaW5oZXJpdF9zZWxlY3RfY2xhc3NlcyAmJiB0aGlzLmZvcm1fZmllbGQuY2xhc3NOYW1lKSB7XG4gICAgICAgIGNvbnRhaW5lcl9jbGFzc2VzLnB1c2godGhpcy5mb3JtX2ZpZWxkLmNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc19ydGwpIHtcbiAgICAgICAgY29udGFpbmVyX2NsYXNzZXMucHVzaChcImNob3Nlbi1ydGxcIik7XG4gICAgICB9XG4gICAgICBjb250YWluZXJfcHJvcHMgPSB7XG4gICAgICAgICdjbGFzcyc6IGNvbnRhaW5lcl9jbGFzc2VzLmpvaW4oJyAnKSxcbiAgICAgICAgJ3RpdGxlJzogdGhpcy5mb3JtX2ZpZWxkLnRpdGxlXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMuZm9ybV9maWVsZC5pZC5sZW5ndGgpIHtcbiAgICAgICAgY29udGFpbmVyX3Byb3BzLmlkID0gdGhpcy5mb3JtX2ZpZWxkLmlkLnJlcGxhY2UoL1teXFx3XS9nLCAnXycpICsgXCJfY2hvc2VuXCI7XG4gICAgICB9XG4gICAgICB0aGlzLmNvbnRhaW5lciA9ICQoXCI8ZGl2IC8+XCIsIGNvbnRhaW5lcl9wcm9wcyk7XG4gICAgICB0aGlzLmNvbnRhaW5lci53aWR0aCh0aGlzLmNvbnRhaW5lcl93aWR0aCgpKTtcbiAgICAgIGlmICh0aGlzLmlzX211bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmh0bWwodGhpcy5nZXRfbXVsdGlfaHRtbCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmh0bWwodGhpcy5nZXRfc2luZ2xlX2h0bWwoKSk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm1fZmllbGRfanEuaGlkZSgpLmFmdGVyKHRoaXMuY29udGFpbmVyKTtcbiAgICAgIHRoaXMuZHJvcGRvd24gPSB0aGlzLmNvbnRhaW5lci5maW5kKCdkaXYuY2hvc2VuLWRyb3AnKS5maXJzdCgpO1xuICAgICAgdGhpcy5zZWFyY2hfZmllbGQgPSB0aGlzLmNvbnRhaW5lci5maW5kKCdpbnB1dCcpLmZpcnN0KCk7XG4gICAgICB0aGlzLnNlYXJjaF9yZXN1bHRzID0gdGhpcy5jb250YWluZXIuZmluZCgndWwuY2hvc2VuLXJlc3VsdHMnKS5maXJzdCgpO1xuICAgICAgdGhpcy5zZWFyY2hfZmllbGRfc2NhbGUoKTtcbiAgICAgIHRoaXMuc2VhcmNoX25vX3Jlc3VsdHMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCdsaS5uby1yZXN1bHRzJykuZmlyc3QoKTtcbiAgICAgIGlmICh0aGlzLmlzX211bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoX2Nob2ljZXMgPSB0aGlzLmNvbnRhaW5lci5maW5kKCd1bC5jaG9zZW4tY2hvaWNlcycpLmZpcnN0KCk7XG4gICAgICAgIHRoaXMuc2VhcmNoX2NvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyLmZpbmQoJ2xpLnNlYXJjaC1maWVsZCcpLmZpcnN0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlYXJjaF9jb250YWluZXIgPSB0aGlzLmNvbnRhaW5lci5maW5kKCdkaXYuY2hvc2VuLXNlYXJjaCcpLmZpcnN0KCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfaXRlbSA9IHRoaXMuY29udGFpbmVyLmZpbmQoJy5jaG9zZW4tc2luZ2xlJykuZmlyc3QoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzdWx0c19idWlsZCgpO1xuICAgICAgdGhpcy5zZXRfdGFiX2luZGV4KCk7XG4gICAgICByZXR1cm4gdGhpcy5zZXRfbGFiZWxfYmVoYXZpb3IoKTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5vbl9yZWFkeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybV9maWVsZF9qcS50cmlnZ2VyKFwiY2hvc2VuOnJlYWR5XCIsIHtcbiAgICAgICAgY2hvc2VuOiB0aGlzXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5yZWdpc3Rlcl9vYnNlcnZlcnMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLm9uKCd0b3VjaHN0YXJ0LmNob3NlbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgX3RoaXMuY29udGFpbmVyX21vdXNlZG93bihldnQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgICAgdGhpcy5jb250YWluZXIub24oJ3RvdWNoZW5kLmNob3NlbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgX3RoaXMuY29udGFpbmVyX21vdXNldXAoZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLm9uKCdtb3VzZWRvd24uY2hvc2VuJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBfdGhpcy5jb250YWluZXJfbW91c2Vkb3duKGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5vbignbW91c2V1cC5jaG9zZW4nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIF90aGlzLmNvbnRhaW5lcl9tb3VzZXVwKGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5vbignbW91c2VlbnRlci5jaG9zZW4nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIF90aGlzLm1vdXNlX2VudGVyKGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLmNvbnRhaW5lci5vbignbW91c2VsZWF2ZS5jaG9zZW4nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIF90aGlzLm1vdXNlX2xlYXZlKGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLnNlYXJjaF9yZXN1bHRzLm9uKCdtb3VzZXVwLmNob3NlbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgX3RoaXMuc2VhcmNoX3Jlc3VsdHNfbW91c2V1cChldnQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgICAgdGhpcy5zZWFyY2hfcmVzdWx0cy5vbignbW91c2VvdmVyLmNob3NlbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgX3RoaXMuc2VhcmNoX3Jlc3VsdHNfbW91c2VvdmVyKGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLnNlYXJjaF9yZXN1bHRzLm9uKCdtb3VzZW91dC5jaG9zZW4nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIF90aGlzLnNlYXJjaF9yZXN1bHRzX21vdXNlb3V0KGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLnNlYXJjaF9yZXN1bHRzLm9uKCdtb3VzZXdoZWVsLmNob3NlbiBET01Nb3VzZVNjcm9sbC5jaG9zZW4nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIF90aGlzLnNlYXJjaF9yZXN1bHRzX21vdXNld2hlZWwoZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICAgIHRoaXMuc2VhcmNoX3Jlc3VsdHMub24oJ3RvdWNoc3RhcnQuY2hvc2VuJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBfdGhpcy5zZWFyY2hfcmVzdWx0c190b3VjaHN0YXJ0KGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLnNlYXJjaF9yZXN1bHRzLm9uKCd0b3VjaG1vdmUuY2hvc2VuJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBfdGhpcy5zZWFyY2hfcmVzdWx0c190b3VjaG1vdmUoZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICAgIHRoaXMuc2VhcmNoX3Jlc3VsdHMub24oJ3RvdWNoZW5kLmNob3NlbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgX3RoaXMuc2VhcmNoX3Jlc3VsdHNfdG91Y2hlbmQoZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICAgIHRoaXMuZm9ybV9maWVsZF9qcS5vbihcImNob3Nlbjp1cGRhdGVkLmNob3NlblwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIF90aGlzLnJlc3VsdHNfdXBkYXRlX2ZpZWxkKGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLmZvcm1fZmllbGRfanEub24oXCJjaG9zZW46YWN0aXZhdGUuY2hvc2VuXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgX3RoaXMuYWN0aXZhdGVfZmllbGQoZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICAgIHRoaXMuZm9ybV9maWVsZF9qcS5vbihcImNob3NlbjpvcGVuLmNob3NlblwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIF90aGlzLmNvbnRhaW5lcl9tb3VzZWRvd24oZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICAgIHRoaXMuZm9ybV9maWVsZF9qcS5vbihcImNob3NlbjpjbG9zZS5jaG9zZW5cIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBfdGhpcy5jbG9zZV9maWVsZChldnQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgICAgdGhpcy5zZWFyY2hfZmllbGQub24oJ2JsdXIuY2hvc2VuJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBfdGhpcy5pbnB1dF9ibHVyKGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLnNlYXJjaF9maWVsZC5vbigna2V5dXAuY2hvc2VuJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBfdGhpcy5rZXl1cF9jaGVja2VyKGV2dCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICB0aGlzLnNlYXJjaF9maWVsZC5vbigna2V5ZG93bi5jaG9zZW4nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGV2dCkge1xuICAgICAgICAgIF90aGlzLmtleWRvd25fY2hlY2tlcihldnQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgICAgdGhpcy5zZWFyY2hfZmllbGQub24oJ2ZvY3VzLmNob3NlbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgX3RoaXMuaW5wdXRfZm9jdXMoZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICAgIHRoaXMuc2VhcmNoX2ZpZWxkLm9uKCdjdXQuY2hvc2VuJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBfdGhpcy5jbGlwYm9hcmRfZXZlbnRfY2hlY2tlcihldnQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgICAgdGhpcy5zZWFyY2hfZmllbGQub24oJ3Bhc3RlLmNob3NlbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgX3RoaXMuY2xpcGJvYXJkX2V2ZW50X2NoZWNrZXIoZXZ0KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICAgIGlmICh0aGlzLmlzX211bHRpcGxlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaF9jaG9pY2VzLm9uKCdjbGljay5jaG9zZW4nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgICBfdGhpcy5jaG9pY2VzX2NsaWNrKGV2dCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLm9uKCdjbGljay5jaG9zZW4nLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgJCh0aGlzLmNvbnRhaW5lclswXS5vd25lckRvY3VtZW50KS5vZmYoJ2NsaWNrLmNob3NlbicsIHRoaXMuY2xpY2tfdGVzdF9hY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuZm9ybV9maWVsZF9sYWJlbC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZm9ybV9maWVsZF9sYWJlbC5vZmYoJ2NsaWNrLmNob3NlbicpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2VhcmNoX2ZpZWxkWzBdLnRhYkluZGV4KSB7XG4gICAgICAgIHRoaXMuZm9ybV9maWVsZF9qcVswXS50YWJJbmRleCA9IHRoaXMuc2VhcmNoX2ZpZWxkWzBdLnRhYkluZGV4O1xuICAgICAgfVxuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlKCk7XG4gICAgICB0aGlzLmZvcm1fZmllbGRfanEucmVtb3ZlRGF0YSgnY2hvc2VuJyk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtX2ZpZWxkX2pxLnNob3coKTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5zZWFyY2hfZmllbGRfZGlzYWJsZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuaXNfZGlzYWJsZWQgPSB0aGlzLmZvcm1fZmllbGQuZGlzYWJsZWQgfHwgdGhpcy5mb3JtX2ZpZWxkX2pxLnBhcmVudHMoJ2ZpZWxkc2V0JykuaXMoJzpkaXNhYmxlZCcpO1xuICAgICAgdGhpcy5jb250YWluZXIudG9nZ2xlQ2xhc3MoJ2Nob3Nlbi1kaXNhYmxlZCcsIHRoaXMuaXNfZGlzYWJsZWQpO1xuICAgICAgdGhpcy5zZWFyY2hfZmllbGRbMF0uZGlzYWJsZWQgPSB0aGlzLmlzX2Rpc2FibGVkO1xuICAgICAgaWYgKCF0aGlzLmlzX211bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfaXRlbS5vZmYoJ2ZvY3VzLmNob3NlbicsIHRoaXMuYWN0aXZhdGVfZmllbGQpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNfZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2VfZmllbGQoKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNfbXVsdGlwbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfaXRlbS5vbignZm9jdXMuY2hvc2VuJywgdGhpcy5hY3RpdmF0ZV9maWVsZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUuY29udGFpbmVyX21vdXNlZG93biA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgdmFyIHJlZjtcbiAgICAgIGlmICh0aGlzLmlzX2Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldnQgJiYgKChyZWYgPSBldnQudHlwZSkgPT09ICdtb3VzZWRvd24nIHx8IHJlZiA9PT0gJ3RvdWNoc3RhcnQnKSAmJiAhdGhpcy5yZXN1bHRzX3Nob3dpbmcpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBpZiAoISgoZXZ0ICE9IG51bGwpICYmICgkKGV2dC50YXJnZXQpKS5oYXNDbGFzcyhcInNlYXJjaC1jaG9pY2UtY2xvc2VcIikpKSB7XG4gICAgICAgIGlmICghdGhpcy5hY3RpdmVfZmllbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc19tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hfZmllbGQudmFsKFwiXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkKHRoaXMuY29udGFpbmVyWzBdLm93bmVyRG9jdW1lbnQpLm9uKCdjbGljay5jaG9zZW4nLCB0aGlzLmNsaWNrX3Rlc3RfYWN0aW9uKTtcbiAgICAgICAgICB0aGlzLnJlc3VsdHNfc2hvdygpO1xuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzX211bHRpcGxlICYmIGV2dCAmJiAoKCQoZXZ0LnRhcmdldClbMF0gPT09IHRoaXMuc2VsZWN0ZWRfaXRlbVswXSkgfHwgJChldnQudGFyZ2V0KS5wYXJlbnRzKFwiYS5jaG9zZW4tc2luZ2xlXCIpLmxlbmd0aCkpIHtcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLnJlc3VsdHNfdG9nZ2xlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZhdGVfZmllbGQoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5jb250YWluZXJfbW91c2V1cCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgaWYgKGV2dC50YXJnZXQubm9kZU5hbWUgPT09IFwiQUJCUlwiICYmICF0aGlzLmlzX2Rpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdHNfcmVzZXQoZXZ0KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5zZWFyY2hfcmVzdWx0c19tb3VzZXdoZWVsID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICB2YXIgZGVsdGE7XG4gICAgICBpZiAoZXZ0Lm9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgZGVsdGEgPSBldnQub3JpZ2luYWxFdmVudC5kZWx0YVkgfHwgLWV2dC5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEgfHwgZXZ0Lm9yaWdpbmFsRXZlbnQuZGV0YWlsO1xuICAgICAgfVxuICAgICAgaWYgKGRlbHRhICE9IG51bGwpIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ0RPTU1vdXNlU2Nyb2xsJykge1xuICAgICAgICAgIGRlbHRhID0gZGVsdGEgKiA0MDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hfcmVzdWx0cy5zY3JvbGxUb3AoZGVsdGEgKyB0aGlzLnNlYXJjaF9yZXN1bHRzLnNjcm9sbFRvcCgpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5ibHVyX3Rlc3QgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmVfZmllbGQgJiYgdGhpcy5jb250YWluZXIuaGFzQ2xhc3MoXCJjaG9zZW4tY29udGFpbmVyLWFjdGl2ZVwiKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZV9maWVsZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLmNsb3NlX2ZpZWxkID0gZnVuY3Rpb24oKSB7XG4gICAgICAkKHRoaXMuY29udGFpbmVyWzBdLm93bmVyRG9jdW1lbnQpLm9mZihcImNsaWNrLmNob3NlblwiLCB0aGlzLmNsaWNrX3Rlc3RfYWN0aW9uKTtcbiAgICAgIHRoaXMuYWN0aXZlX2ZpZWxkID0gZmFsc2U7XG4gICAgICB0aGlzLnJlc3VsdHNfaGlkZSgpO1xuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoXCJjaG9zZW4tY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICAgIHRoaXMuY2xlYXJfYmFja3N0cm9rZSgpO1xuICAgICAgdGhpcy5zaG93X3NlYXJjaF9maWVsZF9kZWZhdWx0KCk7XG4gICAgICB0aGlzLnNlYXJjaF9maWVsZF9zY2FsZSgpO1xuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoX2ZpZWxkLmJsdXIoKTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5hY3RpdmF0ZV9maWVsZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuaXNfZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoXCJjaG9zZW4tY29udGFpbmVyLWFjdGl2ZVwiKTtcbiAgICAgIHRoaXMuYWN0aXZlX2ZpZWxkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2VhcmNoX2ZpZWxkLnZhbCh0aGlzLnNlYXJjaF9maWVsZC52YWwoKSk7XG4gICAgICByZXR1cm4gdGhpcy5zZWFyY2hfZmllbGQuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS50ZXN0X2FjdGl2ZV9jbGljayA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgdmFyIGFjdGl2ZV9jb250YWluZXI7XG4gICAgICBhY3RpdmVfY29udGFpbmVyID0gJChldnQudGFyZ2V0KS5jbG9zZXN0KCcuY2hvc2VuLWNvbnRhaW5lcicpO1xuICAgICAgaWYgKGFjdGl2ZV9jb250YWluZXIubGVuZ3RoICYmIHRoaXMuY29udGFpbmVyWzBdID09PSBhY3RpdmVfY29udGFpbmVyWzBdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZV9maWVsZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5jbG9zZV9maWVsZCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLnJlc3VsdHNfYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMucGFyc2luZyA9IHRydWU7XG4gICAgICB0aGlzLnNlbGVjdGVkX29wdGlvbl9jb3VudCA9IG51bGw7XG4gICAgICB0aGlzLnJlc3VsdHNfZGF0YSA9IFNlbGVjdFBhcnNlci5zZWxlY3RfdG9fYXJyYXkodGhpcy5mb3JtX2ZpZWxkKTtcbiAgICAgIGlmICh0aGlzLmlzX211bHRpcGxlKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoX2Nob2ljZXMuZmluZChcImxpLnNlYXJjaC1jaG9pY2VcIikucmVtb3ZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNpbmdsZV9zZXRfc2VsZWN0ZWRfdGV4dCgpO1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlX3NlYXJjaCB8fCB0aGlzLmZvcm1fZmllbGQub3B0aW9ucy5sZW5ndGggPD0gdGhpcy5kaXNhYmxlX3NlYXJjaF90aHJlc2hvbGQpIHtcbiAgICAgICAgICB0aGlzLnNlYXJjaF9maWVsZFswXS5yZWFkT25seSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoXCJjaG9zZW4tY29udGFpbmVyLXNpbmdsZS1ub3NlYXJjaFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNlYXJjaF9maWVsZFswXS5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiY2hvc2VuLWNvbnRhaW5lci1zaW5nbGUtbm9zZWFyY2hcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlX3Jlc3VsdHNfY29udGVudCh0aGlzLnJlc3VsdHNfb3B0aW9uX2J1aWxkKHtcbiAgICAgICAgZmlyc3Q6IHRydWVcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuc2VhcmNoX2ZpZWxkX2Rpc2FibGVkKCk7XG4gICAgICB0aGlzLnNob3dfc2VhcmNoX2ZpZWxkX2RlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2VhcmNoX2ZpZWxkX3NjYWxlKCk7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzaW5nID0gZmFsc2U7XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUucmVzdWx0X2RvX2hpZ2hsaWdodCA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICB2YXIgaGlnaF9ib3R0b20sIGhpZ2hfdG9wLCBtYXhIZWlnaHQsIHZpc2libGVfYm90dG9tLCB2aXNpYmxlX3RvcDtcbiAgICAgIGlmIChlbC5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRfY2xlYXJfaGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMucmVzdWx0X2hpZ2hsaWdodCA9IGVsO1xuICAgICAgICB0aGlzLnJlc3VsdF9oaWdobGlnaHQuYWRkQ2xhc3MoXCJoaWdobGlnaHRlZFwiKTtcbiAgICAgICAgbWF4SGVpZ2h0ID0gcGFyc2VJbnQodGhpcy5zZWFyY2hfcmVzdWx0cy5jc3MoXCJtYXhIZWlnaHRcIiksIDEwKTtcbiAgICAgICAgdmlzaWJsZV90b3AgPSB0aGlzLnNlYXJjaF9yZXN1bHRzLnNjcm9sbFRvcCgpO1xuICAgICAgICB2aXNpYmxlX2JvdHRvbSA9IG1heEhlaWdodCArIHZpc2libGVfdG9wO1xuICAgICAgICBoaWdoX3RvcCA9IHRoaXMucmVzdWx0X2hpZ2hsaWdodC5wb3NpdGlvbigpLnRvcCArIHRoaXMuc2VhcmNoX3Jlc3VsdHMuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGhpZ2hfYm90dG9tID0gaGlnaF90b3AgKyB0aGlzLnJlc3VsdF9oaWdobGlnaHQub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgaWYgKGhpZ2hfYm90dG9tID49IHZpc2libGVfYm90dG9tKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoX3Jlc3VsdHMuc2Nyb2xsVG9wKChoaWdoX2JvdHRvbSAtIG1heEhlaWdodCkgPiAwID8gaGlnaF9ib3R0b20gLSBtYXhIZWlnaHQgOiAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChoaWdoX3RvcCA8IHZpc2libGVfdG9wKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoX3Jlc3VsdHMuc2Nyb2xsVG9wKGhpZ2hfdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLnJlc3VsdF9jbGVhcl9oaWdobGlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnJlc3VsdF9oaWdobGlnaHQpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRfaGlnaGxpZ2h0LnJlbW92ZUNsYXNzKFwiaGlnaGxpZ2h0ZWRcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZXN1bHRfaGlnaGxpZ2h0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5yZXN1bHRzX3Nob3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLmlzX211bHRpcGxlICYmIHRoaXMubWF4X3NlbGVjdGVkX29wdGlvbnMgPD0gdGhpcy5jaG9pY2VzX2NvdW50KCkpIHtcbiAgICAgICAgdGhpcy5mb3JtX2ZpZWxkX2pxLnRyaWdnZXIoXCJjaG9zZW46bWF4c2VsZWN0ZWRcIiwge1xuICAgICAgICAgIGNob3NlbjogdGhpc1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2xhc3MoXCJjaG9zZW4td2l0aC1kcm9wXCIpO1xuICAgICAgdGhpcy5yZXN1bHRzX3Nob3dpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zZWFyY2hfZmllbGQuZm9jdXMoKTtcbiAgICAgIHRoaXMuc2VhcmNoX2ZpZWxkLnZhbCh0aGlzLmdldF9zZWFyY2hfZmllbGRfdmFsdWUoKSk7XG4gICAgICB0aGlzLndpbm5vd19yZXN1bHRzKCk7XG4gICAgICByZXR1cm4gdGhpcy5mb3JtX2ZpZWxkX2pxLnRyaWdnZXIoXCJjaG9zZW46c2hvd2luZ19kcm9wZG93blwiLCB7XG4gICAgICAgIGNob3NlbjogdGhpc1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUudXBkYXRlX3Jlc3VsdHNfY29udGVudCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaF9yZXN1bHRzLmh0bWwoY29udGVudCk7XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUucmVzdWx0c19oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5yZXN1bHRzX3Nob3dpbmcpIHtcbiAgICAgICAgdGhpcy5yZXN1bHRfY2xlYXJfaGlnaGxpZ2h0KCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiY2hvc2VuLXdpdGgtZHJvcFwiKTtcbiAgICAgICAgdGhpcy5mb3JtX2ZpZWxkX2pxLnRyaWdnZXIoXCJjaG9zZW46aGlkaW5nX2Ryb3Bkb3duXCIsIHtcbiAgICAgICAgICBjaG9zZW46IHRoaXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZXN1bHRzX3Nob3dpbmcgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5zZXRfdGFiX2luZGV4ID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHZhciB0aTtcbiAgICAgIGlmICh0aGlzLmZvcm1fZmllbGQudGFiSW5kZXgpIHtcbiAgICAgICAgdGkgPSB0aGlzLmZvcm1fZmllbGQudGFiSW5kZXg7XG4gICAgICAgIHRoaXMuZm9ybV9maWVsZC50YWJJbmRleCA9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hfZmllbGRbMF0udGFiSW5kZXggPSB0aTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5zZXRfbGFiZWxfYmVoYXZpb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZm9ybV9maWVsZF9sYWJlbCA9IHRoaXMuZm9ybV9maWVsZF9qcS5wYXJlbnRzKFwibGFiZWxcIik7XG4gICAgICBpZiAoIXRoaXMuZm9ybV9maWVsZF9sYWJlbC5sZW5ndGggJiYgdGhpcy5mb3JtX2ZpZWxkLmlkLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmZvcm1fZmllbGRfbGFiZWwgPSAkKFwibGFiZWxbZm9yPSdcIiArIHRoaXMuZm9ybV9maWVsZC5pZCArIFwiJ11cIik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5mb3JtX2ZpZWxkX2xhYmVsLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybV9maWVsZF9sYWJlbC5vbignY2xpY2suY2hvc2VuJywgdGhpcy5sYWJlbF9jbGlja19oYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5zaG93X3NlYXJjaF9maWVsZF9kZWZhdWx0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5pc19tdWx0aXBsZSAmJiB0aGlzLmNob2ljZXNfY291bnQoKSA8IDEgJiYgIXRoaXMuYWN0aXZlX2ZpZWxkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoX2ZpZWxkLnZhbCh0aGlzLmRlZmF1bHRfdGV4dCk7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaF9maWVsZC5hZGRDbGFzcyhcImRlZmF1bHRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlYXJjaF9maWVsZC52YWwoXCJcIik7XG4gICAgICAgIHJldHVybiB0aGlzLnNlYXJjaF9maWVsZC5yZW1vdmVDbGFzcyhcImRlZmF1bHRcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUuc2VhcmNoX3Jlc3VsdHNfbW91c2V1cCA9IGZ1bmN0aW9uKGV2dCkge1xuICAgICAgdmFyIHRhcmdldDtcbiAgICAgIHRhcmdldCA9ICQoZXZ0LnRhcmdldCkuaGFzQ2xhc3MoXCJhY3RpdmUtcmVzdWx0XCIpID8gJChldnQudGFyZ2V0KSA6ICQoZXZ0LnRhcmdldCkucGFyZW50cyhcIi5hY3RpdmUtcmVzdWx0XCIpLmZpcnN0KCk7XG4gICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLnJlc3VsdF9oaWdobGlnaHQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMucmVzdWx0X3NlbGVjdChldnQpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hfZmllbGQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5zZWFyY2hfcmVzdWx0c19tb3VzZW92ZXIgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIHZhciB0YXJnZXQ7XG4gICAgICB0YXJnZXQgPSAkKGV2dC50YXJnZXQpLmhhc0NsYXNzKFwiYWN0aXZlLXJlc3VsdFwiKSA/ICQoZXZ0LnRhcmdldCkgOiAkKGV2dC50YXJnZXQpLnBhcmVudHMoXCIuYWN0aXZlLXJlc3VsdFwiKS5maXJzdCgpO1xuICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRfZG9faGlnaGxpZ2h0KHRhcmdldCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUuc2VhcmNoX3Jlc3VsdHNfbW91c2VvdXQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIGlmICgkKGV2dC50YXJnZXQpLmhhc0NsYXNzKFwiYWN0aXZlLXJlc3VsdFwiKSB8fCAkKGV2dC50YXJnZXQpLnBhcmVudHMoJy5hY3RpdmUtcmVzdWx0JykuZmlyc3QoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRfY2xlYXJfaGlnaGxpZ2h0KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUuY2hvaWNlX2J1aWxkID0gZnVuY3Rpb24oaXRlbSkge1xuICAgICAgdmFyIGNob2ljZSwgY2xvc2VfbGluaztcbiAgICAgIGNob2ljZSA9ICQoJzxsaSAvPicsIHtcbiAgICAgICAgXCJjbGFzc1wiOiBcInNlYXJjaC1jaG9pY2VcIlxuICAgICAgfSkuaHRtbChcIjxzcGFuPlwiICsgKHRoaXMuY2hvaWNlX2xhYmVsKGl0ZW0pKSArIFwiPC9zcGFuPlwiKTtcbiAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgIGNob2ljZS5hZGRDbGFzcygnc2VhcmNoLWNob2ljZS1kaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xvc2VfbGluayA9ICQoJzxhIC8+Jywge1xuICAgICAgICAgIFwiY2xhc3NcIjogJ3NlYXJjaC1jaG9pY2UtY2xvc2UnLFxuICAgICAgICAgICdkYXRhLW9wdGlvbi1hcnJheS1pbmRleCc6IGl0ZW0uYXJyYXlfaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICAgIGNsb3NlX2xpbmsub24oJ2NsaWNrLmNob3NlbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jaG9pY2VfZGVzdHJveV9saW5rX2NsaWNrKGV2dCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgICBjaG9pY2UuYXBwZW5kKGNsb3NlX2xpbmspO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoX2NvbnRhaW5lci5iZWZvcmUoY2hvaWNlKTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5jaG9pY2VfZGVzdHJveV9saW5rX2NsaWNrID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICghdGhpcy5pc19kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaG9pY2VfZGVzdHJveSgkKGV2dC50YXJnZXQpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5jaG9pY2VfZGVzdHJveSA9IGZ1bmN0aW9uKGxpbmspIHtcbiAgICAgIGlmICh0aGlzLnJlc3VsdF9kZXNlbGVjdChsaW5rWzBdLmdldEF0dHJpYnV0ZShcImRhdGEtb3B0aW9uLWFycmF5LWluZGV4XCIpKSkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVfZmllbGQpIHtcbiAgICAgICAgICB0aGlzLnNlYXJjaF9maWVsZC5mb2N1cygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd19zZWFyY2hfZmllbGRfZGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzX211bHRpcGxlICYmIHRoaXMuY2hvaWNlc19jb3VudCgpID4gMCAmJiB0aGlzLmdldF9zZWFyY2hfZmllbGRfdmFsdWUoKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgdGhpcy5yZXN1bHRzX2hpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rLnBhcmVudHMoJ2xpJykuZmlyc3QoKS5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoX2ZpZWxkX3NjYWxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUucmVzdWx0c19yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5yZXNldF9zaW5nbGVfc2VsZWN0X29wdGlvbnMoKTtcbiAgICAgIHRoaXMuZm9ybV9maWVsZC5vcHRpb25zWzBdLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc2luZ2xlX3NldF9zZWxlY3RlZF90ZXh0KCk7XG4gICAgICB0aGlzLnNob3dfc2VhcmNoX2ZpZWxkX2RlZmF1bHQoKTtcbiAgICAgIHRoaXMucmVzdWx0c19yZXNldF9jbGVhbnVwKCk7XG4gICAgICB0aGlzLnRyaWdnZXJfZm9ybV9maWVsZF9jaGFuZ2UoKTtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZV9maWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzX2hpZGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5yZXN1bHRzX3Jlc2V0X2NsZWFudXAgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY3VycmVudF9zZWxlY3RlZEluZGV4ID0gdGhpcy5mb3JtX2ZpZWxkLnNlbGVjdGVkSW5kZXg7XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZF9pdGVtLmZpbmQoXCJhYmJyXCIpLnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLnJlc3VsdF9zZWxlY3QgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgIHZhciBoaWdoLCBpdGVtO1xuICAgICAgaWYgKHRoaXMucmVzdWx0X2hpZ2hsaWdodCkge1xuICAgICAgICBoaWdoID0gdGhpcy5yZXN1bHRfaGlnaGxpZ2h0O1xuICAgICAgICB0aGlzLnJlc3VsdF9jbGVhcl9oaWdobGlnaHQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNfbXVsdGlwbGUgJiYgdGhpcy5tYXhfc2VsZWN0ZWRfb3B0aW9ucyA8PSB0aGlzLmNob2ljZXNfY291bnQoKSkge1xuICAgICAgICAgIHRoaXMuZm9ybV9maWVsZF9qcS50cmlnZ2VyKFwiY2hvc2VuOm1heHNlbGVjdGVkXCIsIHtcbiAgICAgICAgICAgIGNob3NlbjogdGhpc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc19tdWx0aXBsZSkge1xuICAgICAgICAgIGhpZ2gucmVtb3ZlQ2xhc3MoXCJhY3RpdmUtcmVzdWx0XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucmVzZXRfc2luZ2xlX3NlbGVjdF9vcHRpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgaGlnaC5hZGRDbGFzcyhcInJlc3VsdC1zZWxlY3RlZFwiKTtcbiAgICAgICAgaXRlbSA9IHRoaXMucmVzdWx0c19kYXRhW2hpZ2hbMF0uZ2V0QXR0cmlidXRlKFwiZGF0YS1vcHRpb24tYXJyYXktaW5kZXhcIildO1xuICAgICAgICBpdGVtLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5mb3JtX2ZpZWxkLm9wdGlvbnNbaXRlbS5vcHRpb25zX2luZGV4XS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfb3B0aW9uX2NvdW50ID0gbnVsbDtcbiAgICAgICAgaWYgKHRoaXMuaXNfbXVsdGlwbGUpIHtcbiAgICAgICAgICB0aGlzLmNob2ljZV9idWlsZChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNpbmdsZV9zZXRfc2VsZWN0ZWRfdGV4dCh0aGlzLmNob2ljZV9sYWJlbChpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNfbXVsdGlwbGUgJiYgKCF0aGlzLmhpZGVfcmVzdWx0c19vbl9zZWxlY3QgfHwgKGV2dC5tZXRhS2V5IHx8IGV2dC5jdHJsS2V5KSkpIHtcbiAgICAgICAgICBpZiAoZXZ0Lm1ldGFLZXkgfHwgZXZ0LmN0cmxLZXkpIHtcbiAgICAgICAgICAgIHRoaXMud2lubm93X3Jlc3VsdHMoe1xuICAgICAgICAgICAgICBza2lwX2hpZ2hsaWdodDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoX2ZpZWxkLnZhbChcIlwiKTtcbiAgICAgICAgICAgIHRoaXMud2lubm93X3Jlc3VsdHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZXN1bHRzX2hpZGUoKTtcbiAgICAgICAgICB0aGlzLnNob3dfc2VhcmNoX2ZpZWxkX2RlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc19tdWx0aXBsZSB8fCB0aGlzLmZvcm1fZmllbGQuc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5jdXJyZW50X3NlbGVjdGVkSW5kZXgpIHtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJfZm9ybV9maWVsZF9jaGFuZ2Uoe1xuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuZm9ybV9maWVsZC5vcHRpb25zW2l0ZW0ub3B0aW9uc19pbmRleF0udmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRfc2VsZWN0ZWRJbmRleCA9IHRoaXMuZm9ybV9maWVsZC5zZWxlY3RlZEluZGV4O1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoX2ZpZWxkX3NjYWxlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUuc2luZ2xlX3NldF9zZWxlY3RlZF90ZXh0ID0gZnVuY3Rpb24odGV4dCkge1xuICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xuICAgICAgICB0ZXh0ID0gdGhpcy5kZWZhdWx0X3RleHQ7XG4gICAgICB9XG4gICAgICBpZiAodGV4dCA9PT0gdGhpcy5kZWZhdWx0X3RleHQpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZF9pdGVtLmFkZENsYXNzKFwiY2hvc2VuLWRlZmF1bHRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNpbmdsZV9kZXNlbGVjdF9jb250cm9sX2J1aWxkKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfaXRlbS5yZW1vdmVDbGFzcyhcImNob3Nlbi1kZWZhdWx0XCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRfaXRlbS5maW5kKFwic3BhblwiKS5odG1sKHRleHQpO1xuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLnJlc3VsdF9kZXNlbGVjdCA9IGZ1bmN0aW9uKHBvcykge1xuICAgICAgdmFyIHJlc3VsdF9kYXRhO1xuICAgICAgcmVzdWx0X2RhdGEgPSB0aGlzLnJlc3VsdHNfZGF0YVtwb3NdO1xuICAgICAgaWYgKCF0aGlzLmZvcm1fZmllbGQub3B0aW9uc1tyZXN1bHRfZGF0YS5vcHRpb25zX2luZGV4XS5kaXNhYmxlZCkge1xuICAgICAgICByZXN1bHRfZGF0YS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZvcm1fZmllbGQub3B0aW9uc1tyZXN1bHRfZGF0YS5vcHRpb25zX2luZGV4XS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkX29wdGlvbl9jb3VudCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVzdWx0X2NsZWFyX2hpZ2hsaWdodCgpO1xuICAgICAgICBpZiAodGhpcy5yZXN1bHRzX3Nob3dpbmcpIHtcbiAgICAgICAgICB0aGlzLndpbm5vd19yZXN1bHRzKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmlnZ2VyX2Zvcm1fZmllbGRfY2hhbmdlKHtcbiAgICAgICAgICBkZXNlbGVjdGVkOiB0aGlzLmZvcm1fZmllbGQub3B0aW9uc1tyZXN1bHRfZGF0YS5vcHRpb25zX2luZGV4XS52YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZWFyY2hfZmllbGRfc2NhbGUoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUuc2luZ2xlX2Rlc2VsZWN0X2NvbnRyb2xfYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5hbGxvd19zaW5nbGVfZGVzZWxlY3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkX2l0ZW0uZmluZChcImFiYnJcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRfaXRlbS5maW5kKFwic3BhblwiKS5maXJzdCgpLmFmdGVyKFwiPGFiYnIgY2xhc3M9XFxcInNlYXJjaC1jaG9pY2UtY2xvc2VcXFwiPjwvYWJicj5cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZF9pdGVtLmFkZENsYXNzKFwiY2hvc2VuLXNpbmdsZS13aXRoLWRlc2VsZWN0XCIpO1xuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLmdldF9zZWFyY2hfZmllbGRfdmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaF9maWVsZC52YWwoKTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5nZXRfc2VhcmNoX3RleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkLnRyaW0odGhpcy5nZXRfc2VhcmNoX2ZpZWxkX3ZhbHVlKCkpO1xuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLmVzY2FwZV9odG1sID0gZnVuY3Rpb24odGV4dCkge1xuICAgICAgcmV0dXJuICQoJzxkaXYvPicpLnRleHQodGV4dCkuaHRtbCgpO1xuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLndpbm5vd19yZXN1bHRzX3NldF9oaWdobGlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkb19oaWdoLCBzZWxlY3RlZF9yZXN1bHRzO1xuICAgICAgc2VsZWN0ZWRfcmVzdWx0cyA9ICF0aGlzLmlzX211bHRpcGxlID8gdGhpcy5zZWFyY2hfcmVzdWx0cy5maW5kKFwiLnJlc3VsdC1zZWxlY3RlZC5hY3RpdmUtcmVzdWx0XCIpIDogW107XG4gICAgICBkb19oaWdoID0gc2VsZWN0ZWRfcmVzdWx0cy5sZW5ndGggPyBzZWxlY3RlZF9yZXN1bHRzLmZpcnN0KCkgOiB0aGlzLnNlYXJjaF9yZXN1bHRzLmZpbmQoXCIuYWN0aXZlLXJlc3VsdFwiKS5maXJzdCgpO1xuICAgICAgaWYgKGRvX2hpZ2ggIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRfZG9faGlnaGxpZ2h0KGRvX2hpZ2gpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLm5vX3Jlc3VsdHMgPSBmdW5jdGlvbih0ZXJtcykge1xuICAgICAgdmFyIG5vX3Jlc3VsdHNfaHRtbDtcbiAgICAgIG5vX3Jlc3VsdHNfaHRtbCA9IHRoaXMuZ2V0X25vX3Jlc3VsdHNfaHRtbCh0ZXJtcyk7XG4gICAgICB0aGlzLnNlYXJjaF9yZXN1bHRzLmFwcGVuZChub19yZXN1bHRzX2h0bWwpO1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybV9maWVsZF9qcS50cmlnZ2VyKFwiY2hvc2VuOm5vX3Jlc3VsdHNcIiwge1xuICAgICAgICBjaG9zZW46IHRoaXNcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBDaG9zZW4ucHJvdG90eXBlLm5vX3Jlc3VsdHNfY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaF9yZXN1bHRzLmZpbmQoXCIubm8tcmVzdWx0c1wiKS5yZW1vdmUoKTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5rZXlkb3duX2Fycm93ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbmV4dF9zaWI7XG4gICAgICBpZiAodGhpcy5yZXN1bHRzX3Nob3dpbmcgJiYgdGhpcy5yZXN1bHRfaGlnaGxpZ2h0KSB7XG4gICAgICAgIG5leHRfc2liID0gdGhpcy5yZXN1bHRfaGlnaGxpZ2h0Lm5leHRBbGwoXCJsaS5hY3RpdmUtcmVzdWx0XCIpLmZpcnN0KCk7XG4gICAgICAgIGlmIChuZXh0X3NpYikge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlc3VsdF9kb19oaWdobGlnaHQobmV4dF9zaWIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHRzX3Nob3coKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5rZXl1cF9hcnJvdyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHByZXZfc2licztcbiAgICAgIGlmICghdGhpcy5yZXN1bHRzX3Nob3dpbmcgJiYgIXRoaXMuaXNfbXVsdGlwbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0c19zaG93KCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMucmVzdWx0X2hpZ2hsaWdodCkge1xuICAgICAgICBwcmV2X3NpYnMgPSB0aGlzLnJlc3VsdF9oaWdobGlnaHQucHJldkFsbChcImxpLmFjdGl2ZS1yZXN1bHRcIik7XG4gICAgICAgIGlmIChwcmV2X3NpYnMubGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0X2RvX2hpZ2hsaWdodChwcmV2X3NpYnMuZmlyc3QoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hvaWNlc19jb3VudCgpID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRzX2hpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0X2NsZWFyX2hpZ2hsaWdodCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIENob3Nlbi5wcm90b3R5cGUua2V5ZG93bl9iYWNrc3Ryb2tlID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbmV4dF9hdmFpbGFibGVfZGVzdHJveTtcbiAgICAgIGlmICh0aGlzLnBlbmRpbmdfYmFja3N0cm9rZSkge1xuICAgICAgICB0aGlzLmNob2ljZV9kZXN0cm95KHRoaXMucGVuZGluZ19iYWNrc3Ryb2tlLmZpbmQoXCJhXCIpLmZpcnN0KCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jbGVhcl9iYWNrc3Ryb2tlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0X2F2YWlsYWJsZV9kZXN0cm95ID0gdGhpcy5zZWFyY2hfY29udGFpbmVyLnNpYmxpbmdzKFwibGkuc2VhcmNoLWNob2ljZVwiKS5sYXN0KCk7XG4gICAgICAgIGlmIChuZXh0X2F2YWlsYWJsZV9kZXN0cm95Lmxlbmd0aCAmJiAhbmV4dF9hdmFpbGFibGVfZGVzdHJveS5oYXNDbGFzcyhcInNlYXJjaC1jaG9pY2UtZGlzYWJsZWRcIikpIHtcbiAgICAgICAgICB0aGlzLnBlbmRpbmdfYmFja3N0cm9rZSA9IG5leHRfYXZhaWxhYmxlX2Rlc3Ryb3k7XG4gICAgICAgICAgaWYgKHRoaXMuc2luZ2xlX2JhY2tzdHJva2VfZGVsZXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXlkb3duX2JhY2tzdHJva2UoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVuZGluZ19iYWNrc3Ryb2tlLmFkZENsYXNzKFwic2VhcmNoLWNob2ljZS1mb2N1c1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5jbGVhcl9iYWNrc3Ryb2tlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5wZW5kaW5nX2JhY2tzdHJva2UpIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nX2JhY2tzdHJva2UucmVtb3ZlQ2xhc3MoXCJzZWFyY2gtY2hvaWNlLWZvY3VzXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucGVuZGluZ19iYWNrc3Ryb2tlID0gbnVsbDtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS5zZWFyY2hfZmllbGRfc2NhbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaXYsIGksIGxlbiwgc3R5bGUsIHN0eWxlX2Jsb2NrLCBzdHlsZXMsIHdpZHRoO1xuICAgICAgaWYgKCF0aGlzLmlzX211bHRpcGxlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHN0eWxlX2Jsb2NrID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgbGVmdDogJy0xMDAwcHgnLFxuICAgICAgICB0b3A6ICctMTAwMHB4JyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICB3aGl0ZVNwYWNlOiAncHJlJ1xuICAgICAgfTtcbiAgICAgIHN0eWxlcyA9IFsnZm9udFNpemUnLCAnZm9udFN0eWxlJywgJ2ZvbnRXZWlnaHQnLCAnZm9udEZhbWlseScsICdsaW5lSGVpZ2h0JywgJ3RleHRUcmFuc2Zvcm0nLCAnbGV0dGVyU3BhY2luZyddO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gc3R5bGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHN0eWxlID0gc3R5bGVzW2ldO1xuICAgICAgICBzdHlsZV9ibG9ja1tzdHlsZV0gPSB0aGlzLnNlYXJjaF9maWVsZC5jc3Moc3R5bGUpO1xuICAgICAgfVxuICAgICAgZGl2ID0gJCgnPGRpdiAvPicpLmNzcyhzdHlsZV9ibG9jayk7XG4gICAgICBkaXYudGV4dCh0aGlzLmdldF9zZWFyY2hfZmllbGRfdmFsdWUoKSk7XG4gICAgICAkKCdib2R5JykuYXBwZW5kKGRpdik7XG4gICAgICB3aWR0aCA9IGRpdi53aWR0aCgpICsgMjU7XG4gICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICBpZiAodGhpcy5jb250YWluZXIuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgd2lkdGggPSBNYXRoLm1pbih0aGlzLmNvbnRhaW5lci5vdXRlcldpZHRoKCkgLSAxMCwgd2lkdGgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoX2ZpZWxkLndpZHRoKHdpZHRoKTtcbiAgICB9O1xuXG4gICAgQ2hvc2VuLnByb3RvdHlwZS50cmlnZ2VyX2Zvcm1fZmllbGRfY2hhbmdlID0gZnVuY3Rpb24oZXh0cmEpIHtcbiAgICAgIHRoaXMuZm9ybV9maWVsZF9qcS50cmlnZ2VyKFwiaW5wdXRcIiwgZXh0cmEpO1xuICAgICAgcmV0dXJuIHRoaXMuZm9ybV9maWVsZF9qcS50cmlnZ2VyKFwiY2hhbmdlXCIsIGV4dHJhKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENob3NlbjtcblxuICB9KShBYnN0cmFjdENob3Nlbik7XG5cbn0pLmNhbGwodGhpcyk7XG4iXSwic291cmNlUm9vdCI6IiJ9