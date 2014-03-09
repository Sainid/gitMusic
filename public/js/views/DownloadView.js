  var app = app || {};

  app.DownloadView = Backbone.View.extend({

    el: '#holder',

    // Re-renders the titles of the todo item.
    render: function() {
    	this.$el.empty();
      var template = _.template($('#download-template').html());
      this.$el.html(template);
      console.log('Down the horse');
    }
  
});