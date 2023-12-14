ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([125.098449, -8.957183, 125.594744, -8.643927]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_peskizaKNI_1 = new ol.format.GeoJSON();
var features_peskizaKNI_1 = format_peskizaKNI_1.readFeatures(json_peskizaKNI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_peskizaKNI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_peskizaKNI_1.addFeatures(features_peskizaKNI_1);
var lyr_peskizaKNI_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_peskizaKNI_1, 
                style: style_peskizaKNI_1,
                interactive: true,
                title: '<img src="styles/legend/peskizaKNI_1.png" /> peskiza KNI'
            });
var format_BenefisiariusKNI_2 = new ol.format.GeoJSON();
var features_BenefisiariusKNI_2 = format_BenefisiariusKNI_2.readFeatures(json_BenefisiariusKNI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BenefisiariusKNI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenefisiariusKNI_2.addFeatures(features_BenefisiariusKNI_2);
var lyr_BenefisiariusKNI_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BenefisiariusKNI_2, 
                style: style_BenefisiariusKNI_2,
                interactive: true,
                title: '<img src="styles/legend/BenefisiariusKNI_2.png" /> Benefisiarius KNI'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_peskizaKNI_1.setVisible(true);lyr_BenefisiariusKNI_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_peskizaKNI_1,lyr_BenefisiariusKNI_2];
lyr_peskizaKNI_1.set('fieldAliases', {'Title': 'Title', 'Date Created': 'Date Created', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Description': 'Description', 'Elevation': 'Elevation', 'Aldeia': 'Aldeia', 'ATIVIDADE SETORIAIS': 'ATIVIDADE SETORIAIS', 'MUNICIPIO': 'MUNICIPIO', 'NARAN DIRETOR': 'NARAN DIRETOR', 'NARAN KOMPANIA': 'NARAN KOMPANIA', 'No.  TELEMOVEL': 'No.  TELEMOVEL', 'POSTO ADMIN': 'POSTO ADMIN', 'Rendimentu Mensal': 'Rendimentu Mensal', 'SEXU NAIN BA KOMPANIA': 'SEXU NAIN BA KOMPANIA', 'Suco': 'Suco', 'Tinan Apoiu': 'Tinan Apoiu', 'TIPU AKTIVIDADE': 'TIPU AKTIVIDADE', 'TOTAL FUNDU APOIU': 'TOTAL FUNDU APOIU', 'Total Trabalhador': 'Total Trabalhador', 'Total Trabalhador Feto': 'Total Trabalhador Feto', 'Total Trabalhador Mane': 'Total Trabalhador Mane', 'Total Trabalhador Seluk (Generu)': 'Total Trabalhador Seluk (Generu)', });
lyr_BenefisiariusKNI_2.set('fieldAliases', {'Title': 'Title', 'Date Created': 'Date Created', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Northing': 'Northing', 'Easting': 'Easting', 'Description': 'Description', 'Elevation': 'Elevation', 'Aldeia': 'Aldeia', 'Atividades Setoriais': 'Atividades Setoriais', 'Municipio': 'Municipio', 'Naran Director': 'Naran Director', 'Naran Kompainia': 'Naran Kompainia', 'New attribute': 'New attribute', 'No. Telemovel': 'No. Telemovel', 'Posto Adm': 'Posto Adm', 'Rendimentu Mensal': 'Rendimentu Mensal', 'Sexu Nain ba Kompainia': 'Sexu Nain ba Kompainia', 'Sucu': 'Sucu', 'Tinan Apoiu': 'Tinan Apoiu', 'Tipu Atividade': 'Tipu Atividade', 'Total Fundu Apoiu': 'Total Fundu Apoiu', 'Total Traballador': 'Total Traballador', 'Total Traballador feto': 'Total Traballador feto', 'Total Traballador Mane': 'Total Traballador Mane', 'Total Traballador seluk (Genero)': 'Total Traballador seluk (Genero)', });
lyr_peskizaKNI_1.set('fieldImages', {'Title': 'TextEdit', 'Date Created': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Description': 'TextEdit', 'Elevation': 'TextEdit', 'Aldeia': 'TextEdit', 'ATIVIDADE SETORIAIS': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NARAN DIRETOR': 'TextEdit', 'NARAN KOMPANIA': 'TextEdit', 'No.  TELEMOVEL': 'Range', 'POSTO ADMIN': 'TextEdit', 'Rendimentu Mensal': 'Range', 'SEXU NAIN BA KOMPANIA': 'TextEdit', 'Suco': 'TextEdit', 'Tinan Apoiu': 'Range', 'TIPU AKTIVIDADE': 'TextEdit', 'TOTAL FUNDU APOIU': 'Range', 'Total Trabalhador': 'Range', 'Total Trabalhador Feto': 'Range', 'Total Trabalhador Mane': 'Range', 'Total Trabalhador Seluk (Generu)': 'CheckBox', });
lyr_BenefisiariusKNI_2.set('fieldImages', {'Title': 'TextEdit', 'Date Created': 'DateTime', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Northing': 'TextEdit', 'Easting': 'TextEdit', 'Description': 'TextEdit', 'Elevation': 'TextEdit', 'Aldeia': 'TextEdit', 'Atividades Setoriais': 'TextEdit', 'Municipio': 'TextEdit', 'Naran Director': 'TextEdit', 'Naran Kompainia': 'TextEdit', 'New attribute': 'TextEdit', 'No. Telemovel': 'Range', 'Posto Adm': 'TextEdit', 'Rendimentu Mensal': 'TextEdit', 'Sexu Nain ba Kompainia': 'TextEdit', 'Sucu': 'TextEdit', 'Tinan Apoiu': 'Range', 'Tipu Atividade': 'TextEdit', 'Total Fundu Apoiu': 'TextEdit', 'Total Traballador': 'Range', 'Total Traballador feto': 'Range', 'Total Traballador Mane': 'Range', 'Total Traballador seluk (Genero)': 'TextEdit', });
lyr_peskizaKNI_1.set('fieldLabels', {'Title': 'no label', 'Date Created': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Northing': 'no label', 'Easting': 'no label', 'Description': 'no label', 'Elevation': 'no label', 'Aldeia': 'no label', 'ATIVIDADE SETORIAIS': 'no label', 'MUNICIPIO': 'no label', 'NARAN DIRETOR': 'no label', 'NARAN KOMPANIA': 'no label', 'No.  TELEMOVEL': 'no label', 'POSTO ADMIN': 'no label', 'Rendimentu Mensal': 'no label', 'SEXU NAIN BA KOMPANIA': 'no label', 'Suco': 'no label', 'Tinan Apoiu': 'no label', 'TIPU AKTIVIDADE': 'no label', 'TOTAL FUNDU APOIU': 'no label', 'Total Trabalhador': 'no label', 'Total Trabalhador Feto': 'no label', 'Total Trabalhador Mane': 'no label', 'Total Trabalhador Seluk (Generu)': 'no label', });
lyr_BenefisiariusKNI_2.set('fieldLabels', {'Title': 'no label', 'Date Created': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Northing': 'inline label', 'Easting': 'inline label', 'Description': 'inline label', 'Elevation': 'inline label', 'Aldeia': 'inline label', 'Atividades Setoriais': 'inline label', 'Municipio': 'inline label', 'Naran Director': 'inline label', 'Naran Kompainia': 'inline label', 'New attribute': 'inline label', 'No. Telemovel': 'inline label', 'Posto Adm': 'inline label', 'Rendimentu Mensal': 'inline label', 'Sexu Nain ba Kompainia': 'inline label', 'Sucu': 'inline label', 'Tinan Apoiu': 'inline label', 'Tipu Atividade': 'inline label', 'Total Fundu Apoiu': 'inline label', 'Total Traballador': 'inline label', 'Total Traballador feto': 'inline label', 'Total Traballador Mane': 'inline label', 'Total Traballador seluk (Genero)': 'inline label', });
lyr_BenefisiariusKNI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});