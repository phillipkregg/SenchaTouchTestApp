/*

Ext.setup({
  onReady: function() {
    
    var sessionTemplate = Ext.create("Ext.XTemplate", '<div> {sessionName} - {speakerName} </div>', {});
    
    var panel = Ext.create("Ext.Panel", {
      tpl: sessionTemplate,
      data: {
        sessionName: "Javascript on Steroids",
        speakerName: "Douglas Crockford"
      }
    });
    
    var buttonToggle = Ext.create("Ext.Button", {
      text: 'Toggle Panel'
    });
    
    buttonToggle.on({
      tap: function() {
        if (panel.isHidden()) {
          panel.show();
        } else {
          panel.hide();
        }
      }
    });
    
    var buttonShowMessage = Ext.create("Ext.Button", {
      text: "Display Message"
    });
    
    buttonShowMessage.on({
      tap: function() {
        Ext.Msg.alert("Important Message", "You're awesome");
      }
    });
    
    var dockedPanel = Ext.create("Ext.Panel", {
      docked: 'bottom',
      height: 100,
      html: 'Docked Panel',
      style: "background:#fafafa; padding: 10px;"
    });
    
    Ext.Viewport.add({
      xtype: 'container',
      items: [
        buttonToggle,
        panel,
        buttonShowMessage,
        dockedPanel
      ],
      padding: 15,
      layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'
      }
    });
    
    
  }
  
  
});


*/