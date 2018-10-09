//funcion generar aleatoriedad
function aleatorio(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


function Cambiar_titulo(selector) {
	$(selector).animate({
			opacity: '1',
		}, {
			step: function () {
				$(this).css('color', 'white');
			},
			queue: true
		})
		.animate({
			opacity: '1'
		}, {
			step: function () {
				$(this).css('color', 'yellow');
			},
			queue: true
		}, 600)
		.delay(1000)
		.animate({
			opacity: '1'
		}, {
			step: function () {
				$(this).css('color', 'white');
			},
			queue: true
		})
		.animate({
			opacity: '1'
		}, {
			step: function () {
				$(this).css('color', 'yellow');
				Cambiar_titulo('h1.main-titulo');
			},
			queue: true
		});
}

$(document).ready(function () {
	Cambiar_titulo('h1.main-titulo');
});



function validarColum() {
	for (var x = 0; x <= 7; x++) {
		var contador = 0;
		var posicionDulces = [];
		var extraCandiPosition = [];
		var dulcesColm = arreglo_colums(x);
		var comparacionValor = dulcesColm.eq(0);
		var brecha = false;
		for (var i = 1; i < dulcesColm.length; i++) {
			var srcComparison = comparacionValor.attr('src');
			var srcCandy = dulcesColm.eq(i).attr('src');

			if (srcComparison != srcCandy) {
				if (posicionDulces.length >= 3) {
					brecha = true
				} else {
					posicionDulces = [];
				}
				contador = 0;
			} else {
				if (contador == 0) {
					if (!brecha) {
						posicionDulces.push(i - 1);
					} else {
						extraCandiPosition.push(i - 1);
					}
				}
				if (!brecha) {
					posicionDulces.push(i);
				} else {
					extraCandiPosition.push(i);
				}
				contador += 1;
			}
			comparacionValor = dulcesColm.eq(i);
		}
		if (extraCandiPosition.length > 2) {
			posicionDulces = $.merge(posicionDulces, extraCandiPosition);
		}
		if (posicionDulces.length <= 2) {
			posicionDulces = [];
		}
		ContadorDulces = posicionDulces.length;
		if (ContadorDulces >= 3) {
			eliminar_posicion(posicionDulces, dulcesColm);
			calcular_pos(ContadorDulces);
		}
	}
}



function obtenerDulces(arrayType, index) {

	var dulces1 = $('.col-1').children();
	var dulces2 = $('.col-2').children();
	var dulces3 = $('.col-3').children();
	var dulces4 = $('.col-4').children();
	var dulces5 = $('.col-5').children();
	var dulces6 = $('.col-6').children();
	var dulces7 = $('.col-7').children();

	var dulcesColms = $([dulces1, dulces2, dulces3, dulces3, dulces4, dulces5, dulces6, dulces7]);

	if (typeof index === 'number') {
		var dulceRows = $([dulces1.eq(index), dulces2.eq(index), dulces3.eq(index), dulces4.eq(index),
			dulces5.eq(index), dulces6.eq(index), dulces7.eq(index)
		]);

	} else {
		index = '';
	}

	if (arrayType === 'columns') {
		return dulcesColms;
	} else if (arrayType === 'rows' && index !== '') {
		return dulceRows;
	}
}

function eliminar_posicion(posicionDulces, dulcesColm) {
	for (var i = 0; i < posicionDulces.length; i++) {
		dulcesColm.eq(posicionDulces[i]).addClass('delete');
	}

}
function EliminarRo(posicionDulces, dulcesRows) {
	for (var i = 0; i < posicionDulces.length; i++) {
		dulcesRows[posicionDulces[i]].addClass('delete');
	}

}

function arreglo_colums(index) {
	var dulcesColm = obtenerDulces('columns');
	return dulcesColm[index];
}

function arreglo_fila(index) {
	var dulcesRows = obtenerDulces('rows', index);
	return dulcesRows;
}

function checkBoard() {
	llenarTablero();
}

function llenarTablero() {
	var tablero = 6;
	var columns = $('[class^="col-"]');

	columns.each(function () {
		var dulces = $(this).children().length;
		var agregar = tablero - dulces;
		for (var i = 0; i < agregar; i++) {
			var generar = aleatorio(1, 5);
			if (i === 0 && dulces < 1) {
				$(this).append('<img src="image/' + generar + '.png" class="imagenes"></img>');
			} else {
				$(this).find('img:eq(0)').before('<img src="image/' + generar + '.png" class="imagenes"></img"');
			}
		}
	});
	Mover();
	Validaciones();
};



// validad Fila 
function validarFila() {
	for (var x = 0; x <= 6; x++) {
		var contador = 0;
		var posicionDulces = [];
		var extraCandiPosition = [];
		var dulcesRows = arreglo_fila(x);
		var comparacionValor = dulcesRows[0];
		var brecha = false;
		for (var i = 1; i < dulcesRows.length; i++) {
			var attrComparacion = comparacionValor.attr('src');
			var attrDulces = dulcesRows[i].attr('src');

			if (attrComparacion != attrDulces) {
				if (posicionDulces.length >= 3) {
					brecha = true
				} else {
					posicionDulces = [];
				}
				contador = 0;
			} else {
				if (contador == 0) {
					if (!brecha) {
						posicionDulces.push(i - 1)
					}
				} else {
					extraCandiPosition.push(i - 1)
				}
				if (!brecha) {
					posicionDulces.push(i)
				} else {
					extraCandiPosition.push(i)
				}
				contador += 1;
			}
			comparacionValor = dulcesRows[i];
		}
		if (extraCandiPosition.length > 2) {
			posicionDulces = $.merge(posicionDulces, extraCandiPosition);
		}
		if (posicionDulces.length <= 2) {
			posicionDulces = [];
		}
		ContadorDulces = posicionDulces.length;
		if (ContadorDulces >= 3) {
			EliminarRo(posicionDulces, dulcesRows);
			calcular_pos(ContadorDulces);
		}

	}
}

function calcular_pos(ContadorDulces) {
	var score = Number($('#score-text').text());
	switch (ContadorDulces) {
		case 3:
			score += 25;
			break;
		case 4:
			score += 50;
			break;
		case 5:
			score += 75;
			break;
		case 6:
			score += 100;
			break;
		case 7:
			score += 200;
			break;
	}
	$('#score-text').text(score);

}

function Validaciones() {
	validarColum();
	validarFila();

	if ($('img.delete').length !== 0) {
		eliminarDelTablero();
	}
}

//funcion mover dulces 

function Mover() {
	$('img').draggable({
		contaiment: '.panel-tablero',
		droppable: 'img',
		revert: true,
		revertDuration: 500,
		grid: [100, 100],
		zIndex: 10,
		drag: constrainCandyMovement
	});
	$('img').droppable({
		drop: Reemplazar
	});
	enableEvent();
}

function disableEvent() {
	$('img').draggable('disable');
	$('img').droppable('disable');
}

function enableEvent() {
	$('img').draggable('enable');
	$('img').droppable('enable');
}




function chekTable(result) {
	if (result) {
		checkBoard();
	}
}


function eliminarDelTablero() {
	disableEvent();
	$('img.delete').effect('pulsate', 400);
	$('img.delete').animate({
			opacity: '0'
		}, {
			duration: 300
		})
		.animate({
			opacity: '0'
		}, {
			duration: 400,
			complete: function () {
				eliminarDulces()
					.then(chekTable)
					.catch(Llenar_espacios)
			},
			queue: true
		})
}

function eliminarDulces(){
	return new Promise(function(resolve,reject){
		if($('img.delete').remove()){
			resolve(true);
		}else{
			reject('paila la embarro');
		}
	})
}

function puntos(){
	var actualValue = Number($('#movimientos-text').text());
	var result= actualValue += 1;
	$('#movimientos-text').text(result);
}

function Reemplazar(event, dulcePin) {
	var dulcePin = $(dulcePin.draggable);
	var srcPin = dulcePin.attr('src');
	var cambiarDul = $(this);
	var cambiarImg = cambiarDul.attr('src');

	dulcePin.attr('src', cambiarImg);
	cambiarDul.attr('src',srcPin);

	setTimeout(function () {
		checkBoard();
		if ($('img.delete').length === 0) {
			dulcePin.attr('src', srcPin);
			cambiarDul.attr('src', cambiarImg);
		} else {
			puntos();
		}
	}, 500);
}

function Llenar_espacios(error) {
	console.log(error);
}

function endGame() {
	$('div.panel-tablero, div.time').effect('fold');
	$('h1.main-titulo').addClass('title-over')
		.text('Gracias por jugar!');
	$('div.score, div.moves, div.panel-score').width('100%');

}

function Iniciar() {
	Cambiar_titulo('h1.main.titulo')
	$('.btn-reinicio').click(function () {
		if ($(this).text() === 'Reiniciar') {
			location.reload(true)
		}
		checkBoard();
		$(this).text('Reiniciar');
		$('#timer').timer({
			duration: "2m",
			format: '%M:%S',
			countdown: true,
			callback: function(){
				endGame();
			}
		});
	});
}

$(function () {
	Iniciar();
});


function constrainCandyMovement(event, dulcePin) {
	dulcePin.position.top = Math.min(100, dulcePin.position.top);
	dulcePin.position.bottom = Math.min(100, dulcePin.position.bottom);
	dulcePin.position.left = Math.min(100, dulcePin.position.left);
	dulcePin.position.right = Math.min(100, dulcePin.position.right);

	return dulcePin;
}



