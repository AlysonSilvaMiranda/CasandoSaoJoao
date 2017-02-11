jQuery(document).ready(function($) {

  $('#filtro_valor').val('0-1000');
  $("#input_valor").slider({
    range:true,
    min: 0,
    max: 1000,
    values:[0, 1000],
    step: 5,
    slide: function(event, ui) {
      $("#label_valor").html('$' + ui.values[ 0 ] + ' - $' + ui.values[ 1 ] );
      $('#filtro_valor').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $('#status :checkbox').prop('checked', true);
  $('#tipo :checkbox').prop('checked', true);

  FilterJS(anuncios, "#service_list", {
    template: '#template',
    criterias:[
      {field: 'valor', ele: '#filtro_valor', type: 'range'},
      {field: 'status', ele: '#status :checkbox'},
      {field: 'tipo', ele: '#tipo :checkbox'}
    ],
    search: { ele: '#procurar' }
  });

});
