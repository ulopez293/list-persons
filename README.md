# List-persons

1. Está recibiendo dos flujos de datos de dos sensores de temperatura (2
observables que devuelven números enteros), ¿qué operador de RxJS utilizaría
para recibir estos dos datos en la misma suscripción?

```
merge
```

2. Si tiene dos llamadas al servidor y la segunda llamada depende de la primera,
¿cómo manejaría con RxJS esta secuencia de llamadas?

```
concat
```

3. Tengo en un servidor un archivo de texto que está en minúscula y ocupa 2GB
en el disco duro, pero le solicitan que todo el archivo debe ser pasado a
mayúsculas, ¿cómo lo haría?

```
.toUpperCase()
```


4. Tiene un arreglo de strings los cuales deben ser filtrados por su longitud mayor
a dos y a la vez convertidos a un array de enteros con la longitud de cada string,
¿cómo lo haría? Ejemplo de entrada y salida: [“hola”, “mundo”, “es”, “una”,
“prueba”] => [4, 5, 3, 6]

```
let x = ["hola", "mundo", "es", "una", "prueba"]
x.filter(word => word.length > 2).map(x => x.length)
```

5. Tiene un arreglo de números, los cuales pueden ser o no repetidos, ¿cómo
eliminaría los repetidos? ¿Cómo los ordenaría en forma ascendente? Ejemplo
de entrada y salida: [1, 2, 5, 10, 8, 8, 1, 3, 4, 5] => [1, 2, 3, 4, 5, 8, 10]

```
let x = [1, 2, 5, 10, 8, 8, 1, 3, 4, 5]
x = new Set(x.sort((a, b)=> a-b))
```

### Instalacion

1. Abra en cmd o en la aplicación de terminal y navegue hasta esta carpeta
2. Ejecuta los siguientes comandos

```bash
ng serve
```

```bash
npm start
```
