Ext.define('NotesApp.store.Notes', {
  extend: 'Ext.data.Store',
  config: {
    model: 'NotesApp.model.Note',
    data: [
      { title: 'Note 1', narrative: 'here is a narrative' },
      { title: 'Note 2', narrative: 'another narrative'}
    ],
    autoLoad: true,
    sorters: [{ property: 'dateCreated', direction: 'DESC' }]
  }
  
})