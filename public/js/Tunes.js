(function($) {
  window.Album = Backbone.Model.extend({});
  window.AlbumView=Backbone.Model.extend({
    initialize: function(){
      this.template = _.template($('album-base').html());
    }
  });
})(jQuery);
