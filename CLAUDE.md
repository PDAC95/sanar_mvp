# CLAUDE.md — Reglas del Proyecto

Este archivo define cómo Claude debe trabajar en este repositorio. Estas reglas tienen **prioridad máxima** sobre cualquier comportamiento por defecto.

---

## 0. Repositorio

- **Remoto:** https://github.com/PDAC95/sanar_mvp
- **Rama principal:** `main`
- **Dueño:** PDAC95

---

## 1. Comunicación

- **Idioma:** español siempre. Toda respuesta, explicación, pregunta y comentario al usuario va en español.
- **Estilo:** claro y directo. Sin verbosidad ni redundancia.
- **Sin relleno:** nada de frases tipo "claro, con gusto", "déjame explicarte", resúmenes innecesarios al final, ni narrar lo que voy a hacer antes de hacerlo.
- **Sin emojis** salvo que el usuario los pida explícitamente.
- **Respuestas cortas:** una pregunta simple = una respuesta directa. Sin encabezados ni secciones cuando no aportan.
- **Código y nombres técnicos:** en inglés (variables, funciones, archivos). Solo la comunicación con el usuario es en español.

---

## 2. Estructura del Repositorio

Este repositorio contiene **múltiples proyectos independientes**, cada uno en su propia carpeta:

- `dentist/dentist-package/` — proyecto dental
- `medical/medical-package/` — proyecto médico
- `skincare/skincare-package/` — proyecto skincare
- `health-medical-react-js-template-*/` — template base

**Regla:** antes de ejecutar comandos o modificar archivos, confirmar en qué subproyecto se está trabajando. No mezclar cambios entre proyectos en una misma sesión salvo que el usuario lo pida.

---

## 3. Flujo de Trabajo

- **Preguntar antes de asumir** cuando el usuario no especifica en qué subproyecto trabajar.
- **No crear archivos** (especialmente `.md`, READMEs, docs) salvo que el usuario lo pida explícitamente.
- **Editar antes que crear:** preferir modificar archivos existentes.
- **Una tarea a la vez:** no agregar features, refactors ni "mejoras" no solicitadas.

---

## 4. Acciones Destructivas o Compartidas

Pedir confirmación antes de:
- `git push`, `git reset --hard`, `git push --force`
- Borrar archivos, ramas o dependencias
- Modificar `package.json` con cambios mayores de versión
- Cualquier acción que afecte estado compartido (deploys, PRs, etc.)

---

## 5. Reglas Adicionales

_(Se irán agregando aquí conforme surjan en el trabajo diario.)_
