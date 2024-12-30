Feature: agregarMascota

  Scenario Outline: agregar mascota a propietario
    Given el usuario ingresa a la web  
    When como usuario ingreso a la seccion propietarios
    And como usuario hago clic en el boton Find Owner
    And como usuario selecciono al tercer lugar de la lista
    And como usuario selecciono el boton añadir mascota
    And como usuario añado los datos de la mascota "<nombre>","<cumple>","<tipo>"
    Then como usuario valido el mensaje de añadido correctamente
    Examples:
      | nombre    | cumple    | tipo    | 
      | epale2    | 31012000      | pajarillo    | 