# StaticShare: Tu Plataforma de Hosting Todo-en-Uno

StaticShare es una aplicación web moderna construida con Next.js y Firebase que proporciona una solución integral para el hosting de proyectos web, almacenamiento de archivos multimedia y herramientas de desarrollo impulsadas por IA. La plataforma está diseñada para ser intuitiva, escalable y fácil de usar tanto para desarrolladores individuales como para equipos.

## Características Principales

- **Dashboard Intuitivo:** Una interfaz de usuario limpia y moderna para gestionar todos tus proyectos y archivos.
- **Subida de Activos:** Sube y gestiona imágenes, videos y otros archivos estáticos con facilidad. Los archivos se almacenan en Firebase Storage, proporcionando URLs públicas seguras y escalables.
- **Conexión de Repositorios:** Conecta tus repositorios de Git (GitHub, GitLab, Bitbucket) para simular despliegues continuos de tus proyectos web.
- **Gestión de Endpoints:** Añade y gestiona endpoints de backend estáticos para tus aplicaciones.
- **Asistente de SEO con IA:** Utiliza la IA generativa (a través de Genkit) para crear descripciones SEO optimizadas para tus activos, mejorando la visibilidad en los motores de búsqueda.
- **Seguimiento de Uso:** Visualiza el uso de almacenamiento y ancho de banda a través de gráficos informativos.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (con App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
- **Backend y Almacenamiento:** [Firebase](https://firebase.google.com/) (Storage)
- **Funcionalidad IA:** [Genkit](https://firebase.google.com/docs/genkit)
- **Formularios:** [React Hook Form](https://react-hook-form.com/) y [Zod](https://zod.dev/)

## Primeros Pasos

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_DIRECTORIO>
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno:**
    Crea un archivo `.env` en la raíz del proyecto y añade las credenciales de tu proyecto de Firebase. Puedes encontrarlas en la consola de Firebase > Configuración del Proyecto.
    ```env
    # Ejemplo de configuración de Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
    NEXT_PUBLIC_FIREBASE_APP_ID=...
    ```

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Despliegue

Puedes desplegar fácilmente este proyecto en plataformas como Vercel, Netlify o Firebase Hosting.

### Desplegar en Vercel

1.  Haz un "fork" de este repositorio en tu cuenta de GitHub.
2.  Ve a [Vercel](https://vercel.com/new) e importa el repositorio que acabas de "forkear".
3.  Añade las variables de entorno de Firebase en la configuración del proyecto de Vercel.
4.  ¡Haz clic en "Deploy" y listo! Vercel se encargará del resto.

### Desplegar en Firebase Hosting

1.  Asegúrate de tener Firebase CLI instalado: `npm install -g firebase-tools`.
2.  Inicia sesión en Firebase: `firebase login`.
3.  Inicializa Firebase en tu proyecto: `firebase init hosting`.
4.  Configura el proyecto para que se compile con `npm run build` y el directorio público sea `out`.
5.  Despliega tu aplicación: `firebase deploy`.
