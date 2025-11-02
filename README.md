[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Uu9lUx8_)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=21411330&assignment_repo_type=AssignmentRepo)
# NativeScript: Scan Inventory

## Cel
Zbuduj podstawową aplikację w **NativeScript używając framework Angular**, która używa **natywnej funkcji** oraz **komunikuje się z API**, z **3–4 widokami**.

## Zakres i wymagania funkcjonalne
- **Natywna funkcja (min. 1):** wybierz i uzasadnij (np. aparat/kamera – skan/zdjęcie, pliki, geolokalizacja, latarka, wibracje).
- **API (min. 1 endpoint):** pobranie listy elementów lub zapis nowego.
- **Widoki (3–4):**
  1. **Lista produktów** (nazwa, kod, mini-status).

  ![alt text](image.png)

  2. **Szczegóły produktu** (opis, zdjęcie/skan, akcje: usuń/edytuj).

  ![alt text](image-2.png)

  3. **Dodaj produkt** (formularz + akcja natywna, np. „zeskanuj/zdjęcie”).

  ![alt text](image-3.png)

  4. *(Opcjonalnie)* **Ustawienia** (np. preferencje, tryb offline).

  ![alt text](image-4.png)

**** Installation and Setup

Navigate to the Project Folder: Open your terminal and change the directory to the project folder
- cd ScanInventory
Install Dependencies: Install all required Node.js packages and NativeScript dependencies:
- npm install
Run the Application: Execute the following command to build, install, and launch the application on your Android emulator or device:
- ns run android