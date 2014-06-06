Ext.define('NotesApp.controller.Notes', {
  extend: 'Ext.app.Controller',
  
  config: {
    refs: {
      // We're going to look up our views by xtype
      notesListView: 'noteslistview'
    },
    control: {
      notesListView: {
        // The commands fired by the notes list
        newNoteCommand: 'onNewNoteCommand',
        editNoteCommand: 'onEditNoteCommand'
      }
    }
  },
  
  onNewNoteCommand: function () {
    console.log('onNewNoteCommand');
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