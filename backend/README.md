# MASC Backend

1. Para correr el proyecto instalar un entorno virtual:

```
python -m virtualenv env
```

2. Activar el entrno virtual:

```
./env/Scripts/activate
```

3. Quitar el ".dist" del titulo de del archivo `.env` dentro de la carpeta "core" y completar los campos con varibles de entorno de preferencia y las API Keys necesarias.

4. En caso de ser necesario realizar las migraciones correspondientes:

```
python manage.py makemigrations

python manage.py migrate
```

5. Correr el proyecto el servidor con el siguiente comando:

```
python manage.py runserver
```
