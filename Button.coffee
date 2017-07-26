# BUTTON
# @steveruizok

exports.Button = class Button extends Layer
	constructor: (options = {}) ->
		
		@_type = options.type ? 'basic'
		
		@_link = options.link ? false
		@_hover = options.hover ? true
		@_float = options.float ? false
		@_disabled = options.disabled ? false
		@_tint = options.tint ? 'rgba(0, 179, 231, 1)'
		
		color = options.color ? if @_link then @_tint else '#000'
		backgroundColor = options.backgroundColor ? '#FFF'
		labelColor = if @_link then null else if backgroundColor is '#000' then Color.mix(backgroundColor, '#FFF', .04) else Color.mix(backgroundColor, '#000', .04)
		touchColor = if backgroundColor is '#000' then Color.mix(backgroundColor, '#FFF', .16) else Color.mix(backgroundColor, '#000', .16)
		hoverColor = if backgroundColor is '#FFF' then Color.mix(backgroundColor, '#000', .08) else Color.mix(backgroundColor, '#FFF', .24)
		onColor = 	 if backgroundColor is '#000' then Color.mix(backgroundColor, '#FFF', .2) else Color.mix(backgroundColor, '#000', .2)


		@_text = undefined
		@_textStyle = options.textStyle ? {fontSize: 13, padding: {top: 8}}

		@_icon = options.icon ? undefined
		@_iconSize = options.iconSize ? {height: undefined, width: undefined}
		
		@_labelWidth = options.labelWidth ? .34
		@_labelBackgroundColor = options.labelBackgroundColor ? labelColor
		@_labelColor = options.labelColor ? options.color ? '#000'
		@_value = options.value ? 0
		
		@_hoverState = options.hoverState ? {
			backgroundColor: if @_link then null else hoverColor
			}
		@_touchState = options.touchState ? {
			color: color
			backgroundColor: if @_link then null else touchColor
			}
		@_onState = options.onState ? {
			color: color 
			backgroundColor: if @_link then null else onColor
			}
		@_disabledState = options.disabledState ? {
			opacity: .5
			}
		@_defaultState = options.defaultState


		
		@_isOn = options.isOn ? false
		@_onAction = options.onAction ? -> null
		@_offAction = options.offAction ? -> null
		
		@_action = options.action ? -> null
		@_scope = options.scope ? @

		@i = options.i ? 0
		
		super _.defaults options,
			height: 32, width: if @_type is 'label' then 120 else 80
			backgroundColor: '#FFF', color: '#000'
			borderColor: '#333', borderWidth: 1, borderRadius: 4
			animationOptions: {time: .15}
			text: options.text ? 'Button'
			clip: true

		# LINK
		
		if @_link
			@props =
				backgroundColor: null,
				borderWidth: null
		
		# STATES
		
		@states =
			# off: _.clone(@states.default)
			on: @_onState
			touch: @_touchState
			hover: @_hoverState
			disabled: @_disabledState
			default: @_defaultState ? @states.default
		
		# Prevent value (in label buttons) from changing back to starting value.
		for state in _.keys(@states)
			delete @states[state].value
		
		
		# TEXT
		
		@buttonText = new TextLayer
			name: '.', parent: @
			x: 0, y: Align.center, 
			width: @width, height: @height
			fontSize: 13, color: @color, fontWeight: 600
			padding: {top: 8}, textAlign: 'center'
			text: "#{@_text}" ? 'Button'

		# ICON
		
		if @_icon?
			@buttonText.visible = false
			
			@iconLayer = new Layer
				parent: @
				height: @_iconSize.height ? @height
				width:  @_iconSize.width ? @height
				x: Align.center(1), 
				y: Align.center
				image: "images/icons/#{@_icon}.png"
			
			@iconLayer.pixelAlign()
				
		# FLOAT
		
		if @_float
			_.merge @states.default,
				shadowX: 1, 
				shadowY: 2,
				shadowBlur: 5

			_.merge @states.hover,
				shadowX: 1, 
				shadowY: 2,
				shadowBlur: 5
			
			_.merge @states.touch,
				shadowX: 0, 
				shadowY: 0,
				shadowBlur: 0
				
			_.merge @states.on,
				shadowX: 0, 
				shadowY: 0,
				shadowBlur: 0
			
			_.merge @states.disabled,
				shadowX: 0, 
				shadowY: 0,
				shadowBlur: 0

		# TOGGLE

		if @_isOn
			@animate('touch')
			@buttonText.color = @states.touch.color

		# TOUCH EVENTS
		
		@onTouchStart => 
			@animate('touch')
			@buttonText.color = @states.touch.color

		# HOVER EVENTS 

		if @_hover
			@onMouseOver -> @animate('hover')
			@onMouseOut -> 
				if @_isOn
					@animate('on')
					@buttonText.color = @states.on.color ? color
				else if @_disabled is true then @animate('disabled')
				else 
					@animate('default')
					@buttonText.color = @states.default.color
		
		# TYPES

		switch @_type
			when 'basic'
				@onTouchEnd -> 
					_.bind(@_action, @_scope)()
					@reset()
				
			when 'toggle'
				@onTouchEnd -> @isOn = !@_isOn
			
			when 'label'
				@onTouchEnd -> 
					_.bind(@_action, @_scope)()
					@reset()
				
				width = @width
				@buttonText.width = width * (1-@_labelWidth)
				@iconLayer?.x = (width * (1-@_labelWidth)) / 2 - (@height/2)
				
				@labelLayer = new TextLayer
					name: '.', parent: @
					x: Align.right(1), y: Align.center
					width: width * @_labelWidth, height: @height
					backgroundColor: @_labelBackgroundColor
					color: @_labelColor, fontWeight: 600, fontSize: 13
					padding: {top: 8}
					textAlign: 'center'
					text: "#{@_value}"
					
				@labelLayer.onTouchStart (event) -> event.stopPropagation()
				@labelLayer.onTouchEnd (event) -> event.stopPropagation()	
				
				@separator = new Layer
					name: '.', parent: @
					x: @labelLayer.x - 1
					height: @height, width: 1
					backgroundColor: @borderColor
					
			else throw "Button has no type named #{@_type}."
		

		@textStyle = @_textStyle

		# DISABLED
		
		switch @_disabled
			when true
				@ignoreEvents = true
				@animate('disabled')
			when false
				@ignoreEvents = false
				@animate('default')
		
	reset: (forced) ->
		if @_hover and not forced
			@animate('hover')
			@buttonText.color = @states.hover.color ? @states.default.color
		else 
			@animate('default')
			@buttonText.color = @states.default.color
		
	@define "isOn",
		get: -> return @_isOn 
		set: (value) ->
			return if @_isOn is value 
			
			@_isOn = value
			@emit('change:isOn', @_isOn, @)
			switch @_isOn
				when false
					@reset(true)
					_.bind(@_offAction, @_scope)()
				when true
					@animate('on')
					@buttonText.color = @states.on.color ? color
					_.bind(@_onAction, @_scope)()

	@define "textStyle",
		get: -> return @_textStyle
		set: (object) ->
			@buttonText?.props = object

	@define "text",
		get: -> return @_text
		set: (value) ->
			@emit('change:text', @_text, @)
			return if @_text is value 
			
			@_text = value
			@buttonText?.text = value

	@define "value",
		get: -> return @_value 
		set: (value) ->
			return if @_value is value 
			@_value = value
			
			@emit('change:value', @_value, @)
			switch @_type
				when 'label'
					@labelLayer.text = "#{@_value}"
	
	@define "disabled",
		get: -> return @_disabled
		set: (value) ->
			return if @_disabled is value
			@_disabled = value
			
			@emit('change:disabled', @_disabled, @)
			switch @_disabled
				when true
					@ignoreEvents = true
					@animate('disabled')
				when false
					@ignoreEvents = false
					@animate('default')