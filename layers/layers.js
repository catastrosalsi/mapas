var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_red_gas_2 = new ol.format.GeoJSON();
var features_red_gas_2 = format_red_gas_2.readFeatures(json_red_gas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_gas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_gas_2.addFeatures(features_red_gas_2);
var lyr_red_gas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_gas_2, 
                style: style_red_gas_2,
                popuplayertitle: 'red_gas',
                interactive: true,
                title: '<img src="styles/legend/red_gas_2.png" /> red_gas'
            });
var format_alumbrado_3 = new ol.format.GeoJSON();
var features_alumbrado_3 = format_alumbrado_3.readFeatures(json_alumbrado_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_alumbrado_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_alumbrado_3.addFeatures(features_alumbrado_3);
var lyr_alumbrado_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_alumbrado_3, 
                style: style_alumbrado_3,
                popuplayertitle: 'alumbrado',
                interactive: true,
                title: '<img src="styles/legend/alumbrado_3.png" /> alumbrado'
            });
var format_calles_4 = new ol.format.GeoJSON();
var features_calles_4 = format_calles_4.readFeatures(json_calles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calles_4.addFeatures(features_calles_4);
var lyr_calles_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_calles_4, 
                style: style_calles_4,
                popuplayertitle: 'calles',
                interactive: true,
    title: 'calles<br />\
    <img src="styles/legend/calles_4_0.png" /> Con Infraestructura<br />\
    <img src="styles/legend/calles_4_1.png" /> De Tierra<br />\
    <img src="styles/legend/calles_4_2.png" /> Traza Oficial<br />' });
var format_calles_irregulares_5 = new ol.format.GeoJSON();
var features_calles_irregulares_5 = format_calles_irregulares_5.readFeatures(json_calles_irregulares_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calles_irregulares_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calles_irregulares_5.addFeatures(features_calles_irregulares_5);
var lyr_calles_irregulares_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_calles_irregulares_5, 
                style: style_calles_irregulares_5,
                popuplayertitle: 'calles_irregulares',
                interactive: true,
                title: '<img src="styles/legend/calles_irregulares_5.png" /> calles_irregulares'
            });
var format_calle_residuos_6 = new ol.format.GeoJSON();
var features_calle_residuos_6 = format_calle_residuos_6.readFeatures(json_calle_residuos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_calle_residuos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_calle_residuos_6.addFeatures(features_calle_residuos_6);
var lyr_calle_residuos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_calle_residuos_6, 
                style: style_calle_residuos_6,
                popuplayertitle: 'calle_residuos',
                interactive: true,
    title: 'calle_residuos<br />\
    <img src="styles/legend/calle_residuos_6_0.png" /> 1<br />\
    <img src="styles/legend/calle_residuos_6_1.png" /> 2<br />\
    <img src="styles/legend/calle_residuos_6_2.png" /> 3<br />\
    <img src="styles/legend/calle_residuos_6_3.png" /> 6<br />\
    <img src="styles/legend/calle_residuos_6_4.png" /> <br />' });
var format_red_distribucion_7 = new ol.format.GeoJSON();
var features_red_distribucion_7 = format_red_distribucion_7.readFeatures(json_red_distribucion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_distribucion_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_distribucion_7.addFeatures(features_red_distribucion_7);
var lyr_red_distribucion_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_distribucion_7, 
                style: style_red_distribucion_7,
                popuplayertitle: 'red_distribucion',
                interactive: true,
                title: '<img src="styles/legend/red_distribucion_7.png" /> red_distribucion'
            });
var format_red_impulsion_8 = new ol.format.GeoJSON();
var features_red_impulsion_8 = format_red_impulsion_8.readFeatures(json_red_impulsion_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_impulsion_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_impulsion_8.addFeatures(features_red_impulsion_8);
var lyr_red_impulsion_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_impulsion_8, 
                style: style_red_impulsion_8,
                popuplayertitle: 'red_impulsion',
                interactive: true,
                title: '<img src="styles/legend/red_impulsion_8.png" /> red_impulsion'
            });
var format_red_interconexion_9 = new ol.format.GeoJSON();
var features_red_interconexion_9 = format_red_interconexion_9.readFeatures(json_red_interconexion_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_interconexion_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_interconexion_9.addFeatures(features_red_interconexion_9);
var lyr_red_interconexion_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_interconexion_9, 
                style: style_red_interconexion_9,
                popuplayertitle: 'red_interconexion',
                interactive: true,
                title: '<img src="styles/legend/red_interconexion_9.png" /> red_interconexion'
            });
var format_pozosPreliminar_10 = new ol.format.GeoJSON();
var features_pozosPreliminar_10 = format_pozosPreliminar_10.readFeatures(json_pozosPreliminar_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pozosPreliminar_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pozosPreliminar_10.addFeatures(features_pozosPreliminar_10);
var lyr_pozosPreliminar_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pozosPreliminar_10, 
                style: style_pozosPreliminar_10,
                popuplayertitle: 'pozosPreliminar',
                interactive: true,
                title: '<img src="styles/legend/pozosPreliminar_10.png" /> pozosPreliminar'
            });
var format_ley_bosques_11 = new ol.format.GeoJSON();
var features_ley_bosques_11 = format_ley_bosques_11.readFeatures(json_ley_bosques_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ley_bosques_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ley_bosques_11.addFeatures(features_ley_bosques_11);
var lyr_ley_bosques_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ley_bosques_11, 
                style: style_ley_bosques_11,
                popuplayertitle: 'ley_bosques',
                interactive: true,
    title: 'ley_bosques<br />\
    <img src="styles/legend/ley_bosques_11_0.png" /> Categoria I - rojo<br />\
    <img src="styles/legend/ley_bosques_11_1.png" /> Categoria II - amarillo<br />\
    <img src="styles/legend/ley_bosques_11_2.png" /> Categoria III - verde<br />\
    <img src="styles/legend/ley_bosques_11_3.png" /> <br />' });
var format_Poligonoarqueologicofinal_12 = new ol.format.GeoJSON();
var features_Poligonoarqueologicofinal_12 = format_Poligonoarqueologicofinal_12.readFeatures(json_Poligonoarqueologicofinal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligonoarqueologicofinal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligonoarqueologicofinal_12.addFeatures(features_Poligonoarqueologicofinal_12);
var lyr_Poligonoarqueologicofinal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poligonoarqueologicofinal_12, 
                style: style_Poligonoarqueologicofinal_12,
                popuplayertitle: 'Poligono arqueologico final',
                interactive: true,
                title: '<img src="styles/legend/Poligonoarqueologicofinal_12.png" /> Poligono arqueologico final'
            });
var format_barrios_13 = new ol.format.GeoJSON();
var features_barrios_13 = format_barrios_13.readFeatures(json_barrios_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrios_13.addFeatures(features_barrios_13);
var lyr_barrios_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barrios_13, 
                style: style_barrios_13,
                popuplayertitle: 'barrios',
                interactive: true,
                title: '<img src="styles/legend/barrios_13.png" /> barrios'
            });
var format_Radio_Municipal_14 = new ol.format.GeoJSON();
var features_Radio_Municipal_14 = format_Radio_Municipal_14.readFeatures(json_Radio_Municipal_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radio_Municipal_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radio_Municipal_14.addFeatures(features_Radio_Municipal_14);
var lyr_Radio_Municipal_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radio_Municipal_14, 
                style: style_Radio_Municipal_14,
                popuplayertitle: 'Radio_Municipal',
                interactive: true,
                title: '<img src="styles/legend/Radio_Municipal_14.png" /> Radio_Municipal'
            });
var group_AMBIENTE = new ol.layer.Group({
                                layers: [lyr_ley_bosques_11,],
                                fold: 'open',
                                title: 'AMBIENTE'});
var group_AGUA = new ol.layer.Group({
                                layers: [lyr_red_distribucion_7,lyr_red_impulsion_8,lyr_red_interconexion_9,lyr_pozosPreliminar_10,],
                                fold: 'open',
                                title: 'AGUA'});
var group_Basura = new ol.layer.Group({
                                layers: [lyr_calle_residuos_6,],
                                fold: 'open',
                                title: 'Basura'});
var group_CATASTROUSOSDESUELO = new ol.layer.Group({
                                layers: [lyr_calles_4,lyr_calles_irregulares_5,],
                                fold: 'open',
                                title: 'CATASTRO / USOS DE SUELO'});
var group_LUZYGAS = new ol.layer.Group({
                                layers: [lyr_red_gas_2,lyr_alumbrado_3,],
                                fold: 'open',
                                title: 'LUZ Y GAS'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_red_gas_2.setVisible(true);lyr_alumbrado_3.setVisible(true);lyr_calles_4.setVisible(true);lyr_calles_irregulares_5.setVisible(false);lyr_calle_residuos_6.setVisible(true);lyr_red_distribucion_7.setVisible(true);lyr_red_impulsion_8.setVisible(true);lyr_red_interconexion_9.setVisible(true);lyr_pozosPreliminar_10.setVisible(true);lyr_ley_bosques_11.setVisible(true);lyr_Poligonoarqueologicofinal_12.setVisible(true);lyr_barrios_13.setVisible(true);lyr_Radio_Municipal_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,group_LUZYGAS,group_CATASTROUSOSDESUELO,group_Basura,group_AGUA,group_AMBIENTE,lyr_Poligonoarqueologicofinal_12,lyr_barrios_13,lyr_Radio_Municipal_14];
lyr_red_gas_2.set('fieldAliases', {'id': 'id', 'observ': 'observ', });
lyr_alumbrado_3.set('fieldAliases', {'gid': 'gid', 'tipo': 'tipo', 'material': 'material', 'watts': 'watts', 'fecha': 'fecha', 'fecha_alta': 'fecha_alta', 'fecha_instalacion': 'fecha_instalacion', 'fuente': 'fuente', 'observacion': 'observacion', 'funciona': 'funciona', 'inexistente': 'inexistente', 'prendida': 'prendida', 'poda': 'poda', 'cod': 'cod', 'intensidad': 'intensidad', 'potenciaant': 'potenciaant', 'potencianew': 'potencianew', 'tipo2022': 'tipo2022', 'medido': 'medido', 'nuevo2025': 'nuevo2025', });
lyr_calles_4.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'zona': 'zona', 'tipo': 'tipo', 'ancho': 'ancho', 'longitud': 'longitud', 'gid': 'gid', 'observacion': 'observacion', 'recoleccion': 'recoleccion', 'alumbrado2022': 'alumbrado2022', 'zona_2022': 'zona_2022', 'CORDON_CUNETA': 'CORDON_CUNETA', 'Zona_2021': 'Zona_2021', 'BARRIO': 'BARRIO', 'ZONA_2025': 'ZONA_2025', 'OPERARIO': 'OPERARIO', 'INFR': 'INFR', });
lyr_calles_irregulares_5.set('fieldAliases', {'id': 'id', });
lyr_calle_residuos_6.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'registro': 'registro', 'largo': 'largo', 'frecuencia': 'frecuencia', });
lyr_red_distribucion_7.set('fieldAliases', {'tipo': 'tipo', 'diametro': 'diametro', 'layer': 'layer', 'gid': 'gid', 'verificado': 'verificado', 'fecha': 'fecha', 'observacion': 'observacion', 'largo': 'largo', });
lyr_red_impulsion_8.set('fieldAliases', {'layer': 'layer', 'text': 'text', 'gid': 'gid', });
lyr_red_interconexion_9.set('fieldAliases', {'tipo': 'tipo', 'diametro': 'diametro', 'gid': 'gid', });
lyr_pozosPreliminar_10.set('fieldAliases', {'gid': 'gid', 'cod': 'cod', 'detalle': 'detalle', 'tipo': 'tipo', });
lyr_ley_bosques_11.set('fieldAliases', {'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'gid': 'gid', });
lyr_Poligonoarqueologicofinal_12.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_barrios_13.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', 'amen_ident': 'amen_ident', 'gid': 'gid', 'rot_label': 'rot_label', 'completo': 'completo', 'nuevo': 'nuevo', 'Barrio_Barrio': 'Barrio_Barrio', 'CIR': 'CIR', 'SEC': 'SEC', 'SEC2': 'SEC2', 'sup': 'sup', 'orientacion': 'orientacion', 'sup_m2': 'sup_m2', });
lyr_Radio_Municipal_14.set('fieldAliases', {'id': 'id', 'name': 'name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudemo': 'altitudemo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'draworder': 'draworder', 'icon': 'icon', 'area__ha_': 'area__ha_', 'ley_que_le': 'ley_que_le', 'nombre_rad': 'nombre_rad', 'nomenclatu': 'nomenclatu', 'tipo_de_go': 'tipo_de_go', });
lyr_red_gas_2.set('fieldImages', {'id': 'TextEdit', 'observ': 'TextEdit', });
lyr_alumbrado_3.set('fieldImages', {'gid': 'Range', 'tipo': 'TextEdit', 'material': 'TextEdit', 'watts': 'TextEdit', 'fecha': 'TextEdit', 'fecha_alta': 'DateTime', 'fecha_instalacion': 'DateTime', 'fuente': 'TextEdit', 'observacion': 'TextEdit', 'funciona': 'CheckBox', 'inexistente': 'CheckBox', 'prendida': 'CheckBox', 'poda': 'CheckBox', 'cod': 'Range', 'intensidad': 'Range', 'potenciaant': 'TextEdit', 'potencianew': 'TextEdit', 'tipo2022': 'TextEdit', 'medido': 'TextEdit', 'nuevo2025': 'TextEdit', });
lyr_calles_4.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'zona': 'TextEdit', 'tipo': 'TextEdit', 'ancho': 'Range', 'longitud': 'TextEdit', 'gid': 'Range', 'observacion': 'TextEdit', 'recoleccion': 'TextEdit', 'alumbrado2022': 'TextEdit', 'zona_2022': 'TextEdit', 'CORDON_CUNETA': 'TextEdit', 'Zona_2021': 'TextEdit', 'BARRIO': 'TextEdit', 'ZONA_2025': 'TextEdit', 'OPERARIO': 'TextEdit', 'INFR': 'TextEdit', });
lyr_calles_irregulares_5.set('fieldImages', {'id': '', });
lyr_calle_residuos_6.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', 'registro': 'Range', 'largo': 'TextEdit', 'frecuencia': 'Range', });
lyr_red_distribucion_7.set('fieldImages', {'tipo': 'TextEdit', 'diametro': 'TextEdit', 'layer': 'TextEdit', 'gid': 'Range', 'verificado': 'CheckBox', 'fecha': 'DateTime', 'observacion': 'TextEdit', 'largo': 'TextEdit', });
lyr_red_impulsion_8.set('fieldImages', {'layer': 'TextEdit', 'text': 'TextEdit', 'gid': 'Range', });
lyr_red_interconexion_9.set('fieldImages', {'tipo': 'TextEdit', 'diametro': 'TextEdit', 'gid': 'Range', });
lyr_pozosPreliminar_10.set('fieldImages', {'gid': 'Range', 'cod': 'Range', 'detalle': 'TextEdit', 'tipo': 'TextEdit', });
lyr_ley_bosques_11.set('fieldImages', {'name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudemo': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'draworder': 'Range', 'icon': 'TextEdit', 'gid': 'Range', });
lyr_Poligonoarqueologicofinal_12.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_barrios_13.set('fieldImages', {'id': 'Range', 'nombre': 'TextEdit', 'amen_ident': 'Range', 'gid': 'Range', 'rot_label': 'Range', 'completo': 'TextEdit', 'nuevo': 'TextEdit', 'Barrio_Barrio': 'TextEdit', 'CIR': 'TextEdit', 'SEC': 'TextEdit', 'SEC2': 'TextEdit', 'sup': 'TextEdit', 'orientacion': 'TextEdit', 'sup_m2': 'TextEdit', });
lyr_Radio_Municipal_14.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudemo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'draworder': 'TextEdit', 'icon': 'TextEdit', 'area__ha_': 'TextEdit', 'ley_que_le': 'TextEdit', 'nombre_rad': 'TextEdit', 'nomenclatu': 'TextEdit', 'tipo_de_go': 'TextEdit', });
lyr_red_gas_2.set('fieldLabels', {'id': 'no label', 'observ': 'no label', });
lyr_alumbrado_3.set('fieldLabels', {'gid': 'no label', 'tipo': 'no label', 'material': 'no label', 'watts': 'no label', 'fecha': 'no label', 'fecha_alta': 'no label', 'fecha_instalacion': 'no label', 'fuente': 'no label', 'observacion': 'no label', 'funciona': 'no label', 'inexistente': 'no label', 'prendida': 'no label', 'poda': 'no label', 'cod': 'no label', 'intensidad': 'no label', 'potenciaant': 'no label', 'potencianew': 'no label', 'tipo2022': 'no label', 'medido': 'no label', 'nuevo2025': 'no label', });
lyr_calles_4.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'zona': 'no label', 'tipo': 'no label', 'ancho': 'no label', 'longitud': 'no label', 'gid': 'no label', 'observacion': 'no label', 'recoleccion': 'no label', 'alumbrado2022': 'no label', 'zona_2022': 'no label', 'CORDON_CUNETA': 'no label', 'Zona_2021': 'no label', 'BARRIO': 'no label', 'ZONA_2025': 'no label', 'OPERARIO': 'no label', 'INFR': 'no label', });
lyr_calles_irregulares_5.set('fieldLabels', {'id': 'no label', });
lyr_calle_residuos_6.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'registro': 'no label', 'largo': 'no label', 'frecuencia': 'inline label - always visible', });
lyr_red_distribucion_7.set('fieldLabels', {'tipo': 'no label', 'diametro': 'no label', 'layer': 'no label', 'gid': 'no label', 'verificado': 'no label', 'fecha': 'no label', 'observacion': 'no label', 'largo': 'no label', });
lyr_red_impulsion_8.set('fieldLabels', {'layer': 'no label', 'text': 'no label', 'gid': 'no label', });
lyr_red_interconexion_9.set('fieldLabels', {'tipo': 'no label', 'diametro': 'no label', 'gid': 'no label', });
lyr_pozosPreliminar_10.set('fieldLabels', {'gid': 'no label', 'cod': 'no label', 'detalle': 'no label', 'tipo': 'no label', });
lyr_ley_bosques_11.set('fieldLabels', {'name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', 'gid': 'no label', });
lyr_Poligonoarqueologicofinal_12.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_barrios_13.set('fieldLabels', {'id': 'no label', 'nombre': 'no label', 'amen_ident': 'no label', 'gid': 'no label', 'rot_label': 'no label', 'completo': 'no label', 'nuevo': 'no label', 'Barrio_Barrio': 'no label', 'CIR': 'no label', 'SEC': 'no label', 'SEC2': 'no label', 'sup': 'no label', 'orientacion': 'no label', 'sup_m2': 'no label', });
lyr_Radio_Municipal_14.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudemo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'draworder': 'no label', 'icon': 'no label', 'area__ha_': 'no label', 'ley_que_le': 'no label', 'nombre_rad': 'no label', 'nomenclatu': 'no label', 'tipo_de_go': 'no label', });
lyr_Radio_Municipal_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});