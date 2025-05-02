# README FRONTEND-BACKEND

## Índice

- [Presentación del modelo IA](#presentación-del-uso-de-ChatGPT-como-modelo-de-IA-en-el-desarrollo-del-Frontend)
- [Configuración de la aplicación](#proyecto-central-de-reservas-de-hoteles)


</br>
</br>
</br>


---

# Presentación del uso de ChatGPT como modelo de IA en el desarrollo del Frontend

## 1. Descripción del modelo IA seleccionado y el motivo de su elección

Durante el curso tuve que elegir entre diferentes modelos de inteligencia artificial para ayudarme en el desarrollo del frontend en React. Las dos opciones que consideré más adecuadas desde el principio fueron **Claude** y **ChatGPT**.

Mi elección final fue **ChatGPT (GPT-4)**, principalmente por su capacidad de:

- Adaptarse a mi nivel de conocimiento, explicando de forma pedagógica los conceptos desde cero.
- Acompañarme de forma constante durante el curso, ya que ha sido la IA que he usado desde el principio.
- Resolver errores paso a paso con explicaciones adicionales que facilitan el entendimiento profundo del funcionamiento de React.

Además, consulté directamente a la IA sobre las mejores opciones para aprender React desde cero, y sus respuestas comparativas, explicaciones sin sesgos aparentes y análisis objetivo frente a Claude me convencieron de que ChatGPT era la opción ideal para este proyecto.


## 2. Registro de interacciones con la IA

A lo largo del desarrollo he mantenido múltiples conversaciones con la IA. A continuación, destaco algunas que considero más significativas:

### 📌 Interacción 1: Comparativa entre IAs para aprender React

**Prompt:**
> ¿Qué IA debería escoger para aprender desde 0 React y por qué esa IA es la mejor?

**Respuesta resumida:**
ChatGPT explicó que GPT-4 era la mejor opción para aprender React desde cero, por su precisión técnica, su capacidad pedagógica, su comprensión del contexto y su habilidad para generar ejemplos prácticos y funcionales. También comparó con otras IAs como Claude, Gemini o Copilot, destacando ventajas y limitaciones de cada una.

**Respuesta al Prompt**

>Te contesto bien enfocado:


> ### La mejor IA para aprender **React** desde 0 sería **ChatGPT Plus (GPT-4)**.

>Te explico por qué:

| Aspecto | Ventaja |  |
| --- | --- | --- |
| **Comprensión del contexto** | GPT-4 puede entender tu nivel de conocimiento (principiante) y adaptarse a tu ritmo. |  |
| **Explicaciones pedagógicas** | Sabe explicarte no solo el "qué" sino el "por qué" de cada concepto (props, estado, hooks, componentes). |  |
| **Paciencia infinita** | Puedes preguntarle 20 veces lo mismo, reformular, pedir más ejemplos, pedir analogías, y nunca se cansa. |  |
| **Código actualizado** | GPT-4 maneja React 17/18 y puede adaptarse a los cambios (como los nuevos hooks, Server Components, etc.). |  |
| **Planificación de estudios** | Puedes pedirle que te arme rutas de aprendizaje personalizadas ("hazme una lista de temas para aprender React en 3 meses"). |  |
| **Corrección de errores** | Si pegas un error de tu código, puede ayudarte a diagnosticar y corregirlo paso a paso. |  |

---

> ### ¿Por qué **otras IA** no serían tan buenas para esto?

- **Copilot** es genial para autocompletar código, **pero no enseña teoría** ni explica conceptos.
- **Claude (Anthropic)** explica muy bien, pero a veces es **más "general"** y no tan técnico en React específicamente.
- **Google Gemini (antes Bard)** todavía es **menos preciso** en código React comparado con GPT-4.

---

> ### Entonces, mi recomendación concreta:

- Si puedes pagar unos 20 dólares al mes, **ChatGPT Plus** con **GPT-4** es la mejor elección para aprender React desde cero.
- Si no quieres pagar, puedes usar **ChatGPT gratuito** (que usa GPT-3.5), **pero** algunas explicaciones serán un poco más limitadas y a veces tendrás que pedirle que aclare mejor.

---

### 📌 Interacción 2: Pregunta crítica sobre sesgo

**Prompt:**
> ¿Es posible que tu opinión esté sesgada para atraer más usuarios hacia ti?

**Respuesta resumida:**
ChatGPT reconoció la validez de la pregunta y respondió de forma honesta, explicando que está diseñado para ser imparcial y que no tiene intereses económicos. Argumentó que su recomendación se basa en comparaciones objetivas respaldadas por medios y experiencias de usuarios.

### 📌 Interacción 3: Crear un proyecto React desde 0

**Prompt:**
> npm create vite@latest nombre-de-tu-app -- --template react al hacer esto, la terminal me da muchas opciones, dime detalladamente qué tengo que ir seleccionando

**Respuesta resumida:**
La IA explicó paso a paso lo que aparece en la terminal al crear un proyecto con Vite: elección del nombre, selección del framework (React) y del lenguaje (JavaScript o TypeScript). También sugirió comandos adicionales para evitar preguntas interactivas.

### 📌 Interacción 4: Solicitud de creación del frontend completo

- Aquí la IA tuvo dificultades. Primero le pregunté qué datos necestaría para poder construirme el frontEnd de mi API en React.
La IA me dió la información sobre todo lo que necesitaba: controladores, endpoints, respuestas JSON, etc.
- Al darle toda esta información en un mismo **PROMPT** no consigió gestionarlo. Y me dió una explicación teórica de cómo tendría que realizar mi proyecto, sin darme nada de código. Intenté decirle que lo que necesitaba era el código de REACT y la respuesta fue exactamente la misma.
- Finalmente decidí que no era capaz de gestionar toda la información y le di el siguiente **PROMPT** mucho más conciso.

**Prompt:**
> Empecemos de nuevo. Necesito que me prepares el código en REACT de mi API de reserva de hoteles. Te pasaré primero los endpoints y dime si necesitas algo más para poder hacerlo.

**Respuesta resumida:**
La IA organizó claramente la información necesaria y pidió confirmar el tipo de autenticación usado (Passport, Sanctum o tokens personalizados). Una vez confirmado, comenzó a construir la estructura completa del frontend en React.

## 3. Análisis del código generado por la IA

El código generado por ChatGPT tiene las siguientes características destacables:

- Modularidad: estructura clara en carpetas como `components/`, `pages/`, `api/`, separando responsabilidades.
- Uso de Axios para consumo de la API, incluyendo interceptores para el token.
- Uso de React Router para la navegación entre páginas.
- Hooks de estado y efectos bien implementados (`useState`, `useEffect`).

Ajustes realizados:

- Hubo que corregir nombres de claves devueltas por la API como `"Available hotels"`, que no eran válidos en notación con punto (`.`), por lo que se usó notación con corchetes (`data["Available hotels"]`).
- Tuve que instalar manualmente algunos paquetes como `axios` y `react-router-dom` ya que no estaban mencionados en la generación inicial.
- En algunos casos, el código asumía que las respuestas de la API venían estructuradas de cierta forma. Fue necesario ajustar esas suposiciones con ayuda de DevTools y del propio ChatGPT.

## 4. Descripción del proceso de conexión entre frontend y backend

Para conectar el frontend en React con mi backend en Laravel (con autenticación mediante Passport), la IA me guió paso a paso:

1. **Configuración de Axios** con el `baseURL` y encabezados adecuados para consumir la API.
2. **Gestor de autenticación** que almacena el token JWT tras el login en `localStorage`, y lo incluye en cada petición autenticada mediante `Authorization: Bearer {token}`.
3. **Comprobación de errores** cuando las respuestas de la API eran diferentes a las esperadas.

Retos enfrentados:

- **Manejo de nombres de propiedades** en la respuesta JSON, especialmente cuando contenían espacios o mayúsculas.
- **Falta de paquetes** necesarios para ejecutar el código sugerido.
- **Sincronización entre la estructura de datos del backend y la visualización en React**. En esta parte tuve que cambiar una de las respuestas de mi método **index** del controlador Reservations. Si no cambiaba la respuesta el frontend no podía acceder al nombre del hotel, ya que la respuesta inicial de la API era el id del hotel y no su nombre.

> **RESPUESTA**

¡Exactamente! 🎯  
Si queremos que el usuario vea algo como:

> 🏨 Hotel: **Luxury Laponia**  
> 🛏️ Habitación: **Suite Aurora Boreal**

...y **no solo IDs**, necesitamos modificar la parte que lista las reservas (`Reservations.jsx`) para:

1. Obtener **los nombres asociados a los IDs**
2. Mostrar esa información en el frontend

---

## 🧠 ¿Qué devuelve actualmente `/reservations`?

Según tu controlador, devuelve solo los campos de la reserva, probablemente así:

```json
{
  "reservations": [
    {
      "id": 5,
      "user_id": 7,
      "room_id": 3,
      "hotel_id": 1,
      "check_in": "2025-05-01",
      "check_out": "2025-05-03"
    }
  ]
}
```

### ❌ Esto no incluye `hotel_name` ni `room_name`  
Entonces no los podemos mostrar directamente.

---

## ✅ OPCIONES PARA SOLUCIONARLO

### 🔁 Opción 1: Modificar tu **backend**

En el método `index()` de tu `ReservationController`, puedes **cargar las relaciones** con Eloquent:

```php
$reservations = $user->reservations()->with('hotel', 'room')->get();
```

Y asegurarte de tener las relaciones definidas en el modelo `Reservation.php`:

```php
public function hotel()
{
    return $this->belongsTo(Hotel::class);
}

public function room()
{
    return $this->belongsTo(Room::class);
}
```

Eso devolverá algo así:

```json
{
  "reservations": [
    {
      "id": 5,
      "hotel": { "id": 1, "name": "Luxury Laponia" },
      "room": { "id": 3, "type": "Suite Aurora Boreal" },
      ...
    }
  ]
}
```

✅ Y así ya puedes mostrar directamente el nombre del hotel y tipo de habitación en el frontend.

---

### 🔁 Opción 2: Desde el frontend (menos eficiente)

1. Llamar a `/hotels` y `/hotels/{id}/rooms`
2. Hacer una búsqueda local para cada `reservation` y obtener los nombres

⚠️ **Menos eficiente y más complejo**, solo recomendable si **no puedes tocar el backend**.

---

## ✅ ¿Qué hacemos?

💬 Te recomiendo la **opción 1**: modificar tu controlador para devolver los nombres junto con las reservas. Es limpio, rápido y escalable.

¿Quieres que te escriba el código PHP actualizado del `ReservationController@index` con `.with('hotel', 'room')` para que te lo pegues tal cual? 🔧

---

**Soluciones :**

- Inspección de las respuestas reales con DevTools y adaptación del frontend.
- Instalación manual de los paquetes necesarios.
- Validación de la autenticación mediante pruebas de login/logout con token.

## 5. Reflexión sobre el proceso de aprendizaje

Este proyecto ha supuesto una experiencia de aprendizaje profunda en varios niveles:

- **Técnicamente**, he aprendido a configurar proyectos con Vite, consumir APIs REST en React, gestionar rutas con React Router, y conectar un frontend con Laravel usando tokens JWT.
- **A nivel práctico**, he descubierto la importancia de inspeccionar cada detalle de las respuestas de una API, depurar errores y comprender la lógica de los componentes React.
- **A nivel metodológico**, he aprendido a comunicarme con una IA de forma más precisa, usando prompts más claros cuando las respuestas no eran las esperadas.

Lo más desafiante fue lidiar con errores en tiempo real cuando el frontend no se comportaba como esperaba. Lo más enriquecedor fue entender *por qué* React redibuja componentes al cambiar el estado, o cómo se comportan los hooks como `useEffect`.

</br>
</br>
</br>

---
---
# Proyecto: Central de Reservas de Hoteles

Este proyecto consiste en una aplicación de reservas de hoteles con un frontend en **React + Vite** y un backend desarrollado en **Laravel 12 + Passport**.

---

## 📁 Estructura del Proyecto

/backend → API Laravel 12

/frontend → Cliente React + Vite



---

## 🚀 Requisitos

### Backend (Laravel 12)

- PHP ^8.1
- Composer
- MySQL o MariaDB
- Laravel Passport instalado

### Frontend (React)

- Node.js ^18
- npm

---

## 🛠 Instalación del Backend

```bash
cd backend

# Instalar dependencias
composer install

# Copiar el archivo de entorno
cp .env.example .env

# Configurar tus credenciales de base de datos en .env

# Generar clave de aplicación
php artisan key:generate

# Migrar y poblar la base de datos
php artisan migrate --seed

# Instalar Passport
php artisan passport:install

# Correr servidor
php artisan serve
📌 La API estará disponible por defecto en: http://localhost:8000
````

⚙️ **Configuración de CORS**

Asegúrate de tener configurado correctamente el middleware CORS en Laravel.
Si usas Laravel 12, puedes publicar el archivo así:

```bash
php artisan config:publish cors
````
Y luego, edita config/cors.php para incluir la URL del frontend:
```bash
'allowed_origins' => ['http://localhost:5173']
````



🔐 **Autenticación**

Laravel utiliza Passport con tokens Bearer.

El frontend almacena el token en localStorage después de registrarse o iniciar sesión.

Se incluye automáticamente en todas las solicitudes protegidas.

🧪 Funcionalidades implementadas

✅ Registro e inicio de sesión

✅ Buscar hoteles disponibles por fechas

✅ Ver habitaciones por hotel

✅ Crear, ver, editar y eliminar reservas

✅ Descargar factura de reserva (PDF)

✅ Panel de administración (ver y cambiar rol de usuarios)

✅ Modificar perfil y eliminar cuenta



## Instalación del Frontend
```
cd frontend
```

# Crear el proyecto (si aún no existe)
````
npm create vite@latest hotel-booking-client -- --template react
````

# Instalar dependencias
````
npm install
````

# Instalar librerías necesarias
````
npm install axios react-router-dom
````

# Correr el servidor
````
npm run dev
````
📌 El frontend estará disponible en: http://localhost:5173


## 🔗 Conexión Frontend - Backend

El archivo src/api/axios.js contiene la base URL apuntando al backend:
````
import axios from 'axios';
````
````bash
const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Accept': 'application/json',
  },
});

export default api;
````
