Ext.define('NotesApp.controller.Notes', {
  extend: 'Ext.app.Controller',
  
  config: {
    refs: {
      // We're going to look up our views by xtype
      notesListView: 'noteslistview',
      noteEditorView: 'noteeditorview'
    },
    control: {
      notesListView: {
        // The commands fired by the notes list
        newNoteCommand: 'onNewNoteCommand',
        editNoteCommand: 'onEditNoteCommand'
      }
    }
  },
  
  slideLeftTransition: {
    type: 'slide',
    direction: 'left'
  },
  
  onNewNoteCommand: function () {
    console.log('onNewNoteCommand');
    var now = new Date();
    var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
    
    var newNote = Ext.create('NotesApp.model.Note', {
      id: noteId,
      dateCreated: now,
      title: '',
      narrative: ''
    });
    
    this.activateNoteEditor(newNote);
    
  },
  
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  
  activateNoteEditor: function(record) {
    var noteEditorView = this.getNoteEditorView();
    
    noteEditorView.setRecord(record);
    Ext.Viewport.animateActiveItem(noteEditorView, this.slideLeftTransition);
    
  },
  
  onEditNoteCommand: function(list, record) {
    console.log('onEditNoteCommand');
    
  },
  
  // Base class methods
  launch: function() {
    this.callParent(arguments);
    console.log('launch');
  },
  
  init: function() {
    this.callParent(arguments);
    console.log('init');
  }
  
});