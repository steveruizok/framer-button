# Button Examples
# by @steveruizok

# See full project description at https://github.com/steveruizok/framer-button


{Button} = require 'Button'
Screen.backgroundColor = '#FFF'
Framer.Device.type = "fullscreen"

container = new ScrollComponent
	backgroundColor: null
	x: 0, y: 0
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false

container = container.content

# Button Types

basicButtons = new Layer
	parent: container
	x: Align.center, y: 32
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
	x: Align.center

# Styling Options

stylingOptions = new Layer
	backgroundColor: null
	parent: container
	x: Align.center
	y: basicButtons.maxY + 32

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
	x: Align.center

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
	x: Align.center

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
	x: Align.center

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
	x: Align.center