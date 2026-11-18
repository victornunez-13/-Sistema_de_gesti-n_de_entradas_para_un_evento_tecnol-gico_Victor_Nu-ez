# 🎟️ Sistema de Gestión de Entradas - Innova ESPE 2026

Prototipo funcional desarrollado en **JavaScript nativo** para la gestión de venta de entradas, cálculo automático de descuentos y control de aforo del evento tecnológico **Innova ESPE 2026**, organizado por la Universidad de las Fuerzas Armadas – ESPE.

🔗 **Repositorio en GitHub:** [Sistema_de_gestion_de_entradas_Victor_Nunez](https://github.com/victornunez-13/-Sistema_de_gesti-n_de_entradas_para_un_evento_tecnol-gico_Victor_Nu-ez.git)

---

## 📋 Contexto del Problema

Actualmente, el registro de asistentes y venta de boletos para las conferencias y exposiciones de **Innova ESPE 2026** se realiza de manera manual, lo que genera inconsistencias en el cálculo de tarifas diferenciadas y fallos en el control de cupos disponibles. 

Esta primera versión del sistema resuelve la problemática mediante una aplicación de consola e interacciones nativas del navegador (`prompt()`, `alert()` y `console.log()`), garantizando integridad en los datos sin requerir manipulación del DOM.

---

## 📁 Estructura del Proyecto

```text
Núñez_Victor_JS/
├── index.html      
├── js/
│   └── app.js      
└── README.md       
```

---

## 🚀 Instrucciones de Ejecución

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/victornunez-13/-Sistema_de_gesti-n_de_entradas_para_un_evento_tecnol-gico_Victor_Nu-ez.git
   ```
2. Abre la carpeta del proyecto (`Núñez_Victor_JS`).
3. Ejecuta el archivo `index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox).


---

## ✅ Checklist de Requerimientos Funcionales

Estado de cumplimiento de los requerimientos especificados para el prototipo:

- [x] **RF01. Configuración inicial:** Definición correcta de constantes (`const`) para precios ($20), cupos iniciales (50), porcentajes de descuento (30%, 15%, 0%) y límite por compra (5), además de variables (`let`) para el estado dinámico del sistema.
- [x] **RF02. Menú principal:** Implementación de menú interactivo continuo mediante ciclo `do...while` / `while` y control de flujo con `switch` / `if-else` para las 4 opciones del sistema.
- [x] **RF03. Compra de entradas:** 
  - [x] Solicitud de nombre del comprador, tipo de participante y cantidad de boletos.
  - [x] Validación estricta de números enteros en el rango de `1` a `5`.
  - [x] Verificación de disponibilidad de cupos antes de procesar el pago.
  - [x] Cálculo exacto de subtotal, descuento aplicable y total a pagar.
  - [x] Actualización de inventario únicamente en transacciones válidas y emisión de comprobante/resumen.
- [x] **RF04. Consulta de cupos:** Visualización en tiempo real de entradas restantes junto con alertas de estado (*"Cupos disponibles"*, *"Últimos cupos disponibles"* entre 1 y 10, y *"Evento agotado"* en 0).
- [x] **RF05. Consulta de ingresos:** Reporte acumulado actualizado de total de entradas vendidas, ingresos recaudados (`$`) y número de transacciones exitosas.
- [x] **RF06. Finalización:** Opción de salida que presenta un resumen general de la jornada y detiene la ejecución del ciclo principal.

---

## 🧪 Evaluación de Pruebas y Escenarios de Validación

Resultados obtenidos tras someter el sistema a los casos de prueba obligatorios (verificando que ante cualquier rechazo los cupos, ingresos y contadores permanezcan intactos):

| Estado | Escenario de Prueba | Entrada Aplicada | Resultado Esperado | Cumplimiento |
| :---: | :--- | :--- | :--- | :--- |
| [x] | **Compra estándar (Estudiante)** | 3 entradas / Estudiante | Descuento 30% aplicada — **Total: $42.00** | Aprobado |
| [x] | **Compra estándar (Docente)** | 2 entradas / Docente | Descuento 15% aplicado — **Total: $34.00** | Aprobado |
| [x] | **Compra estándar (Público General)** | 1 entrada / Público general | Sin descuento (0%) — **Total: $20.00** | Aprobado |
| [x] | **Límite inferior inválido** | Cantidad: `0` (o negativos) | Rechazar compra y mantener contadores sin cambios | Aprobado |
| [x] | **Límite superior excedido** | Cantidad: `6` (mayor a 5) | Rechazar compra por superar máximo permitido | Aprobado |
| [x] | **Entrada no numérica** | Cantidad: `"abc"` / vacío | Rechazar compra mediante validación de tipo/NaN | Aprobado |
| [x] | **Sobredemanda de aforo** | Cantidad > Cupos restantes | Rechazar compra por falta de disponibilidad | Aprobado |
| [x] | **Opción de menú inválida** | Opción: `9` o texto | Mostrar mensaje de error y volver al menú | Aprobado |
| [x] | **Cierre del sistema** | Opción: `4` | Mostrar resumen final y finalizar ejecución | Aprobado |

---

## 👨‍💻 Autor

* **Víctor Núñez**  
  Universidad de las Fuerzas Armadas – ESPE (2026)
