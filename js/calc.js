$("#area_info").tooltip({
      position: { my: "left+15 center", at: "right center" }
});

$("#area_info_2").tooltip({
      position: { my: "left+15 center", at: "right center" }
});

$("#area_info_3").tooltip({
      position: { my: "left+15 center", at: "right center" }
});

/*drone sensor parameter*/

function input_params() {
      if (document.getElementById('drone_list').value == "Phantom 4") {
            reset_val();
            document.getElementById("sensor_width").value = "6.3";
            document.getElementById("sensor_height").value = "4.7";
            document.getElementById("image_width").value = "4000";
            document.getElementById("image_height").value = "3000";
            document.getElementById("focal_length").value = "3.612";
            document.getElementById("focal_length2").value = "3.612";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Phantom 4 Pro") {
            reset_val();
            document.getElementById("sensor_width").value = "13.2";
            document.getElementById("sensor_height").value = "8.8";
            document.getElementById("image_width").value = "5472";
            document.getElementById("image_height").value = "3648";
            document.getElementById("focal_length").value = "8.8";
            document.getElementById("focal_length2").value = "8.8";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Phantom 4 RTK") {
            reset_val();
            document.getElementById("sensor_width").value = "13.2";
            document.getElementById("sensor_height").value = "8.8";
            document.getElementById("image_width").value = "5472";
            document.getElementById("image_height").value = "3648";
            document.getElementById("focal_length").value = "8.8";
            document.getElementById("focal_length2").value = "8.8";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Phantom 3 Pro") {
            reset_val();
            document.getElementById("sensor_width").value = "6.17";
            document.getElementById("sensor_height").value = "4.55";
            document.getElementById("image_width").value = "4000";
            document.getElementById("image_height").value = "3000";
            document.getElementById("focal_length").value = "3.57";
            document.getElementById("focal_length2").value = "3.57";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Ebee (Canon S110)") {
            reset_val();
            document.getElementById("sensor_width").value = "7.6";
            document.getElementById("sensor_height").value = "5.7";
            document.getElementById("image_width").value = "4000";
            document.getElementById("image_height").value = "3000";
            document.getElementById("focal_length").value = "5.2";
            document.getElementById("focal_length2").value = "5.2";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Parrot Sequoia Monochrome") {
            reset_val();
            document.getElementById("sensor_width").value = "4.8";
            document.getElementById("sensor_height").value = "3.6";
            document.getElementById("image_width").value = "1280";
            document.getElementById("image_height").value = "960";
            document.getElementById("focal_length").value = "3.98";
            document.getElementById("focal_length2").value = "3.98";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Parrot Sequoia RGB") {
            reset_val();
            document.getElementById("sensor_width").value = "6.17";
            document.getElementById("sensor_height").value = "4.63";
            document.getElementById("image_width").value = "4608";
            document.getElementById("image_height").value = "3456";
            document.getElementById("focal_length").value = "4.88";
            document.getElementById("focal_length2").value = "4.88";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "FLIR Vue 336 6.8mm") {
            reset_val();
            document.getElementById("sensor_width").value = "5.712";
            document.getElementById("sensor_height").value = "4.352";
            document.getElementById("image_width").value = "336";
            document.getElementById("image_height").value = "256";
            document.getElementById("focal_length").value = "6.8";
            document.getElementById("focal_length2").value = "6.8";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "FLIR Vue 336 9mm") {
            reset_val();
            document.getElementById("sensor_width").value = "5.712";
            document.getElementById("sensor_height").value = "4.352";
            document.getElementById("image_width").value = "336";
            document.getElementById("image_height").value = "256";
            document.getElementById("focal_length").value = "9";
            document.getElementById("focal_length2").value = "9";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "FLIR Vue 336 13mm") {
            reset_val();
            document.getElementById("sensor_width").value = "5.712";
            document.getElementById("sensor_height").value = "4.352";
            document.getElementById("image_width").value = "336";
            document.getElementById("image_height").value = "256";
            document.getElementById("focal_length").value = "13";
            document.getElementById("focal_length2").value = "13";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "FLIR Vue 640 9mm") {
            reset_val();
            document.getElementById("sensor_width").value = "10.88";
            document.getElementById("sensor_height").value = "8.704";
            document.getElementById("image_width").value = "640";
            document.getElementById("image_height").value = "512";
            document.getElementById("focal_length").value = "9";
            document.getElementById("focal_length2").value = "9";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "FLIR Vue 640 13mm") {
            reset_val();
            document.getElementById("sensor_width").value = "10.88";
            document.getElementById("sensor_height").value = "8.704";
            document.getElementById("image_width").value = "640";
            document.getElementById("image_height").value = "512";
            document.getElementById("focal_length").value = "13";
            document.getElementById("focal_length2").value = "13";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "FLIR Vue 640 19mm") {
            reset_val();
            document.getElementById("sensor_width").value = "10.88";
            document.getElementById("sensor_height").value = "8.704";
            document.getElementById("image_width").value = "640";
            document.getElementById("image_height").value = "512";
            document.getElementById("focal_length").value = "19";
            document.getElementById("focal_length2").value = "19";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Wingtra RX1") {
            reset_val();
            document.getElementById("sensor_width").value = "35.9";
            document.getElementById("sensor_height").value = "24.0";
            document.getElementById("image_width").value = "8000";
            document.getElementById("image_height").value = "5320";
            document.getElementById("focal_length").value = "35";
            document.getElementById("focal_length2").value = "35";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Ebee (Sony WX 100)") {
            reset_val();
            document.getElementById("sensor_width").value = "6.2";
            document.getElementById("sensor_height").value = "4.6";
            document.getElementById("image_width").value = "4896";
            document.getElementById("image_height").value = "3672";
            document.getElementById("focal_length").value = "4.45";
            document.getElementById("focal_length2").value = "4.45";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Ebee (S.O.D.A)") {
            reset_val();
            document.getElementById("sensor_width").value = "12.75";
            document.getElementById("sensor_height").value = "8.5";
            document.getElementById("image_width").value = "5280";
            document.getElementById("image_height").value = "3956";
            document.getElementById("focal_length").value = "10.5";
            document.getElementById("focal_length2").value = "10.5";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Wingtra QX1") {
            reset_val();
            document.getElementById("sensor_width").value = "23.2";
            document.getElementById("sensor_height").value = "15.4";
            document.getElementById("image_width").value = "5456";
            document.getElementById("image_height").value = "3632";
            document.getElementById("focal_length").value = "15";
            document.getElementById("focal_length2").value = "15";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "3DR Solo (Sony QX1-16mm)") {
            reset_val();
            document.getElementById("sensor_width").value = "23.6";
            document.getElementById("sensor_height").value = "15.8";
            document.getElementById("image_width").value = "5280";
            document.getElementById("image_height").value = "3956";
            document.getElementById("focal_length").value = "16";
            document.getElementById("focal_length2").value = "16";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "Kespry (Sony QX1-16mm)") {
            reset_val();
            document.getElementById("sensor_width").value = "23.6";
            document.getElementById("sensor_height").value = "15.8";
            document.getElementById("image_width").value = "5280";
            document.getElementById("image_height").value = "3956";
            document.getElementById("focal_length").value = "16";
            document.getElementById("focal_length2").value = "16";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "") {
            reset_val();
            document.getElementById("sensor_width").value = "";
            document.getElementById("sensor_height").value = "";
            document.getElementById("image_width").value = "";
            document.getElementById("image_height").value = "";
            document.getElementById("focal_length").value = "";
            document.getElementById("focal_length2").value = "";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "") {
            reset_val();
            document.getElementById("sensor_width").value = "";
            document.getElementById("sensor_height").value = "";
            document.getElementById("image_width").value = "";
            document.getElementById("image_height").value = "";
            document.getElementById("focal_length").value = "";
            document.getElementById("focal_length2").value = "";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "") {
            reset_val();
            document.getElementById("sensor_width").value = "";
            document.getElementById("sensor_height").value = "";
            document.getElementById("image_width").value = "";
            document.getElementById("image_height").value = "";
            document.getElementById("focal_length").value = "";
            document.getElementById("focal_length2").value = "";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "") {
            reset_val();
            document.getElementById("sensor_width").value = "";
            document.getElementById("sensor_height").value = "";
            document.getElementById("image_width").value = "";
            document.getElementById("image_height").value = "";
            document.getElementById("focal_length").value = "";
            document.getElementById("focal_length2").value = "";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "") {
            reset_val();
            document.getElementById("sensor_width").value = "";
            document.getElementById("sensor_height").value = "";
            document.getElementById("image_width").value = "";
            document.getElementById("image_height").value = "";
            document.getElementById("focal_length").value = "";
            document.getElementById("focal_length2").value = "";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "") {
            reset_val();
            document.getElementById("sensor_width").value = "";
            document.getElementById("sensor_height").value = "";
            document.getElementById("image_width").value = "";
            document.getElementById("image_height").value = "";
            document.getElementById("focal_length").value = "";
            document.getElementById("focal_length2").value = "";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "") {
            reset_val();
            document.getElementById("sensor_width").value = "";
            document.getElementById("sensor_height").value = "";
            document.getElementById("image_width").value = "";
            document.getElementById("image_height").value = "";
            document.getElementById("focal_length").value = "";
            document.getElementById("focal_length2").value = "";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "") {
            reset_val();
            document.getElementById("sensor_width").value = "";
            document.getElementById("sensor_height").value = "";
            document.getElementById("image_width").value = "";
            document.getElementById("image_height").value = "";
            document.getElementById("focal_length").value = "";
            document.getElementById("focal_length2").value = "";
            calc_pix_size();
      }
      if (document.getElementById('drone_list').value == "") {
            reset_val();
            document.getElementById("sensor_width").value = "";
            document.getElementById("sensor_height").value = "";
            document.getElementById("image_width").value = "";
            document.getElementById("image_height").value = "";
            document.getElementById("focal_length").value = "";
            document.getElementById("focal_length2").value = "";
            calc_pix_size();
      }
}


// funtion reset_val
function reset_val() {
      document.getElementById("gsd").value = "";
      document.getElementById("gsd_area").value = "";
      document.getElementById("gsd_area_ha").value = "";
      document.getElementById("gsd_area_acre").value = "";
      document.getElementById("flight_width").value = "";
      document.getElementById("gaps_length").value = "";
      document.getElementById("lapse").value = "";
      document.getElementById("shutter_speed").value = "";
      document.getElementById("agl").value = "";
      document.getElementById("px").value = "";
      document.getElementById("px2").value = "";
}

/*pixel size Calculations*/

function calc_pix_size() {
      var sensor_width = document.getElementById("sensor_width").value;
      var sensor_height = document.getElementById("sensor_height").value;
      var image_width = document.getElementById("image_width").value;
      var image_height = document.getElementById("image_height").value;

      var px_size = Math.sqrt((sensor_width * sensor_height) / (image_width * image_height));

      var pixel_size = math.round(px_size, 6);
      document.getElementById("px").value = pixel_size;
      document.getElementById("px2").value = pixel_size;
}

var GSD_button = document.getElementById("GSD_select");
GSD_button.onclick = todo;

var AGL_select = document.getElementById("AGL_select");
AGL_select.onclick = calc_pix_size;

$("#GSD_select").click(function () {
      $("#AGL_column").hide("fast");
      $("#GSD_column").show("fast");
});

$("#AGL_select").click(function () {
      $("#GSD_column").hide("fast");
      $("#AGL_column").show("fast");
});

/*GSD Calculations*/
function calc_gsd() {
      var px = document.getElementById("px").value;
      var altitude = document.getElementById("AGL_known").value;
      var flength = document.getElementById("focal_length").value;

      var gsdur = (px * altitude / flength) * 100;
      var gsd = math.round(gsdur, 2);

      document.getElementById("gsd").value = gsd;
}

function calc_photo_area() {
      var sensor_width = document.getElementById("sensor_width").value;
      var image_width = document.getElementById("image_width").value;
      var altitude = document.getElementById("AGL_known").value;
      var image_width = document.getElementById("image_width").value;
      var image_height = document.getElementById("image_height").value;
      var gsd_math = (document.getElementById("gsd").value) / 100;
      var fwd_gaps = document.getElementById("fwd_gaps").value;
      var side_gaps = document.getElementById("side_gaps").value;
      var drone_speed = document.getElementById("drone_speed").value;
      var focal_length = document.getElementById("focal_length").value;

      var gsd_width = image_width * gsd_math;
      var gsd_height = image_height * gsd_math;

      var flight_width = math.round((gsd_width * (100 - side_gaps)) / 100, 2);
      var gaps_length = math.round((gsd_height * (100 - fwd_gaps)) / 100, 2);

      var lapse = math.round(gaps_length / drone_speed, 2);
      var shutter_speed = math.round(1 / ((((sensor_width * altitude) / (focal_length * image_width)) / 2) / drone_speed), 2);

      document.getElementById("flight_width").value = flight_width;
      document.getElementById("gaps_length").value = gaps_length;
      document.getElementById("lapse").value = lapse;
      document.getElementById("shutter_speed").value = shutter_speed;

      var gsd_area = math.round((gsd_width * gsd_height), 2);
      var gsd_area_ha = math.round(gsd_area / 10000, 2)
      var gsd_area_acre = math.round(gsd_area_ha * 2.47105, 2)

      document.getElementById("gsd_area").value = gsd_area;
      document.getElementById("gsd_area_ha").value = gsd_area_ha;
      document.getElementById("gsd_area_acre").value = gsd_area_acre;
}

function todo() {
      calc_gsd();
      calc_photo_area();
}

var gsd_button = document.getElementById("gsd_button");
gsd_button.onclick = todo;

/*Altitude Calculations*/

function calc_agl() {
      var px = document.getElementById("px2").value;
      var gsd = document.getElementById("GSD_known").value;
      var flength = document.getElementById("focal_length2").value;

      var aglur = (gsd * flength / px) / 100;
      var agl = math.round(aglur, 2);

      document.getElementById("agl").value = agl;
}

var AGL_button = document.getElementById("AGL_button");
AGL_button.onclick = calc_agl;
