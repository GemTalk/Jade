| package |
package := Package name: 'SSW Widget Development'.
package paxVersion: 1;
	basicComment: '�2006 Solutions Software Limited'.


package methodNames
	add: 'EditableListView class' -> #publishedAspectsOfInstances;
	add: 'EditableListViewColumn class' -> #publishedAspectsOfInstances;
	add: 'EmbeddedTextEdit class' -> #publishedAspectsOfInstances;
	add: 'FormattedTextEdit class' -> #publishedAspectsOfInstances;
	yourself.

package binaryGlobalNames: (Set new
	yourself).

package globalAliases: (Set new
	yourself).

package setPrerequisites: (IdentitySet new
	add: '..\..\Object Arts\Dolphin\IDE\Base\Development System';
	add: 'SSW EditableListView';
	add: 'SSW Widget Enhancements';
	yourself).

package!

"Class Definitions"!


"Global Aliases"!


"Loose Methods"!

!EditableListView class methodsFor!

publishedAspectsOfInstances
	"Answer a <LookupTable> of the <Aspect>s published by instances of the receiver."

	^(super publishedAspectsOfInstances)
		removeKey: #canEditLabels;
		removeKey: #hasCheckBoxes;
		add: (Aspect integer: #rowHeight);
		add: (Aspect name: #smallImageExtent);
		yourself! !
!EditableListView class categoriesFor: #publishedAspectsOfInstances!constants!development!public! !

!EditableListViewColumn class methodsFor!

publishedAspectsOfInstances
    	"Answer a <LookupTable> of the <Aspect>s published by instances of the receiver."
    
    	^(super publishedAspectsOfInstances)
		add: (Aspect name: #name);
    		add: (Aspect boolean: #isEditable);
    		add: (Aspect name: #editor chooseFrom: 
				#(	'EmbeddedTextEdit new' 
					'EmbeddedFormattedTextEdit new'
					'EmbeddedFormattedTextEdit newForDate'
					'EmbeddedMultilineTextEdit new'
					'EmbeddedCheckBox new'
					'EmbeddedComboBox new'));
    		add: (Aspect block: #setContentsBlock);
    		add: (Aspect block: #preDrawBlock);
		add: (Aspect block: #getSortContentsBlock);
		add: (Aspect block: #isEditableBlock);
		add: (Aspect color: #forecolor);
		add: (Aspect color: #backcolor);
    		yourself
! !
!EditableListViewColumn class categoriesFor: #publishedAspectsOfInstances!public! !

!EmbeddedTextEdit class methodsFor!

publishedAspectsOfInstances
    	"Answer a Set of the aspects published by  instances of the receiver"
    
    	^super publishedAspectsOfInstances 
		add: (Aspect name: #offset);
    		yourself! !
!EmbeddedTextEdit class categoriesFor: #publishedAspectsOfInstances!constants!development!public! !

!FormattedTextEdit class methodsFor!

publishedAspectsOfInstances
    	"Answer a Set of the aspects published by  instances of the receiver"
    
    	^super publishedAspectsOfInstances 
    		add: (Aspect string: #format);
    		add: (Aspect string: #separatorChars);
    		add: (Aspect set: #placeholderChar);
    		yourself! !
!FormattedTextEdit class categoriesFor: #publishedAspectsOfInstances!constants!development!public! !

"End of package definition"!

"Source Globals"!

"Classes"!

"Binary Globals"!

