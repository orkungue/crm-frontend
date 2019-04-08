<template>
  <div class="timeline-container" style="max-height: 400px; overflow-y:scroll;">
  <div class="thi">
  <div id="timeline">
  <div class="timeline-item">
    <div class="timeline-icon" style="background-color: #fff;">
      <i class="material-icons"  style="font-size: 60px;">
        local_offer
      </i>
    </div>
    <div class="timeline-content right timeline-content-exists">
      <input type="hidden" name="document_id" class="clickable_doc_id" value="<%= key.id %>" >
      <h3 class="cush cushf hl3">First Offer</h3>
      <span class="time-stamp">09-06-2018</span>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-icon" style="background-color: #fff;">
      <i class="material-icons" style="font-size: 60px;">
        mail
      </i>
    </div>
    <div class="timeline-content left timeline-content-exists">
      <input type="hidden" name="document_id" class="clickable_doc_id" value="<%= key.id %>" >
      <h3 class="cush cushf hl3">First Contact With Customer</h3>
      <span class="time-stamp">08-01-2018</span>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-icon" style="background-color: #fff;">
      <i class="material-icons" style="font-size: 60px;">
      people
      </i>
    </div>
    <div class="timeline-content right timeline-content-exists">
      <input type="hidden" name="document_id" class="clickable_doc_id" value="<%= key.id %>" >
      <h3 class="cush cushf hl3">Callcenter Agent called Customer</h3>
      <span class="time-stamp">19-07-2017</span>
    </div>
  </div>



</div>
</div>

</div>
</template>
<style>

.thi *, .thi *::before, .thi *::after{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.thi{
  width: 100%;
  max-height: 500px;
 overflow-x: auto;
 overflow-y: auto;
}


.project-name {
  text-align: center;
  padding: 10px 0;
}

.success_timeline {
  background: #ff655d !important;
  border-radius: 50%;
}

.timeline-container {
  max-width: 1000px;
  margin: 0 auto;
}

#timeline .timeline-item:after, #timeline .timeline-item:before {
  content: '';
  display: block;
  width: 100%;
  clear: both;
}

#timeline {
  width: 100%;
  margin: 30px auto;
  position: relative;
  padding: 0 20px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
#timeline:before {
  content: "";
  width: 3px;
  height: 100%;
  background: #4bb8e0;
  left: 50%;
  top: 0;
  position: absolute;
}
#timeline:after {
  content: "";
  clear: both;
  display: table;
  width: 100%;
}
#timeline .timeline-item {
  margin-bottom: 50px;
  position: relative;
}

#timeline img {
  width:100%;
  height: 100%;
  margin-left: -13px;
  margin-top: -13px;
}

#timeline .timeline-item .timeline-icon {
  width: 59px;
  height: 59px;
  position: absolute;
  top: 0;
  left: 49%;
  overflow: hidden;
  margin-left: -23px;
}
#timeline .timeline-item .timeline-icon svg, #timeline .timeline-item .timeline-icon .fa {
  position: relative;
  top: 13px;
  left: 14px;
  color: #fff;
}
#timeline .timeline-item .timeline-content {
  box-shadow: 2px 2px 2px #eee;
  width: 45%;
  background: #fff;
  padding: 20px;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  -ms-border-radius: 1px;
  border-radius: 1px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#timeline .timeline-item .timeline-content h3 {
  padding: 15px;
  color: #000;
  margin: -20px -20px 0 -20px;
  -webkit-border-radius: 1px 1px 0 0;
  -moz-border-radius: 1px 1px 0 0;
  -ms-border-radius: 1px 1px 0 0;
  border-radius: 1px 1px 0 0;
}

.timeline-content{
  cursor: pointer;
}

#timeline .timeline-item .timeline-content p {
  padding-top: 6px;
  padding-bottom: 6px;
}
#timeline .timeline-item .timeline-content:before {
  content: '';
  position: absolute;
  left: 45%;
  top: 20px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid #4bb8e0;
}
#timeline .timeline-item .timeline-content.right {
  float: right;
}
#timeline .timeline-item .timeline-content.right:before {
  content: '';
  right: 45%;
  left: inherit;
  border-left: 0;
  border-right: 7px solid #4bb8e0;
}


@media screen and (max-width: 768px) {
  #timeline {
    margin: 30px;
    padding: 0px;
    width: 90%;
  }
  #timeline:before {
    left: 0;
  }
  #timeline .timeline-item .timeline-content {
    width: 90%;
    float: right;
  }
  #timeline .timeline-item .timeline-content:before, #timeline .timeline-item .timeline-content.right:before {
    left: 10%;
    margin-left: -6px;
    border-left: 0;
    border-right: 7px solid #4bb8e0;
  }
  #timeline .timeline-item .timeline-icon {
    left: 0;
  }
}
.timeline-icon.is-hidden {
  visibility: hidden;
}
.timeline-icon.animate-it {
  visibility: visible;
   -webkit-animation: bounce-1 0.6s;
   -moz-animation: bounce-1 0.6s;
    animation: bounce-1 0.6s;
}

/* content block animation */
.timeline-content.is-hidden {
  visibility: hidden;
}
.timeline-content.animate-it {
  visibility: visible;
   -webkit-animation: bounce-2 0.6s;
   -moz-animation: bounce-2 0.6s;
    animation: bounce-2 0.6s;
  }
@media only screen and (min-width: 769px) {
  /* Inverse bounce effect on even content blocks */
.timeline-content.right.animate-it {
    -webkit-animation: bounce-2-inverse 0.6s;
    -moz-animation: bounce-2-inverse 0.6s;
    animation: bounce-2-inverse 0.6s;
  }
}
@media only screen and (max-width: 768px) {
  /* Inverse bounce effect on all content blocks */
.timeline-content.animate-it, .timeline-content.right.animate-it {
    -webkit-animation: bounce-2-inverse 0.6s;
    -moz-animation: bounce-2-inverse 0.6s;
    animation: bounce-2-inverse 0.6s;
  }
}

/* ALL animation types called */
/*
@-webkit-keyframes bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
  }

  100% {
    -webkit-transform: scale(1);
  }
}
@-moz-keyframes bounce-1 {
  0% {
    opacity: 0;
    -moz-transform: scale(0.5);
  }

  60% {
    opacity: 1;
    -moz-transform: scale(1.2);
  }

  100% {
    -moz-transform: scale(1);
  }
}

@keyframes bounce-1 {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.5);
    -moz-transform: scale(0.5);
    -ms-transform: scale(0.5);
    -o-transform: scale(0.5);
    transform: scale(0.5);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }

  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
  }

  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes bounce-2 {
  0% {
    opacity: 0;
    -moz-transform: translateX(-100px);
  }

  60% {
    opacity: 1;
    -moz-transform: translateX(20px);
  }

  100% {
    -moz-transform: translateX(0);
  }
}
@keyframes bounce-2 {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    -moz-transform: translateX(-100px);
    -ms-transform: translateX(-100px);
    -o-transform: translateX(-100px);
    transform: translateX(-100px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(20px);
    -moz-transform: translateX(20px);
    -ms-transform: translateX(20px);
    -o-transform: translateX(20px);
    transform: translateX(20px);
  }

  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
  }

  100% {
    -webkit-transform: translateX(0);
  }
}
@-moz-keyframes bounce-2-inverse {
  0% {
    opacity: 0;
    -moz-transform: translateX(100px);
  }

  60% {
    opacity: 1;
    -moz-transform: translateX(-20px);
  }

  100% {
    -moz-transform: translateX(0);
  }f
}
@keyframes bounce-2-inverse {
  0% {
    opacity: 0;
    -webkit-transform: translateX(100px);
    -moz-transform: translateX(100px);
    -ms-transform: translateX(100px);
    -o-transform: translateX(100px);
    transform: translateX(100px);
  }

  60% {
    opacity: 1;
    -webkit-transform: translateX(-20px);
    -moz-transform: translateX(-20px);
    -ms-transform: translateX(-20px);
    -o-transform: translateX(-20px);
    transform: translateX(-20px);
  }

  100% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
}
*/
</style>
