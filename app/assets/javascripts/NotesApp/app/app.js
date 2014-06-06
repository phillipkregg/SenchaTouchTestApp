Ext.application({
  name: 'NotesApp',
  
  views: ['NotesList'],
  models: ['Note'],
  stores: ['Notes'],
  controllers: ['Notes'],
  
  launch: function() {
    
    var notesListView = {
      xtype: 'noteslistview'
    };
    
    Ext.Viewport.add([notesListView]);
    
  }
  
})