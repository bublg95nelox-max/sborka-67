@echo off
chcp 65001 > nul
cls

:: Проверяем, инициализирован ли уже Git
if exist .git goto UPDATE_REPO

:FIRST_INSTALL
echo [СИСТЕМА] Первоначальная настройка сборки...
git init
git remote add origin https://github.com/bublg95nelox-max/sborka-67.git
git fetch
echo [СИСТЕМА] Скачиваем моды и конфиги (это может занять время)...
git reset --hard origin/main
echo [СИСТЕМА] Всё готово! Первая установка завершена.
goto END

:UPDATE_REPO
echo [СИСТЕМА] Проверяем обновления сборки...
git pull origin main
echo [СИСТЕМА] Обновление успешно завершено!

:END
echo.
echo Можно закрывать окно и запускать Minecraft.
pause