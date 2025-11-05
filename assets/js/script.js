$(document).ready(function () {
    // Calculate Quote (on calculate.html)
    document.querySelectorAll('.course-item').forEach(item => {
    item.addEventListener('click', () => {
      const checkbox = item.querySelector('input[type="checkbox"]');
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event('change')); // trigger change event if needed
    });
  });
    const SERVICE_FEE = 50.00;

      function money(v){ return Number(v).toFixed(2); }

      function calculate() {
        const checked = $('.course-checkbox:checked');
        let itemsTotal = 0;
        checked.each(function(){
          itemsTotal += parseFloat($(this).data('price') || 0);
        });

        const count = checked.length;
        let discountPct = 0;
        if (count === 2) discountPct = 5;
        else if (count === 3) discountPct = 10;
        else if (count >= 4) discountPct = 15;

        const discountAmt = itemsTotal * (discountPct / 100.0);
        const subtotal = itemsTotal - discountAmt;
        const total = subtotal + SERVICE_FEE;

        $('#itemsTotal').text(money(itemsTotal));
        $('#discountPct').text(discountPct + '%');
        $('#discountAmt').text(money(discountAmt));
        $('#serviceFee').text(money(SERVICE_FEE));
        $('#total').text(money(total));
        $('#summary').show();
      }

      $('#calcBtn').on('click', function(){ calculate(); });

      // quick convenience: recalc when user toggles checkboxes and ctrl-click calc
      $('.course-checkbox').on('change', function(){
        // auto-hide summary when nothing selected
        if ($('.course-checkbox:checked').length === 0) $('#summary').hide();
      });

      $('#getQuote').on('click', function(e){
        e.preventDefault();
        const total = $('#total').text();
        alert('We will email you an official quote for R' + total);
      });

      $(document).ready(function() {
        // Get query param from URL
        function getQueryParam(name) {
          const urlParams = new URLSearchParams(window.location.search);
          return urlParams.get(name);
        }
      
        // Course data
        const courses = {
          "child-minding": {
            title: "Child Minding",
            image: "assets/images/child-1.jpg",
            description: "Learn the essentials of child and baby care and minding in this 6-week course.",
            price: "R750.00",
            courseLength: "6 Weeks",
            details:`<ul>
                <li>Birth to six-minth old baby needs</li>
                <li>Seven-monthto one year old needs</li>
                <li>Toddlers</li>
                <li>Education</li>
               
            </ul>`,
            reviews: [
              { name: "Lerato", comment: "I gained so much confidence looking after children. Highly recommend!" },
              { name: "Nomsa", comment: "Well-structured and very practical." }
            ]
          },
          "cooking": {
            title: "Cooking",
            image: "assets/images/cooking-1.jpg",
            description: " Prepare and cook nutritious family meals in 6 weeks.",
            price: "R750.00",
            courseLength: "6 Weeks",
            details: `<ul>
                <li>Nutritional requirements for a healthy body</li>
                <li>Types of protein, carbohydrates and vegetables</li>
                <li>Tasty and nutritious recipes</li>
                <li>Designing and sewing new garments</li>
                <li>Prepare and cooking of meals</li>
            </ul>`,
            reviews: [
              { name: "Sipho", comment: "The cooking skills I learned helped me start my own catering side hustle." }
            ]
          },
          "garden-maintenance": {
            title: "Gardening Maintanance",
            image: "assets/images/gardening-1.jpg",
            description: "Provide basic knowledge of watering, pruning and planting in a domestic garden  in 6 weeks.",
            price: "R750.00",
            courseLength: "6 Weeks",
            details: `<ul>
            <li>Water restrictions and the watering requirements of indigenous and exotic plants</li>
            <li>Pruning and propagation of plants</li>
            <li>Emergency scene management</li>
            <li>Planting techniques for different plant types</li>
            
        </ul>`,
            reviews: [
              { name: "Sipho", comment: "The cooking skills I learned helped me start my own catering side hustle." }
            ]
          },
          "first-aid": {
            title: "First Aid",
            image: "assets/images/first-aid-1 (2).jpg",
            description: "Provide first aid awareness and basic life support.",
            price: "R1500.00",
            courseLength: "6 Months",
            details: `<ul>
            <li>Wounds and bleeding</li>
            <li>Burns and fractures</li>
            <li>Emergency scene management</li>
            <li>Cardi-Pulmonary Resuscitation (CPR)</li>
            <li>Raspatory distress e.g, Coking, blocked airway</li>
        </ul>`,
            reviews: [
              { name: "John", time: "5 days ago", comment: "This course literally saved a life. I was able to perform CPR correctly." },
              { name: "John", time: "2 weeks ago", comment: "This course literally saved a life. I was able to perform CPR correctly." },
              { name: "John", comment: "This course literally saved a life. I was able to perform CPR correctly." }
            ]
          },
          "sewing": {
            title: "Sewing",
            image: "assets/images/sewing-1.jpg",
            description: "Provide alterations and new garment tailoring services.",
            price: "R1500.00",
            courseLength: "6 Months",
            details: `<ul>
                <li>Types of stiches</li>
                <li>Threading and sewing macheines</li>
                <li>Alterations</li>
                <li>Designing and sewing new garments</li>
                <li>Raspatory distress e.g, Coking, blocked airway</li>
            </ul>`,
            reviews: [
              { name: "John", comment: "This course literally saved a life. I was able to perform CPR correctly." }
            ]
          },
          "life-skills": {
            title: "Life Skills",
            image: "assets/images/life-skills-1.jpg",
            description: "Provide skills to navigate basic life necessities.",
            price: "R1500.00",
            courseLength: "6 Months",
            details: `<ul>
                <li>Opening a bank account</li>
                <li>Basic labour law (know your rights)</li>
                <li>Basic reading and writing literacy</li>
                <li> Basic numeric literacy</li>
          </ul>`,
            reviews: [
              { name: "John", comment: "This course literally saved a life. I was able to perform CPR correctly." }
            ]
          },
          "landscaping": {
            title: "Landscaping",
            image: "assets/images/landscapping-1.jpg",
            description: "Provide landscaping services for new and established garden.",
            price: "R1500.00",
            courseLength: "6 Months",
            details: `<ul>
                <li>Provide landscaping services for new and established gardens</li>
                <li>Fixed structure (fountains, statues, benches, tables, built-in braai</li>
                <li>Balancing of plants and trees in garden/li>
                <li>Aesthetic of plant sha[es and colours</li>
                <li>Garden layout</li>
            </ul>`,
            reviews: [
              { name: "John", comment: "This course literally saved a life. I was able to perform CPR correctly." }
            ]
          }
        };
      
        // Load the right course
        const courseKey = getQueryParam("course");
        if (courseKey && courses[courseKey]) {
          const course = courses[courseKey];
          $("#course-title").text(course.title);
          $("#course-image").attr("src", course.image).attr("alt", course.title);
          $("#course-description").text(course.description);
          $("#course-price").text(course.price);
          $("#course-length").text(course.courseLength);
          $("#course-details").html(course.details);
      
          // Build reviews
          let reviewsHtml = "";
          if (course.reviews && course.reviews.length > 0) {
            course.reviews.forEach(r => {
              reviewsHtml += `<div class="row g-3" id="course-reviews">
              <div class="col-md-12">
                <div class="review"><strong>${r.name}:</strong><small class="text-muted"> — ${r.time}</small>
                <div class="mt-2">${r.comment}</div>
              </div>
              </div>`;
            });
          } else {
            reviewsHtml = "<p>No reviews yet.</p>";
          }
          $("#course-reviews").html(reviewsHtml);
        } else {
          $("#course-title").text("Course not found");
          $("#course-description").text("Please go back and select a valid course.");
        }
      });     
      
      $("#navbar").html(`<nav class="navbar navbar-expand-lg navbar-dark bg-etn-purple">
                          <div class="container">
                            <a class="navbar-brand" href="index.html"><img src="./assets/images/logo.jpg" style="height: 50px; padding-right: 5px"/> Empowering the Nation</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                              <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                  <a class="nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Courses
                                  </a>
                                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="detailed.html?course=child-minding">Child Minding</a></li>
                                    <li><a class="dropdown-item" href="detailed.html?course=cooking">Cooking</a></li>
                                    <li><a class="dropdown-item" href="detailed.html?course=garden-maintenance">Garden Maintenance</a></li>
                                    <li><a class="dropdown-item" href="detailed.html?course=first-aid">First Aid</a></li>
                                    <li><a class="dropdown-item" href="detailed.html?course=sewing">Sewing</a></li>
                                    <li><a class="dropdown-item" href="detailed.html?course=life-skills">Life Skills</a></li>
                                    <li><a class="dropdown-item" href="detailed.html?course=landscaping">Landscaping</a></li>
                                  </ul>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="calculate.html">Calculate</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="contact.html">Contact</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </nav>`);

    $("#footer").html(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
      <footer class="container py-4 footer">
  <div class="row align-items-center">
    <div class="col-md-8">
       <p>Contact : 011 456 7890<br>Email: info@empoweringthenation.co.za<br> 45 Liden Street, Sandton, Johannesburg, 2196</p>
    </div>
    <div class="col-md-4 text-md-end">
      <a href="https://facebook.com" target="_blank" class="social-circle facebook me-2"><i class="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com" target="_blank" class="social-circle twitter me-2"><i class="fab fa-x-twitter"></i></a>
      <a href="https://instagram.com" target="_blank" class="social-circle instagram me-2"><i class="fab fa-instagram"></i></a>
      <a href="https://linkedin.com" target="_blank" class="social-circle linkedin me-2"><i class="fab fa-linkedin-in"></i></a>
    </div>
    </div>
  </div>
</footer>`);
});
  