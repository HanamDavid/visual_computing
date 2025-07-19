# Ejercicio 1: Procesamiento de Imagen y Detección con YOLO

Este repositorio contiene la solución para el Ejercicio 1 del taller, que involucra el procesamiento de imágenes con OpenCV y la detección de objetos utilizando modelos preentrenados de YOLO. El código está diseñado para ejecutarse en un entorno de Google Colab, permitiendo una fácil configuración y ejecución.

## Estructura del Proyecto 
ejercicio_1_procesamiento/
├── ejercicio_1_procesamiento.ipynb  # Cuaderno de Google Colab con todo el código
└── resultados/
  ├── suavizado.png                # Imagen después de aplicar el filtro de suavizado
  ├── bordes.png                   # Imagen con los bordes detectados
  └── deteccion_yolo.png           # Imagen con los bounding boxes y etiquetas de YOLO


## Requisitos

Para ejecutar este proyecto, solo necesitas una cuenta de Google para acceder a Google Colab. El cuaderno se encargará de instalar todas las dependencias necesarias.

## Cómo Ejecutar el Cuaderno en Google Colab

1.  **Abre el cuaderno:**
    * Crea un nuevo cuaderno en Google Colab y copia este código en sus respectivas celdas.

2.  **Sube tu imagen:**
    * Ejecuta la primera celda que te pedirá subir la imagen.

3.  **Ejecuta las celdas:**
    * Ejecuta cada celda del cuaderno secuencialmente. El cuaderno realizará los siguientes pasos:
        * Instalar las bibliotecas necesarias (OpenCV, Matplotlib, NumPy, Ultralytics YOLO).
        * Cargar la imagen que subiste.
        * Aplicar un filtro de suavizado Gaussiano.
        * Aplicar un filtro de detección de bordes Canny.
        * Visualizar la imagen original, la imagen suavizada y los bordes detectados.
        * Realizar la detección de objetos utilizando un modelo preentrenado de YOLOv8.
        * Mostrar y guardar la imagen con los bounding boxes y etiquetas de YOLO.

## Resultados

Los resultados del procesamiento de la imagen se guardarán automáticamente en la carpeta `resultados/` dentro de tu entorno de Colab. Una vez que el cuaderno termine de ejecutarse, podrás descargar esta carpeta para obtener las imágenes generadas:

* `suavizado.png`: Tu imagen con el filtro de suavizado aplicado.
* `bordes.png`: Tu imagen mostrando los bordes detectados.
* `deteccion_yolo.png`: Tu imagen con los objetos detectados por YOLO, incluyendo los bounding boxes y las etiquetas.

