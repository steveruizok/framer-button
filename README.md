# Button

The Button module allows you to quickly include working button instances in your Framer project.

See examples at [https://framer.cloud/yyUMF](https://framer.cloud/yyUMF).

![alt text](/example.png "Framer Button")

## Introduction

The Button class provides several options that you can use in combination to create your different button styles. All aspects of a Button may be defined together in the Button's options. These include the Button's initial appearance, the states it will use to display different stages of an interaction, and the action to take when the Button is tapped.

## Usage

Drag the Button.coffee file into your project's modules folder. 

At the top of your project, include the code:

```coffeescript
{Button} = require 'Button'
```

Create your first Button using the code: 

```coffeescript
myButton = new Button
```

## Styling Buttons

### Type

Each button has a property named `type`. There are three main types: `basic`, `toggle`, and `label`. By default, a button's type is `'basic'`. To change the type of a button, set the type property when creating your button.

```coffeescript
myBasicButton = new Button
	y: 0
	type: 'basic'

myToggleButton = new Button
	y: 50
	type: 'toggle'

myLabelButton = new Button
	y: 100
	type: 'label'
```

Buttons with the `toggle` or `label` types have additional properties, discussed below.

### Style Options


The above styles may be combined with four styling options, `float`, `hover`, `disabled` and `link`. These may be enabled by setting their respective properties to `true`. 

By default, `float`, `disabled`, and `link` are set to `false`, while `hover` is set to true. The color of a tapped button with a `link` type can be set with the `tint` property.

```coffeescript
myNoHoverButton = new Button
	y: 0
	hover: false

myDisabledButton = new Button
	y: 50
	disable: true

myFloatButton = new Button
	y: 100
	float: true

myLinkButton = new Button
	y: 150
	link: true

myFloatyDisablyHoveringLinkishButton = new Button
	float: true
	link: true
	hover: true
	disabled: true
	y: 200
```

### Text

By default, a Button instance displays a centered text label. The content of this text layer may be changed using the `text` property. Unlike TextLayers, buttons do not autosize to fit its text content. Text that is wuder than the button will clip be clipped by the sides of the button.

```coffeescript
myBasicButton = new Button
	text: 'Click here!'
```

The button's text style can be defined using the `textStyle` property. 

```coffeescript
myBasicButton = new Button
	text: 'Click here!'
	textStyle:
		fontFamily: 'Menlo'
		fontSize: 10
		textTransform: 'uppercase'
		padding:
			top: 12
```

### Icon

A button may optionally be set using an icon. Setting an icon removes the text content of a button and replaces it with an image. The `icon` property accepts a filename of a .png in the folder `images/icons`. 

```coffeescript
myBasicButton = new Button
	icon: 'check'
```

The icon's height and width are both set equal using the property `'iconSize'`. By default, `iconSize` is uses the button's height for both the icon's height and width.

```coffeescript
myBasicButton = new Button
	iconSize:
		height: 12, width: 40
	icon: 'check'
```

In the example above, creating a button with `icon: check` would give the button an icon using the image `images/icons/check.png`. 

To start, you can use the icons folder bundled with this module, or create an `images/icons` folder in your project and fill it with your own icons. 

## States

Each Button has three basic states named `touch`, `hover`, and `disabled`. These states define how a Button appears at different times. 

They may be set when the Button is created using the properties `touchState`, `hoverState` and `disabledState`.

```coffeescript
myBasicButton = new Button
	touchState:
		backgroundColor: 'red'
		color: 'grey'
	hoverState:
		backgroundColor: 'orange'
		color: 'white'
	disabledState:
		opacity: .1
```

You may also set these states later in the code by changing a Button's states object.

```coffeescript
myBasicButton = new Button
	touchState:
		backgroundColor: 'blue'

myOtherButton = new Button
	y: 50
	action: -> 
		myBasicButton.states.touch =
			backgroundColor: 'red'
```

Buttons with the `toggle` type an additional state named `on`, displayed when the button is toggled on. This may be set using the `onState` property.

```coffeescript
myToggleButton = new Button
	type: 'toggle'
	onState:
		backgroundColor: 'blue'
```

A fourth state, `default`, is set automatically using the Button's initial display properties, and is used whenever the button returns to normal. In cases where you need to change this state, it may be set using the `defaultState` property.

```coffeescript
myButton = new Button
	defaultState:
		backgroundColor: '#FFF'
	action: ->
		@animate
			y: @y + 10
```

In the example above, defining the default state prevents the button from returning to `y: 0`.

## Actions

All buttons have a property named `action` that stores a function. When a button is tapped, this function runs.

```coffeescript
myButton = new Button
	action: -> print 'Hello world!'
```

The one exception is buttons with the `'toggle'` type. These buttons have two properties, `toggleOn` and `toggleOff`, that each store a different function. When a `'toggle'` type button is toggled on, it runs its `toggleOn` function. When it is toggled back to off, it runs its `toggleOff` function.

```coffeescript
myToggleButton = new Button
	type: 'toggle'
	toggleOn: -> print 'Turned on!'
	toggleOff: -> print 'Turned off!'
```

By default, the scope of a button's actions (ie the definition of `this` or its alias `@` within the function) is set to the button itself. A button's scope can be set manually using the `'scope'` property. If the scope is set, all instances of `this` or `@` will resolve to the value of `'scope'`.

```coffeescript
selfScopedButton = new Button
	action: -> 
		@text = 'Tapped!'

otherScopedButton = new Button
	scope: selfScopedButton
	x: Align.center(100)
	action: ->
		@text = 'Tricked!'
```

## Types in Detail

### Toggle

Buttons with the `toggle` type can be toggled on or off either by user interaction or through the `isOn` property. 

A common case is a button group where only one button should be toggled at once. In such a case, you can use a Button's `onAction` together with the `isOn` property, so that when a button is turned on, it will turn off all other buttons in the group.

```coffeescript
sizes = new Layer
	width: 272, height: 32
	x: Align.center
	backgroundColor: null

for size, i in ['S', 'M', 'L']
	button = new Button
		parent: sizes
		x: 96 * i
		type: 'toggle'
		text: size
		value: size
		onAction: -> sib.isOn = false for sib in @siblings
```

The easiest way to target all buttons in the group other than the button running the action is to use a parent layer and `for sib in @siblings`, as shown above. Alternatively, you could push the buttons into an array and use `for button in _.without(myArray, @)`


### Label

Buttons with the `'label'` have a label on the right side of the button. They have several additional properties for styling and controlling this label.

The property `labelWidth` defines the proportion of the button's horizontal width taken up by the button's label. A value of `0` would hide the label completely, while a value of `1` would hide the counter completely. By default, this is set to `0.382`.

The color of this label's text may be set using `labelColor`. The label's background color may be set using `backgroundColor`.

The value of the counter may be accessed or set using the property `value`. All button layers have a property named `i`, set by default to `0`. Together, these can be used to create a simple counter.

```coffeescript
label = new Button
	type: 'label'
	action: ->
		@i++
		@value = @i
```

## Events 

All buttons emit events when their `disabled` property changes. These can be listened for using the `"change:disabled"` event.

```coffeescript
button = new Button
	action: -> @disabled = true

reset = new Button
	x: 96
	action: -> button.disabled = false

button.on "change:disabled", (disabled, button) ->
	print button
	print disabled
```

All buttons emit events when their `text` property changes. These can be listened for using the `"change:text"` event.

```coffeescript
button = new Button
	action: -> @text = "Random: #{_.random(10)}"

button.on "change:text", (text, button) ->
	print button
	print text
```

All buttons emit events when their `value` property changes. These can be listened for using the `"change:value"` event.

```coffeescript
button = new Button
	action: -> 
		@value += 2

button.on "change:value", (value, button) ->
	print button
	print value
```

Buttons with the `toggle` type emit events when their `isOn` property changes. These can be listened for using the `"change:isOn"` event.

```coffeescript
toggleButton = new Button
	type: 'toggle'

toggleButton.on "change:isOn", (isOn, button) ->
	print button
	print isOn
```


## Extending Button

You can easily use Button as a foundation for custom classes. If your project uses many buttons with the same default styling, you may prefer to extend Button rather than re-enter styles on each button instance.

```coffeescript
class Fab extends Button
	constructor: (options) ->
		super _.defaults options,
			width: 40, height: 40, borderRadius: 20
			backgroundColor: 'rgba(89, 224, 140, 1)'
			icon: 'check', iconSize: 16
			float: true
			touchState:
				backgroundColor: 'rgba(57, 174, 27, 1)'
			hoverState:
				backgroundColor: 'rgba(0, 217, 0, 1)'
			disabledState:
				backgroundColor: 'rgba(167, 198, 170, 1)'
				

myFab = new Fab
```

Use the `scope` property to create buttons that can work with different components. In this example, the Prev and Next buttons only work when scoped to a Page Component - but they can work with any Page Component. 

You might use the same method to create a 'back' button for a flow component, a 'scroll to top' button for Scroll Components, a 'return to center' for a draggable map, etc.

```coffeescript
class PrevButton extends Button
	constructor: (options) ->
		super _.defaults options,
			icon: 'arrow-back'
			link: true
			action: -> @snapToPreviousPage()

class NextButton extends Button
	constructor: (options) ->
		super _.defaults options,
			icon: 'arrow-forward'
			link: true
			action: -> @snapToNextPage()


# create a page component

pager = new PageComponent
	x: Align.center


# create some pages

for i in [0..3]
	page = new Layer
		size: Screen.size
		backgroundColor: Color.mix('#777', '#CCC', i/3)
	pager.addPage(page)


# create prev and next buttons, scoped to the page component

backButton = new PrevButton
	x: Align.center(-120)
	scope: pager

nextButton = new NextButton
	x: Align.center(120)
	scope: pager
```

## Table of Properties

The following properties may be set when creating a Button.

property | typeof | default
:--- | :--- | :---
type | string | `'basic'`
text | string | `'button'`
textStyle | object | `{fontSize: 13, padding:{top:6}}`
action | function | `-> return null`
scope | object | `@`
link | boolean | `false`
hover | boolean | `true`
float | boolean | `false`
disabled | boolean | `false`
hoverState | object | 
touchState | object |
onState | object |
defaultState | object |
tint | string | `'rgba(0, 179, 231, 1)'`
disabledState | object | `{opacity: .5}`
icon | string | `''`
iconSize | object | `{height: undefined, width: undefined}`
labelWidth | number | `.34`
labelBackgroundColor | string | `slightly darker or lighter than Button`
labelColor | string | `'#000' or Button.color`
value | number | `0`
isOn | boolean | `false`
onAction | function | `-> return null`
offAction | function | `-> return null`
i | number | `0`



