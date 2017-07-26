require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Button":[function(require,module,exports){
var Button,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.Button = Button = (function(superClass) {
  extend(Button, superClass);

  function Button(options) {
    var backgroundColor, color, hoverColor, i, labelColor, len, onColor, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref2, ref20, ref21, ref22, ref23, ref24, ref25, ref26, ref27, ref28, ref29, ref3, ref30, ref31, ref32, ref4, ref5, ref6, ref7, ref8, ref9, state, touchColor, width;
    if (options == null) {
      options = {};
    }
    this._type = (ref = options.type) != null ? ref : 'basic';
    this._link = (ref1 = options.link) != null ? ref1 : false;
    this._hover = (ref2 = options.hover) != null ? ref2 : true;
    this._float = (ref3 = options.float) != null ? ref3 : false;
    this._disabled = (ref4 = options.disabled) != null ? ref4 : false;
    this._tint = (ref5 = options.tint) != null ? ref5 : 'rgba(0, 179, 231, 1)';
    color = (ref6 = options.color) != null ? ref6 : this._link ? this._tint : '#000';
    backgroundColor = (ref7 = options.backgroundColor) != null ? ref7 : '#FFF';
    labelColor = this._link ? null : backgroundColor === '#000' ? Color.mix(backgroundColor, '#FFF', .04) : Color.mix(backgroundColor, '#000', .04);
    touchColor = backgroundColor === '#000' ? Color.mix(backgroundColor, '#FFF', .16) : Color.mix(backgroundColor, '#000', .16);
    hoverColor = backgroundColor === '#FFF' ? Color.mix(backgroundColor, '#000', .08) : Color.mix(backgroundColor, '#FFF', .24);
    onColor = backgroundColor === '#000' ? Color.mix(backgroundColor, '#FFF', .2) : Color.mix(backgroundColor, '#000', .2);
    this._text = void 0;
    this._textStyle = (ref8 = options.textStyle) != null ? ref8 : {
      fontSize: 13,
      padding: {
        top: 8
      }
    };
    this._icon = (ref9 = options.icon) != null ? ref9 : void 0;
    this._iconSize = (ref10 = options.iconSize) != null ? ref10 : {
      height: void 0,
      width: void 0
    };
    this._labelWidth = (ref11 = options.labelWidth) != null ? ref11 : .34;
    this._labelBackgroundColor = (ref12 = options.labelBackgroundColor) != null ? ref12 : labelColor;
    this._labelColor = (ref13 = (ref14 = options.labelColor) != null ? ref14 : options.color) != null ? ref13 : '#000';
    this._value = (ref15 = options.value) != null ? ref15 : 0;
    this._hoverState = (ref16 = options.hoverState) != null ? ref16 : {
      backgroundColor: this._link ? null : hoverColor
    };
    this._touchState = (ref17 = options.touchState) != null ? ref17 : {
      color: color,
      backgroundColor: this._link ? null : touchColor
    };
    this._onState = (ref18 = options.onState) != null ? ref18 : {
      color: color,
      backgroundColor: this._link ? null : onColor
    };
    this._disabledState = (ref19 = options.disabledState) != null ? ref19 : {
      opacity: .5
    };
    this._defaultState = options.defaultState;
    this._isOn = (ref20 = options.isOn) != null ? ref20 : false;
    this._onAction = (ref21 = options.onAction) != null ? ref21 : function() {
      return null;
    };
    this._offAction = (ref22 = options.offAction) != null ? ref22 : function() {
      return null;
    };
    this._action = (ref23 = options.action) != null ? ref23 : function() {
      return null;
    };
    this._scope = (ref24 = options.scope) != null ? ref24 : this;
    this.i = (ref25 = options.i) != null ? ref25 : 0;
    Button.__super__.constructor.call(this, _.defaults(options, {
      height: 32,
      width: this._type === 'label' ? 120 : 80,
      backgroundColor: '#FFF',
      color: '#000',
      borderColor: '#333',
      borderWidth: 1,
      borderRadius: 4,
      animationOptions: {
        time: .15
      },
      text: (ref26 = options.text) != null ? ref26 : 'Button',
      clip: true
    }));
    if (this._link) {
      this.props = {
        backgroundColor: null,
        borderWidth: null
      };
    }
    this.states = {
      on: this._onState,
      touch: this._touchState,
      hover: this._hoverState,
      disabled: this._disabledState,
      "default": (ref27 = this._defaultState) != null ? ref27 : this.states["default"]
    };
    ref28 = _.keys(this.states);
    for (i = 0, len = ref28.length; i < len; i++) {
      state = ref28[i];
      delete this.states[state].value;
    }
    this.buttonText = new TextLayer({
      name: '.',
      parent: this,
      x: 0,
      y: Align.center,
      width: this.width,
      height: this.height,
      fontSize: 13,
      color: this.color,
      fontWeight: 600,
      padding: {
        top: 8
      },
      textAlign: 'center',
      text: (ref29 = "" + this._text) != null ? ref29 : 'Button'
    });
    if (this._icon != null) {
      this.buttonText.visible = false;
      this.iconLayer = new Layer({
        parent: this,
        height: (ref30 = this._iconSize.height) != null ? ref30 : this.height,
        width: (ref31 = this._iconSize.width) != null ? ref31 : this.height,
        x: Align.center(1),
        y: Align.center,
        image: "images/icons/" + this._icon + ".png"
      });
      this.iconLayer.pixelAlign();
    }
    if (this._float) {
      _.merge(this.states["default"], {
        shadowX: 1,
        shadowY: 2,
        shadowBlur: 5
      });
      _.merge(this.states.hover, {
        shadowX: 1,
        shadowY: 2,
        shadowBlur: 5
      });
      _.merge(this.states.touch, {
        shadowX: 0,
        shadowY: 0,
        shadowBlur: 0
      });
      _.merge(this.states.on, {
        shadowX: 0,
        shadowY: 0,
        shadowBlur: 0
      });
      _.merge(this.states.disabled, {
        shadowX: 0,
        shadowY: 0,
        shadowBlur: 0
      });
    }
    if (this._isOn) {
      this.animate('touch');
      this.buttonText.color = this.states.touch.color;
    }
    this.onTouchStart((function(_this) {
      return function() {
        _this.animate('touch');
        return _this.buttonText.color = _this.states.touch.color;
      };
    })(this));
    if (this._hover) {
      this.onMouseOver(function() {
        return this.animate('hover');
      });
      this.onMouseOut(function() {
        var ref32;
        if (this._isOn) {
          this.animate('on');
          return this.buttonText.color = (ref32 = this.states.on.color) != null ? ref32 : color;
        } else if (this._disabled === true) {
          return this.animate('disabled');
        } else {
          this.animate('default');
          return this.buttonText.color = this.states["default"].color;
        }
      });
    }
    switch (this._type) {
      case 'basic':
        this.onTouchEnd(function() {
          _.bind(this._action, this._scope)();
          return this.reset();
        });
        break;
      case 'toggle':
        this.onTouchEnd(function() {
          return this.isOn = !this._isOn;
        });
        break;
      case 'label':
        this.onTouchEnd(function() {
          _.bind(this._action, this._scope)();
          return this.reset();
        });
        width = this.width;
        this.buttonText.width = width * (1 - this._labelWidth);
        if ((ref32 = this.iconLayer) != null) {
          ref32.x = (width * (1 - this._labelWidth)) / 2 - (this.height / 2);
        }
        this.labelLayer = new TextLayer({
          name: '.',
          parent: this,
          x: Align.right(1),
          y: Align.center,
          width: width * this._labelWidth,
          height: this.height,
          backgroundColor: this._labelBackgroundColor,
          color: this._labelColor,
          fontWeight: 600,
          fontSize: 13,
          padding: {
            top: 8
          },
          textAlign: 'center',
          text: "" + this._value
        });
        this.labelLayer.onTouchStart(function(event) {
          return event.stopPropagation();
        });
        this.labelLayer.onTouchEnd(function(event) {
          return event.stopPropagation();
        });
        this.separator = new Layer({
          name: '.',
          parent: this,
          x: this.labelLayer.x - 1,
          height: this.height,
          width: 1,
          backgroundColor: this.borderColor
        });
        break;
      default:
        throw "Button has no type named " + this._type + ".";
    }
    this.textStyle = this._textStyle;
    switch (this._disabled) {
      case true:
        this.ignoreEvents = true;
        this.animate('disabled');
        break;
      case false:
        this.ignoreEvents = false;
        this.animate('default');
    }
  }

  Button.prototype.reset = function(forced) {
    var ref;
    if (this._hover && !forced) {
      this.animate('hover');
      return this.buttonText.color = (ref = this.states.hover.color) != null ? ref : this.states["default"].color;
    } else {
      this.animate('default');
      return this.buttonText.color = this.states["default"].color;
    }
  };

  Button.define("isOn", {
    get: function() {
      return this._isOn;
    },
    set: function(value) {
      var ref;
      if (this._isOn === value) {
        return;
      }
      this._isOn = value;
      this.emit('change:isOn', this._isOn, this);
      switch (this._isOn) {
        case false:
          this.reset(true);
          return _.bind(this._offAction, this._scope)();
        case true:
          this.animate('on');
          this.buttonText.color = (ref = this.states.on.color) != null ? ref : color;
          return _.bind(this._onAction, this._scope)();
      }
    }
  });

  Button.define("textStyle", {
    get: function() {
      return this._textStyle;
    },
    set: function(object) {
      var ref;
      return (ref = this.buttonText) != null ? ref.props = object : void 0;
    }
  });

  Button.define("text", {
    get: function() {
      return this._text;
    },
    set: function(value) {
      var ref;
      this.emit('change:text', this._text, this);
      if (this._text === value) {
        return;
      }
      this._text = value;
      return (ref = this.buttonText) != null ? ref.text = value : void 0;
    }
  });

  Button.define("value", {
    get: function() {
      return this._value;
    },
    set: function(value) {
      if (this._value === value) {
        return;
      }
      this._value = value;
      this.emit('change:value', this._value, this);
      switch (this._type) {
        case 'label':
          return this.labelLayer.text = "" + this._value;
      }
    }
  });

  Button.define("disabled", {
    get: function() {
      return this._disabled;
    },
    set: function(value) {
      if (this._disabled === value) {
        return;
      }
      this._disabled = value;
      this.emit('change:disabled', this._disabled, this);
      switch (this._disabled) {
        case true:
          this.ignoreEvents = true;
          return this.animate('disabled');
        case false:
          this.ignoreEvents = false;
          return this.animate('default');
      }
    }
  });

  return Button;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3N0ZXZlcnVpei9HaXRIdWIvZnJhbWVyLWJ1dHRvbi9CdXR0b25fRGVtby5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9zdGV2ZXJ1aXovR2l0SHViL2ZyYW1lci1idXR0b24vQnV0dG9uX0RlbW8uZnJhbWVyL21vZHVsZXMvQnV0dG9uLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiMgQlVUVE9OXG4jIEBzdGV2ZXJ1aXpva1xuXG5leHBvcnRzLkJ1dHRvbiA9IGNsYXNzIEJ1dHRvbiBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucyA9IHt9KSAtPlxuXHRcdFxuXHRcdEBfdHlwZSA9IG9wdGlvbnMudHlwZSA/ICdiYXNpYydcblx0XHRcblx0XHRAX2xpbmsgPSBvcHRpb25zLmxpbmsgPyBmYWxzZVxuXHRcdEBfaG92ZXIgPSBvcHRpb25zLmhvdmVyID8gdHJ1ZVxuXHRcdEBfZmxvYXQgPSBvcHRpb25zLmZsb2F0ID8gZmFsc2Vcblx0XHRAX2Rpc2FibGVkID0gb3B0aW9ucy5kaXNhYmxlZCA/IGZhbHNlXG5cdFx0QF90aW50ID0gb3B0aW9ucy50aW50ID8gJ3JnYmEoMCwgMTc5LCAyMzEsIDEpJ1xuXHRcdFxuXHRcdGNvbG9yID0gb3B0aW9ucy5jb2xvciA/IGlmIEBfbGluayB0aGVuIEBfdGludCBlbHNlICcjMDAwJ1xuXHRcdGJhY2tncm91bmRDb2xvciA9IG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID8gJyNGRkYnXG5cdFx0bGFiZWxDb2xvciA9IGlmIEBfbGluayB0aGVuIG51bGwgZWxzZSBpZiBiYWNrZ3JvdW5kQ29sb3IgaXMgJyMwMDAnIHRoZW4gQ29sb3IubWl4KGJhY2tncm91bmRDb2xvciwgJyNGRkYnLCAuMDQpIGVsc2UgQ29sb3IubWl4KGJhY2tncm91bmRDb2xvciwgJyMwMDAnLCAuMDQpXG5cdFx0dG91Y2hDb2xvciA9IGlmIGJhY2tncm91bmRDb2xvciBpcyAnIzAwMCcgdGhlbiBDb2xvci5taXgoYmFja2dyb3VuZENvbG9yLCAnI0ZGRicsIC4xNikgZWxzZSBDb2xvci5taXgoYmFja2dyb3VuZENvbG9yLCAnIzAwMCcsIC4xNilcblx0XHRob3ZlckNvbG9yID0gaWYgYmFja2dyb3VuZENvbG9yIGlzICcjRkZGJyB0aGVuIENvbG9yLm1peChiYWNrZ3JvdW5kQ29sb3IsICcjMDAwJywgLjA4KSBlbHNlIENvbG9yLm1peChiYWNrZ3JvdW5kQ29sb3IsICcjRkZGJywgLjI0KVxuXHRcdG9uQ29sb3IgPSBcdCBpZiBiYWNrZ3JvdW5kQ29sb3IgaXMgJyMwMDAnIHRoZW4gQ29sb3IubWl4KGJhY2tncm91bmRDb2xvciwgJyNGRkYnLCAuMikgZWxzZSBDb2xvci5taXgoYmFja2dyb3VuZENvbG9yLCAnIzAwMCcsIC4yKVxuXG5cblx0XHRAX3RleHQgPSB1bmRlZmluZWRcblx0XHRAX3RleHRTdHlsZSA9IG9wdGlvbnMudGV4dFN0eWxlID8ge2ZvbnRTaXplOiAxMywgcGFkZGluZzoge3RvcDogOH19XG5cblx0XHRAX2ljb24gPSBvcHRpb25zLmljb24gPyB1bmRlZmluZWRcblx0XHRAX2ljb25TaXplID0gb3B0aW9ucy5pY29uU2l6ZSA/IHtoZWlnaHQ6IHVuZGVmaW5lZCwgd2lkdGg6IHVuZGVmaW5lZH1cblx0XHRcblx0XHRAX2xhYmVsV2lkdGggPSBvcHRpb25zLmxhYmVsV2lkdGggPyAuMzRcblx0XHRAX2xhYmVsQmFja2dyb3VuZENvbG9yID0gb3B0aW9ucy5sYWJlbEJhY2tncm91bmRDb2xvciA/IGxhYmVsQ29sb3Jcblx0XHRAX2xhYmVsQ29sb3IgPSBvcHRpb25zLmxhYmVsQ29sb3IgPyBvcHRpb25zLmNvbG9yID8gJyMwMDAnXG5cdFx0QF92YWx1ZSA9IG9wdGlvbnMudmFsdWUgPyAwXG5cdFx0XG5cdFx0QF9ob3ZlclN0YXRlID0gb3B0aW9ucy5ob3ZlclN0YXRlID8ge1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBpZiBAX2xpbmsgdGhlbiBudWxsIGVsc2UgaG92ZXJDb2xvclxuXHRcdFx0fVxuXHRcdEBfdG91Y2hTdGF0ZSA9IG9wdGlvbnMudG91Y2hTdGF0ZSA/IHtcblx0XHRcdGNvbG9yOiBjb2xvclxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBpZiBAX2xpbmsgdGhlbiBudWxsIGVsc2UgdG91Y2hDb2xvclxuXHRcdFx0fVxuXHRcdEBfb25TdGF0ZSA9IG9wdGlvbnMub25TdGF0ZSA/IHtcblx0XHRcdGNvbG9yOiBjb2xvciBcblx0XHRcdGJhY2tncm91bmRDb2xvcjogaWYgQF9saW5rIHRoZW4gbnVsbCBlbHNlIG9uQ29sb3Jcblx0XHRcdH1cblx0XHRAX2Rpc2FibGVkU3RhdGUgPSBvcHRpb25zLmRpc2FibGVkU3RhdGUgPyB7XG5cdFx0XHRvcGFjaXR5OiAuNVxuXHRcdFx0fVxuXHRcdEBfZGVmYXVsdFN0YXRlID0gb3B0aW9ucy5kZWZhdWx0U3RhdGVcblxuXG5cdFx0XG5cdFx0QF9pc09uID0gb3B0aW9ucy5pc09uID8gZmFsc2Vcblx0XHRAX29uQWN0aW9uID0gb3B0aW9ucy5vbkFjdGlvbiA/IC0+IG51bGxcblx0XHRAX29mZkFjdGlvbiA9IG9wdGlvbnMub2ZmQWN0aW9uID8gLT4gbnVsbFxuXHRcdFxuXHRcdEBfYWN0aW9uID0gb3B0aW9ucy5hY3Rpb24gPyAtPiBudWxsXG5cdFx0QF9zY29wZSA9IG9wdGlvbnMuc2NvcGUgPyBAXG5cblx0XHRAaSA9IG9wdGlvbnMuaSA/IDBcblx0XHRcblx0XHRzdXBlciBfLmRlZmF1bHRzIG9wdGlvbnMsXG5cdFx0XHRoZWlnaHQ6IDMyLCB3aWR0aDogaWYgQF90eXBlIGlzICdsYWJlbCcgdGhlbiAxMjAgZWxzZSA4MFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAnI0ZGRicsIGNvbG9yOiAnIzAwMCdcblx0XHRcdGJvcmRlckNvbG9yOiAnIzMzMycsIGJvcmRlcldpZHRoOiAxLCBib3JkZXJSYWRpdXM6IDRcblx0XHRcdGFuaW1hdGlvbk9wdGlvbnM6IHt0aW1lOiAuMTV9XG5cdFx0XHR0ZXh0OiBvcHRpb25zLnRleHQgPyAnQnV0dG9uJ1xuXHRcdFx0Y2xpcDogdHJ1ZVxuXG5cdFx0IyBMSU5LXG5cdFx0XG5cdFx0aWYgQF9saW5rXG5cdFx0XHRAcHJvcHMgPVxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGwsXG5cdFx0XHRcdGJvcmRlcldpZHRoOiBudWxsXG5cdFx0XG5cdFx0IyBTVEFURVNcblx0XHRcblx0XHRAc3RhdGVzID1cblx0XHRcdCMgb2ZmOiBfLmNsb25lKEBzdGF0ZXMuZGVmYXVsdClcblx0XHRcdG9uOiBAX29uU3RhdGVcblx0XHRcdHRvdWNoOiBAX3RvdWNoU3RhdGVcblx0XHRcdGhvdmVyOiBAX2hvdmVyU3RhdGVcblx0XHRcdGRpc2FibGVkOiBAX2Rpc2FibGVkU3RhdGVcblx0XHRcdGRlZmF1bHQ6IEBfZGVmYXVsdFN0YXRlID8gQHN0YXRlcy5kZWZhdWx0XG5cdFx0XG5cdFx0IyBQcmV2ZW50IHZhbHVlIChpbiBsYWJlbCBidXR0b25zKSBmcm9tIGNoYW5naW5nIGJhY2sgdG8gc3RhcnRpbmcgdmFsdWUuXG5cdFx0Zm9yIHN0YXRlIGluIF8ua2V5cyhAc3RhdGVzKVxuXHRcdFx0ZGVsZXRlIEBzdGF0ZXNbc3RhdGVdLnZhbHVlXG5cdFx0XG5cdFx0XG5cdFx0IyBURVhUXG5cdFx0XG5cdFx0QGJ1dHRvblRleHQgPSBuZXcgVGV4dExheWVyXG5cdFx0XHRuYW1lOiAnLicsIHBhcmVudDogQFxuXHRcdFx0eDogMCwgeTogQWxpZ24uY2VudGVyLCBcblx0XHRcdHdpZHRoOiBAd2lkdGgsIGhlaWdodDogQGhlaWdodFxuXHRcdFx0Zm9udFNpemU6IDEzLCBjb2xvcjogQGNvbG9yLCBmb250V2VpZ2h0OiA2MDBcblx0XHRcdHBhZGRpbmc6IHt0b3A6IDh9LCB0ZXh0QWxpZ246ICdjZW50ZXInXG5cdFx0XHR0ZXh0OiBcIiN7QF90ZXh0fVwiID8gJ0J1dHRvbidcblxuXHRcdCMgSUNPTlxuXHRcdFxuXHRcdGlmIEBfaWNvbj9cblx0XHRcdEBidXR0b25UZXh0LnZpc2libGUgPSBmYWxzZVxuXHRcdFx0XG5cdFx0XHRAaWNvbkxheWVyID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDogQFxuXHRcdFx0XHRoZWlnaHQ6IEBfaWNvblNpemUuaGVpZ2h0ID8gQGhlaWdodFxuXHRcdFx0XHR3aWR0aDogIEBfaWNvblNpemUud2lkdGggPyBAaGVpZ2h0XG5cdFx0XHRcdHg6IEFsaWduLmNlbnRlcigxKSwgXG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRpbWFnZTogXCJpbWFnZXMvaWNvbnMvI3tAX2ljb259LnBuZ1wiXG5cdFx0XHRcblx0XHRcdEBpY29uTGF5ZXIucGl4ZWxBbGlnbigpXG5cdFx0XHRcdFxuXHRcdCMgRkxPQVRcblx0XHRcblx0XHRpZiBAX2Zsb2F0XG5cdFx0XHRfLm1lcmdlIEBzdGF0ZXMuZGVmYXVsdCxcblx0XHRcdFx0c2hhZG93WDogMSwgXG5cdFx0XHRcdHNoYWRvd1k6IDIsXG5cdFx0XHRcdHNoYWRvd0JsdXI6IDVcblxuXHRcdFx0Xy5tZXJnZSBAc3RhdGVzLmhvdmVyLFxuXHRcdFx0XHRzaGFkb3dYOiAxLCBcblx0XHRcdFx0c2hhZG93WTogMixcblx0XHRcdFx0c2hhZG93Qmx1cjogNVxuXHRcdFx0XG5cdFx0XHRfLm1lcmdlIEBzdGF0ZXMudG91Y2gsXG5cdFx0XHRcdHNoYWRvd1g6IDAsIFxuXHRcdFx0XHRzaGFkb3dZOiAwLFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAwXG5cdFx0XHRcdFxuXHRcdFx0Xy5tZXJnZSBAc3RhdGVzLm9uLFxuXHRcdFx0XHRzaGFkb3dYOiAwLCBcblx0XHRcdFx0c2hhZG93WTogMCxcblx0XHRcdFx0c2hhZG93Qmx1cjogMFxuXHRcdFx0XG5cdFx0XHRfLm1lcmdlIEBzdGF0ZXMuZGlzYWJsZWQsXG5cdFx0XHRcdHNoYWRvd1g6IDAsIFxuXHRcdFx0XHRzaGFkb3dZOiAwLFxuXHRcdFx0XHRzaGFkb3dCbHVyOiAwXG5cblx0XHQjIFRPR0dMRVxuXG5cdFx0aWYgQF9pc09uXG5cdFx0XHRAYW5pbWF0ZSgndG91Y2gnKVxuXHRcdFx0QGJ1dHRvblRleHQuY29sb3IgPSBAc3RhdGVzLnRvdWNoLmNvbG9yXG5cblx0XHQjIFRPVUNIIEVWRU5UU1xuXHRcdFxuXHRcdEBvblRvdWNoU3RhcnQgPT4gXG5cdFx0XHRAYW5pbWF0ZSgndG91Y2gnKVxuXHRcdFx0QGJ1dHRvblRleHQuY29sb3IgPSBAc3RhdGVzLnRvdWNoLmNvbG9yXG5cblx0XHQjIEhPVkVSIEVWRU5UUyBcblxuXHRcdGlmIEBfaG92ZXJcblx0XHRcdEBvbk1vdXNlT3ZlciAtPiBAYW5pbWF0ZSgnaG92ZXInKVxuXHRcdFx0QG9uTW91c2VPdXQgLT4gXG5cdFx0XHRcdGlmIEBfaXNPblxuXHRcdFx0XHRcdEBhbmltYXRlKCdvbicpXG5cdFx0XHRcdFx0QGJ1dHRvblRleHQuY29sb3IgPSBAc3RhdGVzLm9uLmNvbG9yID8gY29sb3Jcblx0XHRcdFx0ZWxzZSBpZiBAX2Rpc2FibGVkIGlzIHRydWUgdGhlbiBAYW5pbWF0ZSgnZGlzYWJsZWQnKVxuXHRcdFx0XHRlbHNlIFxuXHRcdFx0XHRcdEBhbmltYXRlKCdkZWZhdWx0Jylcblx0XHRcdFx0XHRAYnV0dG9uVGV4dC5jb2xvciA9IEBzdGF0ZXMuZGVmYXVsdC5jb2xvclxuXHRcdFxuXHRcdCMgVFlQRVNcblxuXHRcdHN3aXRjaCBAX3R5cGVcblx0XHRcdHdoZW4gJ2Jhc2ljJ1xuXHRcdFx0XHRAb25Ub3VjaEVuZCAtPiBcblx0XHRcdFx0XHRfLmJpbmQoQF9hY3Rpb24sIEBfc2NvcGUpKClcblx0XHRcdFx0XHRAcmVzZXQoKVxuXHRcdFx0XHRcblx0XHRcdHdoZW4gJ3RvZ2dsZSdcblx0XHRcdFx0QG9uVG91Y2hFbmQgLT4gQGlzT24gPSAhQF9pc09uXG5cdFx0XHRcblx0XHRcdHdoZW4gJ2xhYmVsJ1xuXHRcdFx0XHRAb25Ub3VjaEVuZCAtPiBcblx0XHRcdFx0XHRfLmJpbmQoQF9hY3Rpb24sIEBfc2NvcGUpKClcblx0XHRcdFx0XHRAcmVzZXQoKVxuXHRcdFx0XHRcblx0XHRcdFx0d2lkdGggPSBAd2lkdGhcblx0XHRcdFx0QGJ1dHRvblRleHQud2lkdGggPSB3aWR0aCAqICgxLUBfbGFiZWxXaWR0aClcblx0XHRcdFx0QGljb25MYXllcj8ueCA9ICh3aWR0aCAqICgxLUBfbGFiZWxXaWR0aCkpIC8gMiAtIChAaGVpZ2h0LzIpXG5cdFx0XHRcdFxuXHRcdFx0XHRAbGFiZWxMYXllciA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdFx0XHRuYW1lOiAnLicsIHBhcmVudDogQFxuXHRcdFx0XHRcdHg6IEFsaWduLnJpZ2h0KDEpLCB5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0XHR3aWR0aDogd2lkdGggKiBAX2xhYmVsV2lkdGgsIGhlaWdodDogQGhlaWdodFxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQF9sYWJlbEJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdGNvbG9yOiBAX2xhYmVsQ29sb3IsIGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IDEzXG5cdFx0XHRcdFx0cGFkZGluZzoge3RvcDogOH1cblx0XHRcdFx0XHR0ZXh0QWxpZ246ICdjZW50ZXInXG5cdFx0XHRcdFx0dGV4dDogXCIje0BfdmFsdWV9XCJcblx0XHRcdFx0XHRcblx0XHRcdFx0QGxhYmVsTGF5ZXIub25Ub3VjaFN0YXJ0IChldmVudCkgLT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdFx0QGxhYmVsTGF5ZXIub25Ub3VjaEVuZCAoZXZlbnQpIC0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHRcblx0XHRcdFx0XG5cdFx0XHRcdEBzZXBhcmF0b3IgPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRuYW1lOiAnLicsIHBhcmVudDogQFxuXHRcdFx0XHRcdHg6IEBsYWJlbExheWVyLnggLSAxXG5cdFx0XHRcdFx0aGVpZ2h0OiBAaGVpZ2h0LCB3aWR0aDogMVxuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogQGJvcmRlckNvbG9yXG5cdFx0XHRcdFx0XG5cdFx0XHRlbHNlIHRocm93IFwiQnV0dG9uIGhhcyBubyB0eXBlIG5hbWVkICN7QF90eXBlfS5cIlxuXHRcdFxuXG5cdFx0QHRleHRTdHlsZSA9IEBfdGV4dFN0eWxlXG5cblx0XHQjIERJU0FCTEVEXG5cdFx0XG5cdFx0c3dpdGNoIEBfZGlzYWJsZWRcblx0XHRcdHdoZW4gdHJ1ZVxuXHRcdFx0XHRAaWdub3JlRXZlbnRzID0gdHJ1ZVxuXHRcdFx0XHRAYW5pbWF0ZSgnZGlzYWJsZWQnKVxuXHRcdFx0d2hlbiBmYWxzZVxuXHRcdFx0XHRAaWdub3JlRXZlbnRzID0gZmFsc2Vcblx0XHRcdFx0QGFuaW1hdGUoJ2RlZmF1bHQnKVxuXHRcdFxuXHRyZXNldDogKGZvcmNlZCkgLT5cblx0XHRpZiBAX2hvdmVyIGFuZCBub3QgZm9yY2VkXG5cdFx0XHRAYW5pbWF0ZSgnaG92ZXInKVxuXHRcdFx0QGJ1dHRvblRleHQuY29sb3IgPSBAc3RhdGVzLmhvdmVyLmNvbG9yID8gQHN0YXRlcy5kZWZhdWx0LmNvbG9yXG5cdFx0ZWxzZSBcblx0XHRcdEBhbmltYXRlKCdkZWZhdWx0Jylcblx0XHRcdEBidXR0b25UZXh0LmNvbG9yID0gQHN0YXRlcy5kZWZhdWx0LmNvbG9yXG5cdFx0XG5cdEBkZWZpbmUgXCJpc09uXCIsXG5cdFx0Z2V0OiAtPiByZXR1cm4gQF9pc09uIFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0cmV0dXJuIGlmIEBfaXNPbiBpcyB2YWx1ZSBcblx0XHRcdFxuXHRcdFx0QF9pc09uID0gdmFsdWVcblx0XHRcdEBlbWl0KCdjaGFuZ2U6aXNPbicsIEBfaXNPbiwgQClcblx0XHRcdHN3aXRjaCBAX2lzT25cblx0XHRcdFx0d2hlbiBmYWxzZVxuXHRcdFx0XHRcdEByZXNldCh0cnVlKVxuXHRcdFx0XHRcdF8uYmluZChAX29mZkFjdGlvbiwgQF9zY29wZSkoKVxuXHRcdFx0XHR3aGVuIHRydWVcblx0XHRcdFx0XHRAYW5pbWF0ZSgnb24nKVxuXHRcdFx0XHRcdEBidXR0b25UZXh0LmNvbG9yID0gQHN0YXRlcy5vbi5jb2xvciA/IGNvbG9yXG5cdFx0XHRcdFx0Xy5iaW5kKEBfb25BY3Rpb24sIEBfc2NvcGUpKClcblxuXHRAZGVmaW5lIFwidGV4dFN0eWxlXCIsXG5cdFx0Z2V0OiAtPiByZXR1cm4gQF90ZXh0U3R5bGVcblx0XHRzZXQ6IChvYmplY3QpIC0+XG5cdFx0XHRAYnV0dG9uVGV4dD8ucHJvcHMgPSBvYmplY3RcblxuXHRAZGVmaW5lIFwidGV4dFwiLFxuXHRcdGdldDogLT4gcmV0dXJuIEBfdGV4dFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0QGVtaXQoJ2NoYW5nZTp0ZXh0JywgQF90ZXh0LCBAKVxuXHRcdFx0cmV0dXJuIGlmIEBfdGV4dCBpcyB2YWx1ZSBcblx0XHRcdFxuXHRcdFx0QF90ZXh0ID0gdmFsdWVcblx0XHRcdEBidXR0b25UZXh0Py50ZXh0ID0gdmFsdWVcblxuXHRAZGVmaW5lIFwidmFsdWVcIixcblx0XHRnZXQ6IC0+IHJldHVybiBAX3ZhbHVlIFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0cmV0dXJuIGlmIEBfdmFsdWUgaXMgdmFsdWUgXG5cdFx0XHRAX3ZhbHVlID0gdmFsdWVcblx0XHRcdFxuXHRcdFx0QGVtaXQoJ2NoYW5nZTp2YWx1ZScsIEBfdmFsdWUsIEApXG5cdFx0XHRzd2l0Y2ggQF90eXBlXG5cdFx0XHRcdHdoZW4gJ2xhYmVsJ1xuXHRcdFx0XHRcdEBsYWJlbExheWVyLnRleHQgPSBcIiN7QF92YWx1ZX1cIlxuXHRcblx0QGRlZmluZSBcImRpc2FibGVkXCIsXG5cdFx0Z2V0OiAtPiByZXR1cm4gQF9kaXNhYmxlZFxuXHRcdHNldDogKHZhbHVlKSAtPlxuXHRcdFx0cmV0dXJuIGlmIEBfZGlzYWJsZWQgaXMgdmFsdWVcblx0XHRcdEBfZGlzYWJsZWQgPSB2YWx1ZVxuXHRcdFx0XG5cdFx0XHRAZW1pdCgnY2hhbmdlOmRpc2FibGVkJywgQF9kaXNhYmxlZCwgQClcblx0XHRcdHN3aXRjaCBAX2Rpc2FibGVkXG5cdFx0XHRcdHdoZW4gdHJ1ZVxuXHRcdFx0XHRcdEBpZ25vcmVFdmVudHMgPSB0cnVlXG5cdFx0XHRcdFx0QGFuaW1hdGUoJ2Rpc2FibGVkJylcblx0XHRcdFx0d2hlbiBmYWxzZVxuXHRcdFx0XHRcdEBpZ25vcmVFdmVudHMgPSBmYWxzZVxuXHRcdFx0XHRcdEBhbmltYXRlKCdkZWZhdWx0JykiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBREdBLElBQUEsTUFBQTtFQUFBOzs7QUFBQSxPQUFPLENBQUMsTUFBUixHQUF1Qjs7O0VBQ1QsZ0JBQUMsT0FBRDtBQUVaLFFBQUE7O01BRmEsVUFBVTs7SUFFdkIsSUFBQyxDQUFBLEtBQUQsd0NBQXdCO0lBRXhCLElBQUMsQ0FBQSxLQUFELDBDQUF3QjtJQUN4QixJQUFDLENBQUEsTUFBRCwyQ0FBMEI7SUFDMUIsSUFBQyxDQUFBLE1BQUQsMkNBQTBCO0lBQzFCLElBQUMsQ0FBQSxTQUFELDhDQUFnQztJQUNoQyxJQUFDLENBQUEsS0FBRCwwQ0FBd0I7SUFFeEIsS0FBQSwyQ0FBMkIsSUFBQyxDQUFBLEtBQUosR0FBZSxJQUFDLENBQUEsS0FBaEIsR0FBMkI7SUFDbkQsZUFBQSxxREFBNEM7SUFDNUMsVUFBQSxHQUFnQixJQUFDLENBQUEsS0FBSixHQUFlLElBQWYsR0FBNEIsZUFBQSxLQUFtQixNQUF0QixHQUFrQyxLQUFLLENBQUMsR0FBTixDQUFVLGVBQVYsRUFBMkIsTUFBM0IsRUFBbUMsR0FBbkMsQ0FBbEMsR0FBK0UsS0FBSyxDQUFDLEdBQU4sQ0FBVSxlQUFWLEVBQTJCLE1BQTNCLEVBQW1DLEdBQW5DO0lBQ3JILFVBQUEsR0FBZ0IsZUFBQSxLQUFtQixNQUF0QixHQUFrQyxLQUFLLENBQUMsR0FBTixDQUFVLGVBQVYsRUFBMkIsTUFBM0IsRUFBbUMsR0FBbkMsQ0FBbEMsR0FBK0UsS0FBSyxDQUFDLEdBQU4sQ0FBVSxlQUFWLEVBQTJCLE1BQTNCLEVBQW1DLEdBQW5DO0lBQzVGLFVBQUEsR0FBZ0IsZUFBQSxLQUFtQixNQUF0QixHQUFrQyxLQUFLLENBQUMsR0FBTixDQUFVLGVBQVYsRUFBMkIsTUFBM0IsRUFBbUMsR0FBbkMsQ0FBbEMsR0FBK0UsS0FBSyxDQUFDLEdBQU4sQ0FBVSxlQUFWLEVBQTJCLE1BQTNCLEVBQW1D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
