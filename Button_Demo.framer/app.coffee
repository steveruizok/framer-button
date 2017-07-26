{Button} = require 'Button'
Screen.backgroundColor = '#FFF'

container = new Layer
	backgroundColor: null
	x: 32, y: 32

# Button Types

basicButtons = new Layer
	parent: container
	backgroundColor: null

basicButtonsLabel = new TextLayer
	parent: basicButtons
	fontSize: 20, color: '#000'
	text: 'Button types'

# --

basic1 = new Button
	parent: basicButtons
	text: 'Basic'
	y: 48

basic2 = new Button
	parent: basicButtons
	y: 48, x: basic1.maxX + 16
	type: 'toggle'
	text: 'Toggle'

basic3 = new Button
	parent: basicButtons
	y: 48, x: basic2.maxX + 16
	type: 'label'
	text: 'Label'

basicButtons.props = 
	height: basic3.maxY
	width: basic3.maxX

# Styling Options

stylingOptions = new Layer
	backgroundColor: null
	parent: container
	y: 120

stylingOptionsLabel = new TextLayer
	parent: stylingOptions
	fontSize: 20, color: '#000'
	text: 'Styling options'

# --

link1 = new Button
	parent: stylingOptions
	y: 48
	text: 'Link'
	link: true

link2 = new Button
	parent: stylingOptions
	y: 48, x: link1.maxX + 16
	type: 'toggle'
	text: 'Toggle Link'
	link: true

link3 = new Button
	parent: stylingOptions
	y: 48, x: link2.maxX + 16
	type: 'label'
	text: 'Label Link'
	link: true

# --

float1 = new Button
	parent: stylingOptions
	y: 96
	text: 'Basic'
	float: true

float2 = new Button
	parent: stylingOptions
	y: 96, x: basic1.maxX + 16
	type: 'toggle'
	text: 'Toggle'
	float: true

float3 = new Button
	parent: stylingOptions
	y: 96, x: basic2.maxX + 16
	type: 'label'
	text: 'Label'
	float: true

# --

hover1 = new Button
	parent: stylingOptions
	y: 144
	text: 'Basic'
	hover: false

hover2 = new Button
	parent: stylingOptions
	y: 144, x: basic1.maxX + 16
	type: 'toggle'
	text: 'Hover'
	hover: false

hover3 = new Button
	parent: stylingOptions
	y: 144, x: basic2.maxX + 16
	type: 'label'
	text: 'Hover'
	hover: false

# --

disabled1 = new Button
	parent: stylingOptions
	y: 192
	text: 'Basic'
	disabled: true

disabled2 = new Button
	parent: stylingOptions
	y: 192, x: basic1.maxX + 16
	type: 'toggle'
	text: 'Hover'
	disabled: true

disabled3 = new Button
	parent: stylingOptions
	y: 192, x: basic2.maxX + 16
	type: 'label'
	text: 'Hover'
	disabled: true

stylingOptions.props = 
	height: disabled3.maxY
	width: disabled3.maxX

# Icon Variant

iconVariants = new Layer
	backgroundColor: null
	parent: container
	y: stylingOptions.maxY + 32

iconVariantsLabel = new TextLayer
	parent: iconVariants
	fontSize: 20, color: '#000'
	text: 'Icon Variant'

# --

link1 = new Button
	parent: iconVariants
	y: 48
	text: 'Link'
	link: true
	icon: 'check'

link2 = new Button
	parent: iconVariants
	y: 48, x: link1.maxX + 16
	type: 'toggle'
	text: 'Toggle Link'
	link: true
	icon: 'check'

link3 = new Button
	parent: iconVariants
	y: 48, x: link2.maxX + 16
	type: 'label'
	text: 'Label Link'
	link: true
	icon: 'check'

# --

float1 = new Button
	parent: iconVariants
	y: 96
	text: 'Basic'
	float: true
	icon: 'check'

float2 = new Button
	parent: iconVariants
	y: 96, x: basic1.maxX + 16
	type: 'toggle'
	text: 'Toggle'
	float: true
	icon: 'check'

float3 = new Button
	parent: iconVariants
	y: 96, x: basic2.maxX + 16
	type: 'label'
	text: 'Label'
	float: true
	icon: 'check'

# --

hover1 = new Button
	parent: iconVariants
	y: 144
	text: 'Basic'
	hover: false
	icon: 'check'

hover2 = new Button
	parent: iconVariants
	y: 144, x: basic1.maxX + 16
	type: 'toggle'
	text: 'Hover'
	hover: false
	icon: 'check'

hover3 = new Button
	parent: iconVariants
	y: 144, x: basic2.maxX + 16
	type: 'label'
	text: 'Hover'
	hover: false
	icon: 'check'

# --

disabled1 = new Button
	parent: iconVariants
	y: 192
	text: 'Basic'
	disabled: true
	icon: 'check'

disabled2 = new Button
	parent: iconVariants
	y: 192, x: basic1.maxX + 16
	type: 'toggle'
	text: 'Hover'
	disabled: true
	icon: 'check'

disabled3 = new Button
	parent: iconVariants
	y: 192, x: basic2.maxX + 16
	type: 'label'
	text: 'Hover'
	disabled: true
	icon: 'check'

iconVariants.props = 
	height: disabled3.maxY
	width: disabled3.maxX

# Actions

actionButtons = new Layer
	parent: container
	backgroundColor: null
	x: Align.center
	y: iconVariants.maxY + 32

actionButtonsLabel = new TextLayer
	parent: actionButtons
	fontSize: 20, color: '#000'
	text: 'Actions'

# --

basic1 = new Button
	parent: actionButtons
	text: 'Basic'
	y: 48
	action: -> 
		changeMe.text = "Basic tapped."

basic2 = new Button
	parent: actionButtons
	y: 48, x: basic1.maxX + 16
	type: 'toggle'
	text: 'Toggle'
	onAction: -> 
		changeMe.text = "Toggle's isOn is #{@isOn}."
	offAction: -> 
		changeMe.text = "Toggle's isOn is #{@isOn}."

basic3 = new Button
	parent: actionButtons
	y: 48, x: basic2.maxX + 16
	type: 'label'
	text: 'Label'
	action: -> 
		@value++
		changeMe.text = "Label value is #{@value}."

changeMe = new TextLayer
	parent: actionButtons
	y: basic3.maxY + 32
	fontSize: 18, fontWeight: 500, color: '#000'
	text: 'Tap a button to start.'

actionButtons.props = 
	height: changeMe.maxY
	width: basic3.maxX

# Button Group

buttonGroup = new Layer
	parent: container
	backgroundColor: null
	x: Align.center
	y: actionButtons.maxY + 32

actionButtonsLabel = new TextLayer
	parent: buttonGroup
	fontSize: 20, color: '#000'
	text: 'Button Group'

# --

toggle1 = new Button
	parent: buttonGroup
	y: 48
	type: 'toggle'
	text: 'S'
	onAction: -> sib.isOn = false for sib in @siblings

toggle2 = new Button
	parent: buttonGroup
	y: 48, x: basic1.maxX + 16
	type: 'toggle'
	text: 'M'
	onAction: -> sib.isOn = false for sib in @siblings

toggle3 = new Button
	parent: buttonGroup
	y: 48, x: basic2.maxX + 16
	type: 'toggle'
	text: 'L'
	onAction: -> sib.isOn = false for sib in @siblings

buttonGroup.props = 
	width: basicButtons.width
	height: changeMe.maxY
	
# 
# # FURNITURE
# 
# headline = new TextLayer
# 	x: Align.center, y: Screen.height * .18
# 	color: '#333', fontWeight: 500
# 	text: 'Button'
# 
# detail = new TextLayer
# 	x: Align.center, y: headline.maxY + 8
# 	fontSize: 14, color: '#333', fontWeight: 500
# 	text: 'by @steveruizok'
# 	
# changeMe = new TextLayer
# 	x: Align.center, y: Align.center(150)
# 	color: '#333', fontWeight: 500
# 	fontSize: 18, text: 'Tap a button to start.'
# 	
# changeMe.on "change:text", -> changeMe.textAlign = 'center'
# 
# # BASIC
# 
# basic = new Button
# 	x: Align.center(-180), y: Align.center(-100)
# # 	type: 'basic'
# 	text: 'Basic'
# 	action: -> changeMe.text = 'Basic button tapped.'
# 
# # TOGGLE
# 
# toggle = new Button
# 	x: basic.maxX + 8, y: basic.y
# 	type: 'toggle'
# 	text: 'Toggle'
# 	toggleOn: -> changeMe.text = "Toggle button toggled: #{@isOn}."
# 	toggleOff: -> changeMe.text = "Toggle button toggled: #{@isOn}."
# 
# # LABEL
# 
# label = new Button
# 	name: 'label button'
# 	x: toggle.maxX + 8, y: basic.y
# 	width: 120
# 	type: 'label'
# 	text: 'Label'
# 	action: ->
# 		@i++
# 		@value = @i
# 		changeMe.text = "Label value: #{@i}."
# 
# # ICON
# 
# icon = new Button
# 	x: label.maxX + 8, y: basic.y
# 	width: 32
# 	icon: 'add'
# 	action: -> changeMe.text = 'Icon button tapped.'
# 
# # DISABLED
# 
# disabled = new Button
# 	x: icon.maxX + 8, y: basic.y
# 	type: 'basic'
# 	text: 'Disabled'
# 	disabled: true
# 	action: -> changeMe.text = 'Disabled button tapped.'
# 
# float = new Button
# 	x: basic.x, y: basic.maxY + 16
# 	type: 'basic'
# 	text: 'Float'
# 	float: true
# 	action: -> changeMe.text = 'Float button tapped.'
# 
# togglefloat = new Button
# 	x: float.maxX + 8, y: basic.maxY + 16
# 	width: 120
# 	type: 'toggle'
# 	text: 'Toggle Float'
# 	float: true
# 	toggleOn: -> changeMe.text = "Float toggled: #{@isOn}."
# 	toggleOff: -> changeMe.text = "Float toggled: #{@isOn}."
# 
# labelfloat = new Button
# 	x: togglefloat.maxX + 8, y: basic.maxY + 16
# 	width: 160
# 	type: 'label'
# 	text: 'Label Float'
# 	float: true
# 	action: ->
# 		@i++
# 		@value = @i
# 		changeMe.text = "Label float value: #{@i}."
# 
# iconfloat = new Button
# 	x: labelfloat.maxX + 8, y: labelfloat.y
# 	width: 32
# 	float: true
# 	icon: 'add'
# 	action: -> changeMe.text = 'Float icon button tapped.'
# 
# link = new Button
# 	x: basic.x, y: float.maxY + 16
# 	text: 'Link'
# 	link: true
# 	touchState:
# 		color: 'rgba(1, 179, 231, 1)'
# 	action: -> changeMe.text = 'Link button tapped.'
# 
# toggleLink = new Button
# 	x: link.maxX + 8, y: float.maxY + 16
# 	text: 'Toggle Link'
# 	type: 'toggle'
# 	link: true
# 	touchState:
# 		color: 'rgba(1, 179, 231, 1)'
# 	onState:
# 		color: 'rgba(3, 123, 179, 1)'
# 	toggleOn: -> changeMe.text = "Link toggled: #{@isOn}."
# 	toggleOff: -> changeMe.text = "Link toggled: #{@isOn}."
# 
# labelLink = new Button
# 	x: toggleLink.maxX + 8, y: float.maxY + 16
# 	text: 'Label Link'
# 	type: 'label'
# 	width: 150
# 	labelWidth: .3
# 	link: true
# 	touchState:
# 		color: 'rgba(1, 179, 231, 1)'
# 	onState:
# 		color: 'rgba(3, 123, 179, 1)'
# 	action: ->
# 		@i++
# 		@value = @i
# 		changeMe.text = "Link float value: #{@i}."
# 
# disabledLink = new Button
# 	x: labelLink.maxX + 16, y: float.maxY + 16
# 	width: 90 
# 	text: 'Disabled Link'
# 	type: 'toggle'
# 	link: true
# 	disabled: true
# 	touchState:
# 		color: 'rgba(1, 179, 231, 1)'
# 	onState:
# 		color: 'rgba(3, 123, 179, 1)'
# 	action: -> changeMe.text = "Disabled link tapped."
# 	