Ext.application({
  name: 'NotesApp',
  
  views: ['NotesList', 'NoteEditor'],
  models: ['Note'],
  stores: ['Notes'],
  controllers: ['Notes'],
  
  launch: function() {
    
    var notesListView = {
      xtype: 'noteslistview'
    };
    
    var noteEditorView = {
      xtype: 'noteeditorview'
    };
    
    Ext.Viewport.add([notesListView, noteEditorView]);
    
  }
  
})