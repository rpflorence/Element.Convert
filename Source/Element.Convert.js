Element.implement({

	convert: function(tag, properties){
		var props = this.getProperties.apply(this, properties);
		var newElement = new Element(tag,props).inject(this,'after');
		this.dispose();
		return newElement;
	}

});