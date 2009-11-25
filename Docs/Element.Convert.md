Native: Element {#Element}
========================

Extends the Element native object to include the _convert_ method to convert an element to another type.

### Demo

<iframe src="http://mooshell.net/rpflo/3uACE/embedded/?tabs=result,js,html" style="width: 100%; height:275px"></iframe>

Element Method: convert {#Element:convert}
----------------------------------

Copies an element with optional properties to a new element and destroys the old.

### Arguments

1. tag - (_string_) The tag for the new element
2. properties - (_array_) The properties to copy.

### Syntax

	$('myElement').convert('textarea',['id','name','value']);

### Returns

* (_element_) The new Element.