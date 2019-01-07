// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

// $(document).ready(function () {
//   var name = prompt('Enter your name', 'guest');
//   var myFirebase = new Firebase('https://fir-chat-dcb17.firebaseio.com');
//   if (name) {
//     $('#txtName').text(name);
//     $('#btnSend').on('click', function (e) {
//       e.preventDefault();
//       var text = $('#txtText').val();
//       if (text) {
//         myFirebase.push({ name: name, text: text });
//         $('#txtText').val('');
//       }
//     });

//     myFirebase.on('child_added', function (snapshot) {
//       var message = snapshot.val();
//       var html =
//         '<tr>' +
//         '<td><i class="glyphicon glyphicon-user"></i> ' + message.name + ': </td>' +
//         '<td>' + message.text + '</td>' +
//         '</tr>';
//       $('#messageContainer tr:last').after(html);
//       $('#scollDiv').animate({
//         scrollTop: $('#scollDiv')[0].scrollHeight
//       }, 0);
//     });
//   } else {
//     window.location.reload();
//   }
// });
