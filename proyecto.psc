Algoritmo sin_titulo
	Definir opcionPrincipal, opcionEstructurasSelectivas, opcionEstructurasCondicionales, opcionEstructurasIterativas como Entero
	Mientras opcionPrincipal <> 4 Hacer
        
        Escribir "Menu Principal"
        Escribir "1) Estructuras Selectivas"
        Escribir "2) Estructuras Condicionales"
        Escribir "3) Estructuras Iterativas"
        Escribir "4) Salir"
        Escribir "Ingrese una opcion: "
        Leer opcionPrincipal
		
		Segun opcionPrincipal Hacer
			1:
				Escribir "Estructuras Selectivas"
				Escribir "1) Ejercicio 1"
				Escribir "2) Ejercicio 2"
				Escribir "3) Ejercicio 3"
				Escribir "4) Ejercicio 4"
				Escribir "5) Ejercicio 5"
				Escribir "7) Ejercicio 7"
				Escribir "8) Ejercicio 8"
				Escribir "9) ejercicio 9"
				Escribir "10) ejercicio 10"
				Escribir "Ingrese una opcion: "
      			Leer opcionEstructurasSelectivas
				Segun  opcionEstructurasSelectivas Hacer
					1:
						Definir resultado1,  resultado4, resultado5 Como logico 
						definir resultado2, resultado3 Como Entero
						
						resultado1 <- (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3
						resultado2 <- 2*(4-10+8)/2*36*(1/2)
						resultado3 <- 260 % 12 + 54 % 3 - 85 % 7
						resultado4 <- (48 < 2 * 3) | (2 * 7 < 12)
						resultado5 <- ((8 > 2) | (932 < 23)) & 4 == 2
						
						escribir "El resultado de la expresión 1 es:", resultado1
						escribir "El resultado de la expresión 2 es:", resultado2
						escribir "El resultado de la expresión 3 es:", resultado3
						escribir "El resultado de la expresión 4 es:", resultado4
						escribir "El resultado de la expresión 5 es:", resultado5
					2:
						Definir numero1, numero2, suma, resta, multiplicacion, division, modulo como entero
						
						Escribir "Ingrese el primer número:"
						Leer numero1
						
						Escribir "Ingrese el segundo número:"
						Leer numero2
						
						suma <- numero1 + numero2
						resta <- numero1 - numero2
						multiplicacion <- numero1 * numero2
						division <- numero1 / numero2
						modulo <- numero1 % numero2
						
						Escribir "La suma de los números es:", suma
						Escribir "La resta de los números es:", resta
						Escribir "La multiplicación de los números es:", multiplicacion
						Escribir "La división de los números es:", division
						Escribir "El módulo de los números es:", modulo
					3:
						Definir a, b, c, discriminante como real
						definir  resolvente1,resolvente2 Como Entero
						
						Escribir "Ingrese el valor de a:"
						Leer a
						
						Escribir "Ingrese el valor de b:"
						Leer b
						
						Escribir "Ingrese el valor de c:"
						Leer c
						
						discriminante <- (b * b) - (4 * a * c)
						
						Si discriminante > 0 Entonces
							resolvente1 <- (-b + Raiz(discriminante)) / (2 * a)
							resolvente2 <- (-b - Raiz(discriminante)) / (2 * a)
							Escribir "La resolvente tiene dos soluciones reales:"
							Escribir "Resolvente 1:", resolvente1
							Escribir "Resolvente 2:", resolvente2
						FinSi
						
						Si discriminante = 0 Entonces
							resolvente1 <- - b / (2 * a)
							Escribir "La resolvente tiene una única solución real:"
							Escribir "Resolvente:", resolvente1
						FinSi
						
						Si discriminante < 0 Entonces
							Escribir "La resolvente no tiene soluciones reales."
						FinSi
						
					4:
						Definir lado1, lado2, hipotenusa como real
						
						Escribir "Ingrese la longitud del primer lado del triángulo (en cm):"
						Leer lado1
						
						Escribir "Ingrese la longitud del segundo lado del triángulo (en cm):"
						Leer lado2
						
						hipotenusa <- Raiz((lado1 * lado1) + (lado2 * lado2))
						
						Escribir "La hipotenusa del triángulo es:", hipotenusa
						
					5:
						definir num Como Entero
						Escribir " digite un numero"
						leer num 
						resto <- num % 2
						Si resto = 0 Entonces
							Escribir "El número es par: 0"
						Sino
							Escribir "El número es impar: 1"
						FinSi
						
					6:
						Definir binario, contador, bit como Entero
						
						Escribir "Ingrese un número binario de 4 dígitos:"
						Leer binario
						
						contador <- 0
						
						Si (binario % 10 = 1) Entonces
							contador <- contador + 1
						FinSi
						
						binario <- binario / 10
						
						Si (binario % 10 = 1) Entonces
							contador <- contador + 1
						FinSi
						
						binario <- binario / 10
						
						Si (binario % 10 = 1) Entonces
							contador <- contador + 1
						FinSi
						
						binario <- binario / 10
						
						Si (binario = 1) Entonces
							contador <- contador + 1
						FinSi
						
						Si (contador % 2 = 1) Entonces
							bit <- 1
						Sino
							bit <- 0
						FinSi
						
						Escribir "El bit de paridad es:", bit
						
						
					7:
						Definir numero, unidades, decenas, centenas, unidades_mil como Entero
						
						Escribir "Ingrese un número de cuatro dígitos:"
						Leer numero
						
						unidades = numero % 10
						decenas = (numero / 10) % 10
						centenas = (numero / 100) % 10
						unidades_mil = (numero / 1000) % 10
						
						Escribir "Unidades: ", unidades
						Escribir "Decenas: ", decenas
						Escribir "Centenas: ", centenas
						Escribir "Unidades de mil: ", unidades_mil
						
					8:
						Definir caracter como Carácter
						
						Escribir "Ingrese un carácter:"
						Leer caracter
						
						Si caracter >= "0" Y caracter <= "9" Entonces
							Escribir "El carácter ingresado es un dígito."
						Sino
							Si (caracter >= "A" Y caracter <= "Z") O (caracter >= "a" Y caracter <= "z") Entonces
								caracter <- minusculas(caracter)
								Si caracter = "a" O caracter = "e" O caracter = "i" O caracter = "o" O caracter = "u" Entonces
									Escribir "El carácter ingresado es una vocal."
								Sino
									Escribir "El carácter ingresado es una consonante."
								FinSi
							Sino
								Escribir "El carácter ingresado es un carácter especial."
							FinSi
	                    finsi 
					9:
						Definir caracter1, caracter2 como Carácter
						
						Escribir "Ingrese el primer carácter:"
						Leer caracter1
						
						Escribir "Ingrese el segundo carácter:"
						Leer caracter2
						
						Si caracter1 = caracter2 Entonces
							Escribir "El primer carácter es igual al segundo carácter."
						Sino
							Si caracter1 > caracter2 Entonces
								Escribir "El primer carácter es mayor que el segundo carácter."
							Sino
								Escribir "El primer carácter es menor que el segundo carácter."
							FinSi
	                    finsi
						
					10:
						Definir frase, fraseMayusculas, fraseMinusculas como Cadena
						
						Escribir "Ingrese una frase:"
						Leer frase
						
						
						
						fraseMayusculas <- Mayusculas(frase)
						fraseMinusculas <- Minusculas(frase)
						
						Escribir "Frase en mayúsculas:", fraseMayusculas
						Escribir "Frase en minúsculas:", fraseMinusculas
					
				Fin Segun
			2:
				Escribir "opcionEstructurasCondicionales"
				Escribir "1) Ejercicio 1"
				Escribir "2) Ejercicio 2"
				Escribir "3) Ejercicio 3"
				Escribir "4) Ejercicio 4"
				Escribir "5) Ejercicio 5"
				Escribir "7) Ejercicio 7"
				Escribir "8) Ejercicio 8"
				Escribir "9) ejercicio 9"
				Escribir "10) ejercicio 10"
				Escribir "Ingrese una opcion: "
				leer opcionEstructurasCondicionales
				Segun opcionEstructurasCondicionales Hacer
					1:
						Definir a, m, d como entero
						
						Escribir "Ingrese el año:"
						Leer a
						
						Escribir "Ingrese el mes:"
						Leer m
						
						Escribir "Ingrese el día:"
						Leer d
						
						Si (a % 400 = 0) o ((a % 4 = 0) Y (a % 100 <> 0)) Entonces
							Escribir "El año", a, "es un año bisiesto."
						Sino
							Escribir "El año", a, "no es un año bisiesto."
						FinSi
					2:
						Definir num, digito1, digito2, digito4, digito5 como Entero
						
						Escribir "Ingrese un número de 5 dígitos:"
						Leer num
						
						digito1 <- numero / 10000
						digito2 <- (numero / 1000) % 10
						digito4 <- (numero / 10) % 10
						digito5 <- numero % 10
						
						Si digito1 = digito5 Y digito2 = digito4 Entonces
							Escribir "El número", num, "es capicúa."
						Sino
							Escribir "El número", num, "no es capicúa."
						FinSi
						
					3:
						Definir segundos, minutos, horas, dias como Entero
						
						Escribir "Ingrese la cantidad de segundos:"
						Leer segundos
						
						minutos <- segundos / 60
						horas <- minutos / 60
						dias <- horas / 24
						
						Escribir "Equivalente en minutos:", minutos
						Escribir "Equivalente en horas:", horas
						Escribir "Equivalente en días:", dias
						
					4:
						
						Definir A, B, C, mayor, segundoMayor como Entero
						
						Escribir "Ingrese el número A:"
						Leer A
						
						Escribir "Ingrese el número B:"
						Leer B
						
						Escribir "Ingrese el número C:"
						Leer C
						
						Si A = B Y B = C Entonces
							Escribir "Los tres números son iguales."
						Sino
							mayor <- A
							segundoMayor <- A
							
							Si B > mayor Entonces
								mayor <- B
							Sino Si B > segundoMayor Entonces
									segundoMayor <- B
								FinSi
								
								Si C > mayor Entonces
									mayor <- C
								Sino Si C > segundoMayor Entonces
										segundoMayor <- C
									FinSi
									
									Escribir "El número mayor es:", mayor
									Escribir "El segundo número mayor es:", segundoMayor
								FinSi
							FinSi
                    	FinSi
						
						
					5:
						
						Definir horaEntrada, minutoEntrada, horaSalida, minutoSalida, totalMinutos, montoPagar como Entero
						
						Escribir "Ingrese la hora de entrada (formato 24 horas):"
						Leer horaEntrada
						
						Escribir "Ingrese los minutos de entrada:"
						Leer minutoEntrada
						
						Escribir "Ingrese la hora de salida (formato 24 horas):"
						Leer horaSalida
						
						Escribir "Ingrese los minutos de salida:"
						Leer minutoSalida
						
						totalMinutos <- (horaSalida * 60 + minutoSalida) - (horaEntrada * 60 + minutoEntrada)
						
						Si totalMinutos <= 29 Entonces
							montoPagar <- 0.5
						Sino 
							Si totalMinutos <= 59 Entonces
								montoPagar <- 1.5
							Sino
								montoPagar <- totalMinutos * 1.5 / 60
							FinSi
							
						finsi
						Escribir "El monto a pagar es:", montoPagar, "dólares."
						
						
					6:
						
						Definir horaEntrada, minutoEntrada, horaSalida, minutoSalida, totalMinutos, montoPagar como Entero
						
						Escribir "Ingrese la hora de entrada (formato 24 horas):"
						Leer horaEntrada
						
						Escribir "Ingrese los minutos de entrada:"
						Leer minutoEntrada
						
						Escribir "Ingrese la hora de salida (formato 24 horas):"
						Leer horaSalida
						
						Escribir "Ingrese los minutos de salida:"
						Leer minutoSalida
						
						totalMinutos <- (horaSalida * 60 + minutoSalida) - (horaEntrada * 60 + minutoEntrada)
						
						Si totalMinutos <= 29 Entonces
							montoPagar <- 0.5
						Sino 
							Si totalMinutos <= 59 Entonces
								montoPagar <- 1.5
							Sino
								montoPagar <- totalMinutos * 1.5 / 60
							FinSi
							
							Escribir "El monto a pagar es:", montoPagar, "dólares."
						FinSi
						
						
					7:
						
						Definir dia, mes, diasTranscurridos como Entero
						
						Escribir "Ingrese el día:"
						Leer dia
						
						Escribir "Ingrese el mes:"
						Leer mes
						
						Segun mes
							Caso 1:
								diasTranscurridos <- dia
							Caso 2:
								diasTranscurridos <- 31 + dia
							Caso 3:
								diasTranscurridos <- 59 + dia
							Caso 4:
								diasTranscurridos <- 90 + dia
							Caso 5:
								diasTranscurridos <- 120 + dia
							Caso 6:
								diasTranscurridos <- 151 + dia
							Caso 7:
								diasTranscurridos <- 181 + dia
							Caso 8:
								diasTranscurridos <- 212 + dia
							Caso 9:
								diasTranscurridos <- 243 + dia
							Caso 10:
								diasTranscurridos <- 273 + dia
							Caso 11:
								diasTranscurridos <- 304 + dia
							Caso 12:
								diasTranscurridos <- 334 + dia
						FinSegun
						
						Escribir "El número de días transcurridos desde el 1 de enero de 2014 hasta la fecha ingresada es:", diasTranscurridos
						
					8:
						
						Definir numeroMes como Entero
						
						Escribir "Ingrese un número entre 1 y 12:"
						Leer numeroMes
						
						Segun numeroMes
							Caso 1:
								Escribir "Enero"
							Caso 2:
								Escribir "Febrero"
							Caso 3:
								Escribir "Marzo"
							Caso 4:
								Escribir "Abril"
							Caso 5:
								Escribir "Mayo"
							Caso 6:
								Escribir "Junio"
							Caso 7:
								Escribir "Julio"
							Caso 8:
								Escribir "Agosto"
							Caso 9:
								Escribir "Septiembre"
							Caso 10:
								Escribir "Octubre"
							Caso 11:
								Escribir "Noviembre"
							Caso 12:
								Escribir "Diciembre"
								De Otro Modo
								Escribir "Número inválido. Ingrese un número entre 1 y 12."
						FinSegun
						
					9:
						Definir montoCompra, montoDescuento, montoPagar como Real
						
						Escribir "Ingrese el monto a pagar por el cliente:"
						Leer montoCompra
						
						Si montoCompra > 1000 Entonces
							montoDescuento <- montoCompra * 0.2
							montoPagar <- montoCompra - montoDescuento
							Escribir "Se aplicó un descuento del 20%."
							Escribir "Monto a pagar con descuento:", montoPagar
						Sino
							Escribir "No se aplicó descuento."
							Escribir "Monto a pagar sin descuento:", montoCompra
						FinSi
						
						
					10:
						Definir numero1, numero2, resultado como Real
						Definir operador como Caracter
						
						Escribir "Ingrese el primer número:"
						Leer numero1
						
						Escribir "Ingrese el segundo número:"
						Leer numero2
						
						Escribir "Ingrese el operador matemático (+, -, *, /, mod, div):"
						Leer operador
						
						Segun operador
							Caso "+":
								resultado <- numero1 + numero2
								Escribir "Suma:", resultado
							Caso "-":
								resultado <- numero1 - numero2
								Escribir "Resta:", resultado
							Caso "*":
								resultado <- numero1 * numero2
								Escribir "Multiplicación:", resultado
							Caso "/":
								Si numero2 <> 0 Entonces
									resultado <- numero1 / numero2
									Escribir "División:", resultado
								Sino
									Escribir "Error: No se puede dividir entre cero."
								FinSi
							Caso "mod":
								resultado <- numero1 MOD numero2
								Escribir "Resto:", resultado
							Caso "div":
								Si numero2 <> 0 Entonces
									resultado <- numero1 / numero2
									Escribir "División entera:", resultado
								Sino
									Escribir "Error: No se puede dividir entre cero."
								FinSi
								De Otro Modo
								Escribir "Operador inválido. Ingrese un operador válido."
						FinSegun
						
						
						
				Fin Segun
			3:
				Escribir "opcionEstructurasIterativas"
				Escribir "1) Ejercicio 1"
				Escribir "2) Ejercicio 2"
				Escribir "3) Ejercicio 3"
				Escribir "4) Ejercicio 4"
				Escribir "5) Ejercicio 5"
				Escribir "7) Ejercicio 7"
				Escribir "8) Ejercicio 8"
				Escribir "9) ejercicio 9"
				Escribir "10) ejercicio 10"
				Escribir "11) ejercicio 11"
				Escribir "12) ejercicio 12"
				Escribir "13) ejercicio 13"
				Escribir "14) ejercicio 14"
				Escribir "15) ejercicio 15"
				Escribir "Ingrese una opcion: "
				leer opcionEstructurasIterativas
				Segun opcionEstructurasIterativas Hacer
					1:
						Definir numero, contador como Entero
						
						Escribir "Ingrese un número entero:"
						Leer numero
						
						contador <- 0
						
						Si numero = 0 Entonces
							contador <- 1
						Sino
							Mientras numero <> 0 Hacer
								numero <- numero / 10
								contador <- contador + 1
							FinMientras
						FinSi
						
						Escribir "El número tiene", contador, "dígitos."
						
					2:
						Definir num, numeroInvertido, digito, numeroOriginal como Entero
						
						Escribir "Ingrese un número:"
						Leer num
						
						numeroInvertido <- 0
						numeroOriginal <- num
						
						Mientras num > 0 Hacer
							digito <- num % 10
							numeroInvertido <- numeroInvertido * 10 + digito
							num <- num / 10
						FinMientras
						
						Si numeroOriginal = numeroInvertido Entonces
							Escribir "El número", numeroOriginal, "es capicúa."
						Sino
							Escribir "El número", numeroOriginal, "no es capicúa."
						FinSi
						
					3:
						Definir numero, divisor como Entero
						
						Escribir "Ingrese un número:"
						Leer numero
						
						Escribir "Los divisores de", numero, "son:"
						
						Para divisor <- 1 Hasta numero Hacer
							Si numero MOD divisor = 0 Entonces
								Escribir divisor
							FinSi
						FinPara
					4:
						Definir numero, divisor, sumaDivisores como Entero
						
						
						
						Escribir "Ingrese un número:"
						Leer numero
						
						
						
						sumaDivisores <- 0
						
						
						
						Para divisor <- 1 Hasta numero Hacer
							Si numero MOD divisor = 0 Entonces
								sumaDivisores <- sumaDivisores + divisor
							FinSi
						FinPara
						
						
						
						Escribir "La suma de los divisores de", numero, "es:", sumaDivisores
						
					5:
						Definir numero, divisor, cantidadDivisores como Entero
						
						Escribir "Ingrese un número:"
						Leer numero
						
						cantidadDivisores <- 0
						
						Para divisor <- 1 Hasta numero Hacer
							Si numero MOD divisor = 0 Entonces
								cantidadDivisores <- cantidadDivisores + 1
							FinSi
						FinPara
						
						Escribir "La cantidad de divisores de", numero, "es:", cantidadDivisores
						
					6:
						Definir numero, sumaDivisores como Entero
						
						Escribir "Ingrese un número:"
						Leer numero
						
						sumaDivisores <- 0
						
						Para divisor <- 1 Hasta numero-1 Hacer
							Si numero MOD divisor = 0 Entonces
								sumaDivisores <- sumaDivisores + divisor
							FinSi
						FinPara
						
						Si sumaDivisores = numero Entonces
							Escribir "El número", numero, "es perfecto."
						Sino
							Escribir "El número", numero, "no es perfecto."
						FinSi
						
					7:
						
						Definir num, divisor, e como Entero
						e <- 1
						
						Escribir "Ingrese un número:"
						Leer num
						
						Si num < 2 Entonces
							e <- 0
						Sino
							Para divisor <- 2 Hasta num/2 Hacer
								Si num MOD divisor = 0 Entonces
									e <- 0
									escribir "Salir"
								FinSi
							FinPara
						FinSi
						
						Si e = 1 Entonces
							Escribir "El número", num, "es primo."
						Sino
							Escribir "El número", num, "no es primo."
						FinSi
						
					8:
						
						Definir num, fac como Entero
						fac <- 1
						
						Escribir "Ingrese un número:"
						Leer numero
						
						Si numero < 0 Entonces
							Escribir "El factorial no está definido para números negativos."
						Sino
							Para i <- 1 Hasta numero Hacer
								fac <- fac * i
							FinPara
							
							Escribir "El factorial de", num, "es:", fac
						FinSi
						
						
					9:
						
						Definir contrasena como Cadena
						contrasena <- ""
						
						Mientras longitud(contrasena) < 10 Hacer
							Escribir "Ingrese una contraseña (debe tener al menos 10 dígitos):"
							Leer contrasena
							
							Si longitud(contrasena) < 10 Entonces
								Escribir "La contraseña debe tener al menos 10 dígitos. Inténtelo nuevamente."
							FinSi
						FinMientras
						
						Escribir "¡Contraseña aceptada!"
						
					10:
						Definir numero, mayor, menor como Entero
						mayor <- 0
						menor <- 0
						
						Escribir "Ingrese una secuencia de números (0 para terminar):"
						Leer numero
						
						mayor <- numero
						menor <- numero
						
						Mientras numero <> 0 Hacer
							Si numero > mayor Entonces
								mayor <- numero
							FinSi
							
							Si numero < menor Entonces
								menor <- numero
							FinSi
							
							Leer numero
						FinMientras
						
						Escribir "El número mayor es:", mayor
						Escribir "El número menor es:", menor
						
						
					11:
						Definir edad, peso, estatura, contador, contador18a25, contadorMayor36, sumaEdad, sumaPeso, sumaEstatura, sumaPeso18a35 como Entero
						Definir edadPromedio, pesoPromedio, estaturaPromedio, pesoPromedio18a35 como Real
						contador <- 0
						contador18a25 <- 0
						contadorMayor36 <- 0
						sumaEdad <- 0
						sumaPeso <- 0
						sumaEstatura <- 0
						sumaPeso18a35 <- 0
						
						Escribir "Ingrese la edad, peso y estatura de las personas (0 0 0 para terminar):"
						
						Leer edad, peso, estatura
						
						Mientras edad <> 0 Hacer
							Si edad >= 18 Entonces
								contador <- contador + 1
								sumaEdad <- sumaEdad + edad
								sumaPeso <- sumaPeso + peso
								sumaEstatura <- sumaEstatura + estatura
								
								Si edad >= 18 Y edad <= 25 Entonces
									contador18a25 <- contador18a25 + 1
								FinSi
								
								Si edad > 36 Entonces
									contadorMayor36 <- contadorMayor36 + 1
								FinSi
								
								Si edad >= 18 Y edad <= 35 Entonces
									sumaPeso18a35 <- sumaPeso18a35 + peso
								FinSi
							FinSi
							
							Leer edad, peso, estatura
						FinMientras
						
						Si contador > 0 Entonces
							edadPromedio <- sumaEdad / contador
							pesoPromedio <- sumaPeso / contador
							estaturaPromedio <- sumaEstatura / contador
							pesoPromedio18a35 <- sumaPeso18a35 / contador18a25
						FinSi
						
						Escribir "Edad promedio:", edadPromedio
						Escribir "Peso promedio:", pesoPromedio
						Escribir "Estatura promedio:", estaturaPromedio
						Escribir "Cantidad de personas entre 18 y 25 años:", contador18a25
						Escribir "Cantidad de personas mayores a 36 años:", contadorMayor36
						
					12:
						Para multiplicador <- 1 Hasta 10 Hacer
							Escribir "Tabla de multiplicar del", multiplicador, ":"
							Para multiplicando <- 1 Hasta 10 Hacer
								resultado <- multiplicador * multiplicando
								Escribir multiplicador, " x ", multiplicando, " = ", resultado
							FinPara
							Escribir ""
						FinPara
						
					13:
						Definir num1, num2, resultado, contador como Entero
						
						Escribir "Ingrese el primer número:"
						Leer num1
						
						Escribir "Ingrese el segundo número:"
						Leer num2
						
						resultado <- 0
						contador <- 0
						
						Mientras contador < num2 Hacer
							resultado <- resultado + num1
							contador <- contador + 1
						FinMientras
						
						Escribir "El resultado de la multiplicación es:", resultado
						
					14:
						Definir num, suma, contador, promedio como Real
						
						suma <- 0
						contador <- 0
						
						Escribir "Ingrese los números de la serie (ingrese 0 para terminar):"
						
						Leer num
						
						Mientras num <> 0 Hacer
							suma <- suma + num
							contador <- contador + 1
							Leer num
						FinMientras
						
						Si contador > 0 Entonces
							promedio <- suma / contador
							Escribir "El promedio de la serie es:", promedio
						Sino
							Escribir "No se ingresaron números en la serie."
						FinSi
						
					15:
						Definir numero, suma, contador, promedio como Real
						
						suma <- 0
						contador <- 0
						
						Escribir "Ingrese los números de la serie (ingrese 0 para terminar):"
						
						Leer numero
						
						Mientras numero <> 0 Hacer
							suma <- suma + numero
							contador <- contador + 1
							Leer numero
						FinMientras
						
						Si contador > 0 Entonces
							promedio <- suma / contador
							Escribir "El promedio de la serie es:", promedio
						Sino
							Escribir "No se ingresaron números en la serie."
						FinSi
						
						
					
				Fin Segun
		Fin Segun
	fin Mientras 
	
FinAlgoritmo
