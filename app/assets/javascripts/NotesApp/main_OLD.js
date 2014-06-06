
/*
Ext.setup({
  onReady: function() {
     Ext.define('Attendee', {
       config: {
         id    :  null,
         name  :  null,
         email :  null,
         phone :  null,
         volunteer: null
       },

       constructor: function(config) {
         this.initConfig(config);
       },

       applyVolunteer: function (newVolunteer, oldVolunteer) {
         if (oldVolunteer === undefined) {
           return newVolunteer;
         }
         
         if (this.getPhone() !== undefined && this.getPhone().length > 0) {
           console.log('phone number found so volunteering OK');
           return true;
         } else {
           console.log("need a phone # !");
           return false;
         }
         
       },
       
       updateVolunteer: function (newVolunteer, oldVolunteer) {
           if (newVolunteer === true) {
             console.log("Attendee Volunteer Confirmed - send email");
           }
         
       }


     });
    
    
    var attendeeNew = Ext.create('Attendee', {
      id: 1001,
      name: 'Tom Jones',
      email: 'tom@tom.com',
      phone: '',
      volunteer: false
      
    });
    
    
    var rec = attendeeNew.setVolunteer(true);
    
    console.log('** Final volunteer status:  ' + rec.getVolunteer());
    
    
    
  }
  
  
});


*/
