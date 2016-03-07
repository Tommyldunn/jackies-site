jQuery(function ($) {
      $("#contact_form").submit(function () {
          var email = $("#email").val(); // get email field value
          var name = $("#name").val(); // get name field value
          var msg = $("#msg").val(); // get message field value
          $.ajax({
              type: "POST",
              url: "https://mandrillapp.com/api/1.0/messages/send.json",
              data: {
                "key": "vZAdAIqSNE7IJKjWyvzgxg",
                "message": {
                    "from_email": email,
                    "from_name": name,
                    "headers": {
                        "Reply-To": email
                    },
                    "subject": "Website Contact Form Submission",
                   "text": msg,
                   "to": [
                   {
                       "email": "support@doable.com",
                       "name": "doable",
                       "type": "to"
                   }],

                    "merge": true,
                    "tags": [
                      "doable-consumer-site"
                    ]
                  },
                  "ip_pool": "Main Pool"
                }

              })
            .done(function (response) {
              alert("Your message has been sent. Thank you!");
              $("#name").val("");
              $("#email").val("");
              $("#msg").val("");
            })
            .fail(function (response) {
              alert("Error sending message.");
            });
            return false; 
          });
      });
