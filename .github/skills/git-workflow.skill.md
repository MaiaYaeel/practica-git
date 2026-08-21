---
name: git-workflow
description: "Guías de buenas prácticas para Git: ramas, commits, merge y resolución de conflictos"
---

# Skill: Git Workflow

Este skill ayuda a trabajar con Git de forma ordenada y segura en proyectos pequeños o medianos.

## Objetivo
Enseñar buenas prácticas para:
- crear y gestionar ramas
- hacer commits claros y útiles
- integrar cambios con merge y rebase
- resolver conflictos sin perder trabajo
- mantener el historial del repositorio legible

## Reglas principales

### 1. Ramas
- Usa ramas para cada tarea o funcionalidad.
- Nombra las ramas con claridad: `feature/login-form`, `fix/header-layout`, `docs/update-readme`.
- Mantén la rama principal (`main` o `master`) limpia y estable.
- Actualiza la rama desde `main` antes de integrar cambios grandes.

### 2. Commits
- Haz commits pequeños y específicos.
- Escribe mensajes claros con formato imperativo: `Add`, `Fix`, `Update`, `Refactor`.
- Un buen commit describe qué cambia y por qué.
- Evita mezclar cambios distintos en un mismo commit.

### 3. Merge
- Usa merge cuando quieres integrar una rama de trabajo en otra sin reescribir historial.
- Revisa los cambios antes de confirmar el merge.
- Si hay conflicto, resuélvelo manualmente y luego continúa.

### 4. Resolución de conflictos
- No elimines código sin entender su contexto.
- Compara ambas versiones antes de decidir.
- Si el conflicto afecta lógica, revisa la intención original del cambio.
- Después de resolver, prueba los cambios antes de continuar.

### 5. Buenas prácticas generales
- Haz pull antes de trabajar en una rama actualizada.
- No hagas commits enormes ni con muchos cambios mezclados.
- Revisa el estado del repositorio con `git status` antes de continuar.
- Usa `git log --oneline` para entender el historial.

## Comandos útiles

```bash
git status
git checkout -b feature/nombre
git add .
git commit -m "Add feature"
git merge feature/nombre
git pull origin main
```

## Consejos de flujo recomendado
1. Crear una rama para la tarea.
2. Hacer cambios pequeños.
3. Guardar con commits claros.
4. Actualizar `main` si hace falta.
5. Fusionar la rama con revisión final.
6. Resolver conflictos de forma consciente.

## Resumen
El objetivo es mantener el proyecto consistente, legible y fácil de colaborar, evitando errores al integrar cambios.
