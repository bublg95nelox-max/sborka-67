#!/bin/bash

# Очищаем экран
clear

if [ ! -d ".git" ]; then
    echo "[СИСТЕМА] Первоначальная настройка сборки..."
    git init
    git remote add origin https://github.com/bublg95nelox-max/sborka-67.git
    git fetch
    echo "[СИСТЕМА] Скачиваем моды и конфиги (это может занять время)...
    git reset --hard origin/main
    echo "[СИСТЕМА] Всё готово! Первая установка завершена."
else
    echo "[СИСТЕМА] Проверяем обновления сборки..."
    git pull origin main
    echo "[СИСТЕМА] Обновление успешно завершено!"
fi

echo ""
echo "Можно закрывать окно и запускать Prism Launcher."
read -p "Нажмите Enter для выхода..."