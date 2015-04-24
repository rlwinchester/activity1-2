$(document).ready(function () {

    $('.inactivetile').draggable({
        opacity: .5,
        create: function () { $(this).data('position', $(this).position()) },
        cursorAt: { left: 15 },
        cursor: 'move',
        revert: 'invalid',
        start: function () { $(this).stop(true, true) }
    });

    $('.inactivetile').data({
        'originalLeft': $('.inactivetile').css('left'),
        'origionalTop': $('.inactivetile').css('top')
    });
    $('.droptile').droppable({
        hoverClass: 'hovered',
        drop: function (event, ui) {
            ui.draggable.position({ of: $(this) });
        }
    });
    $('#motherboarddrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'motherboard') {
            ui.draggable.position({ of: $(this) });
            $('#motherboard').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({ of: $(this) });
            ui.draggable.removeClass().addClass('incorrecttile');
        }

    });
    $('#pcidrop').droppable({
        hoverClass: 'hovered'
    });
    $('#pcidrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'pcislot') {
            ui.draggable.position({ of: $(this) });
            $('#pcislot').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({ of: $(this) });
            ui.draggable.removeClass().addClass('incorrecttile');
        }

    });
    $('#opticaldrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'opticaldrives') {
            ui.draggable.position({ of: $(this) });
            $('#opticaldrives').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({ of: $(this) });
            ui.draggable.removeClass().addClass('incorrecttile');
        }

    });
    $('#storagedrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'storage') {
            ui.draggable.position({ of: $(this) });
            $('#storage').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({ of: $(this) });
            ui.draggable.removeClass().addClass('incorrecttile');
        }

    });
    $('#videocarddrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'videocard') {
            ui.draggable.position({ of: $(this) });
            $('#videocard').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({ of: $(this) });
            ui.draggable.removeClass().addClass('incorrecttile');
        }

    });
    $('#cpufandrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'cpufan') {
            ui.draggable.position({ of: $(this) });
            $('#cpufan').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({ of: $(this) });
            ui.draggable.removeClass().addClass('incorrecttile');
        }

    });
    $('#cpudrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'cpu') {
            ui.draggable.position({
                of: $(this)
            });
            $('#cpu').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({
                of: $(this)
            });
            ui.draggable.removeClass().addClass('incorrecttile');
        }

    });

    $('#psufandrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'PowerSupplyFan') {
            ui.draggable.position({ of: $(this) });
            $('#PowerSupplyFan').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({ of: $(this) });
            ui.draggable.removeClass().addClass('incorrecttile');
        }

    });
    $('#psudrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'powersupply') {
            ui.draggable.position({
                of: $(this)
            });
            $('#powersupply').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({
                of: $(this)
            });
            ui.draggable.removeClass().addClass('incorrecttile');
        }
    });
    $('#memorydrop').on('drop', function (event, ui) {
        if ($(ui.draggable).attr('id') == 'Memory') {
            ui.draggable.position({
                of: $(this)
            });
            $('#Memory').removeClass().addClass('correcttile')
        }
        else {
            ui.draggable.position({
                of: $(this)
            });
            ui.draggable.removeClass().addClass('incorrecttile');
        }
    });

    $(".reset").click(function () {
        $('.incorrecttile,.correcttile').removeClass().addClass('inactivetile');
        $('.droptile').droppable("destroy");
        $('.droptile').droppable({
            drop: function (event, ui) {
            hoverClass: 'hovered'

            }});
               $('.inactivetile').css({
                   'left': $('.inactivetile').data('originalLeft'),
                   'top': $('.inactivetile').data('origionalTop')
               });
         });
});

 