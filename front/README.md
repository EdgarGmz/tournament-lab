# Frontend

Este directorio contiene el código fuente y la configuración del frontend de Tournament Lab.

## Tecnologías

- **React:** Biblioteca para la construcción de la interfaz de usuario.
- **Vite:** Herramienta de desarrollo para el frontend.

## Estructura del Proyecto

El frontend está organizado siguiendo principios de escalabilidad y mantenibilidad, aplicando patrones de diseño como separación de responsabilidades y reutilización de componentes.

```
src/
├── assets/      # Recursos estáticos (imágenes, fuentes, íconos)
├── components/  # Componentes reutilizables de React (botones, formularios, etc.)
├── constants/   # Constantes globales (rutas, textos, configuraciones)
├── css/         # Archivos de estilos CSS globales y específicos
├── logic/       # Lógica de negocio (hooks personalizados, gestión de estado, llamadas a la API)
├── views/       # Vistas principales (páginas de la aplicación)
└── App.jsx      # Componente raíz de la aplicación
```

### Patrones de Diseño

- **Componentes reutilizables:** Los elementos de UI se desarrollan como componentes independientes para facilitar su reutilización y pruebas.
- **Separación de vistas y lógica:** La lógica de negocio y las llamadas a la API se ubican en `src/logic`, mientras que las vistas en `src/views` se enfocan en la presentación.
- **Gestión centralizada de constantes:** Las constantes y configuraciones globales se agrupan en `src/constants` para facilitar su mantenimiento.

## Levantar el Frontend y la API

1. **Instalar dependencias:**
    ```bash
    npm install
    ```

2. **Configurar variables de entorno:**
    - Crea un archivo `.env` en la raíz del proyecto si es necesario.
    - Asegúrate de definir la URL de la API backend, por ejemplo:
      ```
      VITE_API_URL=http://localhost:8080
      ```

3. **Levantar la API backend:**
    - Dirígete al directorio del backend y sigue las instrucciones de su README para iniciar la API.

4. **Iniciar el frontend:**
    ```bash
    npm run dev
    ```
    Esto levantará el servidor de desarrollo en [http://localhost:5173](http://localhost:5173) (o el puerto configurado).

5. **Verifica la conexión:**
    - Accede a la aplicación en tu navegador y asegúrate de que el frontend pueda comunicarse con la API.

> Para más detalles sobre la configuración y despliegue, consulta la documentación específica de cada directorio.
