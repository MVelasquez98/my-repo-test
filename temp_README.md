
# Landing Base

## Desarrolladores
- Matías Velasquez

## Requisitos
- Node.js (opcional, si se desea usar un servidor local)
- Navegador web moderno

## Pasos de instalación
1. Clona el repositorio:
   ```bash
   git clone git@github.com-personal:MVelasquez98/my-repo-test.git
   ```
2. Ingresa a la carpeta del proyecto:
   ```bash
   cd my-repo-test
   ```

## ¿Cómo ejecutar?
- Abre el archivo `index.html` en tu navegador.
- (Opcional) Si prefieres usar un servidor local, puedes ejecutar:
   ```bash
   npx serve .
   ```

## Convenciones de Ramas
- **develop**: Rama principal de desarrollo. Aquí se integran las nuevas funcionalidades antes de pasar a producción.
- **feature/**: Cada nueva funcionalidad o tarea debe desarrollarse en una rama que comience con `feature/`, por ejemplo: `feature/landing-base`. Estas ramas se crean a partir de `develop` y, una vez finalizadas, se integran nuevamente en `develop` mediante un pull request.
