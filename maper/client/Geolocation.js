var Geolocation={
  map:null,
  init:function(){
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.331398,39.897445);
    map.centerAndZoom(point,5);
    this.map=map;
  },
  getCurrentPosition:function(callback){
    $this=this;
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        if(callback){
          callback(r.point.lng,r.point.lat);
        }else{
          return {lng:r.point.lng,lat:r.point.lat};
        }
      }
      else {
        alert('failed'+this.getStatus());
      }        
    },{enableHighAccuracy: true});
  },
  addPointToMap:function(lng,lat,mes){
    $this=this;
    var point = new BMap.Point(lng,lat);
    var marker = new BMap.Marker(point);
    $this.map.addOverlay(marker);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
    if(mes){
      var infoWindow = new BMap.InfoWindow(mes);
      this.map.openInfoWindow(infoWindow,point); //开启信息窗口
      setTimeout(function(){
        $this.map.closeInfoWindow(infoWindow,point); //开启信息窗口
      },2000);      
    }
  },
  removePoints:function(maker){
    this.map.clearOverlays();
  }
}