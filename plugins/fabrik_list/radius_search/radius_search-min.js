var FbListRadiusSearch=new Class({Extends:FbListPlugin,initialize:function(b,a){this.parent(a);head.ready(function(){this.element=$(b).getElement(".radus_search");if(typeOf(this.options.value)==="null"){this.options.value=0}this.fx=new Fx.Slide(this.element.getElement(".radius_search_options"));this.element.getElements("input[name^=radius_search_active]").addEvent("click",this.toggleActive.bindWithEvent(this));var c=this.element.getElements("input[name^=radius_search_active]").filter(function(g){return g.checked===true});if(c[0].get("value")==="0"){this.fx.slideOut()}this.element.getElements("input[name^=radius_search_type]").addEvent("click",this.toggleFields.bindWithEvent(this));this.options.value=this.options.value.toInt();if(typeOf(this.element)==="null"){return}var d=this.element.getElement(".radius_search_distance");var e=this.element.getElement(".slider_output");this.mySlide=new Slider(this.element.getElement(".fabrikslider-line"),this.element.getElement(".knob"),{onChange:function(f){d.value=f;e.set("text",f+this.options.unit)}.bind(this),steps:this.options.steps}).set(0);this.mySlide.set(this.options.value);d.value=this.options.value;e.set("text",this.options.value);if(geo_position_js.init()){geo_position_js.getCurrentPosition(this.setGeoCenter.bind(this),this.geoCenterErr.bind(this),{enableHighAccuracy:true})}}.bind(this))},setGeoCenter:function(a){this.geocenterpoint=a;this.geoCenter(a)},geoCenter:function(a){if(typeOf(a)==="null"){alert(Joomla.JText._("PLG_VIEW_RADIUS_NO_GEOLOCATION_AVAILABLE"))}else{this.element.getElement("input[name=radius_search_lat]").value=a.coords.latitude.toFixed(2);this.element.getElement("input[name=radius_search_lon]").value=a.coords.longitude.toFixed(2)}},geoCenterErr:function(a){fconsole("geo location error="+a.message)},toggleActive:function(a){a=new Event(a);switch(a.target.get("value")){case"1":this.fx.slideIn();break;case"0":this.fx.slideOut();break}},toggleFields:function(a){switch(a.target.get("value")){case"latlon":this.element.getElement(".radius_search_place_container").setStyle("display","none");this.element.getElement(".radius_search_coords_container").setStyle("display","");break;case"mylocation":this.element.getElement(".radius_search_place_container").setStyle("display","none");this.element.getElement(".radius_search_coords_container").setStyle("display","none");this.setGeoCenter(this.geocenterpoint);break;case"place":this.element.getElement(".radius_search_place_container").setStyle("display","");this.element.getElement(".radius_search_coords_container").setStyle("display","none");break}},clearFilter:function(){this.element.getElements("input[name^=radius_search_active]").filter(function(a){return a.get("value")==="0"}).getLast().checked=true}});