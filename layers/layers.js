var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Sariab_1 = new ol.format.GeoJSON();
var features_Sariab_1 = format_Sariab_1.readFeatures(json_Sariab_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sariab_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sariab_1.addFeatures(features_Sariab_1);
var lyr_Sariab_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sariab_1, 
                style: style_Sariab_1,
                popuplayertitle: 'Sariab',
                interactive: true,
                title: '<img src="styles/legend/Sariab_1.png" /> Sariab'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_Sariab_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Sariab_1];
lyr_Sariab_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'STATUS': 'STATUS', 'Length': 'Length', 'Dia': 'Dia', 'Type': 'Type', 'Year_': 'Year_', 'Condition': 'Condition', 'Sub_Divion': 'Sub_Divion', 'Shape_Leng': 'Shape_Leng', 'cond': 'cond', });
lyr_Sariab_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'STATUS': 'TextEdit', 'Length': 'TextEdit', 'Dia': 'TextEdit', 'Type': 'TextEdit', 'Year_': 'TextEdit', 'Condition': 'TextEdit', 'Sub_Divion': 'TextEdit', 'Shape_Leng': 'TextEdit', 'cond': 'TextEdit', });
lyr_Sariab_1.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'STATUS': 'no label', 'Length': 'no label', 'Dia': 'no label', 'Type': 'no label', 'Year_': 'no label', 'Condition': 'no label', 'Sub_Divion': 'no label', 'Shape_Leng': 'no label', 'cond': 'no label', });
lyr_Sariab_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});