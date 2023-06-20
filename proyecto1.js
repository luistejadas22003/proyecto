

function sin_titulo() {
	let i, multiplicador, multiplicando, resto;
	let opcionprincipal 
	let opcionestructurasselectivas ;
	let opcionestructurascondicionales ;
	let opcionestructurasiterativas ;
	while (opcionprincipal!=4) {
		document.write("Menu Principal");
		document.write("1) Estructuras Selectivas");
		document.write("2) Estructuras Condicionales");
		document.write("3) Estructuras Iterativas");
		document.write("4) Salir");
		document.write("Ingrese una opcion: ");
		opcionprincipal = Number(prompt());
		switch (opcionprincipal) {
		case 1:
			document.write("Estructuras Selectivas");
			document.write("1) Ejercicio 1");
			document.write("2) Ejercicio 2");
			document.write("3) Ejercicio 3");
			document.write("4) Ejercicio 4");
			document.write("5) Ejercicio 5");
			document.write("7) Ejercicio 7");
			document.write("8) Ejercicio 8");
			document.write("9) ejercicio 9");
			document.write("10) ejercicio 10");
			document.write("Ingrese una opcion: ");
			opcionestructurasselectivas = Number(prompt());
			switch (opcionestructurasselectivas) {
			case 1:
				let resultado1 ;
				let resultado4;
				let resultado5 ;
				let resultado2 ;
				let resultado3 ;
				resultado1 = (5+3*2)+9>3*5*14%3;
				resultado2 = 2*(4-10+8)/2*36*(1/2);
				resultado3 = 260%12+54%3-85%7;
				resultado4 = (48<2*3) || (2*7<12);
				resultado5 = ((8>2) || (932<23)) && 4==2;
				document.write("El resultado de la expresion 1 es:",resultado1);
				document.write("El resultado de la expresion 2 es:",resultado2);
				document.write("El resultado de la expresion 3 es:",resultado3);
				document.write("El resultado de la expresion 4 es:",resultado4);
				document.write("El resultado de la expresion 5 es:",resultado5);
				break;
			case 2:
                let numero1 ;
				let numero2 ;
				let suma ;
				let resta ;
				let multiplicacion ;
				let division ;
				let modulo ;
				document.write("Ingrese el primer n�mero:");
				numero1 = Number;
				document.write("Ingrese el segundo n�mero:");
				numero2 = Number;
				suma = numero1+numero2;
				resta = numero1-numero2;
				multiplicacion = numero1*numero2;
				division = numero1/numero2;
				modulo = numero1%numero2;
				document.write("La suma de los n�meros es:",suma);
				document.write("La resta de los n�meros es:",resta);
				document.write("La multiplicaci�n de los n�meros es:",multiplicacion);
				document.write("La divisi�n de los n�meros es:",division);
				document.write("El m�dulo de los n�meros es:",modulo);
				break;
			case 3:
				let a ;
				let b ;
				let c;
				let discriminante ;
				let resolvente1 ;
				let resolvente2 ;
				document.write("Ingrese el valor de a:");
				a = Number
				document.write("Ingrese el valor de b:");
				b = Number
				document.write("Ingrese el valor de c:",'<BR/>');
				c = Number;
				discriminante = (b*b)-(4*a*c);
				if (discriminante>0) {
					resolvente1 = (-b+Math.sqrt(discriminante))/(2*a);
					resolvente2 = (-b-Math.sqrt(discriminante))/(2*a);
					document.write("La resolvente tiene dos soluciones reales:");
					document.write("Resolvente 1:",resolvente1);
					document.write("Resolvente 2:",resolvente2);
				}
				if (discriminante==0) {
					resolvente1 = -b/(2*a);
					document.write("La resolvente tiene una �nica soluci�n real:");
					document.write("Resolvente:",resolvente1);
				}
				if (discriminante<0) {
					document.write("La resolvente no tiene soluciones reales.");
				}
				break;
			case 4:
				let lado1 ;
				let lado2 ;
				let hipotenusa ;
				document.write("Ingrese la longitud del primer lado del tri�ngulo (en cm):")
				lado1 ;
				document.write("Ingrese la longitud del segundo lado del tri�ngulo (en cm):");
				lado2 ;
				hipotenusa = Math.sqrt((lado1*lado1)+(lado2*lado2));
				document.write("La hipotenusa del tri�ngulo es:",hipotenusa);
				break;
			case 5:
				let num ;
				document.write(" digite un numero");
				num ;
				resto = num%2;
				if (resto==0) {
					document.write("El n�mero es par: 0");
				} else {
					document.write("El n�mero es impar: 1");
				}
				break;
			case 6:
				let binario 
				let contador 
				let bit 
				document.write("Ingrese un n�mero binario de 4 d�gitos:");
				binario 
				contador = 0;
				if ((binario%10==1)) {
					contador = contador+1;
				}
				binario = binario/10;
				if ((binario%10==1)) {
					contador = contador+1;
				}
				binario = binario/10;
				if ((binario%10==1)) {
					contador = contador+1;
				}
				binario = binario/10;
				if ((binario==1)) {
					contador = contador+1;
				}
				if ((contador%2==1)) {
					bit = 1;
				} else {
					bit = 0;
				}
				document.write("El bit de paridad es:",bit,);
				break;
			case 7:
				let numero 
				let unidades 
				let decenas 
				let centenas
				let unidades_mil
				document.write("Ingrese un n�mero de cuatro d�gitos:");
				numero 
				unidades = numero%10;
				decenas = (numero/10)%10;
				centenas = (numero/100)%10;
				unidades_mil = (numero/1000)%10;
				document.write("Unidades: ",unidades);
				document.write("Decenas: ",decenas);
				document.write("Centenas: ",centenas);
				document.write("Unidades de mil: ",unidades_mil);
				break;
			case 8:
				let caracter
				document.write("Ingrese un car�cter:");
				caracter 
				if (caracter>="0" && caracter<="9") {
					document.write("El car�cter ingresado es un d�gito.",'<BR/>');
				} else {
					if ((caracter>="A" && caracter<="Z") || (caracter>="a" && caracter<="z")) {
						caracter = String.toLowerCase(caracter);
						if (caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u") {
							document.write("El car�cter ingresado es una vocal.");
						} else {
							document.write("El car�cter ingresado es una consonante.");
						}
					} else {
						document.write("El car�cter ingresado es un car�cter especial.");
					}
				}
				break;
			case 9:
				let caracter1 = new String();
				let caracter2 = new String();
				document.write("Ingrese el primer car�cter:");
				caracter1 
				document.write("Ingrese el segundo car�cter:");
				caracter2 
				if (caracter1==caracter2) {
					document.write("El primer car�cter es igual al segundo car�cter.");
				} else {
					if (caracter1>caracter2) {
						document.write("El primer car�cter es mayor que el segundo car�cter.");
					} else {
						document.write("El primer car�cter es menor que el segundo car�cter.");
					}
				}
				break;
			case 10:
				let frase
				let frasemayusculas 
				let fraseminusculas 
				document.write("Ingrese una frase:");
				frase = prompt();
				frasemayusculas = String.toUpperCase(frase);
				fraseminusculas = String.toLowerCase(frase);
				document.write("Frase en may�sculas:",frasemayusculas,);
				document.write("Frase en min�sculas:",fraseminusculas,);
				break;
			}
			break;
		case 2:
			document.write("opcionEstructurasCondicionales");
			document.write("1) Ejercicio 1");
			document.write("2) Ejercicio 2");
			document.write("3) Ejercicio 3");
			document.write("4) Ejercicio 4");
			document.write("5) Ejercicio 5");
			document.write("7) Ejercicio 7");
			document.write("8) Ejercicio 8");
			document.write("9) ejercicio 9");
			document.write("10) ejercicio 10");
			document.write("Ingrese una opcion: ");
			opcionestructurascondicionales ;
			switch (opcionestructurascondicionales) {
			case 1:
				let a 
				let m 
				let d 
				document.write("Ingrese el a�o:");
				a 
				document.write("Ingrese el mes:");
				m 
				document.write("Ingrese el d�a:");
				d
				if ((a%400==0) || ((a%4==0) && (a%100!=0))) {
					document.write("El a�o",a,"es un a�o bisiesto.");
				} else {
					document.write("El a�o",a,"no es un a�o bisiesto.");
				}
				break;
			case 2:
				let num = new Number();
				let digito1 = new Number();
				let digito2 = new Number();
				let digito4 = new Number();
				let digito5 = new Number();
				document.write("Ingrese un n�mero de 5 d�gitos:");
				num =
				digito1 = numero/10000;
				digito2 = (numero/1000)%10;
				digito4 = (numero/10)%10;
				digito5 = numero%10;
				if (digito1==digito5 && digito2==digito4) {
					document.write("El n�mero",num,"es capic�a.");
				} else {
					document.write("El n�mero",num,"no es capic�a.");
				}
				break;
			case 3:
				let segundos 
				let minutos 
				let horas 
				let dias 
				document.write("Ingrese la cantidad de segundos:");
				segundos 
				minutos = segundos/60;
				horas = minutos/60;
				dias = horas/24;
				document.write("Equivalente en minutos:",minutos);
				document.write("Equivalente en horas:",horas);
				document.write("Equivalente en d�as:",dias);
				break;
			case 4:
				var a 
				let b
				let c 
				let mayor
				let segundomayor
				document.write("Ingrese el n�mero A:");
				a = Number(prompt());
				document.write("Ingrese el n�mero B:");
				b = Number(prompt());
				document.write("Ingrese el n�mero C:");
				c = Number(prompt());
				if (a==b && b==c) {
					document.write("Los tres n�meros son iguales.");
				} else {
					mayor = a;
					segundomayor = a;
					if (b>mayor) {
						mayor = b;
					} else {
						if (b>segundomayor) {
							segundomayor = b;
						}
						if (c>mayor) {
							mayor = c;
						} else {
							if (c>segundomayor) {
								segundomayor = c;
							}
							document.write("El n�mero mayor es:",mayor);
							document.write("El segundo n�mero mayor es:",segundomayor);
						}
					}
				}
				break;
			case 5:
				var horaentrada 
				let minutoentrada 
				let horasalida 
				var minutosalida 
				var totalminutos 
				var montopagar 
				document.write("Ingrese la hora de entrada (formato 24 horas):");
				horaentrada
				document.write("Ingrese los minutos de entrada:",'<BR/>');
				minutoentrada
				document.write("Ingrese la hora de salida (formato 24 horas):");
				horasalida 
				document.write("Ingrese los minutos de salida:");
				minutosalida 
				totalminutos = (horasalida*60+minutosalida)-(horaentrada*60+minutoentrada);
				if (totalminutos<=29) {
					montopagar = 0.5;
				} else {
					if (totalminutos<=59) {
						montopagar = 1.5;
					} else {
						montopagar = totalminutos*1.5/60;
					}
				}
				document.write("El monto a pagar es:",montopagar,"d�lares.");
				break;
			case 6:
				let horaentrada 
				var minutoentrada 
				var horasalida 
				let minutosalida 
				let totalminutos 
				let montopagar 
				document.write("Ingrese la hora de entrada (formato 24 horas):");
				horaentrada = Number(prompt());
				document.write("Ingrese los minutos de entrada:");
				minutoentrada = Number(prompt());
				document.write("Ingrese la hora de salida (formato 24 horas):");
				horasalida = Number(prompt());
				document.write("Ingrese los minutos de salida:");
				minutosalida = Number(prompt());
				totalminutos = (horasalida*60+minutosalida)-(horaentrada*60+minutoentrada);
				if (totalminutos<=29) {
					montopagar = 0.5;
				} else {
					if (totalminutos<=59) {
						montopagar = 1.5;
					} else {
						montopagar = totalminutos*1.5/60;
					}
					document.write("El monto a pagar es:",montopagar,"d�lares.");
				}
				break;
			case 7:
				let dia = new Number();
				let mes = new Number();
				let diastranscurridos = new Number();
				document.write("Ingrese el d�a:");
				dia = Number
				document.write("Ingrese el mes:");
				mes = Number
				switch (mes) {
				case 1:
					diastranscurridos = dia;
					break;
				case 2:
					diastranscurridos = 31+dia;
					break;
				case 3:
					diastranscurridos = 59+dia;
					break;
				case 4:
					diastranscurridos = 90+dia;
					break;
				case 5:
					diastranscurridos = 120+dia;
					break;
				case 6:
					diastranscurridos = 151+dia;
					break;
				case 7:
					diastranscurridos = 181+dia;
					break;
				case 8:
					diastranscurridos = 212+dia;
					break;
				case 9:
					diastranscurridos = 243+dia;
					break;
				case 10:
					diastranscurridos = 273+dia;
					break;
				case 11:
					diastranscurridos = 304+dia;
					break;
				case 12:
					diastranscurridos = 334+dia;
					break;
				}
				document.write("El n�mero de d�as transcurridos desde el 1 de enero de 2014 hasta la fecha ingresada es:",diastranscurridos);
				break;
			case 8:
				let numeromes 
				document.write("Ingrese un n�mero entre 1 y 12:",'<BR/>');
				numeromes 
				switch (numeromes) {
				case 1:
					document.write("Enero",'<BR/>');
					break;
				case 2:
					document.write("Febrero",'<BR/>');
					break;
				case 3:
					document.write("Marzo",'<BR/>');
					break;
				case 4:
					document.write("Abril",'<BR/>');
					break;
				case 5:
					document.write("Mayo",'<BR/>');
					break;
				case 6:
					document.write("Junio",'<BR/>');
					break;
				case 7:
					document.write("Julio",'<BR/>');
					break;
				case 8:
					document.write("Agosto",'<BR/>');
					break;
				case 9:
					document.write("Septiembre",'<BR/>');
					break;
				case 10:
					document.write("Octubre",'<BR/>');
					break;
				case 11:
					document.write("Noviembre",'<BR/>');
					break;
				case 12:
					document.write("Diciembre",'<BR/>');
					break;
				default:
					document.write("N�mero inv�lido. Ingrese un n�mero entre 1 y 12.")
				}
				break;
			case 9:
				let montocompra
				let montodescuento 
				var montopagar
				document.write("Ingrese el monto a pagar por el cliente:");
				montocompra = Number(prompt());
				if (montocompra>1000) {
					montodescuento = montocompra*0.2;
					montopagar = montocompra-montodescuento;
					document.write("Se aplic� un descuento del 20%.");
					document.write("Monto a pagar con descuento:",montopagar);
				} else {
					document.write("No se aplic� descuento.");
					document.write("Monto a pagar sin descuento:",montocompra);
				}
				break;
			case 10:
				let numero1 
				let numero2 
				let resultado 
				let operador 
				document.write("Ingrese el primer n�mero:");
				numero1 = Number
				document.write("Ingrese el segundo n�mero:");
				numero2 = Number
				document.write("Ingrese el operador matem�tico (+, -, *, /, mod, div):");
				operador = prompt();
				switch (operador) {
				case "+":
					resultado = numero1+numero2;
					document.write("Suma:",resultado,);
					break;
				case "-":
					resultado = numero1-numero2;
					document.write("Resta:",resultado);
					break;
				case "*":
					resultado = numero1*numero2;
					document.write("Multiplicaci�n:",resultado);
					break;
				case "/":
					if (numero2!=0) {
						resultado = numero1/numero2;
						document.write("Divisi�n:",resultado);
					} else {
						document.write("Error: No se puede dividir entre cero.");
					}
					break;
				case "mod":
					resultado = numero1%numero2;
					document.write("Resto:",resultado,);
					break;
				case "div":
					if (numero2!=0) {
						resultado = numero1/numero2;
						document.write("Divisi�n entera:",resultado,'<BR/>');
					} else {
						document.write("Error: No se puede dividir entre cero.",);
					}
					break;
				default:
					document.write("Operador inv�lido. Ingrese un operador v�lido.");
				}
				break;
			}
			break;
		case 3:
			document.write("opcionEstructurasIterativas",'<BR/>');
			document.write("1) Ejercicio 1",'<BR/>');
			document.write("2) Ejercicio 2",'<BR/>');
			document.write("3) Ejercicio 3",'<BR/>');
			document.write("4) Ejercicio 4",'<BR/>');
			document.write("5) Ejercicio 5",'<BR/>');
			document.write("7) Ejercicio 7",'<BR/>');
			document.write("8) Ejercicio 8",'<BR/>');
			document.write("9) ejercicio 9",'<BR/>');
			document.write("10) ejercicio 10",'<BR/>');
			document.write("11) ejercicio 11",'<BR/>');
			document.write("12) ejercicio 12",'<BR/>');
			document.write("13) ejercicio 13",'<BR/>');
			document.write("14) ejercicio 14",'<BR/>');
			document.write("15) ejercicio 15",'<BR/>');
			document.write("Ingrese una opcion: ",'<BR/>');
			opcionestructurasiterativas = Number(prompt());
			switch (opcionestructurasiterativas) {
			case 1:
				let numero = new Number();
				let contador = new Number();
				document.write("Ingrese un n�mero entero:",'<BR/>');
				numero = Number(prompt());
				contador = 0;
				if (numero==0) {
					contador = 1;
				} else {
					while (numero!=0) {
						numero = numero/10;
						contador = contador+1;
					}
				}
				document.write("El n�mero tiene",contador,"d�gitos.",'<BR/>');
				break;
			case 2:
				let num = new Number();
				let numeroinvertido = new Number();
				let digito = new Number();
				let numerooriginal = new Number();
				document.write("Ingrese un n�mero:",'<BR/>');
				num = Number(prompt());
				numeroinvertido = 0;
				numerooriginal = num;
				while (num>0) {
					digito = num%10;
					numeroinvertido = numeroinvertido*10+digito;
					num = num/10;
				}
				if (numerooriginal==numeroinvertido) {
					document.write("El n�mero",numerooriginal,"es capic�a.",'<BR/>');
				} else {
					document.write("El n�mero",numerooriginal,"no es capic�a.",'<BR/>');
				}
				break;
			case 3:
				var numero = new Number();
				let divisor = new Number();
				document.write("Ingrese un n�mero:",'<BR/>');
				numero = Number(prompt());
				document.write("Los divisores de",numero,"son:",'<BR/>');
				for (divisor=1;divisor<=numero;divisor++) {
					if (numero%divisor==0) {
						document.write(divisor,'<BR/>');
					}
				}
				break;
			case 4:
				var numero = new Number();
				var divisor = new Number();
				let sumadivisores = new Number();
				document.write("Ingrese un n�mero:",'<BR/>');
				numero = Number(prompt());
				sumadivisores = 0;
				for (divisor=1;divisor<=numero;divisor++) {
					if (numero%divisor==0) {
						sumadivisores = sumadivisores+divisor;
					}
				}
				document.write("La suma de los divisores de",numero,"es:",sumadivisores,'<BR/>');
				break;
			case 5:
				var numero = new Number();
				var divisor = new Number();
				var cantidaddivisores = new Number();
				document.write("Ingrese un n�mero:",'<BR/>');
				numero = Number(prompt());
				cantidaddivisores = 0;
				for (divisor=1;divisor<=numero;divisor++) {
					if (numero%divisor==0) {
						cantidaddivisores = cantidaddivisores+1;
					}
				}
				document.write("La cantidad de divisores de",numero,"es:",cantidaddivisores,'<BR/>');
				break;
			case 6:
				var numero = new Number();
				var sumadivisores = new Number();
				document.write("Ingrese un n�mero:",'<BR/>');
				numero = Number(prompt());
				sumadivisores = 0;
				for (divisor=1;divisor<=numero-1;divisor++) {
					if (numero%divisor==0) {
						sumadivisores = sumadivisores+divisor;
					}
				}
				if (sumadivisores==numero) {
					document.write("El n�mero",numero,"es perfecto.",'<BR/>');
				} else {
					document.write("El n�mero",numero,"no es perfecto.",'<BR/>');
				}
				break;
			case 7:
				var num = new Number();
				var divisor = new Number();
				var e = new Number();
				e = 1;
				document.write("Ingrese un n�mero:",'<BR/>');
				num = Number(prompt());
				if (num<2) {
					e = 0;
				} else {
					for (divisor=2;divisor<=num/2;divisor++) {
						if (num%divisor==0) {
							e = 0;
							document.write("Salir",'<BR/>');
						}
					}
				}
				if (e==1) {
					document.write("El n�mero",num,"es primo.",'<BR/>');
				} else {
					document.write("El n�mero",num,"no es primo.",'<BR/>');
				}
				break;
			case 8:
				var num = new Number();
				var fac = new Number();
				fac = 1;
				document.write("Ingrese un n�mero:",'<BR/>');
				numero = Number(prompt());
				if (numero<0) {
					document.write("El factorial no est� definido para n�meros negativos.",'<BR/>');
				} else {
					for (i=1;i<=numero;i++) {
						fac = fac*i;
					}
					document.write("El factorial de",num,"es:",fac,'<BR/>');
				}
				break;
			case 9:
				var contrasena = new String();
				contrasena = "";
				while (contrasena.length<10) {
					document.write("Ingrese una contrase�a (debe tener al menos 10 d�gitos):",'<BR/>');
					contrasena = prompt();
					if (contrasena.length<10) {
						document.write("La contrase�a debe tener al menos 10 d�gitos. Int�ntelo nuevamente.",'<BR/>');
					}
				}
				document.write("�Contrase�a aceptada!",'<BR/>');
				break;
			case 10:
				var numero = new Number();
				var mayor = new Number();
				var menor = new Number();
				mayor = 0;
				menor = 0;
				document.write("Ingrese una secuencia de n�meros (0 para terminar):",'<BR/>');
				numero = Number(prompt());
				mayor = numero;
				menor = numero;
				while (numero!=0) {
					if (numero>mayor) {
						mayor = numero;
					}
					if (numero<menor) {
						menor = numero;
					}
					numero = Number(prompt());
				}
				document.write("El n�mero mayor es:",mayor,'<BR/>');
				document.write("El n�mero menor es:",menor,'<BR/>');
				break;
			case 11:
				var edad = new Number();
				var peso = new Number();
				var estatura = new Number();
				var contador = new Number();
				var contador18a25 = new Number();
				var contadormayor36 = new Number();
				var sumaedad = new Number();
				var sumapeso = new Number();
				var sumaestatura = new Number();
				var sumapeso18a35 = new Number();
				var edadpromedio = new Number();
				var pesopromedio = new Number();
				var estaturapromedio = new Number();
				var pesopromedio18a35 = new Number();
				contador = 0;
				contador18a25 = 0;
				contadormayor36 = 0;
				sumaedad = 0;
				sumapeso = 0;
				sumaestatura = 0;
				sumapeso18a35 = 0;
				document.write("Ingrese la edad, peso y estatura de las personas (0 0 0 para terminar):",'<BR/>');
				edad = Number(prompt());
				peso = Number(prompt());
				estatura = Number(prompt());
				while (edad!=0) {
					if (edad>=18) {
						contador = contador+1;
						sumaedad = sumaedad+edad;
						sumapeso = sumapeso+peso;
						sumaestatura = sumaestatura+estatura;
						if (edad>=18 && edad<=25) {
							contador18a25 = contador18a25+1;
						}
						if (edad>36) {
							contadormayor36 = contadormayor36+1;
						}
						if (edad>=18 && edad<=35) {
							sumapeso18a35 = sumapeso18a35+peso;
						}
					}
					edad = Number(prompt());
					peso = Number(prompt());
					estatura = Number(prompt());
				}
				if (contador>0) {
					edadpromedio = sumaedad/contador;
					pesopromedio = sumapeso/contador;
					estaturapromedio = sumaestatura/contador;
					pesopromedio18a35 = sumapeso18a35/contador18a25;
				}
				document.write("Edad promedio:",edadpromedio,'<BR/>');
				document.write("Peso promedio:",pesopromedio,'<BR/>');
				document.write("Estatura promedio:",estaturapromedio,'<BR/>');
				document.write("Cantidad de personas entre 18 y 25 a�os:",contador18a25,'<BR/>');
				document.write("Cantidad de personas mayores a 36 a�os:",contadormayor36,'<BR/>');
				break;
			case 12:
				for (multiplicador=1;multiplicador<=10;multiplicador++) {
					document.write("Tabla de multiplicar del",multiplicador,":",'<BR/>');
					for (multiplicando=1;multiplicando<=10;multiplicando++) {
						resultado = multiplicador*multiplicando;
						document.write(multiplicador," x ",multiplicando," = ",resultado,'<BR/>');
					}
					document.write("",'<BR/>');
				}
				break;
			case 13:
				var num1 = new Number();
				var num2 = new Number();
				var resultado = new Number();
				var contador = new Number();
				document.write("Ingrese el primer n�mero:",'<BR/>');
				num1 = Number(prompt());
				document.write("Ingrese el segundo n�mero:",'<BR/>');
				num2 = Number(prompt());
				resultado = 0;
				contador = 0;
				while (contador<num2) {
					resultado = resultado+num1;
					contador = contador+1;
				}
				document.write("El resultado de la multiplicaci�n es:",resultado,'<BR/>');
				break;
			case 14:
				var num = new Number();
				var suma = new Number();
				var contador = new Number();
				var promedio = new Number();
				suma = 0;
				contador = 0;
				document.write("Ingrese los n�meros de la serie (ingrese 0 para terminar):",'<BR/>');
				num = Number(prompt());
				while (num!=0) {
					suma = suma+num;
					contador = contador+1;
					num = Number(prompt());
				}
				if (contador>0) {
					promedio = suma/contador;
					document.write("El promedio de la serie es:",promedio,'<BR/>');
				} else {
					document.write("No se ingresaron n�meros en la serie.",'<BR/>');
				}
				break;
			case 15:
				var numero = new Number();
				var suma = new Number();
				var contador = new Number();
				var promedio = new Number();
				suma = 0;
				contador = 0;
				document.write("Ingrese los n�meros de la serie (ingrese 0 para terminar):");
				numero = Number(prompt());
				while (numero!=0) {
					suma = suma+numero;
					contador = contador+1;
					numero = Number
				}
				if (contador>0) {
					promedio = suma/contador;
					document.write("El promedio de la serie es:",promedio);
				} else {
					document.write("No se ingresaron n�meros en la serie.");
				}
				break;
			}
			break;
		}
	}
}

