function ajaxHelper(uri, method, data) {
  return $.ajax({
    url: uri,
    type: method,
    dataType: 'json',
    contentType: 'application/json',
    data: data ? JSON.stringify(data) : null
  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown);
  });
}

var Contacto = function() {
  var main = this;
  var contactoUri = "http://localhost:3000/api/contacto";
  main.contactos = ko.observableArray([]);

  main.getContactos = function() {
    ajaxHelper(contactoUri, 'GET').done(function(data) {
      main.contactos(data);
    });
  }
  main.getContactos();
}


$(document).ready(function() {
  var contacto = new Contacto();
  ko.applyBindings(contacto);
})
