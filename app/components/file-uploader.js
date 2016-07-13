import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['uploader', 'dropzone'],
  classNameBindings: ['isDragging', 'isDisabled:is-disabled'],
  attributeBindings: ['data-uploader'],
  'data-uploader': 'true',

  dragOver: function(event){
    // this is needed to avoid the default behaviour from the browser
    event.preventDefault();
  },

  dragEnter: function(event){
    event.preventDefault();
    this.set('isDragging', true);
  },

  dragLeave: function(event){
    event.preventDefault();
    this.set('isDragging', false);
  },

  drop: function(event){
    // var file;

    event.preventDefault();
    this.set('isDragging', false);

    // only 1 file for now

    var src = event.dataTransfer.files;

    for (var x = 0; x < src.length; x++)
      this.sendAction('fileInputChanged', src[x]);
  }
});
