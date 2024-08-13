var wms_layers = [];

var lyr_2016OrtofotoRM_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://moldova-map.md/geoserver/orthophoto/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "orthophoto:Ortofoto_2016_RM",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2016 Ortofoto RM",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_2016OrtofotoRM_0, 0]);
var lyr_22Terenuricadastrale_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_terenuri",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.2. Terenuri cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_22Terenuricadastrale_1, 0]);
var lyr_21Cladiricadastrale_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_cladiri",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.1. Cladiri cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_21Cladiricadastrale_2, 0]);
var lyr_23Sectoarecadastrale_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_cbi:cad_hcsectoare",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "2.3. Sectoare cadastrale",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_23Sectoarecadastrale_3, 0]);
var lyr_63UATImunicipiucomunorasat_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://map.cadastru.md/geoserver/ows?version%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "w_rsuat:mv_uat3",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "6.3. UAT I (municipiu, comună, oraș, sat)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_63UATImunicipiucomunorasat_4, 0]);
var format_Badiceni_5 = new ol.format.GeoJSON();
var features_Badiceni_5 = format_Badiceni_5.readFeatures(json_Badiceni_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Badiceni_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Badiceni_5.addFeatures(features_Badiceni_5);
var lyr_Badiceni_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Badiceni_5, 
                style: style_Badiceni_5,
                popuplayertitle: "Badiceni",
                interactive: true,
    title: 'Badiceni<br />\
    <img src="styles/legend/Badiceni_5_0.png" /> 20<br />\
    <img src="styles/legend/Badiceni_5_1.png" /> 25<br />'
        });
var format_Bulboci_6 = new ol.format.GeoJSON();
var features_Bulboci_6 = format_Bulboci_6.readFeatures(json_Bulboci_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bulboci_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bulboci_6.addFeatures(features_Bulboci_6);
var lyr_Bulboci_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bulboci_6, 
                style: style_Bulboci_6,
                popuplayertitle: "Bulboci",
                interactive: true,
    title: 'Bulboci<br />\
    <img src="styles/legend/Bulboci_6_0.png" /> 20<br />\
    <img src="styles/legend/Bulboci_6_1.png" /> 25<br />'
        });
var format_CainariiVechi_7 = new ol.format.GeoJSON();
var features_CainariiVechi_7 = format_CainariiVechi_7.readFeatures(json_CainariiVechi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CainariiVechi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CainariiVechi_7.addFeatures(features_CainariiVechi_7);
var lyr_CainariiVechi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CainariiVechi_7, 
                style: style_CainariiVechi_7,
                popuplayertitle: "Cainarii Vechi",
                interactive: true,
    title: 'Cainarii Vechi<br />\
    <img src="styles/legend/CainariiVechi_7_0.png" /> 20<br />\
    <img src="styles/legend/CainariiVechi_7_1.png" /> 25<br />'
        });
var format_Dubna_8 = new ol.format.GeoJSON();
var features_Dubna_8 = format_Dubna_8.readFeatures(json_Dubna_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dubna_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dubna_8.addFeatures(features_Dubna_8);
var lyr_Dubna_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dubna_8, 
                style: style_Dubna_8,
                popuplayertitle: "Dubna",
                interactive: true,
    title: 'Dubna<br />\
    <img src="styles/legend/Dubna_8_0.png" /> 20<br />\
    <img src="styles/legend/Dubna_8_1.png" /> 25<br />'
        });
var format_Egoreni_9 = new ol.format.GeoJSON();
var features_Egoreni_9 = format_Egoreni_9.readFeatures(json_Egoreni_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Egoreni_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Egoreni_9.addFeatures(features_Egoreni_9);
var lyr_Egoreni_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Egoreni_9, 
                style: style_Egoreni_9,
                popuplayertitle: "Egoreni",
                interactive: true,
    title: 'Egoreni<br />\
    <img src="styles/legend/Egoreni_9_0.png" /> 20<br />\
    <img src="styles/legend/Egoreni_9_1.png" /> 25<br />'
        });
var format_Hristici_10 = new ol.format.GeoJSON();
var features_Hristici_10 = format_Hristici_10.readFeatures(json_Hristici_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hristici_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hristici_10.addFeatures(features_Hristici_10);
var lyr_Hristici_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hristici_10, 
                style: style_Hristici_10,
                popuplayertitle: "Hristici",
                interactive: true,
    title: 'Hristici<br />\
    <img src="styles/legend/Hristici_10_0.png" /> 20<br />\
    <img src="styles/legend/Hristici_10_1.png" /> 25<br />'
        });
var format_munSoroca_11 = new ol.format.GeoJSON();
var features_munSoroca_11 = format_munSoroca_11.readFeatures(json_munSoroca_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_munSoroca_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_munSoroca_11.addFeatures(features_munSoroca_11);
var lyr_munSoroca_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_munSoroca_11, 
                style: style_munSoroca_11,
                popuplayertitle: "mun. Soroca",
                interactive: true,
    title: 'mun. Soroca<br />\
    <img src="styles/legend/munSoroca_11_0.png" /> 20<br />\
    <img src="styles/legend/munSoroca_11_1.png" /> 25<br />'
        });
var format_Parcani_12 = new ol.format.GeoJSON();
var features_Parcani_12 = format_Parcani_12.readFeatures(json_Parcani_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcani_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcani_12.addFeatures(features_Parcani_12);
var lyr_Parcani_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcani_12, 
                style: style_Parcani_12,
                popuplayertitle: "Parcani",
                interactive: true,
    title: 'Parcani<br />\
    <img src="styles/legend/Parcani_12_0.png" /> 20<br />\
    <img src="styles/legend/Parcani_12_1.png" /> 25<br />'
        });
var format_Pilita_13 = new ol.format.GeoJSON();
var features_Pilita_13 = format_Pilita_13.readFeatures(json_Pilita_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pilita_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pilita_13.addFeatures(features_Pilita_13);
var lyr_Pilita_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pilita_13, 
                style: style_Pilita_13,
                popuplayertitle: "Pilita",
                interactive: true,
    title: 'Pilita<br />\
    <img src="styles/legend/Pilita_13_0.png" /> 20<br />\
    <img src="styles/legend/Pilita_13_1.png" /> 25<br />'
        });
var format_RediCeresnovat_14 = new ol.format.GeoJSON();
var features_RediCeresnovat_14 = format_RediCeresnovat_14.readFeatures(json_RediCeresnovat_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RediCeresnovat_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RediCeresnovat_14.addFeatures(features_RediCeresnovat_14);
var lyr_RediCeresnovat_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RediCeresnovat_14, 
                style: style_RediCeresnovat_14,
                popuplayertitle: "Redi Ceresnovat",
                interactive: true,
    title: 'Redi Ceresnovat<br />\
    <img src="styles/legend/RediCeresnovat_14_0.png" /> 20<br />\
    <img src="styles/legend/RediCeresnovat_14_1.png" /> 25<br />'
        });
var format_ReginaMaria_15 = new ol.format.GeoJSON();
var features_ReginaMaria_15 = format_ReginaMaria_15.readFeatures(json_ReginaMaria_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReginaMaria_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReginaMaria_15.addFeatures(features_ReginaMaria_15);
var lyr_ReginaMaria_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReginaMaria_15, 
                style: style_ReginaMaria_15,
                popuplayertitle: "Regina Maria",
                interactive: true,
    title: 'Regina Maria<br />\
    <img src="styles/legend/ReginaMaria_15_0.png" /> 20<br />\
    <img src="styles/legend/ReginaMaria_15_1.png" /> 25<br />'
        });
var format_Schineni_16 = new ol.format.GeoJSON();
var features_Schineni_16 = format_Schineni_16.readFeatures(json_Schineni_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schineni_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schineni_16.addFeatures(features_Schineni_16);
var lyr_Schineni_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schineni_16, 
                style: style_Schineni_16,
                popuplayertitle: "Schineni",
                interactive: true,
    title: 'Schineni<br />\
    <img src="styles/legend/Schineni_16_0.png" /> 11<br />\
    <img src="styles/legend/Schineni_16_1.png" /> 25<br />'
        });
var format_Solcani_17 = new ol.format.GeoJSON();
var features_Solcani_17 = format_Solcani_17.readFeatures(json_Solcani_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solcani_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solcani_17.addFeatures(features_Solcani_17);
var lyr_Solcani_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solcani_17, 
                style: style_Solcani_17,
                popuplayertitle: "Solcani",
                interactive: true,
    title: 'Solcani<br />\
    <img src="styles/legend/Solcani_17_0.png" /> 20<br />\
    <img src="styles/legend/Solcani_17_1.png" /> 25<br />'
        });
var format_Vadeni_18 = new ol.format.GeoJSON();
var features_Vadeni_18 = format_Vadeni_18.readFeatures(json_Vadeni_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vadeni_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vadeni_18.addFeatures(features_Vadeni_18);
var lyr_Vadeni_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vadeni_18, 
                style: style_Vadeni_18,
                popuplayertitle: "Vadeni",
                interactive: true,
    title: 'Vadeni<br />\
    <img src="styles/legend/Vadeni_18_0.png" /> 20<br />\
    <img src="styles/legend/Vadeni_18_1.png" /> 25<br />'
        });
var format_Zastinca_19 = new ol.format.GeoJSON();
var features_Zastinca_19 = format_Zastinca_19.readFeatures(json_Zastinca_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zastinca_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zastinca_19.addFeatures(features_Zastinca_19);
var lyr_Zastinca_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zastinca_19, 
                style: style_Zastinca_19,
                popuplayertitle: "Zastinca",
                interactive: true,
    title: 'Zastinca<br />\
    <img src="styles/legend/Zastinca_19_0.png" /> 20<br />\
    <img src="styles/legend/Zastinca_19_1.png" /> 25<br />'
        });

lyr_2016OrtofotoRM_0.setVisible(true);lyr_22Terenuricadastrale_1.setVisible(true);lyr_21Cladiricadastrale_2.setVisible(true);lyr_23Sectoarecadastrale_3.setVisible(true);lyr_63UATImunicipiucomunorasat_4.setVisible(true);lyr_Badiceni_5.setVisible(true);lyr_Bulboci_6.setVisible(true);lyr_CainariiVechi_7.setVisible(true);lyr_Dubna_8.setVisible(true);lyr_Egoreni_9.setVisible(true);lyr_Hristici_10.setVisible(true);lyr_munSoroca_11.setVisible(true);lyr_Parcani_12.setVisible(true);lyr_Pilita_13.setVisible(true);lyr_RediCeresnovat_14.setVisible(true);lyr_ReginaMaria_15.setVisible(true);lyr_Schineni_16.setVisible(true);lyr_Solcani_17.setVisible(true);lyr_Vadeni_18.setVisible(true);lyr_Zastinca_19.setVisible(true);
var layersList = [lyr_2016OrtofotoRM_0,lyr_22Terenuricadastrale_1,lyr_21Cladiricadastrale_2,lyr_23Sectoarecadastrale_3,lyr_63UATImunicipiucomunorasat_4,lyr_Badiceni_5,lyr_Bulboci_6,lyr_CainariiVechi_7,lyr_Dubna_8,lyr_Egoreni_9,lyr_Hristici_10,lyr_munSoroca_11,lyr_Parcani_12,lyr_Pilita_13,lyr_RediCeresnovat_14,lyr_ReginaMaria_15,lyr_Schineni_16,lyr_Solcani_17,lyr_Vadeni_18,lyr_Zastinca_19];
lyr_Badiceni_5.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Bulboci_6.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_CainariiVechi_7.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Dubna_8.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Egoreni_9.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Hristici_10.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_munSoroca_11.set('fieldAliases', {'codcadastr': 'codcadastr', 'codtip': 'codtip', 'codstr': 'codstr', 'nrcasa': 'nrcasa', 'codnrremar': 'codnrremar', 'codtipregi': 'codtipregi', 'codcolect': 'codcolect', 'suprafata': 'suprafata', 'codadm': 'codadm', 'datamodif': 'datamodif', });
lyr_Parcani_12.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Pilita_13.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_RediCeresnovat_14.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_ReginaMaria_15.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Schineni_16.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Solcani_17.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Vadeni_18.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Zastinca_19.set('fieldAliases', {'CodCadastr': 'CodCadastr', 'CodTip': 'CodTip', 'CodStr': 'CodStr', 'NrCasa': 'NrCasa', 'CodNrRemar': 'CodNrRemar', 'CodTipRegi': 'CodTipRegi', 'CodColect': 'CodColect', 'Suprafata': 'Suprafata', 'CodAdm': 'CodAdm', 'DatModif': 'DatModif', 'Timp': 'Timp', });
lyr_Badiceni_5.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Bulboci_6.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_CainariiVechi_7.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Dubna_8.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Egoreni_9.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Hristici_10.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_munSoroca_11.set('fieldImages', {'codcadastr': 'TextEdit', 'codtip': 'TextEdit', 'codstr': 'TextEdit', 'nrcasa': 'TextEdit', 'codnrremar': 'TextEdit', 'codtipregi': 'TextEdit', 'codcolect': 'TextEdit', 'suprafata': 'TextEdit', 'codadm': 'TextEdit', 'datamodif': 'DateTime', });
lyr_Parcani_12.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Pilita_13.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_RediCeresnovat_14.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_ReginaMaria_15.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Schineni_16.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Solcani_17.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Vadeni_18.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Zastinca_19.set('fieldImages', {'CodCadastr': 'TextEdit', 'CodTip': 'TextEdit', 'CodStr': 'TextEdit', 'NrCasa': 'TextEdit', 'CodNrRemar': 'TextEdit', 'CodTipRegi': 'TextEdit', 'CodColect': 'TextEdit', 'Suprafata': 'TextEdit', 'CodAdm': 'TextEdit', 'DatModif': 'DateTime', 'Timp': 'TextEdit', });
lyr_Badiceni_5.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Bulboci_6.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_CainariiVechi_7.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Dubna_8.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'no label', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Egoreni_9.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Hristici_10.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_munSoroca_11.set('fieldLabels', {'codcadastr': 'inline label - always visible', 'codtip': 'no label', 'codstr': 'no label', 'nrcasa': 'no label', 'codnrremar': 'no label', 'codtipregi': 'no label', 'codcolect': 'no label', 'suprafata': 'inline label - always visible', 'codadm': 'no label', 'datamodif': 'no label', });
lyr_Parcani_12.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Pilita_13.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_RediCeresnovat_14.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_ReginaMaria_15.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Schineni_16.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Solcani_17.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Vadeni_18.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Zastinca_19.set('fieldLabels', {'CodCadastr': 'inline label - always visible', 'CodTip': 'no label', 'CodStr': 'no label', 'NrCasa': 'no label', 'CodNrRemar': 'no label', 'CodTipRegi': 'no label', 'CodColect': 'no label', 'Suprafata': 'inline label - always visible', 'CodAdm': 'no label', 'DatModif': 'no label', 'Timp': 'no label', });
lyr_Zastinca_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});